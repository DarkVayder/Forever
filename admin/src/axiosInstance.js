import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/", // API Base URL
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for 401 handling
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through success responses
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retries

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.error("Refresh token is missing. Redirecting to login.");
        window.location.href = "/login"; // Redirect to login
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post("http://localhost:5000/api/auth/refresh", {
          refreshToken,
        });

        const { accessToken } = data;
        localStorage.setItem("token", accessToken); // Save new access token
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest); // Retry original request
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        window.location.href = "/login"; // Redirect to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

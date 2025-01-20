import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for handling token expiration
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      // Check if the error is due to token expiration
      error.config._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          
          console.log("No refresh token found, logging out...");
          window.location.href = "/login";
          return Promise.reject(error);
        }

        // Request a new access token using the refresh token
        const response = await axios.post("http://localhost:5000/api/user/refresh", {
          refreshToken,
        });

        const newToken = response.data.token;
        localStorage.setItem("token", newToken);

        // Update the original request with the new token
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(error.config); // Retry the failed request
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        window.location.href = "/login"; // Redirect to login on failure
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

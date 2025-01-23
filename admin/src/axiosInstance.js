import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/", 
});

// Add a request interceptor for attaching the token
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

// Add a response interceptor for handling 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If a 401 error occurs, try refreshing the token
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; 
      try {
        const { data } = await axios.post("http://localhost:5000/api/auth/refresh", {
          email: "mrabiu321@gmail.com", 
        });

        const { token } = data;

        // Save the new token
        localStorage.setItem("token", token);

        // Retry the original request with the new token
        originalRequest.headers["Authorization"] = `Bearer ${token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

// axiosConfig.js
import axios from "axios";

// Normal Axios instance (for non-authenticated requests)
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

// Secure Axios instance (for authenticated requests)
const secureAxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to add Authorization header to secure requests
secureAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("renriteToken"); // Or wherever you store your token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance, secureAxiosInstance };

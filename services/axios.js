// axiosConfig.js
import axios from 'axios';

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8000/api/v1'
    : 'https://medilink-server.onrender.com';

const axiosInstance = axios.create({
  baseURL,
});

// Secure Axios instance (for authenticated requests)
const secureAxiosInstance = axios.create({
  baseURL,

  headers: {
    'Content-Type': 'application/json',
  },
});

secureAxiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('medilinkToken');
      // console.log("token", token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance, secureAxiosInstance };

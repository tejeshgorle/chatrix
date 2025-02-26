// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });

import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`, // Ensure it matches your backend API path
  withCredentials: true, // Allow cookies for session-based authentication
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically add the token for each request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach token
  }
  return config;
});

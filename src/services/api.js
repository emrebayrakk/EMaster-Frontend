import axios from "axios";

const BASE_URL = "https://localhost:7103/EMaster/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    if (responseData.code == 200) {
      return {
        code: response.status,
        status: true,
        message: "Success",
        data: responseData.data || responseData,
      };
    } else {
      return Promise.reject({
        code: error.response?.status || 500,
        status: false,
        message: error.response?.data?.message || "An error occurred",
        data: null,
      });
    }
  },
  (error) => {
    return Promise.reject({
      code: error.response?.status || 500,
      status: false,
      message: error.response?.data?.message || "An error occurred",
      data: null,
    });
  }
);

export const authAPI = {
  login: (credentials) => api.post("/User/login", credentials),
  register: (userData) => api.post("/User/register", userData),
};

export default api;

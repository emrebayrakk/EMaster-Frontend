import axios from "axios";
import { store } from "../redux/store";

const api = axios.create({
  baseURL: "https://localhost:7103/EMaster/api/v1",
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const dynamicApiRequest = async (url, method, data = {}) => {
  try {
    const response = await api({ url, method, data });
    console.log(response);
    const { code, status, message, data: responseData } = response.data;
    return { code, status, message, data: responseData };
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};

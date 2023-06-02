import axios from 'axios';
// utils
// config
import { API_BASE_URL, API_KEY } from '../config/api';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
        config.headers.Authorization = `Bearer ${API_KEY}`;
        config.baseURL = API_BASE_URL;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject((error.response && error.response.data) || { message: 'Something went wrong' })
);

export default axiosInstance;

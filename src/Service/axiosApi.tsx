import axios from 'axios';
import { useCookies } from 'react-cookie';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

api.interceptors.request.use(
  (config) => {
    // Retrieve cookies using react-cookie
    const [cookies] = useCookies();

    // Set cookie in the request headers
    config.headers['Authorization'] = `Bearer ${cookies.token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

import axios from 'axios';
import { handleError } from '../utils/handle-errors';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = handleError(error);
    return Promise.reject(errorMessage);
  },
);

export default instance;

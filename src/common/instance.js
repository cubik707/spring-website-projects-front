import axios from 'axios';
import { handleError } from '../utils/handle-errors';
import { authTokenManager } from '../utils/auth-token-manager';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If it is a 401 error, try to update the token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // To avoid infinite request loops
      try {
        // Send request to update token
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/refreshToken`,
          {},
          { withCredentials: true }, // Send cookies
        );

        const { accessToken } = data;

        authTokenManager.setAccessToken(accessToken);

        // Update the headers for the original request
        instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return instance(originalRequest); // Resend the original request
      } catch (refreshError) {
        console.error('Failed to refresh token', refreshError);
        return Promise.reject(refreshError); // Fail to update the token
      }
    }

    // Others error
    const errorMessage = handleError(error);
    return Promise.reject(errorMessage);
  },
);

export default instance;

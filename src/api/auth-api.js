import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

export const authAPI = {
  login(data) {
    return instance
      .post('/login', data)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Login failed:', error);
        throw error;
      });
  },
};

import instance from '../common/instance';

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

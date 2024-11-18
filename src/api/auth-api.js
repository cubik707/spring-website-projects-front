import instance from '../common/instance';

export const authAPI = {
  async getMe(token) {
    const { data } = await instance.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
  async login(userData) {
    try {
      const { data } = await instance.post('/login', userData);
      return data;
    } catch (e) {
      console.error('Login failed:', e);
      throw e;
    }
  },
  async signup(userData) {
    const { data } = await instance.post('/signup', userData);
    return data;
  },
};

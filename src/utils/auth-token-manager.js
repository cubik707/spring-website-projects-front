export const authTokenManager = {
  getAccessToken() {
    return localStorage.getItem('access_token');
  },
  setAccessToken(accessToken) {
    localStorage.setItem('access_token', accessToken);
  },
  removeAccessToken() {
    localStorage.removeItem('access_token');
  },
};

import instance from '../common/instance';
import { authTokenManager } from '../utils/auth-token-manager';

export const projectsAPI = {
  getProjects: () => {
    const token = authTokenManager.getAccessToken();
    return instance
      .get('/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data); // Return the data directly
  },
};

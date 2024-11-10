import instance from '../common/instance';

export const projectsAPI = {
  getProjects: () => {
    const token = 'fake-token';
    return instance
      .get('/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data); // Return the data directly
  },
};

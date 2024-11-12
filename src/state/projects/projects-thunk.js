import { createAsyncThunk } from '@reduxjs/toolkit';
import { projectsAPI } from '../../api/projects-api';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => await projectsAPI.getProjects(),
);

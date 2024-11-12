import { createAsyncThunk } from '@reduxjs/toolkit';
import { projectsAPI } from '../../api/projects-api';
import { handleError } from '../../utils/handle-errors';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      return await projectsAPI.getProjects();
    } catch (error) {
      const errorMessage = handleError(error);
      return rejectWithValue(errorMessage);
    }
  },
);

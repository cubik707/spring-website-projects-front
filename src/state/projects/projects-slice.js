import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleError } from '../../utils/handle-errors';
import { projectsAPI } from '../../api/projects-api';

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

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.error = null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const projectsReducer = projectsSlice.reducer;

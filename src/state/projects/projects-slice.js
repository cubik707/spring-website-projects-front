import { createSlice } from '@reduxjs/toolkit';
import { fetchProjects } from './projects-thunk';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    loading: false,
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
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const projectsReducer = projectsSlice.reducer;

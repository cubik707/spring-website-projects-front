import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/auth-api';
import { handleError } from '../../utils/handle-errors';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      await authAPI.login(userData);
      return true; // on success
    } catch (error) {
      const errorMessage = handleError(error); // Get formatted error message
      return rejectWithValue(errorMessage); // Pass it to rejectWithValue
    }
  },
);

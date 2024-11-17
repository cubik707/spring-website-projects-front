import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/auth-api';
import { authTokenManager } from '../../utils/auth-token-manager';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(userData);
      const { accessToken } = response.data;
      authTokenManager.setAccessToken(accessToken);
      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  },
);

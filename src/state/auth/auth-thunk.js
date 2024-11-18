import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/auth-api';
import { authTokenManager } from '../../utils/auth-token-manager';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { accessToken } = await authAPI.login(userData);
      console.log(accessToken);
      if (accessToken) {
        authTokenManager.setAccessToken(accessToken);
      }
      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  },
);

export const fetchAuthMe = createAsyncThunk(
  'auth/getMe',
  async (token, { rejectWithValue }) => {
    try {
      const { accessToken } = await authAPI.getMe(token);

      if (accessToken) {
        authTokenManager.setAccessToken(accessToken);
      }

      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/auth-api';
import { authTokenManager } from '../../utils/auth-token-manager';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { accessToken } = await authAPI.login(userData);

      if (accessToken) {
        authTokenManager.setAccessToken(accessToken);
      }
      return true;
    } catch (error) {
      return rejectWithValue(error || 'Login failed');
    }
  },
);

export const fetchAuthMe = createAsyncThunk(
  'auth/getMe',
  async (token, { rejectWithValue }) => {
    try {
      await authAPI.getMe(token);
      return true;
    } catch (error) {
      return rejectWithValue(error || 'Login failed');
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.signup(userData);

      if (data?.accessToken) {
        authTokenManager.setAccessToken(data.accessToken);
      }

      return true;
    } catch (error) {
      return rejectWithValue(error || 'Signup failed');
    }
  },
);

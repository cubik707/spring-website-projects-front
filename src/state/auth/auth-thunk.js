import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../../api/auth-api';

export const login = createAsyncThunk('auth/login', async (userData) => {
  await authAPI.login(userData);
  return true;
});

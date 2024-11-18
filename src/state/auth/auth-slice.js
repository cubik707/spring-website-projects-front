import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthMe, login } from './auth-thunk';
import { authTokenManager } from '../../utils/auth-token-manager';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      authTokenManager.removeAccessToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(fetchAuthMe.fulfilled, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

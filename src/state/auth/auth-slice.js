import { createSlice } from '@reduxjs/toolkit';
import { login } from './auth-thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

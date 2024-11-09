import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleError } from "../../utils/handle-errors";
import { authAPI } from "../../api/auth-api";

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      await authAPI.login(userData);
      return true; // on success
    } catch (error) {
      const errorMessage = handleError(error); // Get formatted error message
      return rejectWithValue(errorMessage); // Pass it to rejectWithValue
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {

    logout: (state) => {
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

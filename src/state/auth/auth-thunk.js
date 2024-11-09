import { authAPI } from "../../api/auth-api";
import { login } from "./auth-action";
import { handleError } from "../../utils/handle-errors";

export const loginThunk = (userData) => async (dispatch) => {
  try {
    await authAPI.login(userData);
    dispatch(login());
  } catch (error) {
    handleError(error, dispatch)
    // const errorMessage = error.response?.data?.message || 'Login failed';
    // console.error('Login failed', errorMessage);
    // dispatch(loginError(errorMessage));
  }
};
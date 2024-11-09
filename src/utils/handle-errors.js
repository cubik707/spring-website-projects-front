import { loginError } from "../state/auth/auth-action";

export const handleError = (e, dispatch) => {
  let errorMessage;

  if (e.response && e.response.data) {
    errorMessage = e.response.data[0]?.msg ?? e.response.data.message;
  } else {
    errorMessage = "An unexpected error occurred";
  }
  dispatch(loginError(errorMessage));
};
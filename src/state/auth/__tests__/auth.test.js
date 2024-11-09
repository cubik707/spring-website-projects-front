import { authAPI } from "../../../api/auth-api.js";
import { authReducer, login } from "../auth-slice";
import { configureStore } from "@reduxjs/toolkit";


jest.mock("../../../api/auth-api", () => ({
  authAPI: {
    login: jest.fn(),
  },
}));

describe("authSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test for successful login
  it("dispatches fulfilled action when login is successful", async () => {
    authAPI.login.mockResolvedValueOnce(); // Mock successful response

    await store.dispatch(login({ username: "admin", password: "1234" }));

    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(true); // Check that authentication succeeded
    expect(state.error).toBe(null);           // Error should be null
  });

  // Test for failed login
  it("dispatches rejected action when login fails", async () => {
    const errorMessage = "Login failed";
    authAPI.login.mockRejectedValueOnce({ response: { data: { message: errorMessage } } }); // Mock failed response

    await store.dispatch(login({ username: "test", password: "wrongpassword" }));

    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false); // Check that authentication failed
    expect(state.error).toBe(errorMessage);    // Error should match the simulated response
  });
});
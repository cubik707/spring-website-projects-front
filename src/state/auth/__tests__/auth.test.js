import { authAPI } from '../../../api/auth-api.js';
import { authReducer } from '../auth-slice';
import { configureStore } from '@reduxjs/toolkit';
import { login } from '../auth-thunk';
import { authTokenManager } from '../../../utils/auth-token-manager';

jest.mock('../../../api/auth-api', () => ({
  authAPI: {
    login: jest.fn(),
  },
}));

jest.mock('../../../utils/auth-token-manager', () => ({
  authTokenManager: {
    setAccessToken: jest.fn(),
  },
}));

describe('authThunk', () => {
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
  it('dispatches fulfilled action when login is successful', async () => {
    const mockAccessToken = 'mockAccessToken';
    authAPI.login.mockResolvedValueOnce({ accessToken: mockAccessToken });

    await store.dispatch(login({ username: 'admin', password: '1234' }));

    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(true); // Check that authentication succeeded
    expect(authTokenManager.setAccessToken).toHaveBeenCalledWith(
      mockAccessToken,
    );
  });

  // Test for failed login
  it('dispatches rejected action when login fails', async () => {
    const errorMessage = 'Login failed';
    authAPI.login.mockRejectedValueOnce({
      response: { data: { message: errorMessage } },
    }); // Mock failed response

    await store.dispatch(
      login({ username: 'test', password: 'wrongpassword' }),
    );

    const state = store.getState().auth;
    expect(state.isAuthenticated).toBe(false); // Check that authentication failed
    expect(authTokenManager.setAccessToken).not.toHaveBeenCalled();
  });
});

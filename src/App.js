import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './state/auth/auth-thunk';
import { authTokenManager } from './utils/auth-token-manager';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = authTokenManager.getAccessToken();
    dispatch(fetchAuthMe(token));

  }, [dispatch]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

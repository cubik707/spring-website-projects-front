import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import ProjectsPage from '../pages/projects-page';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <ProjectsPage />
      </ProtectedRoute>
      // <ProjectsPage />
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  },
]);

import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import ProjectsPage from '../pages/projects-page';
import { ProtectedRoute } from './protected-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <ProjectsPage />
      </ProtectedRoute>
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

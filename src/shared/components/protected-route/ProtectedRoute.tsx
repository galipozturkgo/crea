import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from './ProtectedRoute.types';
import { useAuth } from '@crea/shared/contexts/auth-context/AuthContext';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

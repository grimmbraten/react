import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~hooks/useAuth';

const Guard = ({ redirect, children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>{children}</>
  ) : redirect ? (
    <Navigate to={redirect} />
  ) : (
    <>Access defined</>
  );
};

export default Guard;

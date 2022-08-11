import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { verifyJwt } from 'store/slices/authSlice';

export const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  const { isSuccess, isAuthenticated, jwt } = useAppSelector(
    (state) => state.auth
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token));
  }, [jwt, isSuccess]);

  return isAuthenticated ? page : <Navigate replace to="/login" />;
};

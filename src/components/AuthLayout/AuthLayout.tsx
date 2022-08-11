import React from 'react';
import { Grid } from '@mui/material';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img src="foruchi-logo.png" alt="foruchi-logo" height="40px" />
      <main>{children}</main>
    </Grid>
  );
};

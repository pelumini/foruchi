import React from 'react';
import { ThemeProvider } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Home, Cart, Login, Register } from 'pages';
import { theme } from 'shared/utils/theme';
import { store } from 'store/store';

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

type CypressWindow = Window & typeof globalThis & { Cypress: any; store: any };
const thisWindow = window as CypressWindow;
if (thisWindow.Cypress) {
  console.log('CYPRESS WINDOW');
  thisWindow.store = store;
}

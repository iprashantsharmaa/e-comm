import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { theme } from './config/mui';
import Dashboard from './dashboard';
import client from './config/react-query';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <div className="h-full w-full">
          <Dashboard />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

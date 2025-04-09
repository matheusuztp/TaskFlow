import React from 'react';
import { SnackbarProvider } from 'notistack';

const SnackbarProviderWrapper = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarProviderWrapper;
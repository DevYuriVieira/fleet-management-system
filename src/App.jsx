import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { FleetProvider } from './contexts/FleetContext';
import { FavoritesProvider } from './contexts/FavoritesContext'; 
import AppRoutes from './routes/AppRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <FleetProvider>
        <FavoritesProvider>
          <AppRoutes />
          <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </FavoritesProvider>
      </FleetProvider>
    </ThemeProvider>
  );
}

export default App;
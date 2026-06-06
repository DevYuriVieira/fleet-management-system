import React from 'react';
import { ThemeProvider } from './contexts/TemaContext';
import { FleetProvider } from './contexts/FrotaContext';
import { FavoritesProvider } from './contexts/FavoritosContext'; 
import AppRoutes from './routes/index';

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
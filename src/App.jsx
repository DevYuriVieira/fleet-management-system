import React from 'react';
import { ProvedorTema } from './contexts/TemaContext';
import { ProvedorFrota } from './contexts/FrotaContext';
import { ProvedorFavoritos } from './contexts/FavoritosContext'; 
import AppRoutes from './routes/index';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ProvedorTema>
      <ProvedorFrota>
        <ProvedorFavoritos>
          <AppRoutes />
          <ToastContainer position="top-right" autoClose={3000} theme="colored" />
        </ProvedorFavoritos>
      </ProvedorFrota>
    </ProvedorTema>
  );
}

export default App;
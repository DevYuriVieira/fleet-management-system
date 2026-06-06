import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import veiculo from '../pages/Veiculos';
import detalhesVeiculos from '../pages/DetalhesVeiculo';
import Favoritos from '../pages/Favoritos';
import busca from '../pages/Busca';
import empresa from '../pages/Empresa';
import manutencao from '../pages/Manutencao';

const AppRoutes = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Veiculos />} />
        <Route path="/vehicle/:id" element={<DetalhesVeiculo />} />
        <Route path="/favorites" element={<Favoritos />} />
        <Route path="/search" element={<Busca />} />
        <Route path="/company" element={<Empresa />} />
        <Route path="/maintenance" element={<Manutencao />} />
        <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
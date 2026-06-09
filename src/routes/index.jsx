import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Veiculo from '../pages/Veiculos';
import DetalhesVeiculos from '../pages/DetalhesVeiculo';
import Favoritos from '../pages/Favoritos';
import { Busca } from '../pages/Busca';
import Empresa from '../pages/Empresa';
import Manutencao from '../pages/Manutencao';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Veiculo />} />
        <Route path="/vehicle/:id" element={<DetalhesVeiculos />} />
        <Route path="/favorites" element={<Favoritos />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/company" element={<Empresa />} />
        <Route path="/maintenance" element={<Manutencao />} />
        <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
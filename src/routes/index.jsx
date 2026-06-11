import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Busca } from "../pages/Busca";
import { DetalhesVeiculo } from "../pages/DetalhesVeiculo";
import { Page404 } from "../pages/NotFound/Page404.jsx";
import Home from '../pages/Home';
import Veiculos from '../pages/Veiculos';
import DetalhesVeiculo from '../pages/DetalhesVeiculo';
import Favoritos from '../pages/Favoritos';
import Busca from '../pages/Busca';
import Empresa from '../pages/Empresa';
import Manutencao from '../pages/Manutencao';

const LayoutPadrao = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/veiculo/:id" element={<DetalhesVeiculo />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/manutencao" element={<Manutencao />} />
        <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
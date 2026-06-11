import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Busca } from "../pages/Busca";
import { DetalhesVeiculo } from "../pages/DetalhesVeiculo";
import { Page404 } from "../pages/NotFound/Page404.jsx";
import Empresa from "../pages/Empresa";
import Favoritos from "../pages/Favoritos";
import Home from "../pages/Home";
import Veiculos from "../pages/Veiculos";

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

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPadrao />}>
          <Route index element={<Home />} />
          <Route path="veiculos" element={<Veiculos />} />
          <Route path="veiculo/:id" element={<DetalhesVeiculo />}/>
          <Route path="favoritos" element={<Favoritos />}/>
          <Route path="busca" element={<Busca />}/>
          <Route path="/empresa" element={<Empresa />}/>
        </Route>
        
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
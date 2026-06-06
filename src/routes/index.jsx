import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Vehicles from '../pages/Vehicles';
import VehicleDetails from '../pages/VehicleDetails';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';
import Company from '../pages/Company';
import Maintenance from '../pages/Maintenance';

const AppRoutes = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/company" element={<Company />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="*" element={<h1>Página Não Encontrada (404)</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
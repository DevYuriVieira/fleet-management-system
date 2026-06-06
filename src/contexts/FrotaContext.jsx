import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const FleetContext = createContext();

export const FleetProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // funcao de busca inicial dos veículos
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await api.get('/vehicles');
        setVehicles(response.data);
      } catch (err) {
        setError('Erro ao carregar os dados da frota.');
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  const toggleFavorite = (vehicleId) => {
    setFavorites((prev) => {
      const isFav = prev.includes(vehicleId);
      if (isFav) {
        return prev.filter((id) => id !== vehicleId);
      } else {
        return [...prev, vehicleId];
      }
    });
  };

  return (
    <FleetContext.Provider value={{ vehicles, favorites, toggleFavorite, loading, error }}>
      {children}
    </FleetContext.Provider>
  );
};
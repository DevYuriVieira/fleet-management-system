import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const FrotaContext = createContext();

export const ProvedorFrota = ({ children }) => {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // funcao de busca inicial dos veículos
  useEffect(() => {
    const buscarVeiculos = async () => {
      try {
        setLoading(true);
        const response = await api.get('/veiculos');
        setVeiculos(response.data);
      } catch (err) {
        setError('Erro ao carregar os dados da frota.');
      } finally {
        setLoading(false);
      }
    };
    buscarVeiculos();
  }, []);

  return (
    <FrotaContext.Provider value={{ veiculos, favoritos, loading, error }}>
      {children}
    </FrotaContext.Provider>
  );
};
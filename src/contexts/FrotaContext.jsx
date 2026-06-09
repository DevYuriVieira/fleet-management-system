import React, { createContext, useState, useEffect } from 'react';
import {getMarcasFipe} from '../services/getDetalhesVeiculo';

export const FrotaContext = createContext();

export const ProvedorFrota = ({ children }) => {
  const [veiculos, setVeiculos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [error, setError] = useState(null);

  // funcao de busca inicial dos veículos
  useEffect(() => {
    const buscarVeiculos = async () => {
      try {
        setCarregando(true);
        const response = await getMarcasFipe('carros');
        setVeiculos(response);
      } catch (err) {
        setError('Erro ao carregar os dados da frota.');
      } finally {
        setCarregando(false);
      }
    };
    buscarVeiculos();
  }, []);

  return (
    <FrotaContext.Provider value={{ veiculos, carregando, error }}>
      {children}
    </FrotaContext.Provider>
  );
};
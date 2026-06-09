import React, { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

export const ProvedorFavoritos = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosSalvos = localStorage.getItem('@FrotaControl:favoritos');
    return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('@FrotaControl:favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // funcao para adicionar/remover um veículo dos favoritos
  const alternarFavorito = (veiculoId) => {
    setFavoritos((favoritosAnteriores) => {
      const favoritado = favoritosAnteriores.includes(veiculoId);
      
      if (favoritado) {
        return favoritosAnteriores.filter((id) => id !== veiculoId);
      } else {
        return [...favoritosAnteriores, veiculoId];
      }
    });
  };

  // funcao para ver se o veículo específico esta favoritado
  const eFavorito = (veiculoId) => {
    return favoritos.includes(veiculoId);
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, alternarFavorito, eFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
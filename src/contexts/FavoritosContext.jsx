import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('@FrotaControl:favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('@FrotaControl:favorites', JSON.stringify(favorites));
  }, [favorites]);

  // funcao para adicionar/remover um veículo dos favoritos
  const toggleFavorite = (vehicleId) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.includes(vehicleId);
      
      if (isAlreadyFavorite) {
        return prevFavorites.filter((id) => id !== vehicleId);
      } else {
        return [...prevFavorites, vehicleId];
      }
    });
  };

  // funcao para ver se o veículo específico esta favoritado
  const isFavorite = (vehicleId) => {
    return favorites.includes(vehicleId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
import React, { useContext } from 'react';
import { FavoritosContext } from '../../contexts/FavoritosContext';
import { Botao, IconeEstrela } from './style';

const BotaoFavorito = ({ veiculoId }) => {
  const { eFavorito, alternarFavorito } = useContext(FavoritosContext);

  const favoritado = eFavorito(veiculoId);

  const handleClick = (e) => {
    e.stopPropagation(); // evita acionar o click do CardVeiculo
    alternarFavorito(veiculoId);
  };

  return (
    <Botao
      onClick={handleClick}
      $favoritado={favoritado}
      title={favoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      <IconeEstrela $favoritado={favoritado}>
        {favoritado ? '★' : '☆'}
      </IconeEstrela>
    </Botao>
  );
};

export default BotaoFavorito;
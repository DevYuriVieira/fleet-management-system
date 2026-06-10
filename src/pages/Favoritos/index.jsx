import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoritosContext } from '../../contexts/FavoritosContext';
import { FrotaContext } from '../../contexts/FrotaContext';
import { toast } from 'react-toastify';
import CardVeiculo from '../../components/CardVeiculo';
import {
  FavoritosContainer,
  HeroSection,
  DecoracaoHero,
  HeroContent,
  HeroBadge,
  HeroTitle,
  LinhaDestaque,
  HeroSubtitle,
  SecaoFavoritos,
  TituloSecao,
  SubtituloSecao,
  ContadorFavoritos,
  GridFavoritos,
  MensagemVazia,
  IconeVazio,
  TextoVazio,
  BotaoVoltar,
} from './style';

const Favoritos = () => {
  const navigate = useNavigate();
  const { favoritos, alternarFavorito } = useContext(FavoritosContext);
  const { veiculos, loading, error } = useContext(FrotaContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const veiculosFavoritados = veiculos.filter((veiculo) =>
    favoritos.includes(veiculo.id)
  );

  return (
    <FavoritosContainer>
      <HeroSection>
        <DecoracaoHero />
        <HeroContent>
          <HeroBadge>⭐ Seus Favoritos</HeroBadge>
          <HeroTitle>
            Veículos que você
            <LinhaDestaque> acompanha</LinhaDestaque>
          </HeroTitle>
          <HeroSubtitle>
            Acesse rapidamente os veículos mais importantes da sua frota.
            Gerencie e visualize detalhes com facilidade.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <SecaoFavoritos>
        <TituloSecao>Meus Favoritos</TituloSecao>
        <SubtituloSecao>
          {loading
            ? 'Carregando veículos...'
            : `${veiculosFavoritados.length} ${veiculosFavoritados.length === 1 ? 'veículo favoritado' : 'veículos favoritados'}`}
        </SubtituloSecao>

        {!loading && veiculosFavoritados.length > 0 && (
          <>
            <ContadorFavoritos>
              Total: {veiculosFavoritados.length}{' '}
              {veiculosFavoritados.length === 1 ? 'veículo' : 'veículos'}
            </ContadorFavoritos>

            <GridFavoritos>
              {veiculosFavoritados.map((veiculo) => (
                <CardVeiculo key={veiculo.id} veiculo={veiculo} />
              ))}
            </GridFavoritos>
          </>
        )}

        {!loading && veiculosFavoritados.length === 0 && (
          <MensagemVazia>
            <IconeVazio>⭐</IconeVazio>
            <TituloSecao>Nenhum favorito ainda</TituloSecao>
            <TextoVazio>
              Você ainda não favoritou nenhum veículo. Explore nossa frota e
              adicione os que mais gostar!
            </TextoVazio>
            <BotaoVoltar onClick={() => navigate('/veiculos')}>
              Ver Veículos
            </BotaoVoltar>
          </MensagemVazia>
        )}
      </SecaoFavoritos>
    </FavoritosContainer>
  );
};

export default Favoritos;

import React, { useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoritosContext } from '../../contexts/FavoritosContext';
import { FrotaContext } from '../../contexts/FrotaContext';
import { toast } from 'react-toastify';
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
  CardFavorito,
  ImagemVeiculo,
  InfoVeiculo,
  NomeVeiculo,
  TagsVeiculo,
  Tag,
  AcoesBotoes,
  BotaoDetalhes,
  BotaoRemover,
  MensagemVazia,
  IconeVazio,
  TextoVazio,
  BotaoVoltar,
} from './style';

const Favoritos = () => {
  const navigate = useNavigate();
  const { favoritos, alternarFavorito } = useContext(FavoritosContext);
  const { veiculos, loading } = useContext(FrotaContext);

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
              {veiculosFavoritados.map((veiculo, index) => (
                <CardFavorito key={veiculo.id} $delay={index * 0.08}>
                  <ImagemVeiculo
                    src={
                      veiculo.imagem ||
                      'https://placehold.co/400x200?text=Sem+Imagem'
                    }
                    alt={veiculo.nome}
                  />
                  <InfoVeiculo>
                    <NomeVeiculo>{veiculo.nome}</NomeVeiculo>
                    <TagsVeiculo>
                      <Tag>🚗 {veiculo.tipo || 'Veículo'}</Tag>
                      <Tag>📅 {veiculo.ano || 'N/A'}</Tag>
                      <Tag>⚙️ {veiculo.status || 'Disponível'}</Tag>
                    </TagsVeiculo>
                    <AcoesBotoes>
                      <BotaoDetalhes onClick={() => navigate(`/veiculo/${veiculo.id}`)}>
                        Ver Detalhes
                      </BotaoDetalhes>
                      <BotaoRemover onClick={() => alternarFavorito(veiculo.id)}>
                        ♡ Remover
                      </BotaoRemover>
                    </AcoesBotoes>
                  </InfoVeiculo>
                </CardFavorito>
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

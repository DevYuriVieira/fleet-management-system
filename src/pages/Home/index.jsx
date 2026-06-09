import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FrotaContext } from '../../contexts/FrotaContext';
import { FavoritosContext } from '../../contexts/FavoritosContext';
import CardVeiculo from '../../components/CardVeiculo';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCTAGroup,
  BotaoPrimario,
  BotaoSecundario,
  HeroBadge,
  SecaoFuncionalidades,
  TituloSecao,
  SubtituloSecao,
  GridFuncionalidades,
  CardFuncionalidade,
  IconeFuncionalidade,
  TituloFuncionalidade,
  DescricaoFuncionalidade,
  SecaoEstatisticas,
  GridEstatisticas,
  CardEstatistica,
  NumeroEstatistica,
  LabelEstatistica,
  SecaoVeiculosRecentes,
  GridVeiculos,
  VerTodosLink,
  SecaoCTA,
  CTAContent,
  CTATitulo,
  CTADescricao,
  DecoracaoHero,
  LinhaDestaque,
} from './style';

const funcionalidades = [
  { id: 'dashboard', icone: '📊', titulo: 'Dashboard', descricao: 'Visão geral da frota com indicadores de desempenho e estatísticas em tempo real.', rota: '/' },
  { id: 'veiculos', icone: '🚗', titulo: 'Gestão de Veículos', descricao: 'Cadastre, edite e gerencie todos os veículos da sua frota em um só lugar.', rota: '/veiculos' },
  { id: 'busca', icone: '🔍', titulo: 'Consulta FIPE', descricao: 'Consulte valores atualizados da tabela FIPE para qualquer veículo do mercado.', rota: '/busca' },
  { id: 'manutencao', icone: '🔧', titulo: 'Manutenção', descricao: 'Controle revisões, trocas de óleo e manutenções preventivas da sua frota.', rota: '/manutencao' },
  { id: 'favoritos', icone: '⭐', titulo: 'Favoritos', descricao: 'Acesse rapidamente os veículos mais importantes e acompanhados por você.', rota: '/favoritos' },
  { id: 'empresa', icone: '🏢', titulo: 'Dados da Empresa', descricao: 'Consulte CNPJ e CEP para manter os dados empresariais sempre atualizados.', rota: '/empresa' },
];

const Home = () => {
  const navigate = useNavigate();
  const { veiculos, loading } = useContext(FrotaContext);
  const { favoritos } = useContext(FavoritosContext);

  const veiculosRecentes = veiculos?.slice(0, 4) || [];

  const total = veiculos?.length || 0;
  const ativos = veiculos?.filter((v) => v.status?.toLowerCase() === 'ativo').length || 0;
  const manutencao = veiculos?.filter((v) => v.status?.toLowerCase().includes('manuten')).length || 0;

  const estatisticas = [
    { valor: total, label: 'Veículos Cadastrados' },
    { valor: ativos, label: 'Veículos Ativos' },
    { valor: manutencao, label: 'Em Manutenção' },
    { valor: favoritos?.length || 0, label: 'Favoritos' },
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <DecoracaoHero />
        <HeroContent>
          <HeroBadge>🚀 Sistema de Gestão de Frotas</HeroBadge>
          <HeroTitle>
            Gerencie sua frota com
            <LinhaDestaque> inteligência</LinhaDestaque>
          </HeroTitle>
          <HeroSubtitle>
            O FrotaControl oferece uma plataforma completa para pequenas e médias
            empresas controlarem seus veículos, manutenções e consultas — tudo em um só lugar.
          </HeroSubtitle>
          <HeroCTAGroup>
            <BotaoPrimario onClick={() => navigate('/veiculos')}>Ver Veículos</BotaoPrimario>
            <BotaoSecundario onClick={() => navigate('/busca')}>Consultar FIPE</BotaoSecundario>
          </HeroCTAGroup>
        </HeroContent>
      </HeroSection>

      <SecaoEstatisticas>
        <GridEstatisticas>
          {estatisticas.map((item, i) => (
            <CardEstatistica key={item.label} $delay={i * 0.1}>
              <NumeroEstatistica>{item.valor}</NumeroEstatistica>
              <LabelEstatistica>{item.label}</LabelEstatistica>
            </CardEstatistica>
          ))}
        </GridEstatisticas>
      </SecaoEstatisticas>

      <SecaoFuncionalidades>
        <TituloSecao>Funcionalidades</TituloSecao>
        <SubtituloSecao>Tudo o que você precisa para manter sua frota sob controle.</SubtituloSecao>
        <GridFuncionalidades>
          {funcionalidades.map((func, index) => (
            <CardFuncionalidade key={func.id} $delay={index * 0.08} onClick={() => navigate(func.rota)}>
              <IconeFuncionalidade>{func.icone}</IconeFuncionalidade>
              <TituloFuncionalidade>{func.titulo}</TituloFuncionalidade>
              <DescricaoFuncionalidade>{func.descricao}</DescricaoFuncionalidade>
            </CardFuncionalidade>
          ))}
        </GridFuncionalidades>
      </SecaoFuncionalidades>

      {!loading && veiculosRecentes.length > 0 && (
        <SecaoVeiculosRecentes>
          <TituloSecao>Veículos Recentes</TituloSecao>
          <SubtituloSecao>Confira os últimos veículos adicionados à frota.</SubtituloSecao>
          <GridVeiculos>
            {veiculosRecentes.map((veiculo) => (
              <CardVeiculo key={veiculo.id} veiculo={veiculo} />
            ))}
          </GridVeiculos>
          <VerTodosLink onClick={() => navigate('/veiculos')}>Ver todos os veículos →</VerTodosLink>
        </SecaoVeiculosRecentes>
      )}

      <SecaoCTA>
        <CTAContent>
          <CTATitulo>Pronto para otimizar sua frota?</CTATitulo>
          <CTADescricao>
            Explore todas as funcionalidades e mantenha o controle total dos seus
            veículos, manutenções e custos operacionais.
          </CTADescricao>
          <BotaoPrimario onClick={() => navigate('/veiculos')}>Começar Agora</BotaoPrimario>
        </CTAContent>
      </SecaoCTA>
    </HomeContainer>
  );
};

export default Home;
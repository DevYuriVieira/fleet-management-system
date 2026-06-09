import React, { useContext, useState } from 'react';
import { FrotaContext } from '../../contexts/FrotaContext';
import CardVeiculo from '../../components/CardVeiculo';
import {
  VeiculosContainer,
  CabecalhoSecao,
  TituloPagina,
  SubtituloPagina,
  ContadorResultados,
  CampoFiltro,
  FiltrosContainer,
  SelectFiltro,
  GridVeiculos,
  EstadoVazio,
  EstadoVazioIcone,
  EstadoVazioTexto,
  LoadingContainer,
  LoadingSpinner,
  LoadingTexto,
  ErroContainer,
  ErroTexto,
} from './style';

const Veiculos = () => {
  const { veiculos, loading, error } = useContext(FrotaContext);
  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('todos');

  const veiculosFiltrados = (veiculos || []).filter((veiculo) => {
    const termoBusca = busca.toLowerCase();
    const correspondeTexto =
      veiculo.modelo?.toLowerCase()?.includes(termoBusca) ||
      veiculo.marca?.toLowerCase()?.includes(termoBusca) ||
      veiculo.placa?.toLowerCase()?.includes(termoBusca);

    const correspondeStatus =
      filtroStatus === 'todos' ||
      veiculo.status?.toLowerCase() === filtroStatus;

    return correspondeTexto && correspondeStatus;
  });

  if (loading) {
    return (
      <VeiculosContainer>
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingTexto>Carregando veículos...</LoadingTexto>
        </LoadingContainer>
      </VeiculosContainer>
    );
  }

  if (error) {
    return (
      <VeiculosContainer>
        <ErroContainer>
          <ErroTexto>{error}</ErroTexto>
        </ErroContainer>
      </VeiculosContainer>
    );
  }

  return (
    <VeiculosContainer>
      <CabecalhoSecao>
        <TituloPagina>Veículos da Frota</TituloPagina>
        <SubtituloPagina>
          Gerencie e acompanhe todos os veículos cadastrados na sua frota.
        </SubtituloPagina>
      </CabecalhoSecao>

      <FiltrosContainer>
        <CampoFiltro
          type="text"
          placeholder="Buscar por modelo, marca ou placa..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <SelectFiltro
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
        >
          <option value="todos">Todos os status</option>
          <option value="ativo">Ativos</option>
          <option value="manutencao">Em manutenção</option>
          <option value="inativo">Inativos</option>
        </SelectFiltro>
      </FiltrosContainer>

      <ContadorResultados>
        {veiculosFiltrados.length}{' '}
        {veiculosFiltrados.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}
      </ContadorResultados>

      {veiculosFiltrados.length > 0 ? (
        <GridVeiculos>
          {veiculosFiltrados.map((veiculo) => (
            <CardVeiculo key={veiculo.id} veiculo={veiculo} />
          ))}
        </GridVeiculos>
      ) : (
        <EstadoVazio>
          <EstadoVazioIcone>🔍</EstadoVazioIcone>
          <EstadoVazioTexto>
            Nenhum veículo encontrado com os filtros aplicados.
          </EstadoVazioTexto>
        </EstadoVazio>
      )}
    </VeiculosContainer>
  );
};

export default Veiculos;

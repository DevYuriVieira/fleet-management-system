import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardContainer,
  CardImagem,
  ImagemPlaceholder,
  CardConteudo,
  CardTopo,
  CardModelo,
  StatusBadge,
  CardInfo,
  InfoItem,
  InfoLabel,
  InfoValor,
  CardRodape,
  BotaoDetalhes,
} from './style';

const statusConfig = {
  ativo: { label: 'Ativo', cor: '#10b981' },
  inativo: { label: 'Inativo', cor: '#ef4444' },
  manutencao: { label: 'Manutenção', cor: '#f59e0b' },
};

const getStatusInfo = (status) => {
  const chave = status?.toLowerCase()?.normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';

  if (chave.includes('manuten')) return statusConfig.manutencao;
  if (chave.includes('inativo')) return statusConfig.inativo;
  return statusConfig.ativo;
};

const formatarPlaca = (placa) => {
  if (!placa) return '---';
  return placa.toUpperCase();
};

const formatarAno = (veiculo) => {
  if (veiculo.anoFabricacao && veiculo.anoModelo) {
    return `${veiculo.anoFabricacao}/${veiculo.anoModelo}`;
  }
  return veiculo.ano || '---';
};

const CardVeiculo = ({ veiculo }) => {
  const navigate = useNavigate();
  const statusInfo = getStatusInfo(veiculo.status);

  const imagemCapa = veiculo.imagens?.[0] || null;

  const handleVerDetalhes = () => {
    navigate(`/veiculo/${veiculo.id}`);
  };

  return (
    <CardContainer onClick={handleVerDetalhes}>
      {imagemCapa ? (
        <CardImagem src={imagemCapa} alt={`${veiculo.marca} ${veiculo.modelo}`} />
      ) : (
        <ImagemPlaceholder>🚗</ImagemPlaceholder>
      )}

      <CardConteudo>
        <CardTopo>
          <CardModelo>{veiculo.marca} {veiculo.modelo}</CardModelo>
          <StatusBadge $cor={statusInfo.cor}>{statusInfo.label}</StatusBadge>
        </CardTopo>

        <CardInfo>
          <InfoItem>
            <InfoLabel>Placa</InfoLabel>
            <InfoValor>{formatarPlaca(veiculo.placa)}</InfoValor>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Ano</InfoLabel>
            <InfoValor>{formatarAno(veiculo)}</InfoValor>
          </InfoItem>
          {veiculo.quilometragem !== undefined && (
            <InfoItem>
              <InfoLabel>Km</InfoLabel>
              <InfoValor>{veiculo.quilometragem}</InfoValor>
            </InfoItem>
          )}
        </CardInfo>

        <CardRodape>
          <BotaoDetalhes>Ver detalhes →</BotaoDetalhes>
        </CardRodape>
      </CardConteudo>
    </CardContainer>
  );
};

export default CardVeiculo;

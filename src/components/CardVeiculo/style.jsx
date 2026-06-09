import styled from 'styled-components';

export const CardContainer = styled.article`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 30px ${({ theme }) => theme.primary}18;
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const ImagemPlaceholder = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: ${({ theme }) => theme.background};

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const CardConteudo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardTopo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const CardModelo = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.3;
`;

export const StatusBadge = styled.span`
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ $cor }) => $cor};
  background: ${({ $cor }) => $cor}15;
  border: 1px solid ${({ $cor }) => $cor}30;
  white-space: nowrap;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 70px;
`;

export const InfoLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text}66;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const InfoValor = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const CardRodape = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

export const BotaoDetalhes = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  transition: opacity 0.2s;

  ${CardContainer}:hover & {
    opacity: 0.8;
  }
`;

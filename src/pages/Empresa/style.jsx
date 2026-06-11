import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const EmpresaContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 24px 16px 60px;
  }
`;

export const CabecalhoSecao = styled.header`
  margin-bottom: 40px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const TituloPagina = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubtituloPagina = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text}88;
  line-height: 1.6;
`;

export const GridConsultas = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.5s ease-out 0.1s both;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardConsulta = styled.section`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 28px;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: ${({ theme }) => theme.primary}40;
  }
`;

export const CardConsultaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const CardConsultaIcone = styled.span`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.primary}15;
`;

export const CardConsultaTitulo = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const CardConsultaDescricao = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}77;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CampoConsulta = styled.input`
  flex: 1;
  padding: 14px 20px;
  font-size: 0.95rem;
  border-radius: 12px;
  outline: none;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.text}55;
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }
`;

export const BotaoBuscar = styled.button`
  padding: 14px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  white-space: nowrap;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;

  &:hover {
    background: ${({ theme }) => theme.primary}dd;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.primary}40;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const MensagemStatus = styled.div`
  margin-top: 24px;
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}12;
  border: 1px solid ${({ theme }) => theme.primary}30;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out;
`;

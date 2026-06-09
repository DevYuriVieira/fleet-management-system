import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const VeiculosContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 24px 16px 60px;
  }
`;

export const CabecalhoSecao = styled.header`
  margin-bottom: 32px;
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

export const FiltrosContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  animation: ${fadeIn} 0.5s ease-out 0.1s both;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const inputBase = `
  font-size: 0.95rem;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
`;

export const CampoFiltro = styled.input`
  ${inputBase}
  flex: 1;
  padding: 14px 20px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.text}55;
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }
`;

export const SelectFiltro = styled.select`
  ${inputBase}
  padding: 14px 20px;
  min-width: 180px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }

  @media (max-width: 600px) {
    min-width: unset;
  }
`;

export const ContadorResultados = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}88;
  margin-bottom: 24px;
`;

export const GridVeiculos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const EstadoVazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const EstadoVazioIcone = styled.span`
  font-size: 3rem;
  margin-bottom: 16px;
`;

export const EstadoVazioTexto = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text}88;
  max-width: 400px;
  line-height: 1.6;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 16px;
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.border};
  border-top-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingTexto = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text}88;
`;

export const ErroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export const ErroTexto = styled.p`
  font-size: 1.1rem;
  color: #ef4444;
  background: #ef444415;
  border: 1px solid #ef444430;
  border-radius: 12px;
  padding: 20px 32px;
`;

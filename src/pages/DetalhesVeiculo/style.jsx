import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 24px 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (min-width: 768px) {
    padding: 32px 64px;
  }
`;

export const LinkVoltar = styled.div`
  margin-bottom: 24px;

  a {
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.border};
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 32px;

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.025em;
    color: ${({ theme }) => theme.text};
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 36px;
    }
  }
`;

export const TagStatus = styled.span`
  background-color: ${(props) =>
    props.ativo ? "rgba(34, 197, 94, 0.15)" : `${props.theme.border}33`};
  color: ${(props) => (props.ativo ? "#4ADE80" : props.theme.text)};
  border: 1px solid ${(props) => (props.ativo ? "#22C55E" : props.theme.border)};
  padding: 8px 16px;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
    align-items: start;
  }
`;

export const CarrosselContainer = styled.div`
  position: relative;
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;

  .sem-foto {
    padding: 48px;
    color: ${({ theme }) => theme.border};
  }

  @media (min-width: 768px) {
    aspect-ratio: 16/9;
    border-radius: 16px;

    &:hover button {
      opacity: 1;
    }
  }
`;

export const ImagemDestaque = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BotaoSeta = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.esquerda ? "left: 8px;" : "right: 8px;")}
  background: transparent;
  border: none;
  color: #f8fafc;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  opacity: 1;

  &:active {
    scale: 0.9;
  }

  @media (min-width: 768px) {
    ${(props) => (props.esquerda ? "left: 24px;" : "right: 24px;")}
    font-size: 20px;
    opacity: 0;

    &:hover {
      scale: 1.1;
      filter: brightness(0.8);
    }
  }
`;

export const IndicadorFotos = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: ${({ theme }) => theme.surface}b3;
  backdrop-filter: blur(4px);
  padding: 6px 13px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border}44;

  @media (min-width: 768px) {
    bottom: 24px;
    right: 24px;
    font-size: 13px;
  }
`;

export const CardDetalhes = styled.div`
  background-color: ${({ theme }) => theme.surface};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.3s ease;

  .section {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    color: ${({ theme }) => theme.border};
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 16px 0;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    padding-bottom: 8px;
  }

  p {
    margin: 0 0 8px 0;
    color: ${({ theme }) => theme.text};
    font-size: 15px;
  }

  .placa-badge {
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 4px 10px;
    border-radius: 6px;
    font-family: monospace;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    letter-spacing: 1px;
  }

  .descricao {
    background-color: ${({ theme }) => theme.background};
    padding: 19px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.border};
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    font-size: 15px;
  }

  @media (min-width: 768px) {
    padding: 32px;
    border-radius: 16px;
  }
`;

export const FichaGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`;

export const ValorFipeText = styled.div`
  color: #10b981;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.03em;

  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const LoadingText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

export const PlacaBadge = styled.span`
  background: ${({ theme }) => theme.border}44;
  padding: 3px 8px;
  border-radius: 4px;
  font-family: monospace;
  color: ${({ theme }) => theme.text};
`;
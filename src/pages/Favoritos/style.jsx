import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const FavoritosContainer = styled.main`
  min-height: 100vh;
  width: 100%;
`;

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  padding: 80px 24px 60px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 60px 16px 40px;
  }
`;

export const DecoracaoHero = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 70% 20%,
    ${({ theme }) => theme.primary}22 0%,
    transparent 60%
  );
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  max-width: 720px;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}15;
  border: 1px solid ${({ theme }) => theme.primary}30;
  margin-bottom: 24px;
`;

export const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const LinhaDestaque = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text}aa;
  max-width: 580px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SecaoBase = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 60px 24px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

export const SecaoFavoritos = styled(SecaoBase)`
  text-align: center;
`;

export const TituloSecao = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubtituloSecao = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text}88;
  margin-bottom: 16px;
`;

export const ContadorFavoritos = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 32px;
`;

export const GridFavoritos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: left;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardFavorito = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  animation: ${fadeIn} 0.5s ease-out ${({ $delay }) => $delay || 0}s both;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 30px ${({ theme }) => theme.primary}18;
  }
`;

export const ImagemVeiculo = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const InfoVeiculo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NomeVeiculo = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

export const TagsVeiculo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text}99;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 10px;
  border-radius: 8px;
`;

export const AcoesBotoes = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BotaoDetalhes = styled.button`
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #2563eb);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px ${({ theme }) => theme.primary}40;
  }
`;

export const BotaoRemover = styled.button`
  flex: 1;
  padding: 10px 16px;
  border: 1px solid #ef4444;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  color: #ef4444;
  background: transparent;
  transition: background 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: #ef4444;
    color: #fff;
    transform: translateY(-2px);
  }
`;

export const MensagemVazia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;
  gap: 16px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const IconeVazio = styled.span`
  font-size: 4rem;
`;

export const TextoVazio = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text}88;
  max-width: 420px;
`;

export const BotaoVoltar = styled.button`
  margin-top: 8px;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #2563eb);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.primary}40;
  }
`;
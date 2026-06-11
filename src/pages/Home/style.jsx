import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HomeContainer = styled.main`
  min-height: 100vh;
  width: 100%;
`;

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 480px;
  padding: 80px 24px 60px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 400px;
    padding: 60px 16px 40px;
  }
`;

export const DecoracaoHero = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 30% 20%,
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
  margin: 0 auto 32px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroCTAGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BotaoPrimario = styled.button`
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

export const BotaoSecundario = styled.button`
  padding: 14px 32px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.surface};
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
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

export const SecaoEstatisticas = styled(SecaoBase)``;

export const GridEstatisticas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardEstatistica = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 28px 20px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out ${({ $delay }) => $delay || 0}s both;
`;

export const NumeroEstatistica = styled.span`
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 6px;
`;

export const LabelEstatistica = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text}99;
`;

export const SecaoFuncionalidades = styled(SecaoBase)`
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
  margin-bottom: 40px;
`;

export const GridFuncionalidades = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CardFuncionalidade = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 32px 24px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  animation: ${fadeIn} 0.5s ease-out ${({ $delay }) => $delay || 0}s both;
  width: calc((100% - 40px) / 3);

  @media (max-width: 900px) {
    width: calc((100% - 20px) / 2);
  }

  @media (max-width: 480px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 30px ${({ theme }) => theme.primary}18;
  }
`;

export const IconeFuncionalidade = styled.span`
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const TituloFuncionalidade = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
`;

export const DescricaoFuncionalidade = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text}88;
`;

export const SecaoVeiculosRecentes = styled(SecaoBase)`
  text-align: center;
`;

export const GridVeiculos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const VerTodosLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export const SecaoCTA = styled.section`
  padding: 80px 24px;
  text-align: center;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${({ theme }) => theme.primary}08 100%
  );

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

export const CTAContent = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

export const CTATitulo = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CTADescricao = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text}88;
  margin-bottom: 32px;
`;

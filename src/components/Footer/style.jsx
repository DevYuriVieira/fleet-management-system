import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #121214;
  border-top: 1px solid #29292e;
  padding: 3rem 2rem 1.5rem 2rem;
  margin-top: auto;
  width: 100%;
`;

export const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #29292e;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .logo-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h3 {
      color: #ffffff;
      font-size: 1.25rem;
    }
  }

  h4 {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    color: #8d8d99;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  p.hours {
    color: #7c7c8a;
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }

  span {
    color: #7c7c8a;
    font-size: 0.875rem;
  }

  a {
    color: #8d8d99;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;

    &:hover {
      color: #00b37e;
    }
  }

  @media (max-width: 550px) {
    align-items: center;

    .logo-area {
      justify-content: center;
    }
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #7c7c8a;
    font-size: 0.85rem;
  }

  .badges {
    display: flex;
    gap: 0.5rem;

    span {
      background-color: #202024;
      border: 1px solid #29292e;
      color: #c4c4cc;
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
      border-radius: 6px;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8d8d99;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: #00b37e;
  }

  @media (max-width: 550px) {
    justify-content: center;
  }
`;
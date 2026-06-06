import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #121214;
  border-top: 1px solid #29292e;
  padding: 1.5rem 2rem;
  margin-top: auto; /* Garante que se o conteúdo for curto, o footer fique embaixo */
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  color: #8d8d99;
  font-size: 0.9rem;

  strong {
    color: #00b37e;
  }

  span {
    font-size: 0.85rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;
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
export const CopyrightArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h4 {
    margin-bottom: 0.5rem;
    color: #c4c4cc;
    font-size: 0.9rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (max-width: 600px) {
    align-items: center;
    ul {
      justify-content: center;
    }
  }
`;

export const TeamMember = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #202024;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #29292e;

  span {
    color: #c4c4cc;
  }

  a {
    color: #00b37e;
    display: flex;
    align-items: center;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
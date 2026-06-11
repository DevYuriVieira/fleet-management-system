import styled from 'styled-components';

export const Botao = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ $favoritado, theme }) =>
    $favoritado ? '#f59e0b30' : theme.border};
  background: ${({ $favoritado, theme }) =>
    $favoritado ? '#f59e0b15' : theme.surface};
  cursor: pointer;
  transition: transform 0.2s, background 0.2s, border-color 0.2s;

  &:hover {
    transform: scale(1.15);
    border-color: #f59e0b;
    background: #f59e0b15;
  }
`;

export const IconeEstrela = styled.span`
  font-size: 1.1rem;
  color: ${({ $favoritado }) => ($favoritado ? '#f59e0b' : 'inherit')};
  color: ${({ $favoritado, theme }) =>
    $favoritado ? '#f59e0b' : theme.text}99;
  transition: color 0.2s;
  line-height: 1;
`;
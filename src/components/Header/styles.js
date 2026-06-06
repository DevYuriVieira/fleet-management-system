import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background-color: #121214; /* Cor escura profissional */
  border-bottom: 1px solid #29292e;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00b37e; /* Verde que remete a dashboard/controle */
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: #00e09e;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavLinkStyled = styled(Link)`
  color: #c4c4cc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  &:hover {
    color: #ffffff;
  }

  &.alert-link {
    background: #202024;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    border: 1px solid #29292e;
  }
`;

export const AlertBadge = styled.span`
  background-color: #f75a68; /* Vermelho para alertas */
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
`;
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background-color: #121214;
  border-bottom: 1px solid #29292e;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00b37e;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 110;

  &:hover {
    color: #00e09e;
  }
`;

export const ThemeButton = styled.button`
  background: #202024;
  border: 1px solid #29292e;
  padding: 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 110;

  &:hover {
    background: #29292e;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #c4c4cc;
  cursor: pointer;
  z-index: 110;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: #121214;
    border-left: 1px solid #29292e;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -10px 0 20px rgba(0, 0, 0, 0.5);

    &.open {
      right: 0;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #c4c4cc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  &:hover,
  &.active {
    color: #ffffff;
  }

  &.active {
    border-bottom: 2px solid #00b37e;
    padding-bottom: 4px;
  }

  &.alert-link {
    background: #202024;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    border: 1px solid #29292e;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    &.active {
      border-bottom: none;
      border-left: 3px solid #00b37e;
      padding-bottom: 0;
      padding-left: 8px;
    }
  }
`;

export const AlertBadge = styled.span`
  background-color: #f75a68;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
  }
`;
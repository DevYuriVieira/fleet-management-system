import React, { useState, useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';
import {
  HeaderContainer,
  Logo,
  NavMenu,
  NavLinkStyled,
  AlertBadge,
  HamburgerButton,
  ThemeButton
} from './style';
import { FaCar, FaStar, FaBars, FaTimes, FaSun, FaMoon, FaSearch } from 'react-icons/fa';

export default function Header({ totalFavoritos = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const { tema, alternarTema } = useContext(TemaContext);

  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <Logo to="/" onClick={closeMenu}>
        <FaCar size={28} />
        <span>FrotaControl</span>
      </Logo>

      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerButton>

      <NavMenu className={isOpen ? 'open' : ''}>
        <NavLinkStyled to="/" end onClick={closeMenu}>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/veiculos" onClick={closeMenu}>
          Veículos
        </NavLinkStyled>
        <NavLinkStyled to="/busca" onClick={closeMenu}>
          <FaSearch /> Busca
        </NavLinkStyled>
        <NavLinkStyled to="/empresa" onClick={closeMenu}>
          Empresa
        </NavLinkStyled>
        <NavLinkStyled to="/favoritos" className="alert-link" onClick={closeMenu}>
          <FaStar /> Favoritos
          {totalFavoritos > 0 && <AlertBadge>{totalFavoritos}</AlertBadge>}
        </NavLinkStyled>
        <ThemeButton onClick={alternarTema}>
          {tema === 'dark' ? <FaSun size={20} color="#f1c40f" /> : <FaMoon size={20} color="#95a5a6" />}
        </ThemeButton>
      </NavMenu>
    </HeaderContainer>
  );
}
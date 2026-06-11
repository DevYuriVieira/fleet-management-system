import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { 
  HeaderContainer, 
  Logo, 
  NavMenu, 
  NavLinkStyled, 
  AlertBadge,
  HamburgerButton,
  ThemeButton
} from './style'; 
import { FaCar, FaStar, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; 

export default function Header({ totalFavoritos = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <Logo to="/" onClick={closeMenu}>
        <FaCar size={28} />
        <span>FrotaControl</span>
      </Logo>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ThemeButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <FaSun size={20} color="#f1c40f" /> : <FaMoon size={20} color="#95a5a6" />}
        </ThemeButton>

        <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </HamburgerButton>
      </div>

      <NavMenu className={isOpen ? 'open' : ''}>
        <NavLinkStyled to="/" end onClick={closeMenu}>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="/manutencoes" onClick={closeMenu}>
          Manutenções
        </NavLinkStyled>
        <NavLinkStyled to="/custos" onClick={closeMenu}>
          Custos
        </NavLinkStyled>
        <NavLinkStyled to="/empresa" onClick={closeMenu}>
          Empresa
        </NavLinkStyled>
        
        <NavLinkStyled to="/favoritos" className="alert-link" onClick={closeMenu}>
          <FaStar /> Favoritos
          {totalFavoritos > 0 && <AlertBadge>{totalFavoritos}</AlertBadge>}
        </NavLinkStyled>
      </NavMenu>
    </HeaderContainer>
  );
}
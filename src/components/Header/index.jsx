import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { 
  HeaderContainer, 
  Logo, 
  NavMenu, 
  NavLinkStyled, 
  AlertBadge,
  HamburgerButton
} from './style'; 
import { FaCar, FaBell, FaBars, FaTimes } from 'react-icons/fa'; 

export default function Header() {
  const totalAlertas = 3; 
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <Logo to="/" onClick={closeMenu}>
        <FaCar size={28} />
        <span>FrotaControl</span>
      </Logo>

      {}
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </HamburgerButton>

      {}
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
        
        <NavLinkStyled to="/alertas" className="alert-link" onClick={closeMenu}>
          <FaBell /> Alertas
          {totalAlertas > 0 && <AlertBadge>{totalAlertas}</AlertBadge>}
        </NavLinkStyled>
      </NavMenu>
    </HeaderContainer>
  );
}
import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { HeaderContainer, Logo, NavMenu, NavLinkStyled, AlertBadge } from './styles';
import { FaCar, FaBell } from 'react-icons/fa'; 

export default function Header() {
  const totalAlertas = 3; 

  return (
    <HeaderContainer>
      {}
      <Logo to="/">
        <FaCar size={28} />
        <span>FrotaControl</span>
      </Logo>

      <NavMenu>
        {}
        <NavLinkStyled to="/" end>Home</NavLinkStyled>
        <NavLinkStyled to="/manutencoes">Manutenções</NavLinkStyled>
        <NavLinkStyled to="/custos">Custos</NavLinkStyled>
        <NavLinkStyled to="/empresa">Empresa</NavLinkStyled>
        
        <NavLinkStyled to="/alertas" className="alert-link">
          <FaBell /> Alertas
          {totalAlertas > 0 && <AlertBadge>{totalAlertas}</AlertBadge>}
        </NavLinkStyled>
      </NavMenu>
    </HeaderContainer>
  );
}
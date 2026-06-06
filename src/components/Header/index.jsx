import React from 'react';
import { Link } from 'react-router-dom';
// Exemplo de uso do Context para pegar alertas (Requisito 6)
// import { useFrota } from '../../context/FrotaContext'; 
import { HeaderContainer, Logo, NavMenu, NavLinkStyled, AlertBadge } from './styles';
import { FaCar, FaBell } from 'react-icons/fa'; // Opcional: npm i react-icons

export default function Header() {
  // Simulação dos alertas vindo do Context (mude para a lógica real do grupo depois)
  const totalAlertas = 3; 

  return (
    <HeaderContainer>
      <Logo to="/">
        <FaCar size={28} />
        <span>FrotaControl</span>
      </Logo>

      <NavMenu>
        <NavLinkStyled to="/">Home</NavLinkStyled>
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
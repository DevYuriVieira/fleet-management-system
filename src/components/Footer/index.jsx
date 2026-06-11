import React from 'react';
import { FaGithub, FaCar } from 'react-icons/fa';
import {
  FooterContainer,
  FooterGrid,
  FooterColumn,
  FooterBottom,
  SocialLink
} from './style';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const integrantes = [
    { name: 'Arthur Carvalho', github: 'https://github.com/TutuCarvalho' },
    { name: 'Jhonata Raibolt', github: 'https://github.com/jhonataraibolt' },
    { name: 'Leilton Braga', github: 'https://github.com/LeiltonBraga' },
    { name: 'Yuri Vieira', github: 'https://github.com/DevYuriVieira' },
    { name: 'Lucas Alves', github: 'https://github.com/usuario5' },
    { name: 'Romulo Evangelista', github: 'https://github.com/RomuloSEvangelista' },
  ];

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <div className="logo-area">
            <FaCar size={24} color="#00b37e" />
            <h3>FrotaControl</h3>
          </div>
          <p>
            Gestão eficiente de frotas comerciais e controle inteligente de
            custos automotivos com base na tabela FIPE.
          </p>
          <span>Teresópolis - RJ</span>
        </FooterColumn>

        <FooterColumn>
          <h4>Navegação</h4>
          <a href="/">Início</a>
          <a href="/manutencoes">Manutenções</a>
          <a href="/custos">Custos</a>
          <a href="/alertas">Alertas</a>
        </FooterColumn>

        <FooterColumn>
          <h4>Atendimento</h4>
          <a href="#ajuda">Central de Ajuda</a>
          <a href="#termos">Políticas de Uso</a>
          <a href="#suporte">Suporte Técnico</a>
          <p className="hours">Terça a Sábado - 09h às 19h</p>
        </FooterColumn>

        <FooterColumn>
          <h4>Desenvolvedores</h4>
          {integrantes.map((membro, index) => (
            <SocialLink
              key={index}
              href={membro.github}
              target="_blank"
              rel="noopener noreferrer"
              title={`Acessar GitHub de ${membro.name}`}
            >
              <FaGithub size={16} />
              {membro.name}
            </SocialLink>
          ))}
        </FooterColumn>
      </FooterGrid>

      <FooterBottom>
        <p>&copy; {currentYear} FrotaControl. Todos os direitos reservados.</p>
        <div className="badges">
          <span>⚡ React</span>
          <span>💅 Styled</span>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
}
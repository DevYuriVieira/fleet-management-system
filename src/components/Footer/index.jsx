import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { 
  FooterContainer, 
  FooterContent, 
  CopyrightArea,
  TeamList, 
  TeamMember 
} from './styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  
  const integrantes = [
    { name: 'Arthur Carvalho', github: 'https://github.com/seu-usuario' },
    { name: 'Jhonata Raibolt', github: 'https://github.com/usuario2' },
    { name: 'Leilton', github: 'https://github.com/usuario3' },
    { name: 'Yuri', github: 'https://github.com/usuario4' },
    { name: 'Lucas Alves', github: 'https://github.com/usuario5' },
    { name: 'Romulo Evangelista', github: 'https://github.com/usuario6' },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightArea>
          <p>&copy; {currentYear} <strong>FrotaControl</strong>. Todos os direitos reservados.</p>
          <span>Gestão Inteligente de Frota Comercial</span>
        </CopyrightArea>

        <TeamList>
          <h4>Desenvolvido por:</h4>
          <ul>
            {integrantes.map((membro, index) => (
              <TeamMember key={index}>
                <span>{membro.name}</span>
                <a 
                  href={membro.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={`Acessar GitHub de ${membro.name}`}
                >
                  <FaGithub size={18} />
                </a>
              </TeamMember>
            ))}
          </ul>
        </TeamList>
      </FooterContent>
    </FooterContainer>
  );
}
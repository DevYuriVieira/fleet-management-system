import styled from "styled-components";

export const Container = styled.main`
    min-height: 100vh;
    padding: 20px;
	background-color: ${(props) => props.theme.background};
  	color: ${(props) => props.theme.text}; 
`;

export const Header = styled.section`
	text-align: center;
	margin-bottom: 32px;
`;

export const Titulo = styled.h1`
	font-size: 36px;
	color: ${(props) => props.theme.text};
	margin-bottom: 8px;
`;

export const Subtitulo = styled.p`
	font-size: 16px;
	color: ${(props) => props.theme.text};
`;

export const ResultadoTexto = styled.p`
	text-align: center;
	font-size: 16px;
	color: ${(props) => props.theme.text};
	margin-bottom: 24px;
	font-weight: 600;
`;

export const ListaVeiculos = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	justify-content: center;
`;

export const CardTemporario = styled.div`
	width: 280px;
  	background-color: ${(props) => props.theme.surface};
  	color: ${(props) => props.theme.text};
	border-radius: 14px;
	padding: 20px;
	border: 1px solid ${(props) => props.theme.border};
	box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
	border-left: 5px solid ${(props) => props.theme.primary};
`;

export const NomeVeiculo = styled.h2`
	font-size: 20px;
  	color: ${(props) => props.theme.text};
	margin-bottom: 12px;
`;

export const InfoVeiculo = styled.p`
	font-size: 14px;
  	color: ${(props) => props.theme.text};
	opacity: 0.85;
  	margin: 6px 0;

  	strong {
 		color: ${(props) => props.theme.primary};
  	}
`;

export const MensagemVazia = styled.p`
	text-align: center;
	font-size: 18px;
  	color: ${(props) => props.theme.text};
  	opacity: 0.75;
	margin-top: 40px;
`;
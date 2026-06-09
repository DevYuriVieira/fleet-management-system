import styled from "styled-components";

export const Container = styled.main`
    min-height: 100vh;
    padding: 20px;
	background-color: #0F172A; 
`;

export const Header = styled.section`
	text-align: center;
	margin-bottom: 32px;
`;

export const Titulo = styled.h1`
	font-size: 36px;
	color: #1D4ED8;
	margin-bottom: 8px;
`;

export const Subtitulo = styled.p`
	font-size: 16px;
	color: #14B8A6;
`;

export const ResultadoTexto = styled.p`
	text-align: center;
	font-size: 16px;
	color: #2563EB;
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
	background-color: #1E293B;
	border-radius: 14px;
	padding: 20px;
	box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
	border-left: 5px solid #2563EB;
`;

export const NomeVeiculo = styled.h2`
	font-size: 20px;
	color: #F8FAFC;
`;

export const InfoVeiculo = styled.p`
	font-size: 14px;
	color: #CBD5E1;
	margin: 6px 0;
`;

export const MensagemVazia = styled.p`
	text-align: center;
	font-size: 18px;
	color: #14B8A6;
	margin-top: 40px;
`;
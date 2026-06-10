import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 32px;
`;

export const GrupoFiltro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.text};
`;

export const Select = styled.select`
    min-width: 180px;
    padding: 12px 14px;
    border-radius: 10px;
  	border: 1px solid ${(props) => props.theme.border};
  	background-color: ${(props) => props.theme.surface};
  	color: ${(props) => props.theme.text};
    font-size: 15px;
    outline: none;
    cursor: pointer;

    &:focus {
    		border-color: ${(props) => props.theme.primary};
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
`;

export const BotaoLimpar = styled.button`
    padding: 12px 18px;
    border-radius: 10px;
    border: none;
    border-color: ${(props) => props.theme.primary};
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }
`;
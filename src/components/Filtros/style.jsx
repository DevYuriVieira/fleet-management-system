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
    color: #1D4ED8;
`;

export const Select = styled.select`
    min-width: 180px;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #E5E7EB;
    background-color: #111827;
    color: #2563EB;
    font-size: 15px;
    outline: none;
    cursor: pointer;

    &:focus {
        border-color: #2563eB;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
`;

export const BotaoLimpar = styled.button`
    padding: 12px 18px;
    border-radius: 10px;
    border: none;
    background-color: #2563EB;
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
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
`;

export const InputBusca = styled.input`
  width: 100%;
  max-width: 520px;
  padding: 14px 18px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.border};
  font-size: 16px;
  outline: none;
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

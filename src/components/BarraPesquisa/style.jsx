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
  border: 1px solid #d0d5dd;
  font-size: 16px;
  outline: none;
  background-color: #ffffff;
  color: #1f2937;

  &::placeholder {
    color: #98a2b3;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

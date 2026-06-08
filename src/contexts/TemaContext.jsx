import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Tema';
import GlobalStyles from '../styles/GlobalStyle';

export const TemaContext = createContext();

export const ProvedorTema = ({ children }) => {
  const [tema, setTema] = useState('dark'); //esta iniciando no tema escuro

  const alternarTema = () => {
    setTema((temaAnterior) => (temaAnterior === 'light' ? 'dark' : 'light'));
  };

  const temaAtual = tema === 'light' ? lightTheme : darkTheme;

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      <StyledThemeProvider theme={temaAtual}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </TemaContext.Provider>
  );
};
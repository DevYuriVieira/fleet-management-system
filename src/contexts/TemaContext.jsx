import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Tema';
import GlobalStyles from '../styles/GlobalStyles';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); //esta iniciando no tema escuro

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
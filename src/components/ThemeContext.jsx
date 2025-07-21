import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3c998d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#a7d9b9',
      contrastText: '#000',
    },
    background: {
      default: '#f4f6f8',
      paper: '#fff',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: '"Cairo", sans-serif',
    h4: {
      fontSize: '1.8rem',
      '@media (max-width:600px)': {
        fontSize: '1.4rem',
      },
      '@media (max-width:400px)': {
        fontSize: '1.2rem',
      },
    },
    h6: {
      fontSize: '1.1rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
      '@media (max-width:400px)': {
        fontSize: '0.8rem',
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export const ThemeContextProvider = ({ children }) => {
  // لا نحتاج لـ useState أو toggleColorMode بعد الآن
  const mode = 'light'; // الوضع ثابت على 'light'

  const theme = useMemo(() => lightTheme, []); // الثيم ثابت على lightTheme

  return (
    <ThemeContext.Provider value={{ mode }}> {/* لا نمرر toggleColorMode بعد الآن */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
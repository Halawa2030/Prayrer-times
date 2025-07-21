

import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

const commonTypography = {
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
};

const commonComponents = {
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
};

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
  typography: commonTypography,
  components: commonComponents,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3c998d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#a7d9b9',
      contrastText: '#000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#fff',
      secondary: '#aaa',
    },
  },
  typography: commonTypography,
  components: {
    ...commonComponents,
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)', // ظل أغمق للدارك مود
        },
      },
    },
  },
});

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // إعادة تفعيل الـ useState للوضع

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}> {/* إعادة تمرير toggleColorMode */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
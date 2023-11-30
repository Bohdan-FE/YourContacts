import { createTheme } from '@mui/material';
import Lato from '../fonts/Lato-Regular.ttf';
import { ThemeProvider } from '@mui/material';
// import { useMemo } from 'react';

const ligthPalette = {
  primary: {
    main: '#F98404',
  },
  input: '#F98404',
  bgcolor: 'rgb(253 247 236 / 39%)',
};

const darkPalette = {
  primary: {
    main: '#2f023e',
  },
  text: {
    primary: '#ffffff',
  },
  input: '#ffffff',
  background: {
    default: '#250031',
    paper: '#000000bf',
  },
  bgDark: '#000000',
};

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light' ? ligthPalette : darkPalette),
  },

  shape: {
    borderRadius: 30,
  },

  typography: {
    body1: {
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '1.1rem',
    },
    fontFamily: 'Lato',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Lato'), local('Lato-Regular'), url(${Lato}) format('ttf');  
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'text' && {
            width: '100%',
            maxWidth: '150px',
            color: 'white',
            p: '8px, 22px',
            border: '1px solid white',
          }),
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          ...(mode === 'light' && { borderColor: '#0000007a' }),
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        elevation8: {
          ...(mode === 'light'
            ? {
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
              }
            : {
                boxShadow:
                  'rgb(108 103 108 / 25%) 0px 14px 28px, rgb(153 79 79 / 22%) 0px 10px 10px',
              }),
        },
      },
    },
  },
});

function Theme({ children }) {
  const theme = createTheme(getDesignTokens('light'));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

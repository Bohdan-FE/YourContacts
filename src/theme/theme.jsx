import { createTheme } from '@mui/material';
import Lato from '../fonts/Lato-Regular.ttf';
import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { themeSelector } from 'redux/selectors';
import { useMemo } from 'react';

const ligthPalette = {
  primary: {
    main: '#F98404',
  },
  input: '#F98404',
  background: {
    paper: 'rgb(231 222 207 / 39%)',
    container: 'rgb(245 238 227 / 39%)',
  },
  text: {
    primary: '#000000',
  },
  bgDark: '#ffffff',
  borderBottom: '1px solid rgb(0 0 0 / 27%)',
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
    paper: '#0e0d0d',
    container: '#1d1b1b',
  },
  bgDark: '#080808;',
  borderBottom: '1px solid rgb(174 149 149 / 56%)',
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
        input: {
          ...(mode === 'dark' && {
            ':-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #131e26 inset !important',
            },
          }),
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
                  'rgb(18 24 22 / 32%) 0px 14px 28px, rgb(46 8 82 / 22%) 0px 10px 10px;',
              }),
        },
      },
    },
  },
});

function Theme({ children }) {
  const themeMode = useSelector(themeSelector);
  const theme = useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );
  console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;

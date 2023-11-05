import { createTheme } from '@mui/material';
import Lato from '../fonts/Lato-Regular.ttf';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F98404',
    },
    secondary: {
      main: '#f50057',
    },
  },
  shape: {
    borderRadius: 10,
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
  },
});

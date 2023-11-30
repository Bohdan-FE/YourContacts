import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Provider } from "react-redux";
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {theme} from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
          <App />
          </BrowserRouter>
        </ThemeProvider>
     </PersistGate> 
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import './index.css';
import App from './components/App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DB7093'
    },
    secondary: {
      main: '#FF69B4'
    }
  
  }
});


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
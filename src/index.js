
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles/App.css';
// import './styles/Theme.css';
// import './components/LandingPage.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/Theme.css'; // Custom CSS for colors and global styles
import './styles/App.css'; // Additional app-wide styles

// Define Material-UI theme with the custom color palette
const theme = createTheme({
  palette: {
    primary: { main: '#133E87' }, // Steel Blue
    secondary: { main: '#608BC1' }, // Coral
    background: { default: '#F9FAFB' }, // Off White
    accent: { main: '#CBDCEB' }, // Golden Yellow
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the app in Material-UI's ThemeProvider
root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline applies Material-UI's global styles */}
    <CssBaseline />
    <App />
  </ThemeProvider>
);

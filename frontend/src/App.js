import ComparisonPage from './pages/ComparisonPage';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ComparisonPage />
    </ThemeProvider>
  );
}

export default App;

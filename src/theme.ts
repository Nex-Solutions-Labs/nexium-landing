import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2ff',
      light: '#33f4ff',
      dark: '#00a9b3',
    },
    secondary: {
      main: '#7000ff',
      light: '#8c33ff',
      dark: '#4e00b3',
    },
    background: {
      default: '#0a0a0a',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    body1: {
      fontSize: '1.125rem',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          padding: '10px 24px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme; 
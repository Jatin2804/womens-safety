/**
 * MUI theme for Women's Safety & Community
 * Soft purple, pink, white - safety-focused palette
 */
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#7B1FA2', // Soft purple
      light: '#AE52D4',
      dark: '#4A148C',
    },
    secondary: {
      main: '#EC407A', // Soft pink
      light: '#F48FB1',
      dark: '#C2185B',
    },
    background: {
      default: '#FAF5FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D1B4E',
      secondary: '#5E4A6E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: 4,
          },
          transition: 'transform 0.2s, box-shadow 0.2s',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(123, 31, 162, 0.08)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(123, 31, 162, 0.12)',
          },
          transition: 'box-shadow 0.3s ease',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:before': { display: 'none' },
          borderRadius: '12px !important',
          marginBottom: 8,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(123, 31, 162, 0.06)',
        },
      },
    },
  },
});

// src/styles/theme.js

export const theme = {
  colors: {
    // Primary colors - light blue theme
    primary: {
      light: '#E1F5FE',      // Very light blue for backgrounds
      main: '#29B6F6',       // Main brand blue
      dark: '#0277BD',       // Darker blue for emphasis
      contrastText: '#FFFFFF',
    },
    // Secondary colors
    secondary: {
      light: '#BBDEFB',
      main: '#2196F3',
      dark: '#1565C0',
      contrastText: '#FFFFFF',
    },
    // Accent colors
    accent: {
      light: '#B3E5FC',
      main: '#03A9F4',
      dark: '#01579B',
    },
    // Grey scale
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    // Utility colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    background: {
      default: '#FFFFFF',
      paper: '#F8FDFF', // Light blue tint
      accent: '#E1F5FE',
    },
    text: {
      primary: '#333333',
      secondary: '#757575',
      disabled: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  spacing: {
    unit: 8,
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.12)',
    large: '0 8px 24px rgba(0, 0, 0, 0.16)',
  },
};

export default theme;

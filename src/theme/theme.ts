// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

export const theme = createTheme({
  direction: 'rtl',
  cssVariables: true,

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1536,
    },
  },

  palette: {
    primary: { main: '#17B890', dark: '#0F9A77', contrastText: '#FFFFFF' },
    text: { primary: '#14212B', secondary: '#5C6975' },
    background: { default: '#F7FAFF' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'var(--font-main), Tahoma, sans-serif',
    button: { fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { html: { scrollBehavior: 'smooth' } },
    },
    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: ({ theme }) => ({
          maxWidth: 1344,
          [theme.breakpoints.up('md')]: { paddingInline: 32 },
        }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '0 24px 0 12px',
          minHeight: 48,
          lineHeight: 1,
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 700,
            borderRadius: 999,
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(120deg, #2ECC8F 0%, #1FC8B8 45%, #17BFE0 100%)',
            boxShadow: '0 4px 14px rgba(31, 200, 184, 0.35)',
            transition: 'box-shadow .25s ease, filter .25s ease, transform .25s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-40%',
              right: '-10%',
              width: '65%',
              height: '130%',
              borderRadius: '50%',
              background:
                'radial-gradient(closest-side, rgba(255,255,255,0.42), rgba(255,255,255,0))',
              pointerEvents: 'none',
            },
            '&:hover': {
              background: 'linear-gradient(120deg, #2ECC8F 0%, #1FC8B8 45%, #17BFE0 100%)',
              boxShadow: '0 6px 18px rgba(31, 200, 184, 0.45)',
              filter: 'brightness(1.04)',
            },
            '&:active': { transform: 'translateY(1px)' },
            '&:focus-visible': { outline: '2px solid #0F9A77', outlineOffset: 3 },
            '& .MuiButton-startIcon': {
              margin: 0,
              position: 'relative',
              zIndex: 1,
            },
          },
        },
      ],
    },
  },
});

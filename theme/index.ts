import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const veeduConfig = defineConfig({
  cssVarsRoot: ':where(:root, :host)',
  globalCss: {
    'html, body': {
      minHeight: '100%',
      scrollBehavior: 'smooth',
      backgroundColor: '#f7fafc',
    },
    body: {
      color: '#1f2933',
    },
    '#__next': {
      minHeight: '100%',
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value:
            'var(--font-body, "Inter", "Segoe UI", system-ui, -apple-system, sans-serif)',
        },
        body: {
          value:
            'var(--font-body, "Inter", "Segoe UI", system-ui, -apple-system, sans-serif)',
        },
      },
      colors: {
        brand: {
          50: { value: '#edf9ff' },
          100: { value: '#d6ecff' },
          200: { value: '#b0d7ff' },
          300: { value: '#7cbaff' },
          400: { value: '#4697ff' },
          500: { value: '#1b76ff' },
          600: { value: '#0f5fe6' },
          700: { value: '#0849b4' },
          800: { value: '#063884' },
          900: { value: '#042654' },
        },
        gray: {
          50: { value: '#f7fafc' },
          100: { value: '#edf2f7' },
          200: { value: '#e2e8f0' },
          300: { value: '#cbd5f5' },
          400: { value: '#a0aec0' },
          500: { value: '#718096' },
          600: { value: '#4a5568' },
          700: { value: '#2d3748' },
          800: { value: '#1a202c' },
          900: { value: '#171923' },
        },
      },
    },
  },
});

export const theme = createSystem(defaultConfig, veeduConfig);
export type AppTheme = typeof theme;
export default theme;

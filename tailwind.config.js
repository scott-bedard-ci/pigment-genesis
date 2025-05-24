/** @type {import('tailwindcss').Config} */
import { tokens } from './src/tokens/index.js';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // Design tokens from Figma will be automatically inserted here
      colors: {
        // Primary colors (will be populated from Figma design tokens)
        primary: {
          50: 'rgb(var(--pigment-primary-50) / <alpha-value>)',
          100: 'rgb(var(--pigment-primary-100) / <alpha-value>)',
          200: 'rgb(var(--pigment-primary-200) / <alpha-value>)',
          300: 'rgb(var(--pigment-primary-300) / <alpha-value>)',
          400: 'rgb(var(--pigment-primary-400) / <alpha-value>)',
          500: 'rgb(var(--pigment-primary-500) / <alpha-value>)',
          600: 'rgb(var(--pigment-primary-600) / <alpha-value>)',
          700: 'rgb(var(--pigment-primary-700) / <alpha-value>)',
          800: 'rgb(var(--pigment-primary-800) / <alpha-value>)',
          900: 'rgb(var(--pigment-primary-900) / <alpha-value>)',
          950: 'rgb(var(--pigment-primary-950) / <alpha-value>)'
        },
        // Secondary colors (will be populated from Figma design tokens)
        secondary: {
          50: 'rgb(var(--pigment-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--pigment-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--pigment-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--pigment-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--pigment-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--pigment-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--pigment-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--pigment-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--pigment-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--pigment-secondary-900) / <alpha-value>)',
          950: 'rgb(var(--pigment-secondary-950) / <alpha-value>)'
        },
        // Semantic colors (will be populated from Figma design tokens)
        success: {
          50: 'rgb(var(--pigment-success-50) / <alpha-value>)',
          500: 'rgb(var(--pigment-success-500) / <alpha-value>)',
          900: 'rgb(var(--pigment-success-900) / <alpha-value>)'
        },
        warning: {
          50: 'rgb(var(--pigment-warning-50) / <alpha-value>)',
          500: 'rgb(var(--pigment-warning-500) / <alpha-value>)',
          900: 'rgb(var(--pigment-warning-900) / <alpha-value>)'
        },
        error: {
          50: 'rgb(var(--pigment-error-50) / <alpha-value>)',
          500: 'rgb(var(--pigment-error-500) / <alpha-value>)',
          900: 'rgb(var(--pigment-error-900) / <alpha-value>)'
        }
      },
      spacing: {
        // Custom spacing from Figma design tokens
        'xs': 'var(--pigment-spacing-xs)',
        'sm': 'var(--pigment-spacing-sm)',
        'md': 'var(--pigment-spacing-md)',
        'lg': 'var(--pigment-spacing-lg)',
        'xl': 'var(--pigment-spacing-xl)',
        '2xl': 'var(--pigment-spacing-2xl)',
        '3xl': 'var(--pigment-spacing-3xl)'
      },
      fontSize: {
        // Typography from Figma design tokens
        'heading-xl': ['var(--pigment-font-size-heading-xl)', { lineHeight: 'var(--pigment-line-height-heading-xl)' }],
        'heading-lg': ['var(--pigment-font-size-heading-lg)', { lineHeight: 'var(--pigment-line-height-heading-lg)' }],
        'heading-md': ['var(--pigment-font-size-heading-md)', { lineHeight: 'var(--pigment-line-height-heading-md)' }],
        'heading-sm': ['var(--pigment-font-size-heading-sm)', { lineHeight: 'var(--pigment-line-height-heading-sm)' }],
        'body-lg': ['var(--pigment-font-size-body-lg)', { lineHeight: 'var(--pigment-line-height-body-lg)' }],
        'body-md': ['var(--pigment-font-size-body-md)', { lineHeight: 'var(--pigment-line-height-body-md)' }],
        'body-sm': ['var(--pigment-font-size-body-sm)', { lineHeight: 'var(--pigment-line-height-body-sm)' }],
        'caption': ['var(--pigment-font-size-caption)', { lineHeight: 'var(--pigment-line-height-caption)' }]
      },
      fontFamily: {
        // Custom fonts from Figma design tokens
        'heading': ['var(--pigment-font-family-heading)', 'ui-sans-serif', 'system-ui'],
        'body': ['var(--pigment-font-family-body)', 'ui-sans-serif', 'system-ui'],
        'mono': ['var(--pigment-font-family-mono)', 'ui-monospace', 'monospace']
      },
      borderRadius: {
        // Border radius from Figma design tokens
        'xs': 'var(--pigment-border-radius-xs)',
        'sm': 'var(--pigment-border-radius-sm)',
        'md': 'var(--pigment-border-radius-md)',
        'lg': 'var(--pigment-border-radius-lg)',
        'xl': 'var(--pigment-border-radius-xl)'
      },
      boxShadow: {
        // Shadows from Figma design tokens
        'sm': 'var(--pigment-shadow-sm)',
        'md': 'var(--pigment-shadow-md)',
        'lg': 'var(--pigment-shadow-lg)',
        'xl': 'var(--pigment-shadow-xl)'
      },
      screens: {
        // Responsive breakpoints (mobile-first)
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: []
};
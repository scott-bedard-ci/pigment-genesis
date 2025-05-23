import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  
  // Brand information
  brandTitle: 'Pigment-Genesis Design System',
  brandUrl: 'https://github.com/customink/pigment-genesis',
  brandImage: undefined, // Add CustomInk logo URL here when available
  brandTarget: '_self',

  // Colors
  colorPrimary: '#6366f1', // Primary-500 from design tokens
  colorSecondary: '#d946ef', // Secondary-500 from design tokens

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb', // Gray-200 from design tokens
  appBorderRadius: 8,

  // Typography
  fontBase: '"CustomInk-Regular", "Inter", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Text colors
  textColor: '#1f2937', // Gray-800 from design tokens
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#6b7280', // Gray-500 from design tokens
  barSelectedColor: '#6366f1', // Primary-500 from design tokens
  barBg: '#f9fafb', // Gray-50 from design tokens

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d1d5db', // Gray-300 from design tokens
  inputTextColor: '#1f2937', // Gray-800 from design tokens
  inputBorderRadius: 8,
});
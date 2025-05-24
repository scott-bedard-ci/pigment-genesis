import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Pigment Genesis Design System',
  brandUrl: 'https://customink.github.io/pigment-genesis',
  brandImage: undefined, // Add CustomInk logo URL when available
  brandTarget: '_self',

  colorPrimary: '#3b82f6', // Will be updated with actual primary color from Figma
  colorSecondary: '#a855f7', // Will be updated with actual secondary color from Figma

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 6,

  // Text colors
  textColor: '#1f2937',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#6b7280',
  barSelectedColor: '#3b82f6',
  barBg: '#f9fafb',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d1d5db',
  inputTextColor: '#1f2937',
  inputBorderRadius: 6,
});
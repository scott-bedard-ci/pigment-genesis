/**
 * Icon Design Tokens
 * Extracted from Figma icon library
 */

export const iconTokens = {
  sizes: {
    xs: '12px',   // Extra small icons
    sm: '16px',   // Small icons  
    md: '20px',   // Medium icons (default)
    lg: '24px',   // Large icons
    xl: '32px',   // Extra large icons
    xxl: '48px',  // Extra extra large icons
  },
  
  colors: {
    primary: 'currentColor',     // Inherits from parent text color
    secondary: 'rgb(0 0 0 / 0.57)', // Subtle icon color
    disabled: 'rgb(0 0 0 / 0.28)',  // Disabled state
    inverse: '#ffffff',          // White for dark backgrounds
    danger: '#da1e28',           // Error/danger icons
    warning: '#f1c21b',          // Warning icons
    success: '#24a148',          // Success icons
    info: '#0f62fe',             // Info icons
  },
  
  spacing: {
    none: '0px',
    xs: '2px',
    sm: '4px', 
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
} as const;

export type IconSize = keyof typeof iconTokens.sizes;
export type IconColor = keyof typeof iconTokens.colors;
export type IconSpacing = keyof typeof iconTokens.spacing;
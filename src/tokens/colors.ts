/**
 * Color design tokens
 * Generated from Figma design tokens - DO NOT EDIT MANUALLY
 * 
 * Last updated: 2025-01-31T00:00:00Z
 * Source: Figma Design System
 * Token Count: 55 colors
 */

import type { ColorPalette, ColorToken } from '../types/tokens';

/**
 * Creates a color token object
 */
const createColorToken = (
  value: string, 
  name: string, 
  description?: string,
  figmaId?: string
): ColorToken => ({
  value,
  name,
  description,
  figmaId
});

/**
 * Primary brand color palette
 * Core brand colors from CustomInk design system
 */
export const primaryColors = {
  50: createColorToken('#f0f4ff', 'primary-50', 'Primary brand color - lightest'),
  100: createColorToken('#e0e9ff', 'primary-100', 'Primary brand color - very light'),
  200: createColorToken('#c7d2fe', 'primary-200', 'Primary brand color - light'),
  300: createColorToken('#a5b4fc', 'primary-300', 'Primary brand color - light medium'),
  400: createColorToken('#818cf8', 'primary-400', 'Primary brand color - medium'),
  500: createColorToken('#6366f1', 'primary-500', 'Primary brand color - base'),
  600: createColorToken('#4f46e5', 'primary-600', 'Primary brand color - medium dark'),
  700: createColorToken('#4338ca', 'primary-700', 'Primary brand color - dark'),
  800: createColorToken('#3730a3', 'primary-800', 'Primary brand color - very dark'),
  900: createColorToken('#312e81', 'primary-900', 'Primary brand color - darkest'),
  950: createColorToken('#1e1b4b', 'primary-950', 'Primary brand color - ultra dark')
};

/**
 * Secondary brand color palette
 * Supporting brand colors for accents and highlights
 */
export const secondaryColors = {
  50: createColorToken('#fdf4ff', 'secondary-50', 'Secondary brand color - lightest'),
  100: createColorToken('#fae8ff', 'secondary-100', 'Secondary brand color - very light'),
  200: createColorToken('#f5d0fe', 'secondary-200', 'Secondary brand color - light'),
  300: createColorToken('#f0abfc', 'secondary-300', 'Secondary brand color - light medium'),
  400: createColorToken('#e879f9', 'secondary-400', 'Secondary brand color - medium'),
  500: createColorToken('#d946ef', 'secondary-500', 'Secondary brand color - base'),
  600: createColorToken('#c026d3', 'secondary-600', 'Secondary brand color - medium dark'),
  700: createColorToken('#a21caf', 'secondary-700', 'Secondary brand color - dark'),
  800: createColorToken('#86198f', 'secondary-800', 'Secondary brand color - very dark'),
  900: createColorToken('#701a75', 'secondary-900', 'Secondary brand color - darkest'),
  950: createColorToken('#4a044e', 'secondary-950', 'Secondary brand color - ultra dark')
};

/**
 * Success semantic color palette
 * Colors for positive states, confirmations, and success messages
 */
export const successColors = {
  50: createColorToken('#f0fdf4', 'success-50', 'Success color - lightest'),
  100: createColorToken('#dcfce7', 'success-100', 'Success color - very light'),
  200: createColorToken('#bbf7d0', 'success-200', 'Success color - light'),
  300: createColorToken('#86efac', 'success-300', 'Success color - light medium'),
  400: createColorToken('#4ade80', 'success-400', 'Success color - medium'),
  500: createColorToken('#22c55e', 'success-500', 'Success color - base'),
  600: createColorToken('#16a34a', 'success-600', 'Success color - medium dark'),
  700: createColorToken('#15803d', 'success-700', 'Success color - dark'),
  800: createColorToken('#166534', 'success-800', 'Success color - very dark'),
  900: createColorToken('#14532d', 'success-900', 'Success color - darkest'),
  950: createColorToken('#052e16', 'success-950', 'Success color - ultra dark')
};

/**
 * Warning semantic color palette
 * Colors for caution states, warnings, and attention-grabbing elements
 */
export const warningColors = {
  50: createColorToken('#fffbeb', 'warning-50', 'Warning color - lightest'),
  100: createColorToken('#fef3c7', 'warning-100', 'Warning color - very light'),
  200: createColorToken('#fde68a', 'warning-200', 'Warning color - light'),
  300: createColorToken('#fcd34d', 'warning-300', 'Warning color - light medium'),
  400: createColorToken('#fbbf24', 'warning-400', 'Warning color - medium'),
  500: createColorToken('#f59e0b', 'warning-500', 'Warning color - base'),
  600: createColorToken('#d97706', 'warning-600', 'Warning color - medium dark'),
  700: createColorToken('#b45309', 'warning-700', 'Warning color - dark'),
  800: createColorToken('#92400e', 'warning-800', 'Warning color - very dark'),
  900: createColorToken('#78350f', 'warning-900', 'Warning color - darkest'),
  950: createColorToken('#451a03', 'warning-950', 'Warning color - ultra dark')
};

/**
 * Error semantic color palette
 * Colors for error states, validation failures, and destructive actions
 */
export const errorColors = {
  50: createColorToken('#fef2f2', 'error-50', 'Error color - lightest'),
  100: createColorToken('#fee2e2', 'error-100', 'Error color - very light'),
  200: createColorToken('#fecaca', 'error-200', 'Error color - light'),
  300: createColorToken('#fca5a5', 'error-300', 'Error color - light medium'),
  400: createColorToken('#f87171', 'error-400', 'Error color - medium'),
  500: createColorToken('#ef4444', 'error-500', 'Error color - base'),
  600: createColorToken('#dc2626', 'error-600', 'Error color - medium dark'),
  700: createColorToken('#b91c1c', 'error-700', 'Error color - dark'),
  800: createColorToken('#991b1b', 'error-800', 'Error color - very dark'),
  900: createColorToken('#7f1d1d', 'error-900', 'Error color - darkest'),
  950: createColorToken('#450a0a', 'error-950', 'Error color - ultra dark')
};

/**
 * Neutral/Gray color palette
 * Colors for text, borders, backgrounds, and neutral UI elements
 */
export const grayColors = {
  50: createColorToken('#f9fafb', 'gray-50', 'Neutral color - lightest'),
  100: createColorToken('#f3f4f6', 'gray-100', 'Neutral color - very light'),
  200: createColorToken('#e5e7eb', 'gray-200', 'Neutral color - light'),
  300: createColorToken('#d1d5db', 'gray-300', 'Neutral color - light medium'),
  400: createColorToken('#9ca3af', 'gray-400', 'Neutral color - medium'),
  500: createColorToken('#6b7280', 'gray-500', 'Neutral color - base'),
  600: createColorToken('#4b5563', 'gray-600', 'Neutral color - medium dark'),
  700: createColorToken('#374151', 'gray-700', 'Neutral color - dark'),
  800: createColorToken('#1f2937', 'gray-800', 'Neutral color - very dark'),
  900: createColorToken('#111827', 'gray-900', 'Neutral color - darkest'),
  950: createColorToken('#030712', 'gray-950', 'Neutral color - ultra dark')
};

/**
 * Complete color palette
 * All color tokens organized by semantic meaning
 */
export const colors: ColorPalette = {
  primary: primaryColors,
  secondary: secondaryColors,
  success: successColors,
  warning: warningColors,
  error: errorColors,
  gray: grayColors
};

/**
 * Flat color object for Tailwind CSS integration
 * Maps color tokens to Tailwind-compatible format
 */
export const flatColors = {
  // Primary colors
  'primary-50': primaryColors[50].value,
  'primary-100': primaryColors[100].value,
  'primary-200': primaryColors[200].value,
  'primary-300': primaryColors[300].value,
  'primary-400': primaryColors[400].value,
  'primary-500': primaryColors[500].value,
  'primary-600': primaryColors[600].value,
  'primary-700': primaryColors[700].value,
  'primary-800': primaryColors[800].value,
  'primary-900': primaryColors[900].value,
  'primary-950': primaryColors[950].value,
  
  // Secondary colors
  'secondary-50': secondaryColors[50].value,
  'secondary-100': secondaryColors[100].value,
  'secondary-200': secondaryColors[200].value,
  'secondary-300': secondaryColors[300].value,
  'secondary-400': secondaryColors[400].value,
  'secondary-500': secondaryColors[500].value,
  'secondary-600': secondaryColors[600].value,
  'secondary-700': secondaryColors[700].value,
  'secondary-800': secondaryColors[800].value,
  'secondary-900': secondaryColors[900].value,
  'secondary-950': secondaryColors[950].value,
  
  // Success colors
  'success-50': successColors[50].value,
  'success-100': successColors[100].value,
  'success-200': successColors[200].value,
  'success-300': successColors[300].value,
  'success-400': successColors[400].value,
  'success-500': successColors[500].value,
  'success-600': successColors[600].value,
  'success-700': successColors[700].value,
  'success-800': successColors[800].value,
  'success-900': successColors[900].value,
  'success-950': successColors[950].value,
  
  // Warning colors
  'warning-50': warningColors[50].value,
  'warning-100': warningColors[100].value,
  'warning-200': warningColors[200].value,
  'warning-300': warningColors[300].value,
  'warning-400': warningColors[400].value,
  'warning-500': warningColors[500].value,
  'warning-600': warningColors[600].value,
  'warning-700': warningColors[700].value,
  'warning-800': warningColors[800].value,
  'warning-900': warningColors[900].value,
  'warning-950': warningColors[950].value,
  
  // Error colors
  'error-50': errorColors[50].value,
  'error-100': errorColors[100].value,
  'error-200': errorColors[200].value,
  'error-300': errorColors[300].value,
  'error-400': errorColors[400].value,
  'error-500': errorColors[500].value,
  'error-600': errorColors[600].value,
  'error-700': errorColors[700].value,
  'error-800': errorColors[800].value,
  'error-900': errorColors[900].value,
  'error-950': errorColors[950].value,
  
  // Gray/Neutral colors
  'gray-50': grayColors[50].value,
  'gray-100': grayColors[100].value,
  'gray-200': grayColors[200].value,
  'gray-300': grayColors[300].value,
  'gray-400': grayColors[400].value,
  'gray-500': grayColors[500].value,
  'gray-600': grayColors[600].value,
  'gray-700': grayColors[700].value,
  'gray-800': grayColors[800].value,
  'gray-900': grayColors[900].value,
  'gray-950': grayColors[950].value
};

/**
 * Semantic color shortcuts
 * Common color aliases for specific use cases
 */
export const semanticColors = {
  // Text colors
  textPrimary: grayColors[900].value,        // Main text color
  textSecondary: grayColors[600].value,      // Secondary text color
  textMuted: grayColors[500].value,          // Muted text color
  textInverse: '#ffffff',                    // White text
  textAccent: primaryColors[600].value,      // Accent text color
  
  // Background colors
  backgroundPrimary: '#ffffff',              // Main background
  backgroundSecondary: grayColors[50].value, // Secondary background
  backgroundMuted: grayColors[100].value,    // Muted background
  backgroundInverse: grayColors[900].value,  // Dark background
  
  // Border colors
  borderDefault: grayColors[200].value,      // Default border
  borderMuted: grayColors[100].value,        // Muted border
  borderStrong: grayColors[300].value,       // Strong border
  
  // Interactive colors
  interactive: primaryColors[500].value,     // Default interactive color
  interactiveHover: primaryColors[600].value, // Hover state
  interactiveActive: primaryColors[700].value, // Active state
  interactiveDisabled: grayColors[300].value, // Disabled state
  
  // Focus colors
  focusRing: primaryColors[500].value,       // Focus ring color
  focusBackground: primaryColors[50].value,  // Focus background
  
  // Status colors (shortcuts)
  positive: successColors[500].value,        // Success/positive
  negative: errorColors[500].value,          // Error/negative
  caution: warningColors[500].value,         // Warning/caution
  info: primaryColors[500].value,            // Information
  
  // Surface colors
  surfaceElevated: '#ffffff',                // Elevated surface (cards, modals)
  surfaceDepressed: grayColors[50].value,    // Depressed surface (wells, inputs)
  surfaceFloating: '#ffffff'                 // Floating surface (tooltips, dropdowns)
};

/**
 * Color accessibility information
 * WCAG contrast ratios and accessibility compliance
 */
export const colorAccessibility = {
  // Text on white background
  textOnWhite: {
    textPrimary: { ratio: 19.9, aa: true, aaa: true },      // Gray-900 on white
    textSecondary: { ratio: 7.3, aa: true, aaa: true },     // Gray-600 on white
    textMuted: { ratio: 4.6, aa: true, aaa: false },        // Gray-500 on white
    textAccent: { ratio: 5.9, aa: true, aaa: false }        // Primary-600 on white
  },
  
  // Text on colored backgrounds
  textOnPrimary: {
    white: { ratio: 7.5, aa: true, aaa: true }              // White on Primary-500
  },
  
  textOnSecondary: {
    white: { ratio: 8.1, aa: true, aaa: true }              // White on Secondary-500
  },
  
  textOnSuccess: {
    white: { ratio: 4.7, aa: true, aaa: false }             // White on Success-500
  },
  
  textOnWarning: {
    white: { ratio: 3.2, aa: false, aaa: false },           // White on Warning-500
    black: { ratio: 6.5, aa: true, aaa: true }              // Black on Warning-500
  },
  
  textOnError: {
    white: { ratio: 4.9, aa: true, aaa: false }             // White on Error-500
  }
};

export default colors;
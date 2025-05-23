/**
 * Effect design tokens (shadows, blur, etc.)
 * Generated from Figma design tokens - DO NOT EDIT MANUALLY
 * 
 * Last updated: 2025-01-31T00:00:00Z
 * Source: Figma Design System
 * Token Count: 7 shadow levels
 */

import type { EffectScale, EffectToken } from '../types/tokens';

/**
 * Creates an effect token object
 */
const createEffectToken = (
  type: EffectToken['type'],
  blur: number,
  name: string,
  description?: string,
  x?: number,
  y?: number,
  spread?: number,
  color?: string,
  figmaId?: string
): EffectToken => {
  const shadowColor = color || 'rgb(0 0 0 / 0.1)';
  const offsetX = x || 0;
  const offsetY = y || 0;
  const spreadRadius = spread || 0;
  
  // Generate CSS box-shadow value
  let boxShadow = '';
  if (type === 'dropShadow' && blur > 0) {
    if (spreadRadius > 0) {
      boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${spreadRadius}px ${shadowColor}`;
    } else {
      boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${shadowColor}`;
    }
  } else if (type === 'dropShadow' && blur === 0) {
    boxShadow = 'none';
  }
  
  return {
    type,
    color: shadowColor,
    x: offsetX,
    y: offsetY,
    blur,
    spread: spreadRadius,
    boxShadow,
    name,
    description,
    figmaId
  };
};

/**
 * Shadow/Effect scale
 * Progressive elevation system from flat to floating
 */
export const effects: EffectScale = {
  none: createEffectToken(
    'dropShadow',
    0,
    'shadow-none',
    'No shadow - flat appearance'
  ),
  
  xs: createEffectToken(
    'dropShadow',
    2,
    'shadow-xs',
    'Extra small shadow - subtle depth',
    0,
    1,
    0,
    'rgb(0 0 0 / 0.05)'
  ),
  
  sm: createEffectToken(
    'dropShadow',
    3,
    'shadow-sm',
    'Small shadow - light elevation',
    0,
    1,
    -1,
    'rgb(0 0 0 / 0.1)'
  ),
  
  md: createEffectToken(
    'dropShadow',
    6,
    'shadow-md',
    'Medium shadow - standard elevation',
    0,
    4,
    -1,
    'rgb(0 0 0 / 0.1)'
  ),
  
  lg: createEffectToken(
    'dropShadow',
    15,
    'shadow-lg',
    'Large shadow - prominent elevation',
    0,
    10,
    -3,
    'rgb(0 0 0 / 0.1)'
  ),
  
  xl: createEffectToken(
    'dropShadow',
    25,
    'shadow-xl',
    'Extra large shadow - high elevation',
    0,
    20,
    -5,
    'rgb(0 0 0 / 0.1)'
  ),
  
  '2xl': createEffectToken(
    'dropShadow',
    50,
    'shadow-2xl',
    '2x extra large shadow - maximum elevation',
    0,
    25,
    -12,
    'rgb(0 0 0 / 0.25)'
  )
};

/**
 * Flat effects object for Tailwind CSS integration
 */
export const flatEffects = {
  'none': effects.none.boxShadow,
  'xs': effects.xs.boxShadow,
  'sm': effects.sm.boxShadow,
  'md': effects.md.boxShadow,
  'lg': effects.lg.boxShadow,
  'xl': effects.xl.boxShadow,
  '2xl': effects['2xl'].boxShadow
};

/**
 * Semantic shadow shortcuts
 * Common shadow combinations for specific use cases
 */
export const semanticShadows = {
  // Component shadows
  button: effects.sm.boxShadow,           // Button default shadow
  buttonHover: effects.md.boxShadow,      // Button hover shadow
  buttonActive: effects.xs.boxShadow,     // Button active shadow
  
  card: effects.sm.boxShadow,             // Card default shadow
  cardHover: effects.md.boxShadow,        // Card hover shadow
  cardElevated: effects.lg.boxShadow,     // Elevated card shadow
  
  input: effects.xs.boxShadow,            // Input field shadow
  inputFocus: effects.md.boxShadow,       // Input focus shadow
  
  dropdown: effects.lg.boxShadow,         // Dropdown menu shadow
  modal: effects.xl.boxShadow,            // Modal dialog shadow
  tooltip: effects.md.boxShadow,          // Tooltip shadow
  
  // Navigation shadows
  navbar: effects.sm.boxShadow,           // Navigation bar shadow
  navbarScrolled: effects.md.boxShadow,   // Navigation bar when scrolled
  sidebar: effects.lg.boxShadow,          // Sidebar shadow
  
  // Content shadows
  image: effects.sm.boxShadow,            // Image shadow
  imageHover: effects.md.boxShadow,       // Image hover shadow
  video: effects.md.boxShadow,            // Video player shadow
  
  // Floating elements
  fab: effects.lg.boxShadow,              // Floating action button
  fabHover: effects.xl.boxShadow,         // FAB hover state
  popover: effects.lg.boxShadow,          // Popover shadow
  toast: effects.md.boxShadow,            // Toast notification shadow
  
  // Surface elevations
  surfaceFlat: effects.none.boxShadow,    // Flat surface
  surfaceRaised: effects.xs.boxShadow,    // Slightly raised surface
  surfaceElevated: effects.sm.boxShadow,  // Elevated surface
  surfaceFloating: effects.md.boxShadow,  // Floating surface
  surfaceModal: effects.xl.boxShadow      // Modal surface
};

/**
 * Colored shadows for branded components
 * Shadows with brand colors for special emphasis
 */
export const coloredShadows = {
  // Primary brand shadows
  primarySoft: '0 4px 6px -1px rgb(99 102 241 / 0.1), 0 2px 4px -2px rgb(99 102 241 / 0.1)',
  primaryMedium: '0 10px 15px -3px rgb(99 102 241 / 0.1), 0 4px 6px -4px rgb(99 102 241 / 0.1)',
  primaryStrong: '0 20px 25px -5px rgb(99 102 241 / 0.1), 0 8px 10px -6px rgb(99 102 241 / 0.1)',
  
  // Secondary brand shadows
  secondarySoft: '0 4px 6px -1px rgb(217 70 239 / 0.1), 0 2px 4px -2px rgb(217 70 239 / 0.1)',
  secondaryMedium: '0 10px 15px -3px rgb(217 70 239 / 0.1), 0 4px 6px -4px rgb(217 70 239 / 0.1)',
  secondaryStrong: '0 20px 25px -5px rgb(217 70 239 / 0.1), 0 8px 10px -6px rgb(217 70 239 / 0.1)',
  
  // Success shadows
  successSoft: '0 4px 6px -1px rgb(34 197 94 / 0.1), 0 2px 4px -2px rgb(34 197 94 / 0.1)',
  successMedium: '0 10px 15px -3px rgb(34 197 94 / 0.1), 0 4px 6px -4px rgb(34 197 94 / 0.1)',
  
  // Warning shadows
  warningSoft: '0 4px 6px -1px rgb(245 158 11 / 0.1), 0 2px 4px -2px rgb(245 158 11 / 0.1)',
  warningMedium: '0 10px 15px -3px rgb(245 158 11 / 0.1), 0 4px 6px -4px rgb(245 158 11 / 0.1)',
  
  // Error shadows
  errorSoft: '0 4px 6px -1px rgb(239 68 68 / 0.1), 0 2px 4px -2px rgb(239 68 68 / 0.1)',
  errorMedium: '0 10px 15px -3px rgb(239 68 68 / 0.1), 0 4px 6px -4px rgb(239 68 68 / 0.1)'
};

/**
 * Inner shadows for depressed/inset effects
 * Used for inputs, wells, and recessed areas
 */
export const innerShadows = {
  none: 'inset 0 0 0 0 transparent',
  xs: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: 'inset 0 1px 3px 0 rgb(0 0 0 / 0.1)',
  md: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
  lg: 'inset 0 4px 6px 0 rgb(0 0 0 / 0.1)'
};

/**
 * Glow effects for focus states and emphasis
 * Subtle glows for interactive feedback
 */
export const glowEffects = {
  // Focus glows
  focusPrimary: '0 0 0 3px rgb(99 102 241 / 0.1)',
  focusSecondary: '0 0 0 3px rgb(217 70 239 / 0.1)',
  focusSuccess: '0 0 0 3px rgb(34 197 94 / 0.1)',
  focusWarning: '0 0 0 3px rgb(245 158 11 / 0.1)',
  focusError: '0 0 0 3px rgb(239 68 68 / 0.1)',
  
  // Subtle glows for hover states
  hoverSoft: '0 0 20px 0 rgb(0 0 0 / 0.05)',
  hoverMedium: '0 0 30px 0 rgb(0 0 0 / 0.1)',
  hoverStrong: '0 0 40px 0 rgb(0 0 0 / 0.15)',
  
  // Brand glows
  brandPrimary: '0 0 30px 0 rgb(99 102 241 / 0.2)',
  brandSecondary: '0 0 30px 0 rgb(217 70 239 / 0.2)'
};

/**
 * Layered shadows for complex elevation
 * Multiple shadows for realistic depth
 */
export const layeredShadows = {
  card: `
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1)
  `,
  
  cardHover: `
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1)
  `,
  
  modal: `
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1)
  `,
  
  dropdown: `
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1)
  `,
  
  floating: `
    0 25px 50px -12px rgb(0 0 0 / 0.25),
    0 0 0 1px rgb(0 0 0 / 0.05)
  `
};

/**
 * CSS custom property definitions
 * For dynamic shadow theming
 */
export const effectCustomProperties = {
  ':root': {
    // Standard shadows
    '--shadow-none': effects.none.boxShadow,
    '--shadow-xs': effects.xs.boxShadow,
    '--shadow-sm': effects.sm.boxShadow,
    '--shadow-md': effects.md.boxShadow,
    '--shadow-lg': effects.lg.boxShadow,
    '--shadow-xl': effects.xl.boxShadow,
    '--shadow-2xl': effects['2xl'].boxShadow,
    
    // Semantic shadows
    '--shadow-button': semanticShadows.button,
    '--shadow-card': semanticShadows.card,
    '--shadow-modal': semanticShadows.modal,
    '--shadow-dropdown': semanticShadows.dropdown,
    
    // Inner shadows
    '--shadow-inner-xs': innerShadows.xs,
    '--shadow-inner-sm': innerShadows.sm,
    '--shadow-inner-md': innerShadows.md,
    
    // Focus glows
    '--glow-focus-primary': glowEffects.focusPrimary,
    '--glow-focus-secondary': glowEffects.focusSecondary,
    '--glow-focus-success': glowEffects.focusSuccess,
    '--glow-focus-warning': glowEffects.focusWarning,
    '--glow-focus-error': glowEffects.focusError
  }
};

/**
 * Shadow animation utilities
 * For smooth shadow transitions
 */
export const shadowTransitions = {
  // Standard transition for elevation changes
  elevation: 'box-shadow 0.2s ease-in-out',
  
  // Fast transition for button interactions
  fast: 'box-shadow 0.15s ease-in-out',
  
  // Slow transition for dramatic effects
  slow: 'box-shadow 0.3s ease-in-out',
  
  // Cubic bezier for natural motion
  natural: 'box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  
  // Spring-like transition
  spring: 'box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
};

/**
 * Shadow utility functions
 * Helpers for working with shadows
 */
export const shadowUtils = {
  /**
   * Combine multiple shadows
   */
  combine: (...shadows: string[]): string => {
    return shadows.filter(Boolean).join(', ');
  },
  
  /**
   * Create a shadow with custom color
   */
  withColor: (shadow: string, color: string): string => {
    return shadow.replace(/rgb\([^)]+\)/g, color);
  },
  
  /**
   * Adjust shadow opacity
   */
  withOpacity: (shadow: string, opacity: number): string => {
    return shadow.replace(/\/\s*[\d.]+/g, `/ ${opacity}`);
  },
  
  /**
   * Scale shadow size
   */
  scale: (shadow: string, factor: number): string => {
    return shadow.replace(/\d+px/g, (match) => {
      const value = parseInt(match);
      return `${Math.round(value * factor)}px`;
    });
  }
};

export default effects;
/**
 * Spacing design tokens
 * Generated from Figma design tokens - DO NOT EDIT MANUALLY
 * 
 * Last updated: 2025-01-31T00:00:00Z
 * Source: Figma Design System
 * Token Count: 7 spacing values
 */

import type { SpacingScale, SpacingToken } from '../types/tokens';

/**
 * Creates a spacing token object
 */
const createSpacingToken = (
  value: number,
  name: string,
  description?: string,
  figmaId?: string,
  usage?: SpacingToken['usage']
): SpacingToken => ({
  value,
  name,
  description,
  figmaId,
  rem: value / 16, // Convert pixels to rem (assuming 16px base)
  usage
});

/**
 * Core spacing scale
 * Based on 4px grid system with 2x progression
 */
export const spacing: SpacingScale = {
  xs: createSpacingToken(
    4, 
    'spacing-xs', 
    'Extra small spacing - for tight layouts and small gaps',
    undefined,
    'gap'
  ),
  
  sm: createSpacingToken(
    8, 
    'spacing-sm', 
    'Small spacing - for compact components and small padding',
    undefined,
    'padding'
  ),
  
  md: createSpacingToken(
    16, 
    'spacing-md', 
    'Medium spacing - default spacing for most components',
    undefined,
    'padding'
  ),
  
  lg: createSpacingToken(
    24, 
    'spacing-lg', 
    'Large spacing - for generous padding and section gaps',
    undefined,
    'margin'
  ),
  
  xl: createSpacingToken(
    32, 
    'spacing-xl', 
    'Extra large spacing - for major layout separation',
    undefined,
    'margin'
  ),
  
  '2xl': createSpacingToken(
    48, 
    'spacing-2xl', 
    '2x extra large spacing - for significant section breaks',
    undefined,
    'margin'
  ),
  
  '3xl': createSpacingToken(
    64, 
    'spacing-3xl', 
    '3x extra large spacing - for major page sections',
    undefined,
    'margin'
  )
};

/**
 * Flat spacing object for Tailwind CSS integration
 * Maps spacing tokens to Tailwind-compatible format
 */
export const flatSpacing = {
  'xs': `${spacing.xs.value}px`,
  'sm': `${spacing.sm.value}px`,
  'md': `${spacing.md.value}px`,
  'lg': `${spacing.lg.value}px`,
  'xl': `${spacing.xl.value}px`,
  '2xl': `${spacing['2xl'].value}px`,
  '3xl': `${spacing['3xl'].value}px`
};

/**
 * Spacing values in different units
 */
export const spacingValues = {
  // Pixel values
  px: {
    xs: spacing.xs.value,
    sm: spacing.sm.value,
    md: spacing.md.value,
    lg: spacing.lg.value,
    xl: spacing.xl.value,
    '2xl': spacing['2xl'].value,
    '3xl': spacing['3xl'].value
  },
  
  // Rem values
  rem: {
    xs: spacing.xs.rem,
    sm: spacing.sm.rem,
    md: spacing.md.rem,
    lg: spacing.lg.rem,
    xl: spacing.xl.rem,
    '2xl': spacing['2xl'].rem,
    '3xl': spacing['3xl'].rem
  },
  
  // CSS custom properties
  css: {
    xs: `var(--spacing-xs, ${spacing.xs.value}px)`,
    sm: `var(--spacing-sm, ${spacing.sm.value}px)`,
    md: `var(--spacing-md, ${spacing.md.value}px)`,
    lg: `var(--spacing-lg, ${spacing.lg.value}px)`,
    xl: `var(--spacing-xl, ${spacing.xl.value}px)`,
    '2xl': `var(--spacing-2xl, ${spacing['2xl'].value}px)`,
    '3xl': `var(--spacing-3xl, ${spacing['3xl'].value}px)`
  }
};

/**
 * Semantic spacing shortcuts
 * Common spacing aliases for specific use cases
 */
export const semanticSpacing = {
  // Component internal spacing
  componentPaddingTight: spacing.xs.value,      // 4px - Tight internal padding
  componentPaddingSmall: spacing.sm.value,      // 8px - Small component padding
  componentPaddingMedium: spacing.md.value,     // 16px - Default component padding
  componentPaddingLarge: spacing.lg.value,      // 24px - Large component padding
  componentPaddingLoose: spacing.xl.value,      // 32px - Loose component padding
  
  // Layout spacing
  layoutGapSmall: spacing.sm.value,             // 8px - Small gaps between elements
  layoutGapMedium: spacing.md.value,            // 16px - Default gaps between elements
  layoutGapLarge: spacing.lg.value,             // 24px - Large gaps between elements
  layoutGapSection: spacing.xl.value,           // 32px - Gaps between sections
  layoutGapMajor: spacing['2xl'].value,         // 48px - Major layout gaps
  
  // Stack spacing
  stackTight: spacing.xs.value,                 // 4px - Tight vertical stacks
  stackSmall: spacing.sm.value,                 // 8px - Small vertical stacks
  stackMedium: spacing.md.value,                // 16px - Default vertical stacks
  stackLarge: spacing.lg.value,                 // 24px - Large vertical stacks
  stackLoose: spacing.xl.value,                 // 32px - Loose vertical stacks
  
  // Container spacing
  containerPaddingMobile: spacing.md.value,     // 16px - Mobile container padding
  containerPaddingTablet: spacing.lg.value,     // 24px - Tablet container padding
  containerPaddingDesktop: spacing.xl.value,    // 32px - Desktop container padding
  
  // Touch targets
  touchTargetMinimum: 44,                       // 44px - iOS minimum touch target
  touchTargetComfortable: 48,                   // 48px - Comfortable touch target
  touchTargetLarge: 56,                         // 56px - Large touch target
  
  // Form spacing
  formFieldGap: spacing.md.value,               // 16px - Gap between form fields
  formSectionGap: spacing.lg.value,             // 24px - Gap between form sections
  formLabelGap: spacing.xs.value,               // 4px - Gap between label and input
  formHelperGap: spacing.xs.value,              // 4px - Gap between input and helper text
  
  // Card spacing
  cardPaddingSmall: spacing.md.value,           // 16px - Small card padding
  cardPaddingMedium: spacing.lg.value,          // 24px - Medium card padding
  cardPaddingLarge: spacing.xl.value,           // 32px - Large card padding
  cardGap: spacing.lg.value,                    // 24px - Gap between cards
  
  // Modal spacing
  modalPadding: spacing.lg.value,               // 24px - Modal content padding
  modalGap: spacing.md.value,                   // 16px - Gap between modal elements
  modalBackdropPadding: spacing.md.value,       // 16px - Modal backdrop padding
  
  // Navigation spacing
  navItemPadding: spacing.sm.value,             // 8px - Navigation item padding
  navItemGap: spacing.xs.value,                 // 4px - Gap between nav items
  navSectionGap: spacing.md.value,              // 16px - Gap between nav sections
  
  // Table spacing
  tableCellPadding: spacing.sm.value,           // 8px - Table cell padding
  tableRowGap: spacing.xs.value,                // 4px - Gap between table rows
  tableHeaderPadding: spacing.md.value,         // 16px - Table header padding
  
  // List spacing
  listItemPadding: spacing.sm.value,            // 8px - List item padding
  listItemGap: spacing.xs.value,                // 4px - Gap between list items
  listSectionGap: spacing.md.value              // 16px - Gap between list sections
};

/**
 * Responsive spacing patterns
 * Mobile-first responsive spacing configurations
 */
export const responsiveSpacing = {
  // Container padding that grows with screen size
  containerPadding: {
    mobile: spacing.md.value,    // 16px on mobile
    tablet: spacing.lg.value,    // 24px on tablet
    desktop: spacing.xl.value    // 32px on desktop
  },
  
  // Section gaps that scale responsively
  sectionGap: {
    mobile: spacing.lg.value,    // 24px on mobile
    tablet: spacing.xl.value,    // 32px on tablet
    desktop: spacing['2xl'].value // 48px on desktop
  },
  
  // Component spacing that adapts to screen size
  componentSpacing: {
    mobile: spacing.sm.value,    // 8px on mobile
    tablet: spacing.md.value,    // 16px on tablet
    desktop: spacing.lg.value    // 24px on desktop
  },
  
  // Grid gaps for responsive layouts
  gridGap: {
    mobile: spacing.md.value,    // 16px on mobile
    tablet: spacing.lg.value,    // 24px on tablet
    desktop: spacing.xl.value    // 32px on desktop
  }
};

/**
 * Spacing multipliers for mathematical spacing relationships
 * Useful for programmatic spacing calculations
 */
export const spacingMultipliers = {
  // Base unit (4px)
  base: 4,
  
  // Common multipliers
  half: 2,        // 2px
  single: 4,      // 4px
  double: 8,      // 8px
  triple: 12,     // 12px
  quadruple: 16,  // 16px
  
  // Fibonacci-inspired progression
  fibonacci: [2, 4, 6, 10, 16, 26, 42, 68], // px values
  
  // Powers of 2 progression
  powersOfTwo: [2, 4, 8, 16, 32, 64, 128], // px values
  
  // Golden ratio progression (rounded to nearest pixel)
  goldenRatio: [4, 6, 10, 16, 26, 42, 68, 110] // px values
};

/**
 * CSS custom property definitions
 * For dynamic spacing theming
 */
export const spacingCustomProperties = {
  ':root': {
    '--spacing-xs': `${spacing.xs.value}px`,
    '--spacing-sm': `${spacing.sm.value}px`,
    '--spacing-md': `${spacing.md.value}px`,
    '--spacing-lg': `${spacing.lg.value}px`,
    '--spacing-xl': `${spacing.xl.value}px`,
    '--spacing-2xl': `${spacing['2xl'].value}px`,
    '--spacing-3xl': `${spacing['3xl'].value}px`,
    
    // Semantic spacing custom properties
    '--component-padding': `var(--spacing-md)`,
    '--layout-gap': `var(--spacing-lg)`,
    '--section-gap': `var(--spacing-xl)`,
    '--container-padding': `var(--spacing-md)`,
    
    // Touch target sizes
    '--touch-target-minimum': '44px',
    '--touch-target-comfortable': '48px',
    '--touch-target-large': '56px'
  }
};

/**
 * Spacing validation helpers
 * Utilities for ensuring consistent spacing usage
 */
export const spacingHelpers = {
  /**
   * Check if a value is a valid spacing token
   */
  isValidSpacing: (value: number): boolean => {
    return Object.values(spacingValues.px).includes(value);
  },
  
  /**
   * Get the closest valid spacing value
   */
  getClosestSpacing: (value: number): number => {
    const spacingArray = Object.values(spacingValues.px);
    return spacingArray.reduce((closest, current) => 
      Math.abs(current - value) < Math.abs(closest - value) ? current : closest
    );
  },
  
  /**
   * Convert spacing name to pixel value
   */
  getSpacingValue: (name: keyof typeof spacing): number => {
    return spacing[name].value;
  },
  
  /**
   * Convert pixel value to spacing name
   */
  getSpacingName: (value: number): keyof typeof spacing | null => {
    const entry = Object.entries(spacingValues.px).find(([, v]) => v === value);
    return entry ? (entry[0] as keyof typeof spacing) : null;
  }
};

export default spacing;
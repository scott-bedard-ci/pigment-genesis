/**
 * Design Tokens Index
 * Centralized export of all design tokens
 * 
 * This file aggregates all design tokens and provides a unified interface
 * for accessing colors, spacing, typography, effects, and breakpoints.
 */

// Token imports
import { colors, flatColors, semanticColors, colorAccessibility } from './colors';
import { spacing, flatSpacing, spacingValues, semanticSpacing, responsiveSpacing } from './spacing';
import { typography, flatTypography, fontFamilies, fontWeights, lineHeights, semanticTypography, responsiveTypography } from './typography';
import { effects, flatEffects, semanticShadows, coloredShadows, innerShadows, glowEffects } from './effects';
import { breakpoints, flatBreakpoints, mediaQueries, containerMaxWidths, deviceCategories } from './breakpoints';

// Type imports
import type { DesignTokenSystem } from '../types/tokens';

/**
 * Complete design token system
 * All tokens organized by category with metadata
 */
export const designTokens: DesignTokenSystem = {
  colors,
  spacing,
  typography,
  effects,
  borderRadius: {
    none: { value: 0, name: 'border-radius-none', description: 'No border radius' },
    xs: { value: 2, name: 'border-radius-xs', description: 'Extra small border radius' },
    sm: { value: 4, name: 'border-radius-sm', description: 'Small border radius' },
    md: { value: 8, name: 'border-radius-md', description: 'Medium border radius' },
    lg: { value: 12, name: 'border-radius-lg', description: 'Large border radius' },
    xl: { value: 16, name: 'border-radius-xl', description: 'Extra large border radius' },
    '2xl': { value: 24, name: 'border-radius-2xl', description: '2x extra large border radius' },
    full: { value: 9999, name: 'border-radius-full', description: 'Full border radius (circle/pill)' }
  },
  breakpoints,
  animations: {
    instant: { duration: 0, easing: 'linear', name: 'animation-instant', description: 'Instant animation' },
    fast: { duration: 150, easing: 'ease-in-out', name: 'animation-fast', description: 'Fast animation' },
    normal: { duration: 200, easing: 'ease-in-out', name: 'animation-normal', description: 'Normal animation' },
    slow: { duration: 300, easing: 'ease-in-out', name: 'animation-slow', description: 'Slow animation' },
    slower: { duration: 500, easing: 'ease-in-out', name: 'animation-slower', description: 'Slower animation' }
  },
  metadata: {
    figmaFileId: 'TBD', // Will be set when Figma integration is active
    lastSync: new Date().toISOString(),
    version: '1.0.0',
    tokenCount: calculateTokenCount(),
    generatedAt: new Date().toISOString()
  }
};

/**
 * Flattened tokens for Tailwind CSS integration
 * All tokens in a flat structure compatible with Tailwind config
 */
export const tailwindTokens = {
  colors: flatColors,
  spacing: flatSpacing,
  fontFamily: {
    sans: fontFamilies.sans,
    heading: fontFamilies.heading,
    mono: fontFamilies.mono
  },
  fontSize: flatTypography,
  fontWeight: fontWeights,
  lineHeight: lineHeights,
  boxShadow: flatEffects,
  screens: flatBreakpoints,
  borderRadius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px'
  }
};

/**
 * Semantic token collections
 * Grouped tokens for common use cases
 */
export const semanticTokens = {
  colors: semanticColors,
  spacing: semanticSpacing,
  typography: semanticTypography,
  shadows: semanticShadows,
  responsive: {
    spacing: responsiveSpacing,
    typography: responsiveTypography
  }
};

/**
 * Extended token collections
 * Additional token utilities and variations
 */
export const extendedTokens = {
  coloredShadows,
  innerShadows,
  glowEffects,
  mediaQueries,
  containerMaxWidths,
  deviceCategories,
  colorAccessibility
};

/**
 * Token validation and utility functions
 */
export const tokenUtils = {
  /**
   * Get all available color tokens
   */
  getAllColors: () => flatColors,
  
  /**
   * Get all available spacing tokens
   */
  getAllSpacing: () => flatSpacing,
  
  /**
   * Get all available typography tokens
   */
  getAllTypography: () => flatTypography,
  
  /**
   * Get all available effect tokens
   */
  getAllEffects: () => flatEffects,
  
  /**
   * Get all available breakpoint tokens
   */
  getAllBreakpoints: () => flatBreakpoints,
  
  /**
   * Validate if a color value exists in the token system
   */
  isValidColor: (color: string): boolean => {
    return Object.values(flatColors).includes(color);
  },
  
  /**
   * Validate if a spacing value exists in the token system
   */
  isValidSpacing: (spacing: string): boolean => {
    return Object.values(flatSpacing).includes(spacing);
  },
  
  /**
   * Get token by name and category
   */
  getToken: (category: keyof typeof tailwindTokens, name: string): any => {
    const tokens = tailwindTokens[category];
    return typeof tokens === 'object' ? (tokens as any)[name] : undefined;
  },
  
  /**
   * Search tokens by pattern
   */
  searchTokens: (pattern: string, category?: keyof typeof tailwindTokens): Record<string, any> => {
    const results: Record<string, any> = {};
    
    const searchInCategory = (cat: keyof typeof tailwindTokens, tokens: any) => {
      if (typeof tokens === 'object') {
        Object.entries(tokens).forEach(([key, value]) => {
          if (key.toLowerCase().includes(pattern.toLowerCase())) {
            results[`${cat}.${key}`] = value;
          }
        });
      }
    };
    
    if (category) {
      searchInCategory(category, tailwindTokens[category]);
    } else {
      Object.entries(tailwindTokens).forEach(([cat, tokens]) => {
        searchInCategory(cat as keyof typeof tailwindTokens, tokens);
      });
    }
    
    return results;
  }
};

/**
 * CSS custom properties for runtime theming
 * All tokens as CSS custom properties
 */
export const cssCustomProperties = {
  ':root': {
    // Colors
    ...Object.entries(flatColors).reduce((acc, [key, value]) => {
      acc[`--color-${key}`] = value;
      return acc;
    }, {} as Record<string, string>),
    
    // Spacing
    ...Object.entries(flatSpacing).reduce((acc, [key, value]) => {
      acc[`--spacing-${key}`] = value;
      return acc;
    }, {} as Record<string, string>),
    
    // Typography
    '--font-sans': fontFamilies.sans,
    '--font-heading': fontFamilies.heading,
    '--font-mono': fontFamilies.mono,
    
    // Effects
    ...Object.entries(flatEffects).reduce((acc, [key, value]) => {
      acc[`--shadow-${key}`] = value;
      return acc;
    }, {} as Record<string, string>),
    
    // Breakpoints
    ...Object.entries(flatBreakpoints).reduce((acc, [key, value]) => {
      acc[`--breakpoint-${key}`] = value;
      return acc;
    }, {} as Record<string, string>)
  }
};

/**
 * Token generation metadata
 */
export const tokenMetadata = {
  version: designTokens.metadata.version,
  generatedAt: designTokens.metadata.generatedAt,
  lastSync: designTokens.metadata.lastSync,
  tokenCount: designTokens.metadata.tokenCount,
  categories: {
    colors: Object.keys(flatColors).length,
    spacing: Object.keys(flatSpacing).length,
    typography: Object.keys(flatTypography).length,
    effects: Object.keys(flatEffects).length,
    breakpoints: Object.keys(flatBreakpoints).length
  }
};

/**
 * Calculate total token count across all categories
 */
function calculateTokenCount(): number {
  return (
    Object.keys(flatColors).length +
    Object.keys(flatSpacing).length +
    Object.keys(flatTypography).length +
    Object.keys(flatEffects).length +
    Object.keys(flatBreakpoints).length +
    8 // border radius tokens
  );
}

// Named exports for individual token categories
export {
  // Colors
  colors,
  flatColors,
  semanticColors,
  colorAccessibility,
  
  // Spacing
  spacing,
  flatSpacing,
  spacingValues,
  semanticSpacing,
  responsiveSpacing,
  
  // Typography
  typography,
  flatTypography,
  fontFamilies,
  fontWeights,
  lineHeights,
  semanticTypography,
  responsiveTypography,
  
  // Effects
  effects,
  flatEffects,
  semanticShadows,
  coloredShadows,
  innerShadows,
  glowEffects,
  
  // Breakpoints
  breakpoints,
  flatBreakpoints,
  mediaQueries,
  containerMaxWidths,
  deviceCategories
};

// Default export
export default designTokens;
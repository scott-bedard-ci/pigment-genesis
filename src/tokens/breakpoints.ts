/**
 * Breakpoint design tokens
 * Responsive breakpoint definitions for mobile-first design
 * 
 * Last updated: 2025-01-31T00:00:00Z
 * Source: Design System Standards
 * Token Count: 6 breakpoints
 */

import type { BreakpointScale, BreakpointToken } from '../types/tokens';

/**
 * Creates a breakpoint token object
 */
const createBreakpointToken = (
  value: number,
  name: string,
  description?: string,
  max?: number
): BreakpointToken => ({
  value,
  name,
  description,
  min: value,
  max,
  mediaQuery: max 
    ? `(min-width: ${value}px) and (max-width: ${max}px)`
    : `(min-width: ${value}px)`
});

/**
 * Responsive breakpoint scale
 * Mobile-first breakpoints with logical progression
 */
export const breakpoints: BreakpointScale = {
  xs: createBreakpointToken(
    375,
    'breakpoint-xs',
    'Extra small screens - Mobile phones in portrait',
    639
  ),
  
  sm: createBreakpointToken(
    640,
    'breakpoint-sm',
    'Small screens - Mobile phones in landscape, small tablets',
    767
  ),
  
  md: createBreakpointToken(
    768,
    'breakpoint-md',
    'Medium screens - Tablets in portrait',
    1023
  ),
  
  lg: createBreakpointToken(
    1024,
    'breakpoint-lg',
    'Large screens - Tablets in landscape, small desktops',
    1279
  ),
  
  xl: createBreakpointToken(
    1280,
    'breakpoint-xl',
    'Extra large screens - Desktop computers',
    1535
  ),
  
  '2xl': createBreakpointToken(
    1536,
    'breakpoint-2xl',
    '2x extra large screens - Large desktop monitors'
  )
};

/**
 * Flat breakpoint object for Tailwind CSS integration
 */
export const flatBreakpoints = {
  'xs': `${breakpoints.xs.value}px`,
  'sm': `${breakpoints.sm.value}px`,
  'md': `${breakpoints.md.value}px`,
  'lg': `${breakpoints.lg.value}px`,
  'xl': `${breakpoints.xl.value}px`,
  '2xl': `${breakpoints['2xl'].value}px`
};

/**
 * Media query utilities
 * Pre-built media queries for common use cases
 */
export const mediaQueries = {
  // Single breakpoint queries
  xs: `@media (min-width: ${breakpoints.xs.value}px)`,
  sm: `@media (min-width: ${breakpoints.sm.value}px)`,
  md: `@media (min-width: ${breakpoints.md.value}px)`,
  lg: `@media (min-width: ${breakpoints.lg.value}px)`,
  xl: `@media (min-width: ${breakpoints.xl.value}px)`,
  '2xl': `@media (min-width: ${breakpoints['2xl'].value}px)`,
  
  // Range queries
  xsOnly: `@media (max-width: ${breakpoints.sm.value - 1}px)`,
  smOnly: `@media (min-width: ${breakpoints.sm.value}px) and (max-width: ${breakpoints.md.value - 1}px)`,
  mdOnly: `@media (min-width: ${breakpoints.md.value}px) and (max-width: ${breakpoints.lg.value - 1}px)`,
  lgOnly: `@media (min-width: ${breakpoints.lg.value}px) and (max-width: ${breakpoints.xl.value - 1}px)`,
  xlOnly: `@media (min-width: ${breakpoints.xl.value}px) and (max-width: ${breakpoints['2xl'].value - 1}px)`,
  '2xlOnly': `@media (min-width: ${breakpoints['2xl'].value}px)`,
  
  // Semantic queries
  mobile: `@media (max-width: ${breakpoints.md.value - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.md.value}px) and (max-width: ${breakpoints.lg.value - 1}px)`,
  desktop: `@media (min-width: ${breakpoints.lg.value}px)`,
  
  // Orientation queries
  portrait: '@media (orientation: portrait)',
  landscape: '@media (orientation: landscape)',
  
  // Device-specific queries
  mobilePortrait: `@media (max-width: ${breakpoints.sm.value - 1}px) and (orientation: portrait)`,
  mobileLandscape: `@media (max-width: ${breakpoints.sm.value - 1}px) and (orientation: landscape)`,
  tabletPortrait: `@media (min-width: ${breakpoints.md.value}px) and (max-width: ${breakpoints.lg.value - 1}px) and (orientation: portrait)`,
  tabletLandscape: `@media (min-width: ${breakpoints.md.value}px) and (max-width: ${breakpoints.lg.value - 1}px) and (orientation: landscape)`,
  
  // High DPI queries
  retina: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  highDPI: '@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)',
  
  // Motion preferences
  reduceMotion: '@media (prefers-reduced-motion: reduce)',
  noPreference: '@media (prefers-reduced-motion: no-preference)',
  
  // Color scheme preferences
  darkMode: '@media (prefers-color-scheme: dark)',
  lightMode: '@media (prefers-color-scheme: light)',
  
  // Hover capabilities
  hover: '@media (hover: hover)',
  noHover: '@media (hover: none)',
  
  // Pointer capabilities
  finePointer: '@media (pointer: fine)',
  coarsePointer: '@media (pointer: coarse)'
};

/**
 * Container max-widths for different breakpoints
 * Ensures content doesn't become too wide on large screens
 */
export const containerMaxWidths = {
  xs: '100%',                           // Full width on extra small
  sm: `${breakpoints.sm.value}px`,      // 640px
  md: `${breakpoints.md.value}px`,      // 768px
  lg: `${breakpoints.lg.value}px`,      // 1024px
  xl: `${breakpoints.xl.value}px`,      // 1280px
  '2xl': `${breakpoints['2xl'].value}px` // 1536px
};

/**
 * Device categories and their breakpoint ranges
 * Semantic groupings for easier responsive design decisions
 */
export const deviceCategories = {
  mobile: {
    min: 0,
    max: breakpoints.md.value - 1,
    description: 'Mobile phones and small devices'
  },
  tablet: {
    min: breakpoints.md.value,
    max: breakpoints.lg.value - 1,
    description: 'Tablets and medium-sized devices'
  },
  desktop: {
    min: breakpoints.lg.value,
    max: Infinity,
    description: 'Desktop computers and large screens'
  },
  // More granular categories
  mobileSmall: {
    min: 0,
    max: breakpoints.xs.value - 1,
    description: 'Small mobile phones'
  },
  mobileLarge: {
    min: breakpoints.xs.value,
    max: breakpoints.sm.value - 1,
    description: 'Large mobile phones'
  },
  tabletSmall: {
    min: breakpoints.sm.value,
    max: breakpoints.md.value - 1,
    description: 'Small tablets'
  },
  tabletLarge: {
    min: breakpoints.md.value,
    max: breakpoints.lg.value - 1,
    description: 'Large tablets'
  },
  desktopSmall: {
    min: breakpoints.lg.value,
    max: breakpoints.xl.value - 1,
    description: 'Small desktop screens'
  },
  desktopLarge: {
    min: breakpoints.xl.value,
    max: Infinity,
    description: 'Large desktop screens'
  }
};

/**
 * Responsive utility classes
 * Common responsive patterns as utility classes
 */
export const responsiveUtilities = {
  // Hide/show at different breakpoints
  hideOnMobile: 'hidden md:block',
  hideOnTablet: 'block md:hidden lg:block',
  hideOnDesktop: 'block lg:hidden',
  showOnMobile: 'block md:hidden',
  showOnTablet: 'hidden md:block lg:hidden',
  showOnDesktop: 'hidden lg:block',
  
  // Text alignment responsive patterns
  textCenterMobile: 'text-center md:text-left',
  textLeftDesktop: 'text-center lg:text-left',
  
  // Flexbox responsive patterns
  stackMobile: 'flex flex-col md:flex-row',
  stackTablet: 'flex flex-col lg:flex-row',
  centerMobile: 'flex flex-col items-center md:flex-row md:items-start',
  
  // Grid responsive patterns
  gridMobile: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  gridTablet: 'grid grid-cols-1 lg:grid-cols-2',
  gridDesktop: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  
  // Spacing responsive patterns
  paddingResponsive: 'p-4 md:p-6 lg:p-8',
  marginResponsive: 'm-4 md:m-6 lg:m-8',
  gapResponsive: 'gap-4 md:gap-6 lg:gap-8'
};

/**
 * Breakpoint detection utilities
 * JavaScript utilities for detecting current breakpoint
 */
export const breakpointDetection = {
  /**
   * Get current breakpoint based on window width
   */
  getCurrentBreakpoint: (): keyof typeof breakpoints | null => {
    if (typeof window === 'undefined') return null;
    
    const width = window.innerWidth;
    
    if (width >= breakpoints['2xl'].value) return '2xl';
    if (width >= breakpoints.xl.value) return 'xl';
    if (width >= breakpoints.lg.value) return 'lg';
    if (width >= breakpoints.md.value) return 'md';
    if (width >= breakpoints.sm.value) return 'sm';
    return 'xs';
  },
  
  /**
   * Check if current screen is at or above a breakpoint
   */
  isBreakpointUp: (breakpoint: keyof typeof breakpoints): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= breakpoints[breakpoint].value;
  },
  
  /**
   * Check if current screen is below a breakpoint
   */
  isBreakpointDown: (breakpoint: keyof typeof breakpoints): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoints[breakpoint].value;
  },
  
  /**
   * Check if current screen is exactly at a breakpoint range
   */
  isBreakpointOnly: (breakpoint: keyof typeof breakpoints): boolean => {
    if (typeof window === 'undefined') return false;
    
    const width = window.innerWidth;
    const current = breakpoints[breakpoint];
    const next = getNextBreakpoint(breakpoint);
    
    return width >= current.value && (!next || width < next.value);
  }
};

/**
 * Helper function to get the next breakpoint
 */
function getNextBreakpoint(current: keyof typeof breakpoints): BreakpointToken | null {
  const breakpointOrder: (keyof typeof breakpoints)[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const currentIndex = breakpointOrder.indexOf(current);
  const nextKey = breakpointOrder[currentIndex + 1];
  
  return nextKey ? breakpoints[nextKey] : null;
}

/**
 * CSS custom property definitions
 * For dynamic breakpoint theming
 */
export const breakpointCustomProperties = {
  ':root': {
    '--breakpoint-xs': `${breakpoints.xs.value}px`,
    '--breakpoint-sm': `${breakpoints.sm.value}px`,
    '--breakpoint-md': `${breakpoints.md.value}px`,
    '--breakpoint-lg': `${breakpoints.lg.value}px`,
    '--breakpoint-xl': `${breakpoints.xl.value}px`,
    '--breakpoint-2xl': `${breakpoints['2xl'].value}px`,
    
    // Container max-widths
    '--container-xs': containerMaxWidths.xs,
    '--container-sm': containerMaxWidths.sm,
    '--container-md': containerMaxWidths.md,
    '--container-lg': containerMaxWidths.lg,
    '--container-xl': containerMaxWidths.xl,
    '--container-2xl': containerMaxWidths['2xl']
  }
};

export default breakpoints;
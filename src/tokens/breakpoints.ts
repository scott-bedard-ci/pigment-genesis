// Design tokens for responsive breakpoints
// These breakpoints follow mobile-first design principles

export const breakpoints = {
  // Mobile first breakpoints
  sm: '640px',   // Small devices (phones, 640px and up)
  md: '768px',   // Medium devices (tablets, 768px and up)
  lg: '1024px',  // Large devices (desktops, 1024px and up)
  xl: '1280px',  // Extra large devices (large desktops, 1280px and up)
  '2xl': '1536px' // 2x extra large devices (larger desktops, 1536px and up)
} as const;

// Breakpoint utilities for programmatic use
export const breakpointValues = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Container max widths for each breakpoint
export const containerMaxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Media query helpers
export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`
} as const;

// Responsive design patterns
export const responsivePatterns = {
  // Touch target minimum sizes
  touchTarget: {
    minimum: '44px',     // iOS minimum touch target
    comfortable: '48px', // Comfortable touch target
    large: '56px'        // Large touch target for accessibility
  },
  
  // Typography scaling
  typographyScale: {
    mobile: {
      'heading-xl': '32px',
      'heading-lg': '28px',
      'heading-md': '20px',
      'heading-sm': '18px'
    },
    desktop: {
      'heading-xl': '48px',
      'heading-lg': '36px',
      'heading-md': '24px',
      'heading-sm': '20px'
    }
  },
  
  // Spacing scale for different screen sizes
  spacingScale: {
    mobile: {
      section: '32px',
      container: '16px',
      component: '16px'
    },
    tablet: {
      section: '48px',
      container: '20px',
      component: '20px'
    },
    desktop: {
      section: '64px',
      container: '24px',
      component: '24px'
    }
  }
} as const;

// Type exports for TypeScript support
export type BreakpointKey = keyof typeof breakpoints;
export type BreakpointValue = typeof breakpointValues[BreakpointKey];
export type MediaQuery = typeof mediaQueries[BreakpointKey];
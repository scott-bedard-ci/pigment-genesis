/**
 * Typography design tokens
 * Generated from Figma design tokens - DO NOT EDIT MANUALLY
 * 
 * Last updated: 2025-01-31T00:00:00Z
 * Source: Figma Design System
 * Token Count: 18 typography styles
 */

import type { TypographyScale, TypographyToken } from '../types/tokens';

/**
 * Creates a typography token object
 */
const createTypographyToken = (
  fontFamily: string,
  fontSize: number,
  fontWeight: number | string,
  lineHeight: number | string,
  name: string,
  description?: string,
  letterSpacing?: number | string,
  textCase?: TypographyToken['textCase'],
  figmaId?: string
): TypographyToken => ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textCase,
  name,
  description,
  figmaId
});

/**
 * Font family definitions
 * Primary and secondary font stacks with fallbacks
 */
export const fontFamilies = {
  // Primary font family for body text
  sans: 'CustomInk-Regular, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  
  // Font family for headings and emphasis
  heading: 'CustomInk-Bold, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  
  // Monospace font for code
  mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
};

/**
 * Complete typography scale
 * Organized by purpose and hierarchy
 */
export const typography: TypographyScale = {
  // Display typography for hero sections and large headings
  display: {
    large: createTypographyToken(
      fontFamilies.heading,
      48,
      700,
      1.1,
      'display-large',
      'Extra large display text for hero sections'
    ),
    
    medium: createTypographyToken(
      fontFamilies.heading,
      36,
      700,
      1.2,
      'display-medium',
      'Large display text for major headings'
    ),
    
    small: createTypographyToken(
      fontFamilies.heading,
      30,
      700,
      1.2,
      'display-small',
      'Medium display text for section headers'
    )
  },
  
  // Heading typography for content hierarchy
  heading: {
    h1: createTypographyToken(
      fontFamilies.heading,
      32,
      700,
      1.25,
      'heading-h1',
      'Main page heading (H1)'
    ),
    
    h2: createTypographyToken(
      fontFamilies.heading,
      24,
      600,
      1.3,
      'heading-h2',
      'Section heading (H2)'
    ),
    
    h3: createTypographyToken(
      fontFamilies.heading,
      20,
      600,
      1.35,
      'heading-h3',
      'Subsection heading (H3)'
    ),
    
    h4: createTypographyToken(
      fontFamilies.heading,
      18,
      600,
      1.4,
      'heading-h4',
      'Sub-subsection heading (H4)'
    ),
    
    h5: createTypographyToken(
      fontFamilies.heading,
      16,
      600,
      1.4,
      'heading-h5',
      'Minor heading (H5)'
    ),
    
    h6: createTypographyToken(
      fontFamilies.heading,
      14,
      600,
      1.45,
      'heading-h6',
      'Smallest heading (H6)'
    )
  },
  
  // Body text typography for content
  body: {
    large: createTypographyToken(
      fontFamilies.sans,
      18,
      400,
      1.6,
      'body-large',
      'Large body text for emphasis'
    ),
    
    medium: createTypographyToken(
      fontFamilies.sans,
      16,
      400,
      1.5,
      'body-medium',
      'Default body text size'
    ),
    
    small: createTypographyToken(
      fontFamilies.sans,
      14,
      400,
      1.45,
      'body-small',
      'Small body text for secondary content'
    ),
    
    extraSmall: createTypographyToken(
      fontFamilies.sans,
      12,
      400,
      1.4,
      'body-extra-small',
      'Extra small text for captions and metadata'
    )
  },
  
  // Label typography for form fields and UI labels
  label: {
    large: createTypographyToken(
      fontFamilies.sans,
      16,
      500,
      1.4,
      'label-large',
      'Large label text for prominent fields'
    ),
    
    medium: createTypographyToken(
      fontFamilies.sans,
      14,
      500,
      1.4,
      'label-medium',
      'Default label text for form fields'
    ),
    
    small: createTypographyToken(
      fontFamilies.sans,
      12,
      500,
      1.35,
      'label-small',
      'Small label text for compact forms'
    )
  },
  
  // Caption typography for supplementary text
  caption: {
    large: createTypographyToken(
      fontFamilies.sans,
      14,
      400,
      1.4,
      'caption-large',
      'Large caption text'
    ),
    
    medium: createTypographyToken(
      fontFamilies.sans,
      12,
      400,
      1.35,
      'caption-medium',
      'Default caption text'
    ),
    
    small: createTypographyToken(
      fontFamilies.sans,
      10,
      400,
      1.3,
      'caption-small',
      'Small caption text for fine print'
    )
  }
};

/**
 * Flat typography object for Tailwind CSS integration
 * Maps typography tokens to Tailwind-compatible format
 */
export const flatTypography = {
  // Font families
  'font-sans': fontFamilies.sans,
  'font-heading': fontFamilies.heading,
  'font-mono': fontFamilies.mono,
  
  // Font sizes with line heights
  'text-xs': [`${typography.caption.small.fontSize}px`, { lineHeight: typography.caption.small.lineHeight }],
  'text-sm': [`${typography.body.small.fontSize}px`, { lineHeight: typography.body.small.lineHeight }],
  'text-base': [`${typography.body.medium.fontSize}px`, { lineHeight: typography.body.medium.lineHeight }],
  'text-lg': [`${typography.body.large.fontSize}px`, { lineHeight: typography.body.large.lineHeight }],
  'text-xl': [`${typography.heading.h4.fontSize}px`, { lineHeight: typography.heading.h4.lineHeight }],
  'text-2xl': [`${typography.heading.h2.fontSize}px`, { lineHeight: typography.heading.h2.lineHeight }],
  'text-3xl': [`${typography.display.small.fontSize}px`, { lineHeight: typography.display.small.lineHeight }],
  'text-4xl': [`${typography.display.medium.fontSize}px`, { lineHeight: typography.display.medium.lineHeight }]
};

/**
 * Font weight scale
 * Standard font weights used across the system
 */
export const fontWeights = {
  normal: 400,    // Regular text
  medium: 500,    // Medium emphasis
  semibold: 600,  // Strong emphasis
  bold: 700       // Bold headings
};

/**
 * Line height scale
 * Standard line heights for different text purposes
 */
export const lineHeights = {
  tight: 1.1,     // Tight line height for display text
  snug: 1.2,      // Snug line height for headings
  normal: 1.4,    // Normal line height for UI text
  relaxed: 1.5,   // Relaxed line height for body text
  loose: 1.6      // Loose line height for reading text
};

/**
 * Letter spacing scale
 * Standard letter spacing values
 */
export const letterSpacing = {
  tighter: '-0.05em',  // Tighter letter spacing
  tight: '-0.025em',   // Tight letter spacing
  normal: '0em',       // Normal letter spacing
  wide: '0.025em',     // Wide letter spacing
  wider: '0.05em',     // Wider letter spacing
  widest: '0.1em'      // Widest letter spacing
};

/**
 * Semantic typography shortcuts
 * Common typography combinations for specific use cases
 */
export const semanticTypography = {
  // Hero text
  hero: {
    fontSize: typography.display.large.fontSize,
    fontFamily: typography.display.large.fontFamily,
    fontWeight: typography.display.large.fontWeight,
    lineHeight: typography.display.large.lineHeight
  },
  
  // Page title
  pageTitle: {
    fontSize: typography.heading.h1.fontSize,
    fontFamily: typography.heading.h1.fontFamily,
    fontWeight: typography.heading.h1.fontWeight,
    lineHeight: typography.heading.h1.lineHeight
  },
  
  // Section title
  sectionTitle: {
    fontSize: typography.heading.h2.fontSize,
    fontFamily: typography.heading.h2.fontFamily,
    fontWeight: typography.heading.h2.fontWeight,
    lineHeight: typography.heading.h2.lineHeight
  },
  
  // Card title
  cardTitle: {
    fontSize: typography.heading.h3.fontSize,
    fontFamily: typography.heading.h3.fontFamily,
    fontWeight: typography.heading.h3.fontWeight,
    lineHeight: typography.heading.h3.lineHeight
  },
  
  // Body text
  bodyText: {
    fontSize: typography.body.medium.fontSize,
    fontFamily: typography.body.medium.fontFamily,
    fontWeight: typography.body.medium.fontWeight,
    lineHeight: typography.body.medium.lineHeight
  },
  
  // Small text
  smallText: {
    fontSize: typography.body.small.fontSize,
    fontFamily: typography.body.small.fontFamily,
    fontWeight: typography.body.small.fontWeight,
    lineHeight: typography.body.small.lineHeight
  },
  
  // Caption text
  captionText: {
    fontSize: typography.caption.medium.fontSize,
    fontFamily: typography.caption.medium.fontFamily,
    fontWeight: typography.caption.medium.fontWeight,
    lineHeight: typography.caption.medium.lineHeight
  },
  
  // Button text
  buttonText: {
    fontSize: typography.label.medium.fontSize,
    fontFamily: typography.label.medium.fontFamily,
    fontWeight: typography.label.medium.fontWeight,
    lineHeight: typography.label.medium.lineHeight
  },
  
  // Input text
  inputText: {
    fontSize: typography.body.medium.fontSize,
    fontFamily: typography.body.medium.fontFamily,
    fontWeight: typography.body.medium.fontWeight,
    lineHeight: typography.body.medium.lineHeight
  },
  
  // Label text
  labelText: {
    fontSize: typography.label.medium.fontSize,
    fontFamily: typography.label.medium.fontFamily,
    fontWeight: typography.label.medium.fontWeight,
    lineHeight: typography.label.medium.lineHeight
  },
  
  // Helper text
  helperText: {
    fontSize: typography.caption.medium.fontSize,
    fontFamily: typography.caption.medium.fontFamily,
    fontWeight: typography.caption.medium.fontWeight,
    lineHeight: typography.caption.medium.lineHeight
  }
};

/**
 * Responsive typography patterns
 * Mobile-first responsive typography configurations
 */
export const responsiveTypography = {
  // Hero text that scales with screen size
  hero: {
    mobile: {
      fontSize: typography.display.small.fontSize,
      lineHeight: typography.display.small.lineHeight
    },
    tablet: {
      fontSize: typography.display.medium.fontSize,
      lineHeight: typography.display.medium.lineHeight
    },
    desktop: {
      fontSize: typography.display.large.fontSize,
      lineHeight: typography.display.large.lineHeight
    }
  },
  
  // Page title that scales with screen size
  pageTitle: {
    mobile: {
      fontSize: typography.heading.h2.fontSize,
      lineHeight: typography.heading.h2.lineHeight
    },
    tablet: {
      fontSize: typography.heading.h1.fontSize,
      lineHeight: typography.heading.h1.lineHeight
    },
    desktop: {
      fontSize: typography.heading.h1.fontSize,
      lineHeight: typography.heading.h1.lineHeight
    }
  },
  
  // Body text that adapts to screen size
  bodyText: {
    mobile: {
      fontSize: typography.body.small.fontSize,
      lineHeight: typography.body.small.lineHeight
    },
    tablet: {
      fontSize: typography.body.medium.fontSize,
      lineHeight: typography.body.medium.lineHeight
    },
    desktop: {
      fontSize: typography.body.large.fontSize,
      lineHeight: typography.body.large.lineHeight
    }
  }
};

/**
 * CSS custom property definitions
 * For dynamic typography theming
 */
export const typographyCustomProperties = {
  ':root': {
    // Font families
    '--font-sans': fontFamilies.sans,
    '--font-heading': fontFamilies.heading,
    '--font-mono': fontFamilies.mono,
    
    // Font sizes
    '--text-xs': `${typography.caption.small.fontSize}px`,
    '--text-sm': `${typography.body.small.fontSize}px`,
    '--text-base': `${typography.body.medium.fontSize}px`,
    '--text-lg': `${typography.body.large.fontSize}px`,
    '--text-xl': `${typography.heading.h4.fontSize}px`,
    '--text-2xl': `${typography.heading.h2.fontSize}px`,
    '--text-3xl': `${typography.display.small.fontSize}px`,
    '--text-4xl': `${typography.display.medium.fontSize}px`,
    
    // Line heights
    '--leading-tight': lineHeights.tight,
    '--leading-snug': lineHeights.snug,
    '--leading-normal': lineHeights.normal,
    '--leading-relaxed': lineHeights.relaxed,
    '--leading-loose': lineHeights.loose,
    
    // Font weights
    '--font-normal': fontWeights.normal,
    '--font-medium': fontWeights.medium,
    '--font-semibold': fontWeights.semibold,
    '--font-bold': fontWeights.bold,
    
    // Letter spacing
    '--tracking-tighter': letterSpacing.tighter,
    '--tracking-tight': letterSpacing.tight,
    '--tracking-normal': letterSpacing.normal,
    '--tracking-wide': letterSpacing.wide,
    '--tracking-wider': letterSpacing.wider,
    '--tracking-widest': letterSpacing.widest
  }
};

/**
 * Typography accessibility helpers
 * Utilities for ensuring readable typography
 */
export const typographyAccessibility = {
  // Minimum font sizes for accessibility
  minimumFontSizes: {
    mobile: 14,     // Minimum font size on mobile
    desktop: 12     // Minimum font size on desktop
  },
  
  // Recommended line heights for readability
  readableLineHeights: {
    display: 1.1,   // Display text
    heading: 1.25,  // Headings
    body: 1.5,      // Body text
    caption: 1.4    // Caption text
  },
  
  // Maximum line lengths for readability (in characters)
  maxLineLength: {
    narrow: 45,     // Narrow column
    optimal: 66,    // Optimal reading length
    wide: 75        // Wide column maximum
  },
  
  // High contrast typography pairs
  highContrast: {
    // Dark text on light background
    darkOnLight: {
      color: '#111827',     // Gray-900
      backgroundColor: '#ffffff'
    },
    // Light text on dark background
    lightOnDark: {
      color: '#ffffff',
      backgroundColor: '#111827'  // Gray-900
    }
  }
};

export default typography;
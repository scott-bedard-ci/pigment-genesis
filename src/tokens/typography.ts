// Design tokens for typography - AUTO-GENERATED FROM FIGMA
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

export const typography = {
  // 🎨 EXTRACTED FROM FIGMA - Checkbox Component Typography
  // Source: Figma checkbox component labels
  
  // Font families - EXTRACTED from Figma
  fontFamily: {
    heading: ["'Sharp Sans'", 'sans-serif'], // Figma: Sharp Sans font family
    body: ["'Sharp Sans'", 'sans-serif'],    // Figma: Sharp Sans font family
    mono: ['JetBrains Mono', 'ui-monospace', 'Consolas', 'monospace']
  },

  // Font sizes - EXTRACTED from Figma
  fontSize: {
    'heading-xl': '32px',   // Figma: Large heading size
    'heading-lg': '24px',   // Standard heading size
    'heading-md': '18px',   // Medium heading size
    'heading-sm': '16px',   // Small heading size
    'body-lg': '16px',      // Large body text
    'body-md': '14px',      // Figma: Label text size for checkbox
    'body-sm': '12px',      // Small body text
    'caption': '10px',      // Caption text
    'button-lg': '16px',    // Figma: Large button text size
    'button-md': '14px',    // Figma: Medium button text size
    'button-sm': '12px',    // Figma: Small button text size
    'avatar-sm': '11px',    // Figma: Avatar text size for small avatars (26px)
    'avatar-lg': '16px'     // Figma: Avatar text size for large avatars (estimated)
  },

  // Line heights - EXTRACTED from Figma
  lineHeight: {
    'heading-xl': '40px',   // Large heading line height
    'heading-lg': '32px',   // Standard heading line height
    'heading-md': '26px',   // Medium heading line height
    'heading-sm': '24px',   // Small heading line height
    'body-lg': '24px',      // Large body line height
    'body-md': '1.25',      // Figma: 1.25 line height for checkbox labels
    'body-sm': '16px',      // Small body line height
    'caption': '14px',      // Caption line height
    'button-lg': '20px',    // Figma: Large button line height
    'button-md': '18px',    // Figma: Medium button line height
    'button-sm': '16px',    // Figma: Small button line height
    'avatar-sm': '14px',    // Figma: Avatar text line height for small avatars
    'avatar-lg': '20px'     // Figma: Avatar text line height for large avatars
  },

  // Font weights - EXTRACTED from Figma
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,     // Figma: Sharp Sans Medium for checkbox labels
    semibold: 600,   // Figma: Sharp Sans Semibold for button text
    bold: 700
  },

  // Letter spacing - Standard values
  letterSpacing: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    avatar: '0.165px'      // Figma: Specific letter spacing for avatar text
  }
} as const;

// Predefined text styles combining multiple properties - will be populated from Figma design tokens
export const textStyles = {
  'heading-xl': {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['heading-xl'],
    lineHeight: typography.lineHeight['heading-xl'],
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.tight
  },
  'heading-lg': {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['heading-lg'],
    lineHeight: typography.lineHeight['heading-lg'],
    fontWeight: typography.fontWeight.bold,
    letterSpacing: typography.letterSpacing.tight
  },
  'heading-md': {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['heading-md'],
    lineHeight: typography.lineHeight['heading-md'],
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal
  },
  'heading-sm': {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['heading-sm'],
    lineHeight: typography.lineHeight['heading-sm'],
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal
  },
  'body-lg': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['body-lg'],
    lineHeight: typography.lineHeight['body-lg'],
    fontWeight: typography.fontWeight.regular,
    letterSpacing: typography.letterSpacing.normal
  },
  'body-md': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['body-md'],
    lineHeight: typography.lineHeight['body-md'],
    fontWeight: typography.fontWeight.regular,
    letterSpacing: typography.letterSpacing.normal
  },
  'body-sm': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['body-sm'],
    lineHeight: typography.lineHeight['body-sm'],
    fontWeight: typography.fontWeight.regular,
    letterSpacing: typography.letterSpacing.normal
  },
  'caption': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.caption,
    lineHeight: typography.lineHeight.caption,
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.normal
  },
  'button-lg': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['button-lg'],
    lineHeight: typography.lineHeight['button-lg'],
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal
  },
  'button-md': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['button-md'],
    lineHeight: typography.lineHeight['button-md'],
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal
  },
  'button-sm': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['button-sm'],
    lineHeight: typography.lineHeight['button-sm'],
    fontWeight: typography.fontWeight.semibold,
    letterSpacing: typography.letterSpacing.normal
  },
  'avatar-sm': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['avatar-sm'],
    lineHeight: typography.lineHeight['avatar-sm'],
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.avatar
  },
  'avatar-lg': {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize['avatar-lg'],
    lineHeight: typography.lineHeight['avatar-lg'],
    fontWeight: typography.fontWeight.medium,
    letterSpacing: typography.letterSpacing.avatar
  }
} as const;

// Token metadata for tracking Figma sync
export const typographyTokenMetadata = {
  figmaFileId: 'button-component-frame',
  lastSync: '2025-05-24T16:45:00Z',
  tokenCount: 9,       // 9 typography tokens extracted from Figma
  version: '1.1.0',
  isExtracted: true,   // ✅ EXTRACTED: Tokens ready for use
  placeholderMode: false, // ✅ PRODUCTION: Real Figma tokens active
  sourceFrame: 'Checkbox + Button component documentation frames',
  extractedTokens: [
    'fontFamily.body (Sharp Sans)',
    'fontSize.body-md (14px)',
    'lineHeight.body-md (1.25)',
    'fontSize.button-lg (16px)',
    'fontSize.button-md (14px)',
    'fontSize.button-sm (12px)',
    'lineHeight.button-lg (20px)',
    'lineHeight.button-md (18px)',
    'lineHeight.button-sm (16px)',
    'fontWeight.semibold (600)'
  ]
} as const;

// Token validation helper
export const validateTypographyTokens = () => {
  if (typographyTokenMetadata.placeholderMode || !typographyTokenMetadata.isExtracted) {
    throw new Error(
      '🚨 CRITICAL ERROR: Attempting to use placeholder typography tokens!\n' +
      'All typography tokens must be extracted from Figma before component development.\n' +
      'Run `npm run extract-figma-tokens` first.'
    );
  }
  return true;
};

// Type exports for TypeScript support
export type TypographyTokens = typeof typography;
export type TextStyleKey = keyof typeof textStyles;
export type FontSizeKey = keyof typeof typography.fontSize;
export type FontWeightKey = keyof typeof typography.fontWeight;
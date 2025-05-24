// Design tokens for typography - AUTO-GENERATED FROM FIGMA
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

export const typography = {
  // 🚨 CRITICAL: These are PLACEHOLDER values - DO NOT USE in components!
  // All values must be extracted from Figma before component development
  
  // Font families - AWAITING Figma extraction
  fontFamily: {
    heading: 'FIGMA_TOKEN_REQUIRED_font_family_heading', // PLACEHOLDER - Extract from Figma
    body: 'FIGMA_TOKEN_REQUIRED_font_family_body',       // PLACEHOLDER - Extract from Figma
    mono: 'FIGMA_TOKEN_REQUIRED_font_family_mono'        // PLACEHOLDER - Extract from Figma
  },

  // Font sizes - AWAITING Figma extraction
  fontSize: {
    'heading-xl': 'FIGMA_TOKEN_REQUIRED_font_size_heading_xl',  // PLACEHOLDER - Extract from Figma
    'heading-lg': 'FIGMA_TOKEN_REQUIRED_font_size_heading_lg',  // PLACEHOLDER - Extract from Figma
    'heading-md': 'FIGMA_TOKEN_REQUIRED_font_size_heading_md',  // PLACEHOLDER - Extract from Figma
    'heading-sm': 'FIGMA_TOKEN_REQUIRED_font_size_heading_sm',  // PLACEHOLDER - Extract from Figma
    'body-lg': 'FIGMA_TOKEN_REQUIRED_font_size_body_lg',        // PLACEHOLDER - Extract from Figma
    'body-md': 'FIGMA_TOKEN_REQUIRED_font_size_body_md',        // PLACEHOLDER - Extract from Figma
    'body-sm': 'FIGMA_TOKEN_REQUIRED_font_size_body_sm',        // PLACEHOLDER - Extract from Figma
    'caption': 'FIGMA_TOKEN_REQUIRED_font_size_caption'         // PLACEHOLDER - Extract from Figma
  },

  // Line heights - AWAITING Figma extraction
  lineHeight: {
    'heading-xl': 'FIGMA_TOKEN_REQUIRED_line_height_heading_xl',  // PLACEHOLDER - Extract from Figma
    'heading-lg': 'FIGMA_TOKEN_REQUIRED_line_height_heading_lg',  // PLACEHOLDER - Extract from Figma
    'heading-md': 'FIGMA_TOKEN_REQUIRED_line_height_heading_md',  // PLACEHOLDER - Extract from Figma
    'heading-sm': 'FIGMA_TOKEN_REQUIRED_line_height_heading_sm',  // PLACEHOLDER - Extract from Figma
    'body-lg': 'FIGMA_TOKEN_REQUIRED_line_height_body_lg',        // PLACEHOLDER - Extract from Figma
    'body-md': 'FIGMA_TOKEN_REQUIRED_line_height_body_md',        // PLACEHOLDER - Extract from Figma
    'body-sm': 'FIGMA_TOKEN_REQUIRED_line_height_body_sm',        // PLACEHOLDER - Extract from Figma
    'caption': 'FIGMA_TOKEN_REQUIRED_line_height_caption'         // PLACEHOLDER - Extract from Figma
  },

  // Font weights - AWAITING Figma extraction
  fontWeight: {
    light: 'FIGMA_TOKEN_REQUIRED_font_weight_light',      // PLACEHOLDER - Extract from Figma
    regular: 'FIGMA_TOKEN_REQUIRED_font_weight_regular',  // PLACEHOLDER - Extract from Figma
    medium: 'FIGMA_TOKEN_REQUIRED_font_weight_medium',    // PLACEHOLDER - Extract from Figma
    semibold: 'FIGMA_TOKEN_REQUIRED_font_weight_semibold', // PLACEHOLDER - Extract from Figma
    bold: 'FIGMA_TOKEN_REQUIRED_font_weight_bold'         // PLACEHOLDER - Extract from Figma
  },

  // Letter spacing - AWAITING Figma extraction
  letterSpacing: {
    tight: 'FIGMA_TOKEN_REQUIRED_letter_spacing_tight',   // PLACEHOLDER - Extract from Figma
    normal: 'FIGMA_TOKEN_REQUIRED_letter_spacing_normal', // PLACEHOLDER - Extract from Figma
    wide: 'FIGMA_TOKEN_REQUIRED_letter_spacing_wide'      // PLACEHOLDER - Extract from Figma
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
  }
} as const;

// Token metadata for tracking Figma sync
export const typographyTokenMetadata = {
  figmaFileId: '',     // AWAITING Figma extraction
  lastSync: '',        // AWAITING Figma extraction
  tokenCount: 0,       // AWAITING Figma extraction
  version: '1.0.0',
  isExtracted: false,  // 🚨 CRITICAL: Must be true before using tokens
  placeholderMode: true // 🚨 CRITICAL: Must be false before using tokens
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
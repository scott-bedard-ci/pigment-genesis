// Design tokens for colors - AUTO-GENERATED FROM FIGMA
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

export const colors = {
  // 🚨 CRITICAL: These are PLACEHOLDER values - DO NOT USE in components!
  // All values must be extracted from Figma before component development
  // Using these values will cause build failures and audit failures
  
  // Primary color palette - AWAITING Figma extraction
  primary: {
    50: 'FIGMA_TOKEN_REQUIRED_primary_50',    // PLACEHOLDER - Extract from Figma
    100: 'FIGMA_TOKEN_REQUIRED_primary_100',  // PLACEHOLDER - Extract from Figma
    200: 'FIGMA_TOKEN_REQUIRED_primary_200',  // PLACEHOLDER - Extract from Figma
    300: 'FIGMA_TOKEN_REQUIRED_primary_300',  // PLACEHOLDER - Extract from Figma
    400: 'FIGMA_TOKEN_REQUIRED_primary_400',  // PLACEHOLDER - Extract from Figma
    500: 'FIGMA_TOKEN_REQUIRED_primary_500',  // PLACEHOLDER - Extract from Figma (main)
    600: 'FIGMA_TOKEN_REQUIRED_primary_600',  // PLACEHOLDER - Extract from Figma
    700: 'FIGMA_TOKEN_REQUIRED_primary_700',  // PLACEHOLDER - Extract from Figma
    800: 'FIGMA_TOKEN_REQUIRED_primary_800',  // PLACEHOLDER - Extract from Figma
    900: 'FIGMA_TOKEN_REQUIRED_primary_900',  // PLACEHOLDER - Extract from Figma
    950: 'FIGMA_TOKEN_REQUIRED_primary_950'   // PLACEHOLDER - Extract from Figma
  },

  // Secondary color palette - AWAITING Figma extraction
  secondary: {
    50: 'FIGMA_TOKEN_REQUIRED_secondary_50',    // PLACEHOLDER - Extract from Figma
    100: 'FIGMA_TOKEN_REQUIRED_secondary_100',  // PLACEHOLDER - Extract from Figma
    200: 'FIGMA_TOKEN_REQUIRED_secondary_200',  // PLACEHOLDER - Extract from Figma
    300: 'FIGMA_TOKEN_REQUIRED_secondary_300',  // PLACEHOLDER - Extract from Figma
    400: 'FIGMA_TOKEN_REQUIRED_secondary_400',  // PLACEHOLDER - Extract from Figma
    500: 'FIGMA_TOKEN_REQUIRED_secondary_500',  // PLACEHOLDER - Extract from Figma (main)
    600: 'FIGMA_TOKEN_REQUIRED_secondary_600',  // PLACEHOLDER - Extract from Figma
    700: 'FIGMA_TOKEN_REQUIRED_secondary_700',  // PLACEHOLDER - Extract from Figma
    800: 'FIGMA_TOKEN_REQUIRED_secondary_800',  // PLACEHOLDER - Extract from Figma
    900: 'FIGMA_TOKEN_REQUIRED_secondary_900',  // PLACEHOLDER - Extract from Figma
    950: 'FIGMA_TOKEN_REQUIRED_secondary_950'   // PLACEHOLDER - Extract from Figma
  },

  // Semantic colors - AWAITING Figma extraction
  success: {
    50: 'FIGMA_TOKEN_REQUIRED_success_50',    // PLACEHOLDER - Extract from Figma
    500: 'FIGMA_TOKEN_REQUIRED_success_500',  // PLACEHOLDER - Extract from Figma
    900: 'FIGMA_TOKEN_REQUIRED_success_900'   // PLACEHOLDER - Extract from Figma
  },

  warning: {
    50: 'FIGMA_TOKEN_REQUIRED_warning_50',    // PLACEHOLDER - Extract from Figma
    500: 'FIGMA_TOKEN_REQUIRED_warning_500',  // PLACEHOLDER - Extract from Figma
    900: 'FIGMA_TOKEN_REQUIRED_warning_900'   // PLACEHOLDER - Extract from Figma
  },

  error: {
    50: 'FIGMA_TOKEN_REQUIRED_error_50',    // PLACEHOLDER - Extract from Figma
    500: 'FIGMA_TOKEN_REQUIRED_error_500',  // PLACEHOLDER - Extract from Figma
    900: 'FIGMA_TOKEN_REQUIRED_error_900'   // PLACEHOLDER - Extract from Figma
  },

  // Neutral colors - AWAITING Figma extraction
  neutral: {
    50: 'FIGMA_TOKEN_REQUIRED_neutral_50',    // PLACEHOLDER - Extract from Figma
    100: 'FIGMA_TOKEN_REQUIRED_neutral_100',  // PLACEHOLDER - Extract from Figma
    200: 'FIGMA_TOKEN_REQUIRED_neutral_200',  // PLACEHOLDER - Extract from Figma
    300: 'FIGMA_TOKEN_REQUIRED_neutral_300',  // PLACEHOLDER - Extract from Figma
    400: 'FIGMA_TOKEN_REQUIRED_neutral_400',  // PLACEHOLDER - Extract from Figma
    500: 'FIGMA_TOKEN_REQUIRED_neutral_500',  // PLACEHOLDER - Extract from Figma
    600: 'FIGMA_TOKEN_REQUIRED_neutral_600',  // PLACEHOLDER - Extract from Figma
    700: 'FIGMA_TOKEN_REQUIRED_neutral_700',  // PLACEHOLDER - Extract from Figma
    800: 'FIGMA_TOKEN_REQUIRED_neutral_800',  // PLACEHOLDER - Extract from Figma
    900: 'FIGMA_TOKEN_REQUIRED_neutral_900',  // PLACEHOLDER - Extract from Figma
    950: 'FIGMA_TOKEN_REQUIRED_neutral_950'   // PLACEHOLDER - Extract from Figma
  }
} as const;

// Token metadata for tracking Figma sync
export const colorTokenMetadata = {
  figmaFileId: '',     // AWAITING Figma extraction
  lastSync: '',        // AWAITING Figma extraction
  tokenCount: 0,       // AWAITING Figma extraction
  version: '1.0.0',
  isExtracted: false,  // 🚨 CRITICAL: Must be true before using tokens
  placeholderMode: true // 🚨 CRITICAL: Must be false before using tokens
} as const;

// Token validation helper
export const validateColorTokens = () => {
  if (colorTokenMetadata.placeholderMode || !colorTokenMetadata.isExtracted) {
    throw new Error(
      '🚨 CRITICAL ERROR: Attempting to use placeholder color tokens!\n' +
      'All color tokens must be extracted from Figma before component development.\n' +
      'Run `npm run extract-figma-tokens` first.'
    );
  }
  return true;
};

// Helper to check if token is placeholder
export const isPlaceholderToken = (tokenValue: string): boolean => {
  return typeof tokenValue === 'string' && tokenValue.startsWith('FIGMA_TOKEN_REQUIRED_');
};

// Type exports for TypeScript support
export type ColorTokens = typeof colors;
export type ColorKey = keyof ColorTokens;
export type ColorShade = keyof ColorTokens[ColorKey];
// Design tokens for spacing - AUTO-GENERATED FROM FIGMA
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

export const spacing = {
  // 🚨 CRITICAL: These are PLACEHOLDER values - DO NOT USE in components!
  // All values must be extracted from Figma before component development
  
  xs: 'FIGMA_TOKEN_REQUIRED_spacing_xs',    // PLACEHOLDER - Extract from Figma
  sm: 'FIGMA_TOKEN_REQUIRED_spacing_sm',    // PLACEHOLDER - Extract from Figma
  md: 'FIGMA_TOKEN_REQUIRED_spacing_md',    // PLACEHOLDER - Extract from Figma
  lg: 'FIGMA_TOKEN_REQUIRED_spacing_lg',    // PLACEHOLDER - Extract from Figma
  xl: 'FIGMA_TOKEN_REQUIRED_spacing_xl',    // PLACEHOLDER - Extract from Figma
  '2xl': 'FIGMA_TOKEN_REQUIRED_spacing_2xl', // PLACEHOLDER - Extract from Figma
  '3xl': 'FIGMA_TOKEN_REQUIRED_spacing_3xl'  // PLACEHOLDER - Extract from Figma
} as const;

// Component-specific spacing - AWAITING Figma extraction
export const componentSpacing = {
  // 🚨 CRITICAL: These are PLACEHOLDER values - DO NOT USE in components!
  
  // Button padding - AWAITING Figma extraction
  button: {
    sm: { x: 'FIGMA_TOKEN_REQUIRED_button_sm_x', y: 'FIGMA_TOKEN_REQUIRED_button_sm_y' },
    md: { x: 'FIGMA_TOKEN_REQUIRED_button_md_x', y: 'FIGMA_TOKEN_REQUIRED_button_md_y' },
    lg: { x: 'FIGMA_TOKEN_REQUIRED_button_lg_x', y: 'FIGMA_TOKEN_REQUIRED_button_lg_y' }
  },
  
  // Input padding - AWAITING Figma extraction
  input: {
    sm: { x: 'FIGMA_TOKEN_REQUIRED_input_sm_x', y: 'FIGMA_TOKEN_REQUIRED_input_sm_y' },
    md: { x: 'FIGMA_TOKEN_REQUIRED_input_md_x', y: 'FIGMA_TOKEN_REQUIRED_input_md_y' },
    lg: { x: 'FIGMA_TOKEN_REQUIRED_input_lg_x', y: 'FIGMA_TOKEN_REQUIRED_input_lg_y' }
  },

  // Card padding - AWAITING Figma extraction
  card: {
    sm: 'FIGMA_TOKEN_REQUIRED_card_sm_padding',
    md: 'FIGMA_TOKEN_REQUIRED_card_md_padding',
    lg: 'FIGMA_TOKEN_REQUIRED_card_lg_padding'
  },

  // Layout spacing - AWAITING Figma extraction
  layout: {
    section: 'FIGMA_TOKEN_REQUIRED_section_spacing',
    container: 'FIGMA_TOKEN_REQUIRED_container_spacing',
    grid: 'FIGMA_TOKEN_REQUIRED_grid_gap'
  }
} as const;

// Gap spacing for flex/grid layouts - AWAITING Figma extraction
export const gap = {
  xs: 'FIGMA_TOKEN_REQUIRED_gap_xs',    // PLACEHOLDER - Extract from Figma
  sm: 'FIGMA_TOKEN_REQUIRED_gap_sm',    // PLACEHOLDER - Extract from Figma
  md: 'FIGMA_TOKEN_REQUIRED_gap_md',    // PLACEHOLDER - Extract from Figma
  lg: 'FIGMA_TOKEN_REQUIRED_gap_lg',    // PLACEHOLDER - Extract from Figma
  xl: 'FIGMA_TOKEN_REQUIRED_gap_xl'     // PLACEHOLDER - Extract from Figma
} as const;

// Token metadata for tracking Figma sync
export const spacingTokenMetadata = {
  figmaFileId: '',     // AWAITING Figma extraction
  lastSync: '',        // AWAITING Figma extraction
  tokenCount: 0,       // AWAITING Figma extraction
  version: '1.0.0',
  isExtracted: false,  // 🚨 CRITICAL: Must be true before using tokens
  placeholderMode: true // 🚨 CRITICAL: Must be false before using tokens
} as const;

// Token validation helper
export const validateSpacingTokens = () => {
  if (spacingTokenMetadata.placeholderMode || !spacingTokenMetadata.isExtracted) {
    throw new Error(
      '🚨 CRITICAL ERROR: Attempting to use placeholder spacing tokens!\n' +
      'All spacing tokens must be extracted from Figma before component development.\n' +
      'Run `npm run extract-figma-tokens` first.'
    );
  }
  return true;
};

// Type exports for TypeScript support
export type SpacingTokens = typeof spacing;
export type SpacingKey = keyof SpacingTokens;
export type ComponentSpacingTokens = typeof componentSpacing;
export type GapTokens = typeof gap;
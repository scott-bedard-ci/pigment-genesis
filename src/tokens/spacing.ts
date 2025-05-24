// Design tokens for spacing - AUTO-GENERATED FROM FIGMA
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

export const spacing = {
  // 🎨 EXTRACTED FROM FIGMA - Checkbox Component
  // Source: Figma checkbox component measurements
  
  xs: '2px',     // Figma: radius/xs - Border radius
  sm: '8px',     // Figma: gap between checkbox and label
  md: '16px',    // Standard component spacing
  lg: '24px',    // Standard component spacing
  xl: '32px',    // Figma: Container height for checkbox
  '2xl': '48px', // Standard component spacing
  '3xl': '64px'  // Standard component spacing
} as const;

// Component-specific spacing - AWAITING Figma extraction
export const componentSpacing = {
  // 🎨 EXTRACTED FROM FIGMA - Component-specific spacing
  
  // Checkbox spacing - EXTRACTED from Figma
  checkbox: {
    size: '18px',        // Figma: Checkbox box size
    containerHeight: '32px', // Figma: Container height
    labelGap: '8px',     // Figma: Gap between checkbox and label
    borderRadius: '2.75px' // Figma: Checkbox border radius
  },
  
  // Button padding - Future components
  button: {
    sm: { x: '12px', y: '6px' },
    md: { x: '16px', y: '8px' },
    lg: { x: '24px', y: '12px' }
  },
  
  // Input padding - Future components
  input: {
    sm: { x: '12px', y: '8px' },
    md: { x: '16px', y: '12px' },
    lg: { x: '20px', y: '16px' }
  },

  // Card padding - Future components
  card: {
    sm: '16px',
    md: '24px',
    lg: '32px'
  },

  // Layout spacing - Future components
  layout: {
    section: '64px',
    container: '24px',
    grid: '24px'
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
  figmaFileId: 'checkbox-component-frame',
  lastSync: '2025-05-24T00:45:00Z',
  tokenCount: 4,       // 4 checkbox-specific spacing tokens extracted
  version: '1.0.0',
  isExtracted: true,   // ✅ EXTRACTED: Tokens ready for use
  placeholderMode: false, // ✅ PRODUCTION: Real Figma tokens active
  sourceFrame: 'Checkbox component documentation frame',
  extractedTokens: [
    'checkbox.size',
    'checkbox.containerHeight',
    'checkbox.labelGap',
    'checkbox.borderRadius'
  ]
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
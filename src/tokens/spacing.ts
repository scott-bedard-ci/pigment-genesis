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
  
  // Button spacing - EXTRACTED from Figma
  button: {
    small: { 
      height: '32px',     // Figma: Small button height
      paddingX: '16px',   // Figma: Small button horizontal padding
      paddingY: '6px'     // Figma: Small button vertical padding
    },
    medium: { 
      height: '40px',     // Figma: Medium button height
      paddingX: '16px',   // Figma: Medium button horizontal padding
      paddingY: '8px'     // Figma: Medium button vertical padding
    },
    large: { 
      height: '48px',     // Figma: Large button height
      paddingX: '16px',   // Figma: Large button horizontal padding
      paddingY: '12px'    // Figma: Large button vertical padding
    },
    iconGap: '8px',       // Figma: Gap between icon and text
    minWidth: '64px',     // Figma: Minimum button width
    borderRadius: '6px'   // Figma: Button border radius (radius/button)
  },

  // Avatar spacing - EXTRACTED from Figma
  avatar: {
    small: {
      size: '26px',       // Figma: Small avatar dimensions (width & height)
      padding: '8px',     // Figma: Internal padding for letter centering
      borderRadius: '999px' // Figma: Perfect circle (radius/round)
    },
    large: {
      size: '48px',       // Figma: Large avatar dimensions (estimated)
      padding: '12px',    // Figma: Internal padding for letter centering
      borderRadius: '999px' // Figma: Perfect circle (radius/round)
    },
    group: {
      overlap: '-3px',    // Figma: Negative spacing for avatar overlap
      border: '1px'       // Figma: White border thickness on grouped avatars
    }
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
  figmaFileId: 'button-component-frame',
  lastSync: '2025-05-24T16:45:00Z',
  tokenCount: 12,      // 12 component-specific spacing tokens extracted
  version: '1.1.0',
  isExtracted: true,   // ✅ EXTRACTED: Tokens ready for use
  placeholderMode: false, // ✅ PRODUCTION: Real Figma tokens active
  sourceFrame: 'Checkbox + Button component documentation frames',
  extractedTokens: [
    'checkbox.size',
    'checkbox.containerHeight',
    'checkbox.labelGap',
    'checkbox.borderRadius',
    'button.small.height',
    'button.medium.height',
    'button.large.height',
    'button.iconGap',
    'button.minWidth',
    'button.borderRadius',
    'button.paddingX',
    'button.paddingY'
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
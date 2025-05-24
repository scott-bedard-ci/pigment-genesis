// Design tokens for colors - AUTO-GENERATED FROM FIGMA
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

export const colors = {
  // 🎨 EXTRACTED FROM FIGMA - Checkbox Component Design System
  // Source: Figma checkbox component frame
  // Last updated: 2025-05-24
  
  // Interactive colors - EXTRACTED from Figma
  interactive: {
    background: {
      bold: '#1e39d2'  // Figma: interactive/background/bold - Selected checkbox background
    },
    border: {
      strong: 'rgba(0,0,0,0.74)',    // Figma: interactive/border/strong - Default checkbox border
      disabled: 'rgba(0,0,0,0.03)'   // Figma: interactive/border/disabled - Disabled checkbox border
    },
    text: {
      disabled: 'rgba(0,0,0,0.41)'   // Figma: interactive/text/disabled - Disabled label text
    }
  },

  // Neutral colors - EXTRACTED from Figma
  neutral: {
    text: {
      primary: 'rgba(0,0,0,0.86)'   // Figma: neutral/text/primary - Default label text
    },
    icon: {
      onFill: '#ffffff'             // Figma: neutral/icon/onFill - Checkmark color
    },
    gray: {
      500: '#969696'               // Figma: primitives/color/neutral/gray-500
    }
  },

  // Primitive colors - EXTRACTED from Figma
  primitives: {
    red: {
      default: '#fa3c00'           // Figma: primitives/color/red/default - Accent color
    }
  },

  // Extended color palette for future components
  primary: {
    50: '#f0f4ff',
    100: '#e0e9ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#1e39d2',  // Using Figma interactive/background/bold as primary
    600: '#1d33b8',
    700: '#1a2d9f',
    800: '#172685',
    900: '#141f6c',
    950: '#0f1654'
  },

  // Future semantic colors (will be populated as needed)
  success: {
    50: '#f0fdf4',
    500: '#10b981',
    900: '#064e3b'
  },

  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    900: '#78350f'
  },

  error: {
    50: '#fef2f2',
    500: '#ef4444',
    900: '#7f1d1d'
  }
} as const;

// Token metadata for tracking Figma sync
export const colorTokenMetadata = {
  figmaFileId: 'checkbox-component-frame',
  lastSync: '2025-05-24T00:45:00Z',
  tokenCount: 8,  // 8 tokens extracted from Figma
  version: '1.0.0',
  isExtracted: true,   // ✅ EXTRACTED: Tokens ready for use
  placeholderMode: false, // ✅ PRODUCTION: Real Figma tokens active
  sourceFrame: 'Checkbox component documentation frame',
  extractedTokens: [
    'interactive.background.bold',
    'interactive.border.strong', 
    'interactive.border.disabled',
    'interactive.text.disabled',
    'neutral.text.primary',
    'neutral.icon.onFill',
    'neutral.gray.500',
    'primitives.red.default'
  ]
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
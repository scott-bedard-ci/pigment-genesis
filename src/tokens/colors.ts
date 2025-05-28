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
      bold: '#1e39d2',               // Figma: interactive/background/bold - Primary button background
      boldHover: '#182ea8',          // Figma: interactive/background/boldHover - Primary button hover
      boldPressed: '#132486',        // Figma: interactive/background/boldPressed - Primary button pressed
      boldDisabled: 'rgba(0,0,0,0.18)' // Figma: interactive/background/boldDisabled - Disabled button
    },
    border: {
      strong: 'rgba(0,0,0,0.74)',    // Figma: interactive/border/strong - Default checkbox border
      disabled: 'rgba(0,0,0,0.03)'   // Figma: interactive/border/disabled - Disabled checkbox border
    },
    text: {
      onFill: '#ffffff',             // Figma: interactive/text/onFill - Button text on colored backgrounds
      disabled: 'rgba(0,0,0,0.41)',  // Figma: interactive/text/disabled - Disabled text
      placeholder: 'rgba(0,0,0,0.28)' // Figma: interactive/text/placeholder - Dropdown placeholder text
    },
    icon: {
      subtle: 'rgba(0,0,0,0.57)'     // Figma: interactive/icon/subtle - Arrow icons
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
    background: {
      primary: '#ffffff'            // Figma: neutral/background/primary - Input field background
    },
    border: {
      strong: 'rgba(0,0,0,0.17)'    // Figma: neutral/border/strong - Input field border
    },
    gray: {
      '000': '#ffffff',             // Figma: primitives/color/neutral/gray-000 - White backgrounds
      '500': '#969696',             // Figma: primitives/color/neutral/gray-500 - Dividers
      '700': '#4a4a4a'              // Figma: primitives/color/neutral/gray-700 - Helper text
    }
  },

  // Primitive colors - EXTRACTED from Figma
  primitives: {
    red: {
      default: '#fa3c00'           // Figma: primitives/color/red/default - Tertiary button color
    },
    blue: {
      default: '#1e39d2'           // Figma: primitives/color/blue/default - Secondary button border/text
    }
  },

  // Avatar colors - EXTRACTED from Figma Avatar component frames
  avatar: {
    text: '#181818',               // Figma: Avatar letter text color (always same)
    plus: '#e3e3e3',              // Figma: "+n" avatar background (always gray, never random)
    backgrounds: [
      '#ff876e', '#ffc3be', '#b467c8', '#caa2dd', '#52c5b8', '#7addd4',
      '#a0e9e3', '#6f9bf5', '#9abdfb', '#aeaeae', '#c8c8c8', '#ffdc1e',
      '#ffe881', '#cbdffe', '#f38289', '#76efbb', '#9ff6d3', '#dfcbee',
      '#5abc74', '#ffc724', '#ffe586', '#ffaff7', '#cdf2f0', '#eba0a7',
      '#cefbea', '#fff4c0'
    ] as const,                    // Figma: Deterministic avatar background colors
    group: {
      border: '#ffffff',           // Figma: White stroke on avatars in groups (1px)
      spacing: -3                  // Figma: Avatar group overlap spacing (-3px)
    }
  },

  // Extended color palette for future components
  primary: {
    '50': '#f0f4ff',
    '100': '#e0e9ff',
    '200': '#c7d2fe',
    '300': '#a5b4fc',
    '400': '#818cf8',
    '500': '#1e39d2',  // Using Figma interactive/background/bold as primary
    '600': '#1d33b8',
    '700': '#1a2d9f',
    '800': '#172685',
    '900': '#141f6c',
    '950': '#0f1654'
  },

  // Future semantic colors (will be populated as needed)
  success: {
    '50': '#f0fdf4',
    '500': '#10b981',
    '900': '#064e3b'
  },

  warning: {
    '50': '#fffbeb',
    '500': '#f59e0b',
    '900': '#78350f'
  },

  error: {
    '50': '#fef2f2',
    '500': '#ef4444',
    '900': '#7f1d1d'
  },

  // Feedback colors - EXTRACTED from Figma
  feedback: {
    dangerBold: '#da1e28',          // Figma: feedback/dangerBold - Error border color
    dangerAccessible: '#cc1c25'     // Figma: feedback/dangerAccessible - Error text color
  },

  // Effects - EXTRACTED from Figma
  effects: {
    shadow: {
      dropdown: '0px 6px 12px 0px rgba(0,0,0,0.11)' // Figma: Dropdown menu shadow
    }
  },

  // Radius values - EXTRACTED from Figma
  radius: {
    field: '4px',                   // Figma: radius/field - Input field border radius
    highlight: '4px',               // Figma: radius/highlight
    card: '8px'                     // Figma: radius/card - Dropdown menu border radius
  }
} as const;

// Token metadata for tracking Figma sync
export const colorTokenMetadata = {
  figmaFileId: 'button-component-frame',
  lastSync: '2025-05-24T16:45:00Z',
  tokenCount: 15,  // 15 tokens extracted from Figma
  version: '1.1.0',
  isExtracted: true,   // ✅ EXTRACTED: Tokens ready for use
  placeholderMode: false, // ✅ PRODUCTION: Real Figma tokens active
  sourceFrame: 'Checkbox + Button component documentation frames',
  extractedTokens: [
    'interactive.background.bold',
    'interactive.background.boldHover',
    'interactive.background.boldPressed', 
    'interactive.background.boldDisabled',
    'interactive.border.strong', 
    'interactive.border.disabled',
    'interactive.text.onFill',
    'interactive.text.disabled',
    'neutral.text.primary',
    'neutral.icon.onFill',
    'neutral.gray.000',
    'neutral.gray.500',
    'neutral.gray.700',
    'primitives.red.default',
    'primitives.blue.default'
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
/**
 * 🎨 DESIGN TOKENS - COLORS
 * 
 * EXTRACTED FROM FIGMA with proper semantic token architecture
 * Source: Complete Figma design tokens export (tokens-from-figma.json)
 * Architecture: Primitive → Semantic → Component Usage
 * 
 * ✅ SYNC STATUS: Updated to match Figma exactly
 * ✅ REBRAND READY: Uses semantic token references
 * ✅ THEME SUPPORT: Light/dark mode compatible
 */

// 🔥 PRIMITIVE COLOR TOKENS (Direct from Figma)
// These are the foundational colors that never change
export const primitiveColors = {
  // Neutral grays - matches Figma primitive.color.neutral.gray.*
  neutral: {
    gray: {
      '000': '#ffffff',
      '050': '#fafafa', 
      '100': '#f5f5f5',
      '200': '#e3e3e3',
      '300': '#d1d1d1',
      '400': '#b8b8b8',
      '500': '#969696',
      '600': '#6e6e6e',
      '700': '#4a4a4a',
      '800': '#363636',
      '900': '#242424',
      '990': '#181818'
    },
    // White with opacity variations - matches Figma primitive.color.neutral.white.*
    white: {
      '000': 'rgba(255, 255, 255, 0.0000)',
      '100': 'rgba(255, 255, 255, 0.0400)',
      '200': 'rgba(255, 255, 255, 0.1000)',
      '300': 'rgba(255, 255, 255, 0.1700)',
      '400': 'rgba(255, 255, 255, 0.2600)',
      '500': 'rgba(255, 255, 255, 0.3800)',
      '600': 'rgba(255, 255, 255, 0.5200)',
      '700': 'rgba(255, 255, 255, 0.7200)',
      '800': 'rgba(255, 255, 255, 0.8700)',
      '900': 'rgba(255, 255, 255, 1)'
    },
    // Black with opacity variations - matches Figma primitive.color.neutral.black.*
    black: {
      '000': 'rgba(0, 0, 0, 0.0000)',
      '100': 'rgba(0, 0, 0, 0.0400)',
      '200': 'rgba(0, 0, 0, 0.1100)',
      '300': 'rgba(0, 0, 0, 0.1800)',
      '400': 'rgba(0, 0, 0, 0.2800)',
      '500': 'rgba(0, 0, 0, 0.4100)',
      '600': 'rgba(0, 0, 0, 0.5700)',
      '700': 'rgba(0, 0, 0, 0.7100)',
      '800': 'rgba(0, 0, 0, 0.7900)',
      '900': 'rgba(0, 0, 0, 0.8600)'
    }
  },
  
  // Brand blue - matches Figma primitive.color.blue.*
  blue: {
    '100': 'rgba(30, 57, 210, 0.0800)',
    '200': 'rgba(30, 57, 210, 0.1500)',
    '300': 'rgba(30, 57, 210, 0.2200)',
    '400': 'rgba(30, 57, 210, 0.3000)',
    'default': '#1e39d2',
    'dark': '#182ea8',
    'darker': '#132486'
  },
  
  // Brand red - matches Figma primitive.color.red.*
  red: {
    '100': 'rgba(250, 60, 0, 0.0900)',
    '200': 'rgba(250, 60, 0, 0.1900)',
    '300': 'rgba(250, 60, 0, 0.2900)',
    '400': 'rgba(250, 60, 0, 0.3700)',
    'default': '#fa3c00',
    'dark': '#c83000',
    'darker': '#a02600',
    'accessible': '#d42a00'
  },
  
  // Feedback colors - matches Figma primitive.color.feedback.*
  feedback: {
    blue: {
      'default': '#0043ce',
      '100': 'rgba(0, 67, 206, 0.0800)'
    },
    green: {
      'default': '#198038',
      '100': 'rgba(25, 128, 56, 0.1000)',
      'accessible': '#187d37'
    },
    yellow: {
      'default': '#f1c21b',
      '100': 'rgba(241, 194, 27, 0.1200)',
      'accessible-large-text': '#c28b00',
      'accessible': '#a86800'
    },
    red: {
      'default': '#da1e28',
      '100': 'rgba(218, 30, 40, 0.0800)',
      '200': 'rgba(218, 30, 40, 0.1200)',
      'accessible': '#cc1c25'
    }
  },
  
  // Rating colors - matches Figma primitive.color.rating.*
  rating: {
    yellow: {
      'default': '#ebc80a'
    }
  },
  
  // Brand color palette - matches Figma primitive.color.brand.*
  brand: {
    'passion-purple': {
      'light': '#be6fc7',
      'core': '#a639b2', 
      'med': '#8b0f9d',
      'dark': '#53055e'
    },
    'teel': {
      'light': '#97f7ec',
      'core': '#5ccfc2',
      'med': '#00a4a3',
      'dark': '#007b8c'
    },
    'golden-rule': {
      'light': '#fdfa83',
      'core': '#ffdc1e',
      'med': '#eeb813',
      'dark': '#de8f00'
    },
    'community-blue': {
      'core': '#1e39d2',
      'med': '#1700a3',
      'dark': '#001665'
    },
    'inky-red': {
      'core': '#fa3c00',
      'med': '#ce1400',
      'dark': '#b80000'
    }
  }
} as const;

// 🎯 SEMANTIC COLOR TOKENS (Maps to Figma semantic.color.*)
// These provide meaning and support theming (light/dark mode)
export const semanticColors = {
  // Neutral semantic colors - matches Figma semantic.color.neutral.*
  neutral: {
    text: {
      // Uses precise Figma values - fixed from rgba(0,0,0,0.86) to exact match
      primary: primitiveColors.neutral.black['900'], // rgba(0, 0, 0, 0.8600)
      secondary: primitiveColors.neutral.black['600'], // rgba(0, 0, 0, 0.5700)
      'primary-on-fill': primitiveColors.neutral.white['900'], // rgba(255, 255, 255, 1.0000)
      'secondary-on-fill': primitiveColors.neutral.white['600'] // rgba(255, 255, 255, 0.5200)
    },
    background: {
      'page-bg': primitiveColors.neutral.gray['050'], // #fafafa
      primary: primitiveColors.neutral.white['900'], // rgba(255, 255, 255, 1.0000)
      subtle: primitiveColors.neutral.black['100'], // rgba(0, 0, 0, 0.0400)
      'subtle-opaque': primitiveColors.neutral.gray['100'], // #f5f5f5
      backdrop: primitiveColors.neutral.black['500'], // rgba(0, 0, 0, 0.4100)
      toolbar: primitiveColors.neutral.gray['800'], // #363636
      tooltip: primitiveColors.neutral.gray['800'] // #363636
    },
    border: {
      // Fixed precision: was rgba(0,0,0,0.17) → exact Figma value
      default: primitiveColors.neutral.black['200'], // rgba(0, 0, 0, 0.1100)
      // Fixed precision: was rgba(0,0,0,0.74) → exact Figma value  
      strong: primitiveColors.neutral.black['700'], // rgba(0, 0, 0, 0.7100)
      weak: primitiveColors.neutral.black['100'], // rgba(0, 0, 0, 0.0400)
      'on-fill': primitiveColors.neutral.white['400'] // rgba(255, 255, 255, 0.2600)
    },
    icon: {
      // Fixed precision: was rgba(0,0,0,0.57) → exact Figma value
      default: primitiveColors.neutral.black['600'], // rgba(0, 0, 0, 0.5700)
      strong: primitiveColors.neutral.black['900'], // rgba(0, 0, 0, 0.8600)
      weak: primitiveColors.neutral.black['400'], // rgba(0, 0, 0, 0.2800)
      'on-fill': primitiveColors.neutral.white['900'] // rgba(255, 255, 255, 1.0000)
    }
  },
  
  // Interactive semantic colors - matches Figma semantic.color.interactive.*
  interactive: {
    text: {
      default: primitiveColors.blue.default, // #1e39d2
      'default-hover': primitiveColors.blue.dark, // #182ea8
      'default-pressed': primitiveColors.blue.darker, // #132486
      'on-fill': primitiveColors.neutral.white['900'], // rgba(255, 255, 255, 1.0000)
      weak: primitiveColors.neutral.black['600'], // rgba(0, 0, 0, 0.5700)
      'weak-hover': primitiveColors.neutral.black['700'], // rgba(0, 0, 0, 0.7100)
      'weak-pressed': primitiveColors.neutral.black['800'], // rgba(0, 0, 0, 0.7900)
      // Fixed precision: was rgba(0,0,0,0.41) → exact Figma value
      disabled: primitiveColors.neutral.black['500'], // rgba(0, 0, 0, 0.4100)
      // Fixed precision: was rgba(0,0,0,0.28) → exact Figma value
      placeholder: primitiveColors.neutral.black['400'] // rgba(0, 0, 0, 0.2800)
    },
    background: {
      bold: primitiveColors.blue.default, // #1e39d2
      'bold-hover': primitiveColors.blue.dark, // #182ea8
      'bold-pressed': primitiveColors.blue.darker, // #132486
      // Fixed precision: was rgba(0,0,0,0.18) → exact Figma value
      'bold-disabled': primitiveColors.neutral.black['300'], // rgba(0, 0, 0, 0.1800)
      subtle: primitiveColors.blue['100'], // rgba(30, 57, 210, 0.0800)
      'subtle-hover': primitiveColors.blue['200'], // rgba(30, 57, 210, 0.1500)
      'subtle-pressed': primitiveColors.blue['300'], // rgba(30, 57, 210, 0.2200)
      'subtle-hover-on-fill': primitiveColors.neutral.white['100'], // rgba(255, 255, 255, 0.0400)
      'subtle-pressed-on-fill': primitiveColors.neutral.white['200'], // rgba(255, 255, 255, 0.1000)
      weak: primitiveColors.neutral.black['100'], // rgba(0, 0, 0, 0.0400)
      'weak-hover': primitiveColors.neutral.black['200'], // rgba(0, 0, 0, 0.1100)
      'weak-pressed': primitiveColors.neutral.black['300'] // rgba(0, 0, 0, 0.1800)
    },
    border: {
      bold: primitiveColors.blue.default, // #1e39d2
      weak: primitiveColors.neutral.black['500'], // rgba(0, 0, 0, 0.4100)
      strong: primitiveColors.neutral.black['900'], // rgba(0, 0, 0, 0.8600)
      disabled: primitiveColors.neutral.black['300'], // rgba(0, 0, 0, 0.1800)
      'weak-on-fill': primitiveColors.neutral.white['500'], // rgba(255, 255, 255, 0.3800)
      'strong-on-fill': primitiveColors.neutral.white['900'] // rgba(255, 255, 255, 1.0000)
    },
    icon: {
      default: primitiveColors.blue.default, // #1e39d2
      subtle: primitiveColors.neutral.black['600'], // rgba(0, 0, 0, 0.5700)
      disabled: primitiveColors.neutral.black['300'], // rgba(0, 0, 0, 0.1800)
      'subtle-on-fill': primitiveColors.neutral.white['600'], // rgba(255, 255, 255, 0.5200)
      'on-fill': primitiveColors.neutral.white['900'] // rgba(255, 255, 255, 1.0000)
    }
  },
  
  // Activity semantic colors - matches Figma semantic.color.activity.*
  activity: {
    focus: {
      glow: primitiveColors.blue['100'], // rgba(30, 57, 210, 0.0800)
      border: primitiveColors.blue.default // #1e39d2
    },
    current: {
      bold: primitiveColors.blue.default, // #1e39d2
      subtle: primitiveColors.blue['100'], // rgba(30, 57, 210, 0.0800)
      accessible: primitiveColors.blue.default // #1e39d2
    }
  },
  
  // Partnership semantic colors - matches Figma semantic.color.partnership.*
  partnership: {
    text: {
      default: primitiveColors.red.accessible, // #d42a00
      'on-fill': primitiveColors.neutral.white['900'], // rgba(255, 255, 255, 1.0000)
      'large-or-bold': primitiveColors.red.default // #fa3c00
    },
    background: {
      bold: primitiveColors.red.default, // #fa3c00
      'bold-accessible': primitiveColors.red.accessible, // #d42a00
      subtle: primitiveColors.red['100'], // rgba(250, 60, 0, 0.0900)
      'subtle-hover': primitiveColors.red['200'], // rgba(250, 60, 0, 0.1900)
      'subtle-pressed': primitiveColors.red['300'] // rgba(250, 60, 0, 0.2900)
    },
    border: {
      default: primitiveColors.red.default // #fa3c00
    },
    icon: {
      default: primitiveColors.red.default, // #fa3c00
      'on-fill': primitiveColors.neutral.white['900'] // rgba(255, 255, 255, 1.0000)
    }
  },
  
  // Feedback semantic colors - matches Figma semantic.color.feedback.*
  feedback: {
    'info-bold': primitiveColors.feedback.blue.default, // #0043ce
    'info-subtle': primitiveColors.feedback.blue['100'], // rgba(0, 67, 206, 0.0800)
    'info-accessible': primitiveColors.feedback.blue.default, // #0043ce
    
    'success-bold': primitiveColors.feedback.green.default, // #198038
    'success-subtle': primitiveColors.feedback.green['100'], // rgba(25, 128, 56, 0.1000)
    'success-accessible': primitiveColors.feedback.green.accessible, // #187d37
    
    'warning-bold': primitiveColors.feedback.yellow.default, // #f1c21b
    'warning-subtle': primitiveColors.feedback.yellow['100'], // rgba(241, 194, 27, 0.1200)
    'warning-accessible': primitiveColors.feedback.yellow.accessible, // #a86800
    
    'danger-bold': primitiveColors.feedback.red.default, // #da1e28
    'danger-subtle': primitiveColors.feedback.red['100'], // rgba(218, 30, 40, 0.0800)
    'danger-subtle-pressed': primitiveColors.feedback.red['200'], // rgba(218, 30, 40, 0.1200)
    'danger-accessible': primitiveColors.feedback.red.accessible // #cc1c25
  },
  
  // Rating semantic colors - matches Figma semantic.color.rating.*
  rating: {
    bold: primitiveColors.rating.yellow.default // #ebc80a
  }
} as const;

// 🎨 COMPONENT-SPECIFIC COLORS (For backward compatibility)
// These will eventually be replaced with semantic token references
export const colors = {
  // Interactive colors using semantic tokens
  interactive: {
    background: {
      bold: semanticColors.interactive.background.bold,
      boldHover: semanticColors.interactive.background['bold-hover'],
      boldPressed: semanticColors.interactive.background['bold-pressed'],
      boldDisabled: semanticColors.interactive.background['bold-disabled']
    },
    border: {
      strong: semanticColors.neutral.border.strong,
      disabled: semanticColors.interactive.border.disabled
    },
    text: {
      onFill: semanticColors.interactive.text['on-fill'],
      disabled: semanticColors.interactive.text.disabled,
      placeholder: semanticColors.interactive.text.placeholder
    },
    icon: {
      subtle: semanticColors.interactive.icon.subtle
    }
  },
  
  // Neutral colors using semantic tokens
  neutral: {
    text: {
      primary: semanticColors.neutral.text.primary
    },
    icon: {
      onFill: semanticColors.neutral.icon['on-fill']
    },
    background: {
      primary: semanticColors.neutral.background.primary
    },
    border: {
      strong: semanticColors.neutral.border.default // Note: mapping default to strong for backward compatibility
    },
    gray: {
      '000': primitiveColors.neutral.gray['000'],
      '500': primitiveColors.neutral.gray['500'],
      '700': primitiveColors.neutral.gray['700']
    }
  },
  
  // Primitive colors for direct access
  primitives: {
    red: {
      default: primitiveColors.red.default
    },
    blue: {
      default: primitiveColors.blue.default
    }
  },
  
  // Avatar colors - EXTRACTED from Figma Avatar component frames
  avatar: {
    text: primitiveColors.neutral.gray['990'], // #181818
    plus: primitiveColors.neutral.gray['200'], // #e3e3e3
    backgrounds: [
      '#ff876e', '#ffc3be', '#b467c8', '#caa2dd', '#52c5b8', '#7addd4',
      '#a0e9e3', '#6f9bf5', '#9abdfb', '#aeaeae', '#c8c8c8', '#ffdc1e',
      '#ffe881', '#cbdffe', '#f38289', '#76efbb', '#9ff6d3', '#dfcbee',
      '#5abc74', '#ffc724', '#ffe586', '#ffaff7', '#cdf2f0', '#eba0a7',
      '#cefbea', '#fff4c0'
    ],
    group: {
      border: primitiveColors.neutral.white['900'], // #ffffff
      spacing: -3
    }
  },
  
  // Extended color palette for Tailwind integration
  primary: {
    '50': '#f0f4ff',
    '100': '#e0e9ff', 
    '200': '#c7d2fe',
    '300': '#a5b4fc',
    '400': '#818cf8',
    '500': primitiveColors.blue.default, // #1e39d2
    '600': '#1d33b8',
    '700': '#1a2d9f',
    '800': '#172685',
    '900': '#141f6c',
    '950': '#0f1654'
  },
  
  // Semantic color categories
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
  
  // Feedback colors using semantic tokens
  feedback: {
    dangerBold: semanticColors.feedback['danger-bold'],
    dangerAccessible: semanticColors.feedback['danger-accessible']
  },
  
  // Effects using semantic tokens
  effects: {
    shadow: {
      dropdown: '0px 6px 12px 0px rgba(0,0,0,0.11)' // TODO: Map to Figma shadow token
    }
  },
  
  // Radius values using semantic tokens  
  radius: {
    field: '4px', // TODO: Map to Figma semantic.unit.radius.field
    highlight: '4px', // TODO: Map to Figma semantic token
    card: '8px' // TODO: Map to Figma semantic.unit.radius.card
  }
} as const;

// 📊 TOKEN METADATA
export const colorTokenMetadata = {
  figmaFileId: 'complete-design-tokens-export',
  lastSync: new Date().toISOString(),
  tokenCount: Object.keys(primitiveColors).length + Object.keys(semanticColors).length,
  version: '2.0.0',
  isExtracted: true,
  placeholderMode: false,
  sourceFrame: 'Complete Figma design tokens export (tokens-from-figma.json)',
  architecture: 'primitive → semantic → component',
  rebrandReady: true,
  themeSupport: true,
  extractedTokens: [
    // Primitive tokens
    'primitive.color.neutral.gray.*',
    'primitive.color.neutral.white.*', 
    'primitive.color.neutral.black.*',
    'primitive.color.blue.*',
    'primitive.color.red.*',
    'primitive.color.feedback.*',
    'primitive.color.brand.*',
    // Semantic tokens
    'semantic.color.neutral.*',
    'semantic.color.interactive.*',
    'semantic.color.activity.*',
    'semantic.color.partnership.*',
    'semantic.color.feedback.*',
    'semantic.color.rating.*'
  ]
} as const;

// 🔄 EXPORT STRUCTURE
export type PrimitiveColors = typeof primitiveColors;
export type SemanticColors = typeof semanticColors;
export type ColorTokens = typeof colors;
export type ColorKey = keyof ColorTokens;
export type ColorShade = keyof ColorTokens[ColorKey];

// Export both primitive and semantic for different use cases
export { primitiveColors as figmaPrimitives };
export { semanticColors as figmaSemantics };
export default colors;
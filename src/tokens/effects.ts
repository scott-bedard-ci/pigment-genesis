// Design tokens for visual effects - AUTO-GENERATED FROM FIGMA
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

export const effects = {
  // Box shadows - will be populated from Figma design tokens
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',                                    // Figma: shadow-sm
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Figma: shadow-md
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // Figma: shadow-lg
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' // Figma: shadow-xl
  },

  // Border radius - will be populated from Figma design tokens
  borderRadius: {
    xs: '2px',   // Figma: border-radius-xs
    sm: '4px',   // Figma: border-radius-sm
    md: '6px',   // Figma: border-radius-md
    lg: '8px',   // Figma: border-radius-lg
    xl: '12px',  // Figma: border-radius-xl
    full: '9999px' // Figma: border-radius-full (pill shape)
  },

  // Border widths - will be populated from Figma design tokens
  borderWidth: {
    0: '0px',    // Figma: border-width-0
    1: '1px',    // Figma: border-width-1
    2: '2px',    // Figma: border-width-2
    4: '4px'     // Figma: border-width-4
  },

  // Opacity values - will be populated from Figma design tokens
  opacity: {
    0: '0',      // Figma: opacity-0
    5: '0.05',   // Figma: opacity-5
    10: '0.1',   // Figma: opacity-10
    20: '0.2',   // Figma: opacity-20
    25: '0.25',  // Figma: opacity-25
    30: '0.3',   // Figma: opacity-30
    40: '0.4',   // Figma: opacity-40
    50: '0.5',   // Figma: opacity-50
    60: '0.6',   // Figma: opacity-60
    70: '0.7',   // Figma: opacity-70
    75: '0.75',  // Figma: opacity-75
    80: '0.8',   // Figma: opacity-80
    90: '0.9',   // Figma: opacity-90
    95: '0.95',  // Figma: opacity-95
    100: '1'     // Figma: opacity-100
  },

  // Blur effects - will be populated from Figma design tokens
  blur: {
    sm: '4px',   // Figma: blur-sm
    md: '8px',   // Figma: blur-md
    lg: '16px',  // Figma: blur-lg
    xl: '24px'   // Figma: blur-xl
  },

  // Transition durations - will be populated from Figma design tokens
  transition: {
    duration: {
      fast: '150ms',    // Figma: transition-fast
      normal: '200ms',  // Figma: transition-normal
      slow: '300ms'     // Figma: transition-slow
    },
    timing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',     // Figma: transition-ease
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',  // Figma: transition-ease-in
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)', // Figma: transition-ease-out
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)' // Figma: transition-ease-in-out
    }
  },

  // Z-index scale - will be populated from Figma design tokens
  zIndex: {
    0: '0',      // Figma: z-index-0
    10: '10',    // Figma: z-index-10
    20: '20',    // Figma: z-index-20
    30: '30',    // Figma: z-index-30
    40: '40',    // Figma: z-index-40
    50: '50',    // Figma: z-index-50
    dropdown: '1000',  // Figma: z-index-dropdown
    modal: '1010',     // Figma: z-index-modal
    overlay: '1020',   // Figma: z-index-overlay
    tooltip: '1030'    // Figma: z-index-tooltip
  }
} as const;

// Component-specific effects - will be populated from Figma design tokens
export const componentEffects = {
  // Button effects
  button: {
    shadow: {
      default: effects.shadow.sm,  // Figma: button-shadow-default
      hover: effects.shadow.md,    // Figma: button-shadow-hover
      active: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)' // Figma: button-shadow-active
    },
    transition: `all ${effects.transition.duration.fast} ${effects.transition.timing.ease}` // Figma: button-transition
  },

  // Card effects
  card: {
    shadow: {
      default: effects.shadow.sm,  // Figma: card-shadow-default
      hover: effects.shadow.lg     // Figma: card-shadow-hover
    },
    borderRadius: effects.borderRadius.lg, // Figma: card-border-radius
    transition: `box-shadow ${effects.transition.duration.normal} ${effects.transition.timing.ease}` // Figma: card-transition
  },

  // Input effects
  input: {
    borderRadius: effects.borderRadius.md, // Figma: input-border-radius
    borderWidth: effects.borderWidth[1],   // Figma: input-border-width
    transition: `border-color ${effects.transition.duration.fast} ${effects.transition.timing.ease}` // Figma: input-transition
  },

  // Modal effects
  modal: {
    backdrop: {
      background: `rgb(0 0 0 / ${effects.opacity[50]})`, // Figma: modal-backdrop
      blur: effects.blur.sm // Figma: modal-backdrop-blur
    },
    shadow: effects.shadow.xl, // Figma: modal-shadow
    borderRadius: effects.borderRadius.lg // Figma: modal-border-radius
  }
} as const;

// Token metadata for tracking Figma sync
export const effectsTokenMetadata = {
  figmaFileId: '', // Will be populated when tokens are extracted
  lastSync: '',    // Will be populated when tokens are extracted
  tokenCount: 0,   // Will be populated when tokens are extracted
  version: '1.0.0'
} as const;

// Type exports for TypeScript support
export type EffectsTokens = typeof effects;
export type ShadowKey = keyof typeof effects.shadow;
export type BorderRadiusKey = keyof typeof effects.borderRadius;
export type OpacityKey = keyof typeof effects.opacity;
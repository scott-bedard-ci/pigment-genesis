/**
 * Design token type definitions
 * Provides type safety for Figma design tokens used throughout the system
 */

/**
 * Color token interface
 * Represents color values from Figma design tokens
 */
export interface ColorToken {
  /** Hex color value */
  value: string;
  
  /** Token name in Figma */
  name: string;
  
  /** Token description */
  description?: string;
  
  /** Figma node ID */
  figmaId?: string;
  
  /** Color space information */
  colorSpace?: 'sRGB' | 'P3' | 'rec2020';
  
  /** Accessibility contrast information */
  contrast?: {
    aa: boolean;
    aaa: boolean;
    ratio: number;
  };
}

/**
 * Color palette structure
 * Organized color tokens by semantic meaning
 */
export interface ColorPalette {
  /** Primary brand colors */
  primary: {
    50: ColorToken;
    100: ColorToken;
    200: ColorToken;
    300: ColorToken;
    400: ColorToken;
    500: ColorToken;
    600: ColorToken;
    700: ColorToken;
    800: ColorToken;
    900: ColorToken;
    950: ColorToken;
  };
  
  /** Secondary brand colors */
  secondary: {
    50: ColorToken;
    100: ColorToken;
    200: ColorToken;
    300: ColorToken;
    400: ColorToken;
    500: ColorToken;
    600: ColorToken;
    700: ColorToken;
    800: ColorToken;
    900: ColorToken;
    950: ColorToken;
  };
  
  /** Success/positive state colors */
  success: {
    50: ColorToken;
    100: ColorToken;
    200: ColorToken;
    300: ColorToken;
    400: ColorToken;
    500: ColorToken;
    600: ColorToken;
    700: ColorToken;
    800: ColorToken;
    900: ColorToken;
    950: ColorToken;
  };
  
  /** Warning/caution state colors */
  warning: {
    50: ColorToken;
    100: ColorToken;
    200: ColorToken;
    300: ColorToken;
    400: ColorToken;
    500: ColorToken;
    600: ColorToken;
    700: ColorToken;
    800: ColorToken;
    900: ColorToken;
    950: ColorToken;
  };
  
  /** Error/danger state colors */
  error: {
    50: ColorToken;
    100: ColorToken;
    200: ColorToken;
    300: ColorToken;
    400: ColorToken;
    500: ColorToken;
    600: ColorToken;
    700: ColorToken;
    800: ColorToken;
    900: ColorToken;
    950: ColorToken;
  };
  
  /** Neutral/gray colors */
  gray: {
    50: ColorToken;
    100: ColorToken;
    200: ColorToken;
    300: ColorToken;
    400: ColorToken;
    500: ColorToken;
    600: ColorToken;
    700: ColorToken;
    800: ColorToken;
    900: ColorToken;
    950: ColorToken;
  };
}

/**
 * Spacing token interface
 * Represents spacing values from Figma
 */
export interface SpacingToken {
  /** Pixel value */
  value: number;
  
  /** Token name in Figma */
  name: string;
  
  /** Token description */
  description?: string;
  
  /** Figma node ID */
  figmaId?: string;
  
  /** Rem equivalent value */
  rem?: number;
  
  /** Usage context */
  usage?: 'padding' | 'margin' | 'gap' | 'inset' | 'radius';
}

/**
 * Spacing scale structure
 * Organized spacing tokens by size
 */
export interface SpacingScale {
  /** Extra small spacing (4px) */
  xs: SpacingToken;
  
  /** Small spacing (8px) */
  sm: SpacingToken;
  
  /** Medium spacing (16px) */
  md: SpacingToken;
  
  /** Large spacing (24px) */
  lg: SpacingToken;
  
  /** Extra large spacing (32px) */
  xl: SpacingToken;
  
  /** 2x extra large spacing (48px) */
  '2xl': SpacingToken;
  
  /** 3x extra large spacing (64px) */
  '3xl': SpacingToken;
}

/**
 * Typography token interface
 * Represents typography values from Figma
 */
export interface TypographyToken {
  /** Font family */
  fontFamily: string;
  
  /** Font size in pixels */
  fontSize: number;
  
  /** Font weight */
  fontWeight: number | string;
  
  /** Line height */
  lineHeight: number | string;
  
  /** Letter spacing */
  letterSpacing?: number | string;
  
  /** Token name in Figma */
  name: string;
  
  /** Token description */
  description?: string;
  
  /** Figma node ID */
  figmaId?: string;
  
  /** Text case transformation */
  textCase?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  
  /** Text decoration */
  textDecoration?: 'none' | 'underline' | 'line-through';
}

/**
 * Typography scale structure
 * Organized typography tokens by size and purpose
 */
export interface TypographyScale {
  /** Display typography for large headings */
  display: {
    large: TypographyToken;
    medium: TypographyToken;
    small: TypographyToken;
  };
  
  /** Heading typography */
  heading: {
    h1: TypographyToken;
    h2: TypographyToken;
    h3: TypographyToken;
    h4: TypographyToken;
    h5: TypographyToken;
    h6: TypographyToken;
  };
  
  /** Body text typography */
  body: {
    large: TypographyToken;
    medium: TypographyToken;
    small: TypographyToken;
    extraSmall: TypographyToken;
  };
  
  /** Label typography for form fields */
  label: {
    large: TypographyToken;
    medium: TypographyToken;
    small: TypographyToken;
  };
  
  /** Caption typography for supplementary text */
  caption: {
    large: TypographyToken;
    medium: TypographyToken;
    small: TypographyToken;
  };
}

/**
 * Shadow/Effect token interface
 * Represents shadow and effect values from Figma
 */
export interface EffectToken {
  /** Effect type */
  type: 'dropShadow' | 'innerShadow' | 'blur' | 'backgroundBlur';
  
  /** Shadow color */
  color?: string;
  
  /** X offset */
  x?: number;
  
  /** Y offset */
  y?: number;
  
  /** Blur radius */
  blur: number;
  
  /** Spread radius */
  spread?: number;
  
  /** CSS box-shadow value */
  boxShadow?: string;
  
  /** Token name in Figma */
  name: string;
  
  /** Token description */
  description?: string;
  
  /** Figma node ID */
  figmaId?: string;
}

/**
 * Effect scale structure
 * Organized effect tokens by elevation level
 */
export interface EffectScale {
  /** No shadow */
  none: EffectToken;
  
  /** Extra small shadow */
  xs: EffectToken;
  
  /** Small shadow */
  sm: EffectToken;
  
  /** Medium shadow */
  md: EffectToken;
  
  /** Large shadow */
  lg: EffectToken;
  
  /** Extra large shadow */
  xl: EffectToken;
  
  /** 2x extra large shadow */
  '2xl': EffectToken;
}

/**
 * Border radius token interface
 * Represents border radius values from Figma
 */
export interface BorderRadiusToken {
  /** Pixel value */
  value: number;
  
  /** Token name in Figma */
  name: string;
  
  /** Token description */
  description?: string;
  
  /** Figma node ID */
  figmaId?: string;
  
  /** Usage context */
  usage?: 'button' | 'card' | 'input' | 'image' | 'container';
}

/**
 * Border radius scale structure
 * Organized border radius tokens by size
 */
export interface BorderRadiusScale {
  /** No radius */
  none: BorderRadiusToken;
  
  /** Extra small radius (2px) */
  xs: BorderRadiusToken;
  
  /** Small radius (4px) */
  sm: BorderRadiusToken;
  
  /** Medium radius (8px) */
  md: BorderRadiusToken;
  
  /** Large radius (12px) */
  lg: BorderRadiusToken;
  
  /** Extra large radius (16px) */
  xl: BorderRadiusToken;
  
  /** 2x extra large radius (24px) */
  '2xl': BorderRadiusToken;
  
  /** Full radius (50% / 9999px) */
  full: BorderRadiusToken;
}

/**
 * Breakpoint token interface
 * Represents responsive breakpoint values
 */
export interface BreakpointToken {
  /** Pixel value */
  value: number;
  
  /** Token name */
  name: string;
  
  /** Token description */
  description?: string;
  
  /** Minimum width for this breakpoint */
  min: number;
  
  /** Maximum width for this breakpoint */
  max?: number;
  
  /** Media query string */
  mediaQuery: string;
}

/**
 * Breakpoint scale structure
 * Organized responsive breakpoints
 */
export interface BreakpointScale {
  /** Extra small screens (mobile small) */
  xs: BreakpointToken;
  
  /** Small screens (mobile large) */
  sm: BreakpointToken;
  
  /** Medium screens (tablet) */
  md: BreakpointToken;
  
  /** Large screens (desktop) */
  lg: BreakpointToken;
  
  /** Extra large screens (desktop large) */
  xl: BreakpointToken;
  
  /** 2x extra large screens (desktop extra large) */
  '2xl': BreakpointToken;
}

/**
 * Animation token interface
 * Represents animation timing and easing values
 */
export interface AnimationToken {
  /** Duration in milliseconds */
  duration: number;
  
  /** Easing function */
  easing: string;
  
  /** Token name */
  name: string;
  
  /** Token description */
  description?: string;
  
  /** CSS transition value */
  transition?: string;
  
  /** Usage context */
  usage?: 'micro' | 'macro' | 'entrance' | 'exit' | 'emphasis';
}

/**
 * Animation scale structure
 * Organized animation tokens by speed and purpose
 */
export interface AnimationScale {
  /** Instant animations (0ms) */
  instant: AnimationToken;
  
  /** Fast animations (150ms) */
  fast: AnimationToken;
  
  /** Normal animations (200ms) */
  normal: AnimationToken;
  
  /** Slow animations (300ms) */
  slow: AnimationToken;
  
  /** Slower animations (500ms) */
  slower: AnimationToken;
}

/**
 * Complete design token system
 * Root interface containing all design tokens
 */
export interface DesignTokenSystem {
  /** Color tokens */
  colors: ColorPalette;
  
  /** Spacing tokens */
  spacing: SpacingScale;
  
  /** Typography tokens */
  typography: TypographyScale;
  
  /** Effect tokens (shadows, blur) */
  effects: EffectScale;
  
  /** Border radius tokens */
  borderRadius: BorderRadiusScale;
  
  /** Responsive breakpoint tokens */
  breakpoints: BreakpointScale;
  
  /** Animation timing tokens */
  animations: AnimationScale;
  
  /** Token system metadata */
  metadata: {
    /** Figma file ID */
    figmaFileId: string;
    
    /** Last sync timestamp */
    lastSync: string;
    
    /** Token version */
    version: string;
    
    /** Total token count */
    tokenCount: number;
    
    /** Generation timestamp */
    generatedAt: string;
  };
}

/**
 * Figma token extraction interfaces
 * For raw Figma API responses
 */

/**
 * Raw Figma color token
 */
export interface FigmaColorToken {
  id: string;
  name: string;
  value: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  description?: string;
  scopes: string[];
}

/**
 * Raw Figma spacing token
 */
export interface FigmaSpacingToken {
  id: string;
  name: string;
  value: number;
  description?: string;
  scopes: string[];
}

/**
 * Raw Figma typography token
 */
export interface FigmaTypographyToken {
  id: string;
  name: string;
  value: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing?: number;
    textCase?: string;
    textDecoration?: string;
  };
  description?: string;
  scopes: string[];
}

/**
 * Raw Figma effect token
 */
export interface FigmaEffectToken {
  id: string;
  name: string;
  value: {
    type: string;
    color?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    offset?: {
      x: number;
      y: number;
    };
    blur: number;
    spread?: number;
  };
  description?: string;
  scopes: string[];
}

/**
 * Token transformation utilities
 * Helper types for token processing
 */

/** Convert Figma color to hex string */
export type FigmaColorToHex = (color: FigmaColorToken['value']) => string;

/** Convert Figma typography to CSS properties */
export type FigmaTypographyToCSS = (typography: FigmaTypographyToken['value']) => {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  textTransform?: string;
  textDecoration?: string;
};

/** Convert Figma effect to CSS box-shadow */
export type FigmaEffectToCSS = (effect: FigmaEffectToken['value']) => string;

/**
 * Token validation interfaces
 * For ensuring token consistency and quality
 */
export interface TokenValidationResult {
  /** Whether the token is valid */
  valid: boolean;
  
  /** Validation errors */
  errors: string[];
  
  /** Validation warnings */
  warnings: string[];
  
  /** Token accessibility information */
  accessibility?: {
    contrastRatio?: number;
    wcagAA?: boolean;
    wcagAAA?: boolean;
  };
}

/**
 * Token usage tracking
 * For component-token relationship mapping
 */
export interface TokenUsage {
  /** Token name */
  tokenName: string;
  
  /** Components using this token */
  usedBy: string[];
  
  /** Usage count */
  usageCount: number;
  
  /** First used date */
  firstUsed: string;
  
  /** Last used date */
  lastUsed: string;
}

export default {
  ColorToken,
  ColorPalette,
  SpacingToken,
  SpacingScale,
  TypographyToken,
  TypographyScale,
  EffectToken,
  EffectScale,
  BorderRadiusToken,
  BorderRadiusScale,
  BreakpointToken,
  BreakpointScale,
  AnimationToken,
  AnimationScale,
  DesignTokenSystem,
  FigmaColorToken,
  FigmaSpacingToken,
  FigmaTypographyToken,
  FigmaEffectToken,
  TokenValidationResult,
  TokenUsage
};
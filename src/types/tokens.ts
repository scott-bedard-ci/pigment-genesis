// Design token type definitions for type-safe token usage
// These types ensure design tokens are used correctly throughout the system

import type { tokens } from '@/tokens';

/**
 * Color token types based on the design token structure
 */
export type ColorToken = keyof typeof tokens.colors;
export type ColorShade = keyof typeof tokens.colors.primary;

/**
 * Spacing token types
 */
export type SpacingToken = keyof typeof tokens.spacing;
export type ComponentSpacingToken = keyof typeof tokens.componentSpacing;
export type GapToken = keyof typeof tokens.gap;

/**
 * Typography token types
 */
export type TypographyToken = keyof typeof tokens.typography;
export type TextStyleToken = keyof typeof tokens.textStyles;
export type FontSizeToken = keyof typeof tokens.typography.fontSize;
export type FontWeightToken = keyof typeof tokens.typography.fontWeight;
export type FontFamilyToken = keyof typeof tokens.typography.fontFamily;

/**
 * Effect token types
 */
export type ShadowToken = keyof typeof tokens.effects.shadow;
export type BorderRadiusToken = keyof typeof tokens.effects.borderRadius;
export type OpacityToken = keyof typeof tokens.effects.opacity;
export type BlurToken = keyof typeof tokens.effects.blur;
export type ZIndexToken = keyof typeof tokens.effects.zIndex;

/**
 * Breakpoint token types
 */
export type BreakpointToken = keyof typeof tokens.breakpoints;

/**
 * Transition token types
 */
export type TransitionDurationToken = keyof typeof tokens.effects.transition.duration;
export type TransitionTimingToken = keyof typeof tokens.effects.transition.timing;

/**
 * Component-specific token types
 */
export type ButtonEffectToken = keyof typeof tokens.componentEffects.button;
export type CardEffectToken = keyof typeof tokens.componentEffects.card;
export type InputEffectToken = keyof typeof tokens.componentEffects.input;
export type ModalEffectToken = keyof typeof tokens.componentEffects.modal;

/**
 * Responsive pattern token types
 */
export type TouchTargetToken = keyof typeof tokens.responsivePatterns.touchTarget;
export type TypographyScaleToken = keyof typeof tokens.responsivePatterns.typographyScale;
export type SpacingScaleToken = keyof typeof tokens.responsivePatterns.spacingScale;

/**
 * Token value types for accessing actual values
 */
export interface ColorTokenValue {
  token: ColorToken;
  shade: ColorShade;
  value: string;
}

export interface SpacingTokenValue {
  token: SpacingToken;
  value: string;
}

export interface TypographyTokenValue {
  token: FontSizeToken;
  value: string;
}

/**
 * Token path types for deep token access
 */
export type ColorTokenPath = `colors.${ColorToken}.${ColorShade}`;
export type SpacingTokenPath = `spacing.${SpacingToken}`;
export type TypographyTokenPath = `typography.fontSize.${FontSizeToken}`;
export type EffectTokenPath = `effects.${keyof typeof tokens.effects}.${string}`;

/**
 * Token reference types for referencing other tokens
 */
export interface TokenReference {
  type: 'color' | 'spacing' | 'typography' | 'effect';
  path: string;
  value: any;
}

/**
 * Token alias types for creating semantic token names
 */
export interface TokenAlias {
  name: string;
  reference: TokenReference;
  description?: string;
}

/**
 * Design token metadata types
 */
export interface TokenMetadata {
  figmaFileId: string;
  lastSync: string;
  tokenCount: number;
  version: string;
}

/**
 * Token extraction types for Figma integration
 */
export interface FigmaTokenData {
  name: string;
  type: 'color' | 'spacing' | 'typography' | 'effect';
  value: any;
  description?: string;
  figmaId?: string;
}

export interface FigmaTokenCollection {
  colors: FigmaTokenData[];
  spacing: FigmaTokenData[];
  typography: FigmaTokenData[];
  effects: FigmaTokenData[];
  metadata: TokenMetadata;
}

/**
 * Token validation types
 */
export interface TokenValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export interface TokenValidationRule {
  name: string;
  validate: (token: FigmaTokenData) => boolean;
  message: string;
}

/**
 * Token transformation types
 */
export interface TokenTransformation {
  from: string;
  to: string;
  transform: (value: any) => any;
}

export interface TokenTransformationConfig {
  transformations: TokenTransformation[];
  output: 'css' | 'javascript' | 'typescript' | 'json' | 'swiftui';
}

/**
 * CSS Custom Property types for token usage
 */
export type CSSCustomProperty = `--pigment-${string}`;

export interface CSSTokenMapping {
  token: string;
  property: CSSCustomProperty;
  value: string;
}

/**
 * Token usage analytics types
 */
export interface TokenUsage {
  token: string;
  usageCount: number;
  components: string[];
  lastUsed: string;
}

export interface TokenAnalytics {
  totalTokens: number;
  usedTokens: number;
  unusedTokens: number;
  mostUsedTokens: TokenUsage[];
  leastUsedTokens: TokenUsage[];
}

/**
 * Token theme types for multiple brand support
 */
export interface TokenTheme {
  name: string;
  description?: string;
  tokens: Partial<typeof tokens>;
  metadata: TokenMetadata;
}

export interface TokenThemeCollection {
  default: TokenTheme;
  themes: Record<string, TokenTheme>;
  active: string;
}

/**
 * Token generation types for automated token creation
 */
export interface TokenGenerationConfig {
  baseColor: string;
  generateShades: boolean;
  shadeCount: number;
  spacingBase: number;
  spacingRatio: number;
  typographyScale: number;
}

export interface GeneratedTokenSet {
  colors: Record<string, Record<string, string>>;
  spacing: Record<string, string>;
  typography: Record<string, any>;
}

/**
 * Token documentation types
 */
export interface TokenDocumentation {
  token: string;
  description: string;
  usage: string[];
  examples: string[];
  relatedTokens: string[];
  deprecationNotice?: string;
}

export interface TokenDocumentationCollection {
  tokens: Record<string, TokenDocumentation>;
  lastUpdated: string;
  version: string;
}

/**
 * Utility types for token manipulation
 */
export type DeepTokenKey<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${DeepTokenKey<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

export type GetTokenValue<T, K extends string> = K extends `${infer K1}.${infer K2}`
  ? K1 extends keyof T
    ? T[K1] extends object
      ? GetTokenValue<T[K1], K2>
      : never
    : never
  : K extends keyof T
  ? T[K]
  : never;

/**
 * Token composition types for building complex designs
 */
export interface TokenComposition {
  name: string;
  tokens: {
    [key: string]: string | TokenReference;
  };
  description?: string;
}

export interface ComponentTokenComposition extends TokenComposition {
  component: string;
  states: Record<string, TokenComposition>;
}
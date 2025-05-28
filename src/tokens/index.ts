// Central export for all design tokens
// This file aggregates all token modules for easy import

import { colors, colorTokenMetadata } from './colors';
import { spacing, componentSpacing, gap, spacingTokenMetadata } from './spacing';
import { typography, textStyles, typographyTokenMetadata } from './typography';
import { breakpoints, breakpointValues, containerMaxWidths, mediaQueries, responsivePatterns } from './breakpoints';
import { effects, componentEffects, effectsTokenMetadata } from './effects';
import { iconTokens } from './icons';

// Re-export individual token modules
export { colors, colorTokenMetadata } from './colors';
export type { ColorTokens, ColorKey, ColorShade } from './colors';

export { spacing, componentSpacing, gap, spacingTokenMetadata } from './spacing';
export type { SpacingTokens, SpacingKey, ComponentSpacingTokens, GapTokens } from './spacing';

export { typography, textStyles, typographyTokenMetadata } from './typography';
export type { TypographyTokens, TextStyleKey, FontSizeKey, FontWeightKey } from './typography';

export { breakpoints, breakpointValues, containerMaxWidths, mediaQueries, responsivePatterns } from './breakpoints';
export type { BreakpointKey, BreakpointValue, MediaQuery } from './breakpoints';

export { effects, componentEffects, effectsTokenMetadata } from './effects';
export type { EffectsTokens, ShadowKey, BorderRadiusKey, OpacityKey } from './effects';

export { iconTokens } from './icons';
export type { IconSize, IconColor, IconSpacing } from './icons';

// Aggregated tokens object for easy access
export const tokens = {
  colors,
  spacing,
  componentSpacing,
  gap,
  typography,
  textStyles,
  breakpoints,
  breakpointValues,
  containerMaxWidths,
  mediaQueries,
  responsivePatterns,
  effects,
  componentEffects,
  icons: iconTokens
} as const;

// Global token metadata
export const tokenMetadata = {
  colors: colorTokenMetadata,
  spacing: spacingTokenMetadata,
  typography: typographyTokenMetadata,
  effects: effectsTokenMetadata,
  version: '1.0.0',
  lastGlobalUpdate: '', // Will be populated when tokens are extracted from Figma
  figmaFileId: ''       // Will be populated when tokens are extracted from Figma
} as const;

// Type for the entire token system
export type Tokens = typeof tokens;
export type GlobalTokenMetadata = typeof tokenMetadata;
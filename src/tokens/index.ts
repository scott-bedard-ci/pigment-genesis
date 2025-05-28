/**
 * 🎨 DESIGN TOKENS - MAIN INDEX
 * 
 * Central export for all design tokens with proper Figma semantic architecture
 * Architecture: Primitive → Semantic → Component Usage
 * 
 * ✅ SYNC STATUS: Updated to match Figma exactly
 * ✅ REBRAND READY: Uses semantic token references  
 * ✅ THEME SUPPORT: Light/dark mode compatible
 */

import { 
  colors, 
  colorTokenMetadata, 
  primitiveColors, 
  semanticColors 
} from './colors';
import { 
  spacing, 
  componentSpacing, 
  gap, 
  spacingTokenMetadata,
  primitiveSpacing,
  semanticSpacing
} from './spacing';
import { typography, textStyles, typographyTokenMetadata } from './typography';
import { breakpoints, breakpointValues, containerMaxWidths, mediaQueries, responsivePatterns } from './breakpoints';
import { effects, componentEffects, effectsTokenMetadata } from './effects';
import { iconTokens } from './icons';

// Re-export individual token modules with enhanced exports
export { 
  colors, 
  colorTokenMetadata,
  primitiveColors,
  semanticColors,
  // Legacy exports for backward compatibility
  primitiveColors as figmaPrimitives,
  semanticColors as figmaSemantics
} from './colors';
export type { 
  ColorTokens, 
  ColorKey, 
  ColorShade,
  PrimitiveColors,
  SemanticColors
} from './colors';

export { 
  spacing, 
  componentSpacing, 
  gap, 
  spacingTokenMetadata,
  primitiveSpacing,
  semanticSpacing,
  // Legacy exports for backward compatibility
  primitiveSpacing as figmaPrimitiveSpacing,
  semanticSpacing as figmaSemanticSpacing
} from './spacing';
export type { 
  SpacingTokens, 
  SpacingKey, 
  ComponentSpacingTokens, 
  GapTokens,
  PrimitiveSpacing,
  SemanticSpacing
} from './spacing';

export { typography, textStyles, typographyTokenMetadata } from './typography';
export type { TypographyTokens, TextStyleKey, FontSizeKey, FontWeightKey } from './typography';

export { breakpoints, breakpointValues, containerMaxWidths, mediaQueries, responsivePatterns } from './breakpoints';
export type { BreakpointKey, BreakpointValue, MediaQuery } from './breakpoints';

export { effects, componentEffects, effectsTokenMetadata } from './effects';
export type { EffectsTokens, ShadowKey, BorderRadiusKey, OpacityKey } from './effects';

export { iconTokens } from './icons';
export type { IconSize, IconColor, IconSpacing } from './icons';

// 🎯 UNIFIED TOKEN OBJECT
// Enhanced with proper Figma architecture while maintaining backward compatibility
export const tokens = {
  // Current component-friendly interface (backward compatibility)
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
  icons: iconTokens,
  
  // NEW: Direct Figma token access for advanced usage and rebrand capability
  figma: {
    primitives: {
      colors: primitiveColors,
      spacing: primitiveSpacing
    },
    semantics: {
      colors: semanticColors,
      spacing: semanticSpacing
    }
  }
} as const;

// 📊 TOKEN METADATA
// Enhanced metadata with comprehensive Figma sync tracking
export const tokenMetadata = {
  colors: colorTokenMetadata,
  spacing: spacingTokenMetadata,
  typography: typographyTokenMetadata,
  effects: effectsTokenMetadata,
  
  // Global metadata
  version: '2.0.0',
  lastGlobalUpdate: new Date().toISOString(),
  figmaFileId: 'complete-design-tokens-export',
  
  // Architecture information
  architecture: 'primitive → semantic → component',
  hierarchy: {
    colors: 'primitive.color.* → semantic.color.* → component usage',
    spacing: 'primitive.space.* → semantic.unit.space.* → component usage'
  },
  
  // Capability flags
  rebrandReady: true,
  themeSupport: true,
  
  // Sync status tracking
  syncStatus: {
    colors: 'synced',        // ✅ Fully synced with Figma
    spacing: 'synced',       // ✅ Fully synced with Figma  
    typography: 'partial',   // ⚠️ Needs more Figma typography tokens
    effects: 'needs-sync',   // ❌ Missing Figma effect tokens
    icons: 'partial'         // ⚠️ Some icons still need Figma extraction
  },
  
  // Migration notes
  breaking_changes_v2: [
    'RGBA precision updated to match Figma exactly (4 decimal places)',
    'Gap tokens replaced placeholders with semantic token references',
    'Added primitive and semantic token layers for rebrand support',
    'Border strong precision fixed: rgba(0,0,0,0.74) → rgba(0,0,0,0.7100)'
  ]
} as const;

// Enhanced types
export type Tokens = typeof tokens;
export type GlobalTokenMetadata = typeof tokenMetadata;
// Token Validation System - Prevents placeholder token usage in components
// 🚨 CRITICAL: This system prevents default tokens from leaking into components

import { colorTokenMetadata } from '../tokens/colors';
import { spacingTokenMetadata } from '../tokens/spacing';
import { typographyTokenMetadata } from '../tokens/typography';

/**
 * Validates that all design tokens have been extracted from Figma
 * Throws error if placeholder tokens are detected
 */
export const validateAllTokens = (): boolean => {
  const errors: string[] = [];

  // Check color tokens
  if (colorTokenMetadata.placeholderMode || !colorTokenMetadata.isExtracted) {
    errors.push('🎨 Color tokens have not been extracted from Figma');
  }

  // Check spacing tokens
  if (spacingTokenMetadata.placeholderMode || !spacingTokenMetadata.isExtracted) {
    errors.push('📏 Spacing tokens have not been extracted from Figma');
  }

  // Check typography tokens
  if (typographyTokenMetadata.placeholderMode || !typographyTokenMetadata.isExtracted) {
    errors.push('📝 Typography tokens have not been extracted from Figma');
  }

  if (errors.length > 0) {
    throw new Error(
      '🚨 CRITICAL ERROR: Cannot use components with placeholder tokens!\n\n' +
      'Issues found:\n' +
      errors.map(error => `  • ${error}`).join('\n') +
      '\n\n' +
      '✅ Required steps:\n' +
      '  1. Run `npm run extract-figma-tokens`\n' +
      '  2. Provide Figma frame links with design tokens\n' +
      '  3. Verify token extraction completed successfully\n\n' +
      '🔍 This validation prevents default tokens from appearing in components!'
    );
  }

  return true;
};

/**
 * Validates a specific token value to ensure it's not a placeholder
 */
export const validateTokenValue = (tokenValue: any, tokenName: string): boolean => {
  // Check for placeholder token patterns
  if (typeof tokenValue === 'string' && tokenValue.includes('FIGMA_TOKEN_REQUIRED')) {
    throw new Error(
      `🚨 CRITICAL ERROR: Attempting to use placeholder token "${tokenName}"!\n` +
      `Value: ${tokenValue}\n\n` +
      'This token must be extracted from Figma before use.\n' +
      'Run `npm run extract-figma-tokens` first.'
    );
  }
  return true;
};

/**
 * Component-safe token accessor with validation
 * Use this in components instead of direct token access
 */
export const safeTokenAccess = <T>(
  tokenValue: T,
  tokenName: string,
  fallbackMessage?: string
): T => {
  validateTokenValue(tokenValue, tokenName);
  return tokenValue;
};

/**
 * Pre-build validation for component development
 * Call this before creating any component
 */
export const validateComponentReadiness = (): boolean => {
  try {
    validateAllTokens();
    console.log('✅ Token validation passed - Ready for component development');
    return true;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

/**
 * Development mode warning system
 * Shows warnings in development when placeholder tokens are detected
 */
export const showDevelopmentWarnings = (): void => {
  if (process.env.NODE_ENV !== 'development') return;

  const warnings: string[] = [];

  if (colorTokenMetadata.placeholderMode) {
    warnings.push('🎨 Color tokens are in placeholder mode');
  }
  if (spacingTokenMetadata.placeholderMode) {
    warnings.push('📏 Spacing tokens are in placeholder mode');
  }
  if (typographyTokenMetadata.placeholderMode) {
    warnings.push('📝 Typography tokens are in placeholder mode');
  }

  if (warnings.length > 0) {
    console.warn(
      '⚠️  DEVELOPMENT WARNING: Placeholder tokens detected\n' +
      warnings.map(w => `  ${w}`).join('\n') +
      '\n\nExtract tokens from Figma before building components!'
    );
  }
};

/**
 * Token extraction status checker
 * Returns detailed information about token extraction status
 */
export const getTokenExtractionStatus = () => {
  return {
    colors: {
      extracted: colorTokenMetadata.isExtracted,
      placeholder: colorTokenMetadata.placeholderMode,
      figmaFileId: colorTokenMetadata.figmaFileId,
      lastSync: colorTokenMetadata.lastSync
    },
    spacing: {
      extracted: spacingTokenMetadata.isExtracted,
      placeholder: spacingTokenMetadata.placeholderMode,
      figmaFileId: spacingTokenMetadata.figmaFileId,
      lastSync: spacingTokenMetadata.lastSync
    },
    typography: {
      extracted: typographyTokenMetadata.isExtracted,
      placeholder: typographyTokenMetadata.placeholderMode,
      figmaFileId: typographyTokenMetadata.figmaFileId,
      lastSync: typographyTokenMetadata.lastSync
    },
    allReady: colorTokenMetadata.isExtracted && 
              spacingTokenMetadata.isExtracted && 
              typographyTokenMetadata.isExtracted &&
              !colorTokenMetadata.placeholderMode &&
              !spacingTokenMetadata.placeholderMode &&
              !typographyTokenMetadata.placeholderMode
  };
};

// Auto-run development warnings on import in development
if (typeof window !== 'undefined') {
  showDevelopmentWarnings();
}
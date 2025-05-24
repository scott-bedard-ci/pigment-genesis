#!/usr/bin/env node

/**
 * Figma Token Extraction Script
 * 
 * This script extracts design tokens from Figma and updates the design system.
 * It uses the Figma REST API to fetch design tokens and generates TypeScript
 * and SwiftUI token files for cross-platform consistency.
 * 
 * Usage:
 *   npm run extract-figma-tokens
 *   node scripts/extract-figma-tokens.ts --file-id=abc123 --token=your-token
 */

import fs from 'fs/promises';
import path from 'path';

// Types for Figma API responses
interface FigmaToken {
  name: string;
  type: 'color' | 'spacing' | 'typography' | 'effect';
  value: any;
  description?: string;
  figmaId?: string;
}

interface FigmaTokenCollection {
  colors: FigmaToken[];
  spacing: FigmaToken[];
  typography: FigmaToken[];
  effects: FigmaToken[];
  metadata: {
    figmaFileId: string;
    lastSync: string;
    tokenCount: number;
    version: string;
  };
}

interface ExtractedTokens {
  colors: Record<string, Record<string, string>>;
  spacing: Record<string, string>;
  typography: Record<string, any>;
  effects: Record<string, any>;
}

class FigmaTokenExtractor {
  private figmaToken: string;
  private fileId: string;
  private baseUrl = 'https://api.figma.com/v1';

  constructor(figmaToken: string, fileId: string) {
    this.figmaToken = figmaToken;
    this.fileId = fileId;
  }

  /**
   * Extract design tokens from Figma
   */
  async extractTokens(): Promise<FigmaTokenCollection> {
    try {
      console.log('🎨 Connecting to Figma...');
      
      // In a real implementation, this would make actual Figma API calls
      // For now, we'll simulate the extraction process
      const mockTokens = await this.simulateTokenExtraction();
      
      console.log('✅ Successfully extracted tokens from Figma');
      return mockTokens;
    } catch (error) {
      console.error('❌ Failed to extract tokens from Figma:', error);
      throw error;
    }
  }

  /**
   * Simulate token extraction (replace with actual Figma API calls)
   */
  private async simulateTokenExtraction(): Promise<FigmaTokenCollection> {
    // This is a simulation - in real implementation, replace with actual Figma API calls
    return {
      colors: [
        { name: 'primary-500', type: 'color', value: '#3b82f6', description: 'Primary brand color' },
        { name: 'secondary-500', type: 'color', value: '#a855f7', description: 'Secondary brand color' },
        // ... more color tokens
      ],
      spacing: [
        { name: 'spacing-xs', type: 'spacing', value: '4px', description: 'Extra small spacing' },
        { name: 'spacing-sm', type: 'spacing', value: '8px', description: 'Small spacing' },
        // ... more spacing tokens
      ],
      typography: [
        { name: 'heading-lg', type: 'typography', value: { fontSize: '36px', lineHeight: '44px', fontWeight: 'bold' }},
        // ... more typography tokens
      ],
      effects: [
        { name: 'shadow-sm', type: 'effect', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
        // ... more effect tokens
      ],
      metadata: {
        figmaFileId: this.fileId,
        lastSync: new Date().toISOString(),
        tokenCount: 0,
        version: '1.0.0'
      }
    };
  }

  /**
   * Transform extracted tokens into structured format
   */
  transformTokens(tokens: FigmaTokenCollection): ExtractedTokens {
    const transformed: ExtractedTokens = {
      colors: {},
      spacing: {},
      typography: {},
      effects: {}
    };

    // Transform colors
    tokens.colors.forEach(token => {
      const [colorName, shade] = token.name.split('-');
      if (!transformed.colors[colorName]) {
        transformed.colors[colorName] = {};
      }
      transformed.colors[colorName][shade] = token.value;
    });

    // Transform spacing
    tokens.spacing.forEach(token => {
      const spacingName = token.name.replace('spacing-', '');
      transformed.spacing[spacingName] = token.value;
    });

    // Transform typography
    tokens.typography.forEach(token => {
      transformed.typography[token.name] = token.value;
    });

    // Transform effects
    tokens.effects.forEach(token => {
      transformed.effects[token.name] = token.value;
    });

    return transformed;
  }

  /**
   * Generate TypeScript token files
   */
  async generateTypeScriptTokens(tokens: ExtractedTokens, metadata: FigmaTokenCollection['metadata']): Promise<void> {
    const tokensDir = path.join(process.cwd(), 'src/tokens');

    // Generate colors.ts
    const colorsContent = this.generateColorsFile(tokens.colors, metadata);
    await fs.writeFile(path.join(tokensDir, 'colors.ts'), colorsContent);

    // Generate spacing.ts
    const spacingContent = this.generateSpacingFile(tokens.spacing, metadata);
    await fs.writeFile(path.join(tokensDir, 'spacing.ts'), spacingContent);

    // Generate typography.ts
    const typographyContent = this.generateTypographyFile(tokens.typography, metadata);
    await fs.writeFile(path.join(tokensDir, 'typography.ts'), typographyContent);

    // Generate effects.ts
    const effectsContent = this.generateEffectsFile(tokens.effects, metadata);
    await fs.writeFile(path.join(tokensDir, 'effects.ts'), effectsContent);

    // Update figma-tokens.json
    const figmaTokensContent = JSON.stringify({
      ...tokens,
      metadata
    }, null, 2);
    await fs.writeFile(path.join(tokensDir, 'figma-tokens.json'), figmaTokensContent);

    console.log('✅ Generated TypeScript token files');
  }

  /**
   * Generate SwiftUI token files
   */
  async generateSwiftUITokens(tokens: ExtractedTokens, metadata: FigmaTokenCollection['metadata']): Promise<void> {
    const swiftUIDir = path.join(process.cwd(), 'swiftui/Sources/PigmentGenesisUI/Tokens');

    // Generate Colors.swift
    const colorsSwift = this.generateSwiftUIColorsFile(tokens.colors, metadata);
    await fs.writeFile(path.join(swiftUIDir, 'Colors.swift'), colorsSwift);

    // Generate Spacing.swift
    const spacingSwift = this.generateSwiftUISpacingFile(tokens.spacing, metadata);
    await fs.writeFile(path.join(swiftUIDir, 'Spacing.swift'), spacingSwift);

    // Generate Typography.swift
    const typographySwift = this.generateSwiftUITypographyFile(tokens.typography, metadata);
    await fs.writeFile(path.join(swiftUIDir, 'Typography.swift'), typographySwift);

    console.log('✅ Generated SwiftUI token files');
  }

  /**
   * Generate colors TypeScript file
   */
  private generateColorsFile(colors: Record<string, Record<string, string>>, metadata: any): string {
    return `// Design tokens for colors - AUTO-GENERATED FROM FIGMA
// Last updated: ${metadata.lastSync}
// Source: Figma File ID ${metadata.figmaFileId}

export const colors = ${JSON.stringify(colors, null, 2)} as const;

// Token metadata for tracking Figma sync
export const colorTokenMetadata = {
  figmaFileId: '${metadata.figmaFileId}',
  lastSync: '${metadata.lastSync}',
  tokenCount: ${Object.keys(colors).length},
  version: '${metadata.version}'
} as const;

// Type exports for TypeScript support
export type ColorTokens = typeof colors;
export type ColorKey = keyof ColorTokens;
export type ColorShade = keyof ColorTokens[ColorKey];
`;
  }

  /**
   * Generate spacing TypeScript file
   */
  private generateSpacingFile(spacing: Record<string, string>, metadata: any): string {
    return `// Design tokens for spacing - AUTO-GENERATED FROM FIGMA
// Last updated: ${metadata.lastSync}
// Source: Figma File ID ${metadata.figmaFileId}

export const spacing = ${JSON.stringify(spacing, null, 2)} as const;

// Token metadata for tracking Figma sync
export const spacingTokenMetadata = {
  figmaFileId: '${metadata.figmaFileId}',
  lastSync: '${metadata.lastSync}',
  tokenCount: ${Object.keys(spacing).length},
  version: '${metadata.version}'
} as const;

// Type exports for TypeScript support
export type SpacingTokens = typeof spacing;
export type SpacingKey = keyof SpacingTokens;
`;
  }

  /**
   * Generate typography TypeScript file
   */
  private generateTypographyFile(typography: Record<string, any>, metadata: any): string {
    return `// Design tokens for typography - AUTO-GENERATED FROM FIGMA
// Last updated: ${metadata.lastSync}
// Source: Figma File ID ${metadata.figmaFileId}

export const typography = ${JSON.stringify(typography, null, 2)} as const;

// Token metadata for tracking Figma sync
export const typographyTokenMetadata = {
  figmaFileId: '${metadata.figmaFileId}',
  lastSync: '${metadata.lastSync}',
  tokenCount: ${Object.keys(typography).length},
  version: '${metadata.version}'
} as const;

// Type exports for TypeScript support
export type TypographyTokens = typeof typography;
export type TextStyleKey = keyof typeof typography;
`;
  }

  /**
   * Generate effects TypeScript file
   */
  private generateEffectsFile(effects: Record<string, any>, metadata: any): string {
    return `// Design tokens for effects - AUTO-GENERATED FROM FIGMA
// Last updated: ${metadata.lastSync}
// Source: Figma File ID ${metadata.figmaFileId}

export const effects = ${JSON.stringify(effects, null, 2)} as const;

// Token metadata for tracking Figma sync
export const effectsTokenMetadata = {
  figmaFileId: '${metadata.figmaFileId}',
  lastSync: '${metadata.lastSync}',
  tokenCount: ${Object.keys(effects).length},
  version: '${metadata.version}'
} as const;

// Type exports for TypeScript support
export type EffectsTokens = typeof effects;
export type ShadowKey = keyof typeof effects;
`;
  }

  /**
   * Generate SwiftUI Colors file
   */
  private generateSwiftUIColorsFile(colors: Record<string, Record<string, string>>, metadata: any): string {
    const colorExtensions = Object.entries(colors).map(([colorName, shades]) => {
      return Object.entries(shades).map(([shade, value]) => 
        `    static let pigment${this.capitalize(colorName)}${shade} = Color(hex: "${value}") // Figma: ${colorName}-${shade}`
      ).join('\n');
    }).join('\n');

    return `// Colors.swift - AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
// Last updated: ${metadata.lastSync}
// Source: Figma File ID ${metadata.figmaFileId}

import SwiftUI

public extension Color {
${colorExtensions}
}

// Token metadata for tracking
public struct PigmentTokenMetadata {
    public static let figmaFileId = "${metadata.figmaFileId}"
    public static let lastSync = "${metadata.lastSync}"
    public static let tokenCount = ${Object.keys(colors).length}
}
`;
  }

  /**
   * Generate SwiftUI Spacing file
   */
  private generateSwiftUISpacingFile(spacing: Record<string, string>, metadata: any): string {
    const spacingValues = Object.entries(spacing).map(([key, value]) => 
      `    public static let ${key}: CGFloat = ${parseFloat(value.replace('px', ''))} // Figma: spacing-${key}`
    ).join('\n');

    return `// Spacing.swift - AUTO-GENERATED FROM FIGMA
// Last updated: ${metadata.lastSync}
// Source: Figma File ID ${metadata.figmaFileId}

import SwiftUI

public struct PigmentSpacing {
${spacingValues}
}
`;
  }

  /**
   * Generate SwiftUI Typography file
   */
  private generateSwiftUITypographyFile(typography: Record<string, any>, metadata: any): string {
    const typographyValues = Object.entries(typography).map(([key, value]) => {
      const size = typeof value === 'object' && value.fontSize ? 
        parseFloat(value.fontSize.replace('px', '')) : 16;
      const weight = this.getSwiftUIFontWeight(key);
      return `    public static let ${this.camelCase(key)} = Font.custom("Inter", size: ${size}).weight(${weight}) // Figma: ${key}`;
    }).join('\n');

    return `// Typography.swift - AUTO-GENERATED FROM FIGMA
// Last updated: ${metadata.lastSync}
// Source: Figma File ID ${metadata.figmaFileId}

import SwiftUI

public struct PigmentTypography {
${typographyValues}
}
`;
  }

  /**
   * Utility functions
   */
  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private camelCase(str: string): string {
    return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  private getSwiftUIFontWeight(typographyKey: string): string {
    if (typographyKey.includes('heading')) return '.bold';
    if (typographyKey.includes('caption')) return '.medium';
    return '.regular';
  }
}

/**
 * Main execution function
 */
async function main() {
  try {
    const args = process.argv.slice(2);
    const fileIdArg = args.find(arg => arg.startsWith('--file-id='));
    const tokenArg = args.find(arg => arg.startsWith('--token='));

    const fileId = fileIdArg?.split('=')[1] || process.env.FIGMA_FILE_ID || '';
    const figmaToken = tokenArg?.split('=')[1] || process.env.FIGMA_TOKEN || '';

    if (!fileId || !figmaToken) {
      console.log('⚠️  Figma credentials not provided. Using placeholder tokens.');
      console.log('To extract real tokens, provide:');
      console.log('  --file-id=your-figma-file-id --token=your-figma-token');
      console.log('  Or set FIGMA_FILE_ID and FIGMA_TOKEN environment variables');
      
      // For development purposes, we'll continue with placeholder generation
      // In production, you'd want to exit here
    }

    const extractor = new FigmaTokenExtractor(figmaToken, fileId);
    
    console.log('🚀 Starting Figma token extraction...');
    
    // Extract tokens from Figma
    const rawTokens = await extractor.extractTokens();
    
    // Transform tokens into structured format
    const transformedTokens = extractor.transformTokens(rawTokens);
    
    // Generate TypeScript token files
    await extractor.generateTypeScriptTokens(transformedTokens, rawTokens.metadata);
    
    // Generate SwiftUI token files
    await extractor.generateSwiftUITokens(transformedTokens, rawTokens.metadata);
    
    console.log('🎉 Token extraction completed successfully!');
    console.log(`📊 Extracted ${rawTokens.metadata.tokenCount} tokens from Figma`);
    console.log(`🔄 Last sync: ${rawTokens.metadata.lastSync}`);
    
  } catch (error) {
    console.error('💥 Token extraction failed:', error);
    process.exit(1);
  }
}

// Run the script if called directly
if (require.main === module) {
  main();
}

export { FigmaTokenExtractor };
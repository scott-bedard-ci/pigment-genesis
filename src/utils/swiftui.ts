// SwiftUI code generation utilities for React-to-SwiftUI component conversion
// This module provides utilities to generate SwiftUI equivalents from React components

import { tokens } from '@/tokens';

/**
 * Converts React design tokens to SwiftUI format
 * Generates SwiftUI Color extensions from React color tokens
 */
export const generateSwiftUITokens = (reactTokens: typeof tokens) => {
  const { colors, spacing, typography, effects } = reactTokens;

  // Generate SwiftUI Colors
  const colorExtensions = Object.entries(colors).map(([colorName, colorShades]) => {
    if (typeof colorShades === 'object') {
      return Object.entries(colorShades).map(([shade, value]) => 
        `    static let pigment${capitalizeFirst(colorName)}${shade} = Color(hex: "${value}") // Figma: ${colorName}-${shade}`
      ).join('\n');
    }
    return `    static let pigment${capitalizeFirst(colorName)} = Color(hex: "${colorShades}") // Figma: ${colorName}`;
  }).join('\n');

  const colorToken = `
// Colors.swift - AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
// Last updated: ${new Date().toISOString()}
// Source: Figma File ID ${reactTokens.tokenMetadata?.figmaFileId || 'TBD'}

import SwiftUI

public extension Color {
${colorExtensions}
}

// Token metadata for tracking
public struct PigmentTokenMetadata {
    public static let figmaFileId = "${reactTokens.tokenMetadata?.figmaFileId || 'TBD'}"
    public static let lastSync = "${new Date().toISOString()}"
    public static let tokenCount = ${Object.keys(colors).length}
}`;

  // Generate SwiftUI Spacing
  const spacingValues = Object.entries(spacing).map(([key, value]) => 
    `    public static let ${key}: CGFloat = ${parseFloat(value.replace('px', ''))} // Figma: spacing-${key}`
  ).join('\n');

  const spacingToken = `
// Spacing.swift - AUTO-GENERATED FROM FIGMA
public struct PigmentSpacing {
${spacingValues}
}`;

  // Generate SwiftUI Typography
  const typographyValues = Object.entries(typography.fontSize).map(([key, value]) => {
    const size = parseFloat(value.replace('px', ''));
    const weight = getSwiftUIFontWeight(key);
    return `    public static let ${camelCase(key)} = Font.custom("Inter", size: ${size}).weight(${weight}) // Figma: ${key}`;
  }).join('\n');

  const typographyToken = `
// Typography.swift - AUTO-GENERATED FROM FIGMA
public struct PigmentTypography {
${typographyValues}
}`;

  return {
    colors: colorToken,
    spacing: spacingToken,
    typography: typographyToken
  };
};

/**
 * Generates SwiftUI component from React component props and structure
 */
export const generateSwiftUIComponent = (
  componentName: string,
  props: ComponentProp[],
  variants?: Record<string, any>
): string => {
  const swiftProps = props.map(prop => convertPropToSwift(prop));
  const variantEnums = variants ? generateSwiftUIVariants(variants) : '';

  return `
import SwiftUI

// ${componentName} SwiftUI equivalent - uses Figma-synced tokens
public struct ${componentName}: View {
${variantEnums}
    
    // Properties matching React component interface
${swiftProps.map(prop => `    private let ${prop.name}: ${prop.type}`).join('\n')}
    
    // Initializer matching React props
    public init(
${swiftProps.map(prop => `        ${prop.name}: ${prop.type}${prop.defaultValue ? ` = ${prop.defaultValue}` : ''}`).join(',\n')}
    ) {
${swiftProps.map(prop => `        self.${prop.name} = ${prop.name}`).join('\n')}
    }
    
    public var body: some View {
        // SwiftUI implementation using design tokens
        // All design values come from Figma tokens - rebrand ready!
        ${generateSwiftUIBody(componentName, swiftProps)}
    }
}

// SwiftUI Preview using tokens
#Preview {
    VStack(spacing: PigmentSpacing.md) {
        ${componentName}(${generatePreviewProps(swiftProps)})
    }
    .padding(PigmentSpacing.lg)
}`;
};

/**
 * React-to-SwiftUI prop conversion
 */
interface ComponentProp {
  name: string;
  type: string;
  defaultValue?: any;
  description?: string;
}

interface SwiftUIProp {
  name: string;
  type: string;
  defaultValue?: string;
}

const convertPropToSwift = (prop: ComponentProp): SwiftUIProp => {
  const typeMap: Record<string, string> = {
    'boolean': 'Bool',
    'string': 'String',
    'number': 'CGFloat',
    'function': '(() -> Void)?',
    'ReactNode': 'AnyView?',
    'className': 'String?', // SwiftUI doesn't use className, but we can ignore or map to modifiers
  };

  const defaultValueMap: Record<string, string> = {
    'boolean': prop.defaultValue ? 'true' : 'false',
    'string': prop.defaultValue ? `"${prop.defaultValue}"` : '""',
    'number': prop.defaultValue?.toString() || '0',
    'function': 'nil'
  };

  return {
    name: prop.name === 'className' ? 'modifiers' : prop.name,
    type: typeMap[prop.type] || 'String',
    defaultValue: prop.defaultValue ? defaultValueMap[prop.type] : undefined
  };
};

/**
 * Generates SwiftUI variant enums from React variant props
 */
const generateSwiftUIVariants = (variants: Record<string, any>): string => {
  return Object.entries(variants).map(([variantName, values]) => {
    const enumCases = Array.isArray(values) ? values : Object.keys(values);
    
    return `    public enum ${capitalizeFirst(variantName)} {
        ${enumCases.map(value => `case ${value}`).join('\n        ')}
        
        ${generateVariantProperties(variantName, enumCases)}
    }`;
  }).join('\n\n');
};

/**
 * Generates variant properties (colors, spacing, etc.) based on design tokens
 */
const generateVariantProperties = (variantName: string, cases: string[]): string => {
  if (variantName === 'size') {
    return `
        var padding: CGFloat {
            switch self {
            case .sm: return PigmentSpacing.sm
            case .md: return PigmentSpacing.md
            case .lg: return PigmentSpacing.lg
            }
        }
        
        var font: Font {
            switch self {
            case .sm: return PigmentTypography.bodySmall
            case .md: return PigmentTypography.bodyMedium
            case .lg: return PigmentTypography.bodyLarge
            }
        }`;
  }

  if (variantName === 'variant') {
    return `
        var backgroundColor: Color {
            switch self {
            case .primary: return .pigmentPrimary500
            case .secondary: return .pigmentSecondary500
            case .outline: return .clear
            default: return .pigmentPrimary500
            }
        }
        
        var foregroundColor: Color {
            switch self {
            case .primary, .secondary: return .white
            case .outline: return .pigmentPrimary500
            default: return .white
            }
        }`;
  }

  return '';
};

/**
 * Generates SwiftUI body implementation based on component type
 */
const generateSwiftUIBody = (componentName: string, props: SwiftUIProp[]): string => {
  // This is a simplified implementation - would be expanded based on actual component types
  if (componentName.toLowerCase().includes('button')) {
    return `
        Button(content) {
            action?()
        }
        .font(size.font)
        .padding(size.padding)
        .background(variant.backgroundColor)
        .foregroundColor(variant.foregroundColor)
        .disabled(isDisabled)
        .opacity(isDisabled ? 0.5 : 1.0)
        .frame(minHeight: 44) // iOS touch target minimum
        .accessibilityRole(.button)
        // All design values come from Figma tokens - rebrand ready!`;
  }

  return `
        // Component implementation using design tokens
        Text("${componentName}")
            .padding(PigmentSpacing.md)
            .background(Color.pigmentPrimary500)
            .foregroundColor(.white)
            .cornerRadius(PigmentSpacing.sm)`;
};

/**
 * Generates preview props for SwiftUI previews
 */
const generatePreviewProps = (props: SwiftUIProp[]): string => {
  return props
    .filter(prop => prop.name !== 'action' && prop.name !== 'modifiers')
    .map(prop => {
      if (prop.type === 'String' && prop.name.includes('content')) {
        return `${prop.name}: "${capitalizeFirst(prop.name)} Example"`;
      }
      return `${prop.name}: ${prop.defaultValue || getDefaultForType(prop.type)}`;
    })
    .join(', ');
};

/**
 * Helper functions
 */
const capitalizeFirst = (str: string): string => 
  str.charAt(0).toUpperCase() + str.slice(1);

const camelCase = (str: string): string => 
  str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

const getSwiftUIFontWeight = (typographyKey: string): string => {
  if (typographyKey.includes('heading')) return '.bold';
  if (typographyKey.includes('caption')) return '.medium';
  return '.regular';
};

const getDefaultForType = (type: string): string => {
  const defaults: Record<string, string> = {
    'Bool': 'false',
    'String': '""',
    'CGFloat': '0',
    'AnyView?': 'nil',
    '(() -> Void)?': 'nil'
  };
  return defaults[type] || '""';
};

/**
 * Template for generating complete SwiftUI package structure
 */
export const generateSwiftUIPackage = (components: string[]): string => {
  return `
// Package.swift
// swift-tools-version: 5.9

import PackageDescription

let package = Package(
    name: "PigmentGenesisUI",
    platforms: [
        .iOS(.v15),
        .macOS(.v12)
    ],
    products: [
        .library(
            name: "PigmentGenesisUI",
            targets: ["PigmentGenesisUI"]
        )
    ],
    targets: [
        .target(
            name: "PigmentGenesisUI",
            dependencies: []
        ),
        .testTarget(
            name: "PigmentGenesisUITests",
            dependencies: ["PigmentGenesisUI"]
        )
    ]
)`;
};

export type { ComponentProp, SwiftUIProp };
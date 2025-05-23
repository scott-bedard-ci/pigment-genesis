/**
 * SwiftUI generation utilities for creating iOS component equivalents
 * Converts React component specifications to SwiftUI implementations
 */

import type { ComponentProps } from 'react';

/**
 * Interface for SwiftUI component generation configuration
 */
interface SwiftUIGenerationConfig {
  componentName: string;
  props: Array<{
    name: string;
    type: string;
    defaultValue?: any;
    description?: string;
    required?: boolean;
  }>;
  variants?: Record<string, string[]>;
  designTokens: {
    colors: Record<string, string>;
    spacing: Record<string, number>;
    typography: Record<string, any>;
    effects: Record<string, any>;
  };
  figmaFrameId?: string;
  mobileBreakpoint?: boolean;
}

/**
 * Converts React prop types to SwiftUI types
 */
const typeMap: Record<string, string> = {
  'boolean': 'Bool',
  'string': 'String',
  'number': 'CGFloat',
  'function': '(() -> Void)?',
  'ReactNode': 'AnyView?',
  'MouseEvent': '(() -> Void)?',
  'ChangeEvent': '((String) -> Void)?',
  'KeyboardEvent': '((KeyEquivalent) -> Void)?'
};

/**
 * Converts React component props to SwiftUI property definitions
 * 
 * @param props - Array of React prop definitions
 * @returns SwiftUI property code
 */
export const convertPropsToSwiftUI = (
  props: SwiftUIGenerationConfig['props']
): string => {
  return props.map(prop => {
    const swiftType = typeMap[prop.type] || 'String';
    const defaultValue = prop.defaultValue ? ` = ${formatSwiftUIDefault(prop.defaultValue, swiftType)}` : '';
    const privatePrefix = prop.name.startsWith('on') ? 'private let ' : 'private let ';
    
    return `    ${privatePrefix}${prop.name}: ${swiftType}${defaultValue}`;
  }).join('\n');
};

/**
 * Formats default values for SwiftUI properties
 */
const formatSwiftUIDefault = (value: any, type: string): string => {
  if (type === 'String') return `"${value}"`;
  if (type === 'Bool') return value ? 'true' : 'false';
  if (type === 'CGFloat') return `${value}`;
  if (type.includes('?')) return 'nil';
  return `${value}`;
};

/**
 * Generates SwiftUI color tokens from design tokens
 * 
 * @param colors - Color design tokens
 * @returns SwiftUI Color extension code
 */
export const generateSwiftUIColors = (colors: Record<string, string>): string => {
  const colorDefinitions = Object.entries(colors).map(([name, hex]) => {
    const swiftName = name.replace(/[-_]/g, '').replace(/\d+/g, match => match);
    return `    static let pigment${capitalizeFirst(swiftName)} = Color(hex: "${hex}")   // Figma: ${name}`;
  }).join('\n');

  return `
// Colors.swift - AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
// Last updated: ${new Date().toISOString()}
// Source: Figma Design Tokens

import SwiftUI

public extension Color {
    // Primary colors - synced from Figma
${colorDefinitions}
}

// Color hex initializer
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (1, 1, 1, 0)
        }

        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue:  Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}`.trim();
};

/**
 * Generates SwiftUI spacing tokens from design tokens
 * 
 * @param spacing - Spacing design tokens
 * @returns SwiftUI spacing code
 */
export const generateSwiftUISpacing = (spacing: Record<string, number>): string => {
  const spacingDefinitions = Object.entries(spacing).map(([name, value]) => {
    return `    public static let ${name}: CGFloat = ${value}      // Figma: spacing-${name}`;
  }).join('\n');

  return `
// Spacing.swift - AUTO-GENERATED FROM FIGMA
public struct PigmentSpacing {
    // Spacing tokens from Figma
${spacingDefinitions}
}`.trim();
};

/**
 * Generates SwiftUI typography tokens from design tokens
 * 
 * @param typography - Typography design tokens
 * @returns SwiftUI typography code
 */
export const generateSwiftUITypography = (typography: Record<string, any>): string => {
  const typographyDefinitions = Object.entries(typography).map(([name, config]) => {
    const size = config.fontSize || 16;
    const weight = config.fontWeight === 'bold' ? 'Font.Weight.bold' : 'Font.Weight.regular';
    
    return `    public static let ${name} = Font.custom("CustomInk-Regular", size: ${size}).weight(${weight})    // Figma: ${name}`;
  }).join('\n');

  return `
// Typography.swift - AUTO-GENERATED FROM FIGMA
public struct PigmentTypography {
    // Typography tokens from Figma
${typographyDefinitions}
}`.trim();
};

/**
 * Generates a complete SwiftUI component from React component specifications
 * 
 * @param config - Component generation configuration
 * @returns Complete SwiftUI component code
 */
export const generateSwiftUIComponent = (config: SwiftUIGenerationConfig): string => {
  const {
    componentName,
    props,
    variants = {},
    designTokens,
    figmaFrameId,
    mobileBreakpoint = true
  } = config;

  const propsCode = convertPropsToSwiftUI(props);
  const variantsCode = generateSwiftUIVariants(variants, designTokens);
  const initializerCode = generateSwiftUIInitializer(props);
  const bodyCode = generateSwiftUIBody(componentName, props, variants, designTokens);
  const previewCode = generateSwiftUIPreview(componentName, props, variants, designTokens);

  return `
import SwiftUI

// ${componentName} SwiftUI equivalent - uses Figma-synced tokens
// Generated from React component specifications
${figmaFrameId ? `// Figma Frame: ${figmaFrameId}` : ''}
// Mobile-first design: ${mobileBreakpoint ? 'Optimized for iOS' : 'Desktop equivalent'}

public struct ${componentName}: View {
    ${variantsCode}
    
    // Properties
${propsCode}
    
    ${initializerCode}
    
    public var body: some View {
        ${bodyCode}
    }
}

${previewCode}
`.trim();
};

/**
 * Generates SwiftUI variant enums and computed properties
 */
const generateSwiftUIVariants = (
  variants: Record<string, string[]>,
  designTokens: SwiftUIGenerationConfig['designTokens']
): string => {
  return Object.entries(variants).map(([variantName, options]) => {
    const enumName = capitalizeFirst(variantName);
    const cases = options.map(option => `        case ${option}`).join('\n');
    
    // Generate computed properties for each variant
    const computedProps = generateVariantComputedProperties(variantName, options, designTokens);
    
    return `
    public enum ${enumName} {
${cases}
        
${computedProps}
    }`.trim();
  }).join('\n\n    ');
};

/**
 * Generates computed properties for variant enums
 */
const generateVariantComputedProperties = (
  variantName: string,
  options: string[],
  designTokens: SwiftUIGenerationConfig['designTokens']
): string => {
  if (variantName === 'size') {
    return `
        var padding: CGFloat {
            switch self {
            case .sm: return PigmentSpacing.sm      // Figma: spacing-sm
            case .md: return PigmentSpacing.md      // Figma: spacing-md  
            case .lg: return PigmentSpacing.lg      // Figma: spacing-lg
            }
        }
        
        var font: Font {
            switch self {
            case .sm: return PigmentTypography.bodySmall    // Figma: body-sm
            case .md: return PigmentTypography.bodyMedium   // Figma: body-md
            case .lg: return PigmentTypography.bodyLarge    // Figma: body-lg
            }
        }`.trim();
  }
  
  if (variantName === 'variant') {
    return `
        var backgroundColor: Color {
            switch self {
            case .primary: return .pigmentPrimary500        // Figma: primary-500
            case .secondary: return .pigmentSecondary500    // Figma: secondary-500
            case .outline: return .clear
            default: return .pigmentPrimary500
            }
        }
        
        var foregroundColor: Color {
            switch self {
            case .primary, .secondary: return .white
            case .outline: return .pigmentPrimary500        // Figma: primary-500
            default: return .white
            }
        }`.trim();
  }
  
  return '';
};

/**
 * Generates SwiftUI initializer matching React props
 */
const generateSwiftUIInitializer = (props: SwiftUIGenerationConfig['props']): string => {
  const parameters = props.map(prop => {
    const swiftType = typeMap[prop.type] || 'String';
    const defaultValue = prop.defaultValue ? ` = ${formatSwiftUIDefault(prop.defaultValue, swiftType)}` : '';
    return `        ${prop.name}: ${swiftType}${defaultValue}`;
  }).join(',\n');
  
  const assignments = props.map(prop => {
    return `        self.${prop.name} = ${prop.name}`;
  }).join('\n');

  return `
    // Initializer matching React props
    public init(
${parameters}
    ) {
${assignments}
    }`.trim();
};

/**
 * Generates SwiftUI body implementation
 */
const generateSwiftUIBody = (
  componentName: string,
  props: SwiftUIGenerationConfig['props'],
  variants: Record<string, string[]>,
  designTokens: SwiftUIGenerationConfig['designTokens']
): string => {
  const hasSize = 'size' in variants;
  const hasVariant = 'variant' in variants;
  const hasContent = props.some(p => p.name === 'content' || p.name === 'children');
  const hasAction = props.some(p => p.name === 'onClick' || p.name === 'action');

  if (componentName.toLowerCase().includes('button') && hasAction) {
    return `
        Button(${hasContent ? 'content' : '""'}) {
            ${hasAction ? 'action?()' : '// No action'}
        }
        ${hasSize ? '.font(size.font)' : ''}
        ${hasSize ? '.padding(size.padding)' : ''}
        ${hasVariant ? '.background(variant.backgroundColor)' : ''}
        ${hasVariant ? '.foregroundColor(variant.foregroundColor)' : ''}
        .disabled(isDisabled)
        .opacity(isDisabled ? 0.5 : 1.0)
        .frame(minHeight: 44)                              // iOS touch target minimum
        .accessibilityRole(.button)
        // All design values come from Figma tokens - rebrand ready!`.trim();
  }

  // Generic view implementation
  return `
        VStack {
            ${hasContent ? 'Text(content)' : 'EmptyView()'}
        }
        ${hasSize ? '.font(size.font)' : ''}
        ${hasSize ? '.padding(size.padding)' : ''}
        ${hasVariant ? '.background(variant.backgroundColor)' : ''}
        ${hasVariant ? '.foregroundColor(variant.foregroundColor)' : ''}
        .frame(minHeight: 44)                              // iOS touch target minimum
        // All design values come from Figma tokens - rebrand ready!`.trim();
};

/**
 * Generates SwiftUI preview code
 */
const generateSwiftUIPreview = (
  componentName: string,
  props: SwiftUIGenerationConfig['props'],
  variants: Record<string, string[]>,
  designTokens: SwiftUIGenerationConfig['designTokens']
): string => {
  const hasSize = 'size' in variants;
  const hasVariant = 'variant' in variants;
  const hasContent = props.some(p => p.name === 'content' || p.name === 'children');

  const examples = [];
  
  // Default example
  const defaultProps = hasContent ? 'content: "Default"' : '';
  examples.push(`        ${componentName}(${defaultProps})`);
  
  // Variant examples
  if (hasVariant && variants.variant) {
    variants.variant.forEach(variant => {
      const variantProps = [
        hasVariant ? `variant: .${variant}` : '',
        hasContent ? `content: "${capitalizeFirst(variant)}"` : ''
      ].filter(Boolean).join(', ');
      
      examples.push(`        ${componentName}(${variantProps})`);
    });
  }
  
  // Size examples
  if (hasSize && variants.size) {
    variants.size.forEach(size => {
      const sizeProps = [
        hasSize ? `size: .${size}` : '',
        hasContent ? `content: "${capitalizeFirst(size)} Size"` : ''
      ].filter(Boolean).join(', ');
      
      examples.push(`        ${componentName}(${sizeProps})`);
    });
  }
  
  // Disabled example
  const disabledProps = [
    'isDisabled: true',
    hasContent ? 'content: "Disabled"' : ''
  ].filter(Boolean).join(', ');
  examples.push(`        ${componentName}(${disabledProps})`);

  return `
// SwiftUI Preview using tokens
#Preview {
    VStack(spacing: PigmentSpacing.md) {                   // Figma: spacing-md
${examples.join('\n')}
    }
    .padding(PigmentSpacing.lg)                           // Figma: spacing-lg
}`.trim();
};

/**
 * Utility function to capitalize first letter
 */
const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Generates complete SwiftUI design token files
 * 
 * @param designTokens - Complete design token object
 * @returns Object with SwiftUI token file contents
 */
export const generateSwiftUITokens = (designTokens: SwiftUIGenerationConfig['designTokens']) => {
  return {
    colors: generateSwiftUIColors(designTokens.colors),
    spacing: generateSwiftUISpacing(designTokens.spacing),
    typography: generateSwiftUITypography(designTokens.typography),
    metadata: `
// Token metadata for tracking
public struct PigmentTokenMetadata {
    public static let figmaFileId = "TBD" // Set from Figma integration
    public static let lastSync = "${new Date().toISOString()}"
    public static let tokenCount = ${Object.keys(designTokens.colors).length + Object.keys(designTokens.spacing).length + Object.keys(designTokens.typography).length}
    public static let generatedAt = "${new Date().toISOString()}"
}`.trim()
  };
};

/**
 * Converts React component tree to SwiftUI equivalent
 * Handles component composition and nesting
 * 
 * @param reactComponents - Array of React component configurations
 * @returns SwiftUI package structure
 */
export const generateSwiftUIPackage = (reactComponents: SwiftUIGenerationConfig[]) => {
  const components = reactComponents.map(config => generateSwiftUIComponent(config));
  
  const packageStructure = `
// Package.swift
// swift-tools-version:5.7
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
            targets: ["PigmentGenesisUI"]),
    ],
    targets: [
        .target(
            name: "PigmentGenesisUI",
            dependencies: []),
        .testTarget(
            name: "PigmentGenesisUITests",
            dependencies: ["PigmentGenesisUI"]),
    ]
)`.trim();

  return {
    packageSwift: packageStructure,
    components,
    readme: generateSwiftUIReadme(reactComponents)
  };
};

/**
 * Generates README for SwiftUI package
 */
const generateSwiftUIReadme = (components: SwiftUIGenerationConfig[]): string => {
  const componentList = components.map(c => `- ${c.componentName}`).join('\n');
  
  return `
# PigmentGenesisUI - SwiftUI Components

Auto-generated SwiftUI components from the Pigment-Genesis React design system.

## Components

${componentList}

## Installation

Add this package to your Xcode project:

\`\`\`swift
.package(url: "https://github.com/customink/pigment-genesis-swiftui", from: "1.0.0")
\`\`\`

## Usage

\`\`\`swift
import SwiftUI
import PigmentGenesisUI

struct ContentView: View {
    var body: some View {
        VStack {
            Button(size: .md, variant: .primary, content: "Get Started") {
                print("Button tapped!")
            }
        }
    }
}
\`\`\`

## Design Token Sync

All components use design tokens synced from Figma. When design tokens are updated in Figma, regenerate this package to maintain design consistency.

## Rebrand Ready

Update Figma design tokens and regenerate to instantly rebrand all components across iOS and React implementations.
`.trim();
};

export default {
  convertPropsToSwiftUI,
  generateSwiftUIColors,
  generateSwiftUISpacing,
  generateSwiftUITypography,
  generateSwiftUIComponent,
  generateSwiftUITokens,
  generateSwiftUIPackage
};
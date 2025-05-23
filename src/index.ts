/**
 * Pigment-Genesis Design System
 * 
 * A comprehensive, accessible, and rebrand-ready design system for CustomInk
 * built with React, TypeScript, Tailwind CSS, and Storybook.
 * 
 * @example Basic usage
 * ```tsx
 * import { Button, Input, Card } from 'pigment-genesis';
 * 
 * function App() {
 *   return (
 *     <Card variant="elevated" className="p-6">
 *       <Input 
 *         label="Email"
 *         placeholder="Enter your email"
 *         size="md"
 *         className="mb-4"
 *       />
 *       <Button 
 *         variant="primary" 
 *         size="md"
 *         onClick={() => console.log('Submitted!')}
 *       >
 *         Submit
 *       </Button>
 *     </Card>
 *   );
 * }
 * ```
 */

// Main component exports
export * from './components';

// Design token exports for advanced usage
export { 
  designTokens,
  tailwindTokens, 
  semanticTokens,
  extendedTokens,
  cssCustomProperties
} from './tokens';

// Utility exports for custom components
export { cn } from './utils/classNames';
export { 
  createComponentVariants,
  sizeVariants,
  colorVariants,
  interactiveBase,
  cardVariants,
  textVariants,
  inputVariants,
  responsiveVariants,
  touchTarget,
  focusRing,
  disabledClasses,
  responsive,
  motionSafe
} from './utils/componentVariants';

// Testing utilities (for consuming applications)
export { 
  renderWithProviders,
  runStandardComponentTests,
  runAccessibilityTests,
  interactionTests
} from './utils/testing';

// Storybook utilities (for consuming applications)
export {
  createStoryMeta,
  standardArgTypes,
  generateStandardStories,
  createResponsiveStory,
  createVariantStory
} from './utils/storybook';

// SwiftUI generation utilities (for cross-platform development)
export {
  generateSwiftUIComponent,
  generateSwiftUITokens,
  convertPropsToSwiftUI
} from './utils/swiftui';

// Type exports for TypeScript consumers
export type {
  // Component prop types
  BaseComponentProps,
  InteractiveComponentProps,
  VariantComponentProps,
  SemanticVariantComponentProps,
  ClickableComponentProps,
  FormComponentProps,
  LayoutComponentProps,
  TypographyComponentProps,
  MediaComponentProps,
  NavigationComponentProps,
  OverlayComponentProps,
  ResponsiveProps,
  AnimationProps,
  FigmaComponentProps,
  
  // Standard prop combinations
  StandardButtonProps,
  StandardInputProps,
  StandardCardProps,
  StandardTextProps,
  StandardMediaProps,
  
  // HTML element extensions
  ButtonElementProps,
  InputElementProps,
  LinkElementProps,
  DivElementProps
} from './types/component';

export type {
  // Variant types
  Size,
  Variant,
  SemanticVariant,
  State,
  FieldState,
  Spacing,
  Elevation,
  BorderRadius,
  TypographySize,
  FontWeight,
  TextColor,
  BackgroundColor,
  Border,
  Animation,
  Duration,
  Easing,
  Orientation,
  Alignment,
  Justification,
  Position,
  Overflow,
  Display,
  Breakpoint,
  ResponsiveVariant,
  CompoundVariant,
  VariantConfig
} from './types/variants';

export type {
  // Design token types
  DesignTokenSystem,
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
  TokenValidationResult,
  TokenUsage
} from './types/tokens';

// Package metadata
export const version = '1.0.0';
export const name = 'pigment-genesis';

/**
 * Design system metadata
 */
export const metadata = {
  name: 'Pigment-Genesis',
  version: '1.0.0',
  description: 'CustomInk Design System - Comprehensive React and SwiftUI component library',
  author: 'CustomInk',
  repository: 'https://github.com/customink/pigment-genesis',
  documentation: 'https://design.customink.com',
  storybook: 'https://components.customink.com',
  license: 'MIT',
  keywords: [
    'design-system',
    'react',
    'typescript',
    'tailwindcss',
    'storybook',
    'accessibility',
    'responsive',
    'customink',
    'figma-tokens',
    'swiftui'
  ],
  features: {
    designFirst: 'Every component built from Figma specifications',
    accessibilityFirst: 'WCAG 2.1 AA compliant with comprehensive testing',
    mobileFirst: 'Responsive design starting from mobile',
    tokenDriven: 'Design tokens enable instant rebranding',
    testDriven: 'Comprehensive testing ensures reliability',
    swiftUISupport: 'Auto-generated iOS components'
  }
};

export default {
  version,
  name,
  metadata
};
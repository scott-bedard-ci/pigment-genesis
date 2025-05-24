// Main entry point for Pigment Genesis Design System
// This is the primary export file that consumers will import from

// Export all components
export * from './components';

// Export design tokens
export * from './tokens';

// Export utility types
export type {
  BaseComponentProps,
  VariantComponentProps,
  InteractiveComponentProps,
  FormComponentProps,
  ContainerComponentProps,
  LayoutComponentProps,
  IconComponentProps,
  ResponsiveComponentProps,
  AnimationComponentProps
} from './types/component';

export type {
  Size,
  Variant,
  ColorIntent,
  Spacing,
  Typography,
  ButtonVariants,
  InputVariants,
  CardVariants
} from './types/variants';

export type {
  ColorToken,
  SpacingToken,
  TypographyToken,
  TokenMetadata
} from './types/tokens';

// Export utilities for advanced usage
export { cn } from './utils/classNames';

// Re-export commonly used utilities
export { 
  buttonVariants,
  inputVariants,
  cardVariants,
  touchTargets,
  focusRing,
  transitions
} from './utils/componentVariants';

// Version information
export const version = '1.0.0';
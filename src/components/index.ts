/**
 * Pigment-Genesis Design System Components
 * 
 * This is the main entry point for all design system components.
 * Components are organized by atomic design principles:
 * 
 * - Atoms: Basic building blocks (Button, Input, Icon)
 * - Molecules: Simple combinations (InputField, ButtonGroup) 
 * - Organisms: Complex combinations (Navigation, Header)
 */

// Atom exports
export * from './atoms';

// Molecule exports  
export * from './molecules';

// Organism exports
export * from './organisms';

// Design tokens and utilities (for advanced usage)
export { designTokens, tailwindTokens, semanticTokens } from '../tokens';
export { cn } from '../utils/classNames';
export { 
  createComponentVariants, 
  sizeVariants, 
  colorVariants,
  responsiveVariants,
  touchTarget
} from '../utils/componentVariants';

// Type exports for TypeScript users
export type {
  BaseComponentProps,
  VariantComponentProps,
  SemanticVariantComponentProps,
  ClickableComponentProps,
  FormComponentProps,
  LayoutComponentProps,
  TypographyComponentProps
} from '../types/component';

export type {
  Size,
  Variant,
  SemanticVariant,
  State,
  FieldState,
  Spacing,
  TextColor,
  BackgroundColor
} from '../types/variants';

export type {
  DesignTokenSystem,
  ColorToken,
  SpacingToken,
  TypographyToken,
  EffectToken
} from '../types/tokens';
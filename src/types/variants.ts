// Standard variant type definitions for consistent component APIs
// These types ensure all components use the same variant names and patterns

/**
 * Standard size variants used across components
 * These sizes should be consistently applied to padding, font-size, and overall scale
 */
export type Size = 'sm' | 'md' | 'lg';

/**
 * Standard visual variants for component styling
 * These determine the color scheme and visual treatment
 */
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Extended variant options for components that need more variation
 */
export type ExtendedVariant = Variant | 'success' | 'warning' | 'error' | 'info';

/**
 * Component state variants for interactive feedback
 */
export type State = 'default' | 'hover' | 'active' | 'focus' | 'disabled' | 'loading';

/**
 * Color intent variants for semantic meaning
 */
export type ColorIntent = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';

/**
 * Spacing variants for consistent spacing patterns
 */
export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

/**
 * Border radius variants
 */
export type BorderRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Shadow variants for elevation and depth
 */
export type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Typography variants for text styling
 */
export type Typography = 
  | 'heading-xl' 
  | 'heading-lg' 
  | 'heading-md' 
  | 'heading-sm' 
  | 'body-lg' 
  | 'body-md' 
  | 'body-sm' 
  | 'caption';

/**
 * Font weight variants
 */
export type FontWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

/**
 * Alignment variants for layout components
 */
export type Alignment = 'start' | 'center' | 'end' | 'stretch';

/**
 * Justification variants for layout components
 */
export type Justification = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

/**
 * Direction variants for layout components
 */
export type Direction = 'row' | 'column';

/**
 * Breakpoint variants for responsive design
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Animation variants for micro-interactions
 */
export type Animation = 'none' | 'fade' | 'slide' | 'scale' | 'bounce';

/**
 * Transition duration variants
 */
export type TransitionDuration = 'fast' | 'normal' | 'slow';

/**
 * Transition timing variants
 */
export type TransitionTiming = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';

/**
 * Button-specific variants
 */
export interface ButtonVariants {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * Input-specific variants
 */
export interface InputVariants {
  variant?: 'default' | 'error' | 'success';
  size?: Size;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
}

/**
 * Card-specific variants
 */
export interface CardVariants {
  variant?: 'default' | 'elevated' | 'interactive';
  padding?: 'none' | Size;
  border?: boolean;
  shadow?: Shadow;
}

/**
 * Badge-specific variants
 */
export interface BadgeVariants {
  variant?: ColorIntent;
  size?: Size;
  rounded?: boolean;
}

/**
 * Alert-specific variants
 */
export interface AlertVariants {
  variant?: ColorIntent;
  size?: Size;
  dismissible?: boolean;
}

/**
 * Modal-specific variants
 */
export interface ModalVariants {
  size?: Size | 'xs' | 'xl' | 'full';
  centered?: boolean;
  scrollable?: boolean;
}

/**
 * Tooltip-specific variants
 */
export interface TooltipVariants {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  size?: Size;
  delay?: number;
}

/**
 * Dropdown-specific variants
 */
export interface DropdownVariants {
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  size?: Size;
  fullWidth?: boolean;
}

/**
 * Navigation-specific variants
 */
export interface NavigationVariants {
  variant?: 'horizontal' | 'vertical' | 'breadcrumb';
  size?: Size;
  border?: boolean;
}

/**
 * Table-specific variants
 */
export interface TableVariants {
  variant?: 'default' | 'striped' | 'bordered';
  size?: Size;
  hoverable?: boolean;
  sticky?: boolean;
}

/**
 * Form-specific variants
 */
export interface FormVariants {
  layout?: 'vertical' | 'horizontal' | 'inline';
  size?: Size;
  spacing?: Spacing;
}

/**
 * Grid-specific variants
 */
export interface GridVariants {
  columns?: number | 'auto';
  gap?: Spacing;
  responsive?: boolean;
}

/**
 * Flex-specific variants
 */
export interface FlexVariants {
  direction?: Direction;
  align?: Alignment;
  justify?: Justification;
  gap?: Spacing;
  wrap?: boolean;
}

/**
 * Loading-specific variants
 */
export interface LoadingVariants {
  variant?: 'spinner' | 'skeleton' | 'pulse';
  size?: Size;
  fullScreen?: boolean;
}

/**
 * Pagination-specific variants
 */
export interface PaginationVariants {
  variant?: 'default' | 'simple' | 'compact';
  size?: Size;
  showInfo?: boolean;
}

/**
 * Utility type for getting variant keys
 */
export type VariantKeys<T> = keyof T;

/**
 * Utility type for getting variant values
 */
export type VariantValues<T> = T[keyof T];

/**
 * Utility type for creating responsive variants
 */
export type ResponsiveVariant<T> = T | Partial<Record<Breakpoint, T>>;

/**
 * Utility type for creating conditional variants
 */
export type ConditionalVariant<T> = T | ((props: any) => T);

/**
 * Utility type for variant props with defaults
 */
export type VariantPropsWithDefaults<T, D extends Partial<T>> = T & {
  [K in keyof D]: K extends keyof T ? NonNullable<T[K]> : never;
};
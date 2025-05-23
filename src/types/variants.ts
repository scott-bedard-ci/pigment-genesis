/**
 * Standard variant type definitions
 * Ensures consistency across all components in the design system
 */

/**
 * Size variants used across interactive components
 * Mobile-first responsive sizing with consistent scale
 */
export type Size = 'sm' | 'md' | 'lg';

/**
 * Visual variants for component styling
 * Core design system color variants
 */
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Semantic variants including status colors
 * Extends core variants with semantic meaning
 */
export type SemanticVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'outline' 
  | 'ghost';

/**
 * Component states for user interactions
 * Standard interaction states across components
 */
export type State = 'default' | 'hover' | 'active' | 'focus' | 'disabled';

/**
 * Form field states for validation feedback
 * Visual states for form components
 */
export type FieldState = 'default' | 'error' | 'success' | 'warning';

/**
 * Spacing variants using design token scale
 * Consistent spacing options across layout components
 */
export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

/**
 * Elevation variants for z-axis hierarchy
 * Shadow and elevation options for cards and overlays
 */
export type Elevation = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Border radius variants
 * Consistent rounding options across components
 */
export type BorderRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

/**
 * Typography size variants
 * Font size scale from design tokens
 */
export type TypographySize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

/**
 * Font weight variants
 * Typography weight options
 */
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

/**
 * Text color variants
 * Semantic color options for typography
 */
export type TextColor = 
  | 'primary'    // Main text color (gray-900)
  | 'secondary'  // Secondary text color (gray-600)
  | 'muted'      // Muted text color (gray-500)
  | 'accent'     // Accent color (primary-600)
  | 'success'    // Success color (success-600)
  | 'warning'    // Warning color (warning-600)
  | 'error'      // Error color (error-600)
  | 'white'      // White text
  | 'inherit';   // Inherit from parent

/**
 * Background color variants
 * Background options for layout components
 */
export type BackgroundColor = 
  | 'transparent'
  | 'white'
  | 'gray-50'
  | 'gray-100'
  | 'gray-900'
  | 'primary-50'
  | 'primary-500'
  | 'secondary-50'
  | 'secondary-500'
  | 'success-50'
  | 'warning-50'
  | 'error-50';

/**
 * Border variants
 * Border style options
 */
export type Border = 'none' | 'default' | 'thick' | 'dashed' | 'dotted';

/**
 * Animation variants
 * Consistent animation options with motion preferences
 */
export type Animation = 
  | 'none'
  | 'fade-in'
  | 'fade-out'
  | 'slide-up'
  | 'slide-down'
  | 'scale-up'
  | 'scale-down'
  | 'bounce'
  | 'pulse'
  | 'spin';

/**
 * Transition duration variants
 * Standard timing options for animations
 */
export type Duration = 'fast' | 'normal' | 'slow' | 'slower';

/**
 * Easing function variants
 * Animation timing functions
 */
export type Easing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

/**
 * Layout orientation variants
 * Direction options for flex and grid layouts
 */
export type Orientation = 'horizontal' | 'vertical';

/**
 * Alignment variants
 * Content alignment options
 */
export type Alignment = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/**
 * Justification variants
 * Content justification options
 */
export type Justification = 
  | 'start' 
  | 'center' 
  | 'end' 
  | 'between' 
  | 'around' 
  | 'evenly';

/**
 * Position variants
 * CSS position options
 */
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

/**
 * Overflow variants
 * Content overflow handling
 */
export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto';

/**
 * Display variants
 * CSS display options
 */
export type Display = 
  | 'block' 
  | 'inline' 
  | 'inline-block' 
  | 'flex' 
  | 'inline-flex' 
  | 'grid' 
  | 'inline-grid' 
  | 'none';

/**
 * Breakpoint variants
 * Responsive breakpoint identifiers
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Input type variants
 * HTML input type options
 */
export type InputType = 
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'file'
  | 'hidden';

/**
 * Button type variants
 * HTML button type options
 */
export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * Link target variants
 * HTML anchor target options
 */
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

/**
 * Loading state variants
 * Loading indicator options
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Icon position variants
 * Icon placement relative to text
 */
export type IconPosition = 'left' | 'right' | 'top' | 'bottom';

/**
 * Modal size variants
 * Modal dialog size options
 */
export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Toast position variants
 * Toast notification positioning
 */
export type ToastPosition = 
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/**
 * Pagination variants
 * Pagination component styling
 */
export type PaginationVariant = 'default' | 'outline' | 'minimal';

/**
 * Table size variants
 * Table component sizing
 */
export type TableSize = 'sm' | 'md' | 'lg';

/**
 * Badge variants
 * Badge component styling
 */
export type BadgeVariant = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'outline';

/**
 * Progress variants
 * Progress indicator styling
 */
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error';

/**
 * Skeleton variants
 * Loading skeleton styling
 */
export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

/**
 * Divider variants
 * Divider component styling
 */
export type DividerVariant = 'solid' | 'dashed' | 'dotted' | 'gradient';

/**
 * Card variants
 * Card component styling and elevation
 */
export type CardVariant = 'flat' | 'raised' | 'elevated' | 'floating';

/**
 * Navigation variants
 * Navigation component styling
 */
export type NavigationVariant = 'tabs' | 'pills' | 'underline' | 'sidebar' | 'breadcrumb';

/**
 * Aspect ratio variants
 * Common aspect ratios for media components
 */
export type AspectRatio = 
  | 'square'      // 1:1
  | 'video'       // 16:9
  | 'photo'       // 4:3
  | 'golden'      // 1.618:1
  | 'cinema'      // 21:9
  | 'auto';       // Natural aspect ratio

/**
 * Object fit variants
 * Image/video object-fit options
 */
export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

/**
 * Text transform variants
 * Text transformation options
 */
export type TextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

/**
 * Text decoration variants
 * Text decoration options
 */
export type TextDecoration = 'none' | 'underline' | 'line-through' | 'overline';

/**
 * Text alignment variants
 * Text alignment options
 */
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * List variants
 * List component styling
 */
export type ListVariant = 'none' | 'bullet' | 'number' | 'custom';

/**
 * Form layout variants
 * Form component layout options
 */
export type FormLayout = 'vertical' | 'horizontal' | 'inline';

/**
 * Validation state variants
 * Form validation visual states
 */
export type ValidationState = 'valid' | 'invalid' | 'pending';

/**
 * Theme variants
 * Light/dark theme options
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Density variants
 * Component density for different use cases
 */
export type Density = 'compact' | 'comfortable' | 'spacious';

/**
 * Variant mapping utilities
 * Helper types for variant combinations
 */

/** All size-based variants */
export type SizeVariants = Size | TypographySize | ModalSize | TableSize;

/** All color-based variants */
export type ColorVariants = Variant | SemanticVariant | TextColor | BackgroundColor;

/** All spacing-based variants */
export type SpacingVariants = Spacing | BorderRadius | Elevation;

/** All state-based variants */
export type StateVariants = State | FieldState | LoadingState | ValidationState;

/** All layout-based variants */
export type LayoutVariants = 
  | Orientation 
  | Alignment 
  | Justification 
  | Position 
  | Display 
  | Overflow;

/** All animation-based variants */
export type AnimationVariants = Animation | Duration | Easing;

/**
 * Responsive variant helpers
 * Types for responsive variant combinations
 */
export type ResponsiveVariant<T> = T | Partial<Record<Breakpoint, T>>;

/**
 * Compound variants
 * For complex variant combinations
 */
export interface CompoundVariant {
  size?: Size;
  variant?: Variant | SemanticVariant;
  state?: State;
  className: string;
}

/**
 * Variant configuration
 * For component variant system setup
 */
export interface VariantConfig<T extends Record<string, any> = {}> {
  variants: T;
  defaultVariants?: Partial<T>;
  compoundVariants?: CompoundVariant[];
}

export default {
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
  InputType,
  ButtonType,
  LinkTarget,
  LoadingState,
  IconPosition,
  ModalSize,
  ToastPosition,
  PaginationVariant,
  TableSize,
  BadgeVariant,
  ProgressVariant,
  SkeletonVariant,
  DividerVariant,
  CardVariant,
  NavigationVariant,
  AspectRatio,
  ObjectFit,
  TextTransform,
  TextDecoration,
  TextAlign,
  ListVariant,
  FormLayout,
  ValidationState,
  Theme,
  Density,
  SizeVariants,
  ColorVariants,
  SpacingVariants,
  StateVariants,
  LayoutVariants,
  AnimationVariants,
  ResponsiveVariant,
  CompoundVariant,
  VariantConfig
};
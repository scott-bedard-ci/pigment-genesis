import type { ReactNode, HTMLAttributes } from 'react';

/**
 * Base component prop interfaces
 * Provides consistent foundation for all components in the design system
 */

/**
 * Base props that all components should extend
 * Includes common attributes and accessibility props
 */
export interface BaseComponentProps {
  /** Additional CSS classes to apply */
  className?: string;
  
  /** Child elements */
  children?: ReactNode;
  
  /** Test identifier for automated testing */
  'data-testid'?: string;
  
  /** Unique identifier for the component */
  id?: string;
  
  /** ARIA label for accessibility */
  'aria-label'?: string;
  
  /** ARIA description for accessibility */
  'aria-describedby'?: string;
  
  /** Custom CSS properties */
  style?: React.CSSProperties;
}

/**
 * Interactive component props
 * For components that can be clicked, focused, or disabled
 */
export interface InteractiveComponentProps extends BaseComponentProps {
  /** Whether the component is disabled */
  disabled?: boolean;
  
  /** Tab index for keyboard navigation */
  tabIndex?: number;
  
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent) => void;
  
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent) => void;
  
  /** Key down event handler */
  onKeyDown?: (event: React.KeyboardEvent) => void;
  
  /** Mouse enter event handler */
  onMouseEnter?: (event: React.MouseEvent) => void;
  
  /** Mouse leave event handler */
  onMouseLeave?: (event: React.MouseEvent) => void;
}

/**
 * Variant component props
 * For components with size and visual variant options
 */
export interface VariantComponentProps extends BaseComponentProps {
  /** Size variant affecting padding and font size */
  size?: 'sm' | 'md' | 'lg';
  
  /** Visual variant of the component */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /** Whether the component is disabled */
  disabled?: boolean;
}

/**
 * Semantic variant component props
 * For components that support semantic color variants
 */
export interface SemanticVariantComponentProps extends BaseComponentProps {
  /** Size variant affecting padding and font size */
  size?: 'sm' | 'md' | 'lg';
  
  /** Visual variant including semantic colors */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'ghost';
  
  /** Whether the component is disabled */
  disabled?: boolean;
}

/**
 * Clickable component props
 * For buttons, links, and other clickable elements
 */
export interface ClickableComponentProps extends InteractiveComponentProps, VariantComponentProps {
  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  /** Whether the component is in a loading state */
  loading?: boolean;
  
  /** Icon to display (usually as ReactNode) */
  icon?: ReactNode;
  
  /** Icon position relative to text */
  iconPosition?: 'left' | 'right';
}

/**
 * Form component props
 * For input fields, selects, and other form controls
 */
export interface FormComponentProps extends InteractiveComponentProps {
  /** Input name attribute */
  name?: string;
  
  /** Input value */
  value?: string | number | boolean;
  
  /** Default value for uncontrolled components */
  defaultValue?: string | number | boolean;
  
  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /** Whether the field is required */
  required?: boolean;
  
  /** Placeholder text */
  placeholder?: string;
  
  /** Label text */
  label?: string;
  
  /** Helper text displayed below the field */
  helperText?: string;
  
  /** Error message to display */
  error?: string;
  
  /** Success message to display */
  success?: string;
  
  /** Field state affecting styling */
  state?: 'default' | 'error' | 'success' | 'warning';
}

/**
 * Layout component props
 * For containers, cards, and layout elements
 */
export interface LayoutComponentProps extends BaseComponentProps {
  /** Padding variant */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  
  /** Background variant */
  background?: 'transparent' | 'white' | 'gray-50' | 'gray-100';
  
  /** Border variant */
  border?: 'none' | 'default' | 'thick';
  
  /** Shadow/elevation variant */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  
  /** Border radius variant */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

/**
 * Typography component props
 * For text elements and typography
 */
export interface TypographyComponentProps extends BaseComponentProps {
  /** Typography size variant */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  
  /** Font weight variant */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  
  /** Text color variant */
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'error';
  
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  /** Text decoration */
  decoration?: 'none' | 'underline' | 'line-through';
  
  /** Text transform */
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  
  /** Whether text should truncate with ellipsis */
  truncate?: boolean;
  
  /** Number of lines before truncating */
  lines?: number;
}

/**
 * Media component props
 * For images, videos, and other media elements
 */
export interface MediaComponentProps extends BaseComponentProps {
  /** Media source URL */
  src: string;
  
  /** Alternative text for accessibility */
  alt: string;
  
  /** Loading strategy */
  loading?: 'lazy' | 'eager';
  
  /** Object fit behavior */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  
  /** Aspect ratio */
  aspectRatio?: 'square' | 'video' | 'auto' | string;
  
  /** Size variants */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Navigation component props
 * For navigation elements and menus
 */
export interface NavigationComponentProps extends BaseComponentProps {
  /** Navigation items */
  items?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    children?: Array<any>;
  }>;
  
  /** Navigation orientation */
  orientation?: 'horizontal' | 'vertical';
  
  /** Navigation variant */
  variant?: 'tabs' | 'pills' | 'underline' | 'sidebar';
  
  /** Active item identifier */
  activeItem?: string;
}

/**
 * Modal/Overlay component props
 * For modals, tooltips, and overlay elements
 */
export interface OverlayComponentProps extends BaseComponentProps {
  /** Whether the overlay is open */
  open: boolean;
  
  /** Close event handler */
  onClose: () => void;
  
  /** Whether clicking outside closes the overlay */
  closeOnOutsideClick?: boolean;
  
  /** Whether pressing escape closes the overlay */
  closeOnEscape?: boolean;
  
  /** Overlay backdrop variant */
  backdrop?: 'blur' | 'dark' | 'light' | 'none';
  
  /** Animation variant */
  animation?: 'fade' | 'scale' | 'slide-up' | 'slide-down';
  
  /** Z-index for stacking */
  zIndex?: number;
}

/**
 * Responsive props helper
 * For components that need responsive behavior
 */
export interface ResponsiveProps<T> {
  /** Base value (mobile-first) */
  base?: T;
  
  /** Small screen value (sm breakpoint) */
  sm?: T;
  
  /** Medium screen value (md breakpoint) */
  md?: T;
  
  /** Large screen value (lg breakpoint) */
  lg?: T;
  
  /** Extra large screen value (xl breakpoint) */
  xl?: T;
}

/**
 * Animation props
 * For components with animation capabilities
 */
export interface AnimationProps {
  /** Animation variant */
  animation?: 'none' | 'fade-in' | 'fade-out' | 'slide-up' | 'slide-down' | 'bounce' | 'pulse';
  
  /** Animation duration in ms */
  duration?: number;
  
  /** Animation delay in ms */
  delay?: number;
  
  /** Animation easing function */
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
  
  /** Whether to respect reduced motion preferences */
  respectMotionPreference?: boolean;
}

/**
 * Figma frame tracking props
 * For maintaining connection to Figma designs
 */
export interface FigmaComponentProps {
  /** Figma frame ID for design reference */
  figmaFrameId?: string;
  
  /** Design token version */
  tokenVersion?: string;
  
  /** Last sync timestamp */
  lastSync?: string;
}

/**
 * Component composition helpers
 * Utility types for component composition
 */

/** Extract props from a React component type */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/** Make specific props required */
export type RequiredProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

/** Make specific props optional */
export type OptionalProps<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** Polymorphic component props for elements that can be different HTML tags */
export type PolymorphicProps<T extends React.ElementType, P = {}> = P & {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | keyof P>;

/**
 * Common prop combinations
 * Pre-built combinations for common component patterns
 */

/** Standard interactive button/link props */
export type StandardButtonProps = ClickableComponentProps & VariantComponentProps & AnimationProps;

/** Standard form input props */
export type StandardInputProps = FormComponentProps & VariantComponentProps & AnimationProps;

/** Standard card/container props */
export type StandardCardProps = LayoutComponentProps & AnimationProps;

/** Standard text component props */
export type StandardTextProps = TypographyComponentProps & AnimationProps;

/** Standard media component props */
export type StandardMediaProps = MediaComponentProps & LayoutComponentProps & AnimationProps;

/**
 * HTML element prop extensions
 * For components that extend native HTML elements
 */

/** Button element props */
export type ButtonElementProps = BaseComponentProps & 
  Omit<HTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    type?: 'button' | 'submit' | 'reset';
  };

/** Input element props */
export type InputElementProps = BaseComponentProps & 
  Omit<HTMLAttributes<HTMLInputElement>, 'className' | 'children' | 'size'> & {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  };

/** Link element props */
export type LinkElementProps = BaseComponentProps & 
  Omit<HTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
  };

/** Div element props */
export type DivElementProps = BaseComponentProps & 
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'>;

export default {
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
  StandardButtonProps,
  StandardInputProps,
  StandardCardProps,
  StandardTextProps,
  StandardMediaProps,
  ButtonElementProps,
  InputElementProps,
  LinkElementProps,
  DivElementProps
};
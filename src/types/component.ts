// Base component interfaces and shared prop patterns
// These types provide consistent interfaces across all components in the design system

import React from 'react';

/**
 * Base props that every component should accept
 * Provides consistent API across all components
 */
export interface BaseComponentProps {
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
  
  /**
   * Child elements to render inside the component
   */
  children?: React.ReactNode;
  
  /**
   * Test identifier for testing and debugging
   */
  'data-testid'?: string;
  
  /**
   * Unique identifier for the component
   */
  id?: string;
}

/**
 * Props for components that support variants (most design system components)
 * Extends BaseComponentProps with variant and size support
 */
export interface VariantComponentProps extends BaseComponentProps {
  /**
   * Size variant affecting padding, font size, and overall scale
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Visual variant determining color scheme and styling
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /**
   * Whether the component is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Props for interactive components (buttons, inputs, etc.)
 * Extends VariantComponentProps with interaction handlers
 */
export interface InteractiveComponentProps extends VariantComponentProps {
  /**
   * Click event handler
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Focus event handler
   */
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  
  /**
   * Blur event handler
   */
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  
  /**
   * Key down event handler for keyboard interactions
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  
  /**
   * Whether the component is currently loading
   * @default false
   */
  loading?: boolean;
  
  /**
   * Tab index for keyboard navigation control
   */
  tabIndex?: number;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * ARIA described by for accessibility
   */
  'aria-describedby'?: string;
}

/**
 * Props for form input components
 * Extends InteractiveComponentProps with form-specific properties
 */
export interface FormComponentProps<T = string> extends InteractiveComponentProps {
  /**
   * Current value of the input
   */
  value?: T;
  
  /**
   * Default value for uncontrolled components
   */
  defaultValue?: T;
  
  /**
   * Change event handler
   */
  onChange?: (value: T, event?: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Input name attribute
   */
  name?: string;
  
  /**
   * Whether the input is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Whether the input has an error state
   * @default false
   */
  error?: boolean;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Help text to display below the input
   */
  helpText?: string;
  
  /**
   * Label for the input
   */
  label?: string;
  
  /**
   * Whether the label should be hidden visually (but remain for screen readers)
   * @default false
   */
  hideLabel?: boolean;
}

/**
 * Props for container components (cards, modals, etc.)
 * Extends BaseComponentProps with container-specific properties
 */
export interface ContainerComponentProps extends BaseComponentProps {
  /**
   * Padding variant for the container
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  
  /**
   * Whether the container should have a border
   * @default true
   */
  border?: boolean;
  
  /**
   * Whether the container should have a shadow
   * @default true
   */
  shadow?: boolean;
  
  /**
   * Background color variant
   * @default 'white'
   */
  background?: 'white' | 'gray' | 'transparent';
}

/**
 * Props for layout components (flex, grid, etc.)
 * Extends BaseComponentProps with layout-specific properties
 */
export interface LayoutComponentProps extends BaseComponentProps {
  /**
   * Gap between child elements
   * @default 'md'
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Alignment of child elements
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  
  /**
   * Justification of child elements
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  
  /**
   * Direction of child elements
   * @default 'row'
   */
  direction?: 'row' | 'column';
  
  /**
   * Whether child elements should wrap
   * @default false
   */
  wrap?: boolean;
}

/**
 * Props for components that can have icons
 */
export interface IconComponentProps {
  /**
   * Icon component to display before content
   */
  iconBefore?: React.ComponentType<{ className?: string }>;
  
  /**
   * Icon component to display after content
   */
  iconAfter?: React.ComponentType<{ className?: string }>;
  
  /**
   * Whether to show only the icon (no text)
   * @default false
   */
  iconOnly?: boolean;
}

/**
 * Props for components with responsive behavior
 */
export interface ResponsiveComponentProps {
  /**
   * Responsive size configuration
   */
  responsive?: {
    sm?: 'sm' | 'md' | 'lg';
    md?: 'sm' | 'md' | 'lg';
    lg?: 'sm' | 'md' | 'lg';
  };
  
  /**
   * Whether to stack elements on mobile
   * @default false
   */
  stackOnMobile?: boolean;
}

/**
 * Polymorphic component props for components that can render as different elements
 */
export interface PolymorphicComponentProps<T extends React.ElementType = 'div'> {
  /**
   * The element type to render as
   */
  as?: T;
}

/**
 * Complete polymorphic component props with proper typing
 */
export type PolymorphicProps<T extends React.ElementType, P = {}> = P &
  PolymorphicComponentProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'>;

/**
 * Component ref type helper for forwarded refs
 */
export type ComponentRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

/**
 * Animation and transition props
 */
export interface AnimationComponentProps {
  /**
   * Whether to animate the component
   * @default true
   */
  animate?: boolean;
  
  /**
   * Animation duration in milliseconds
   * @default 200
   */
  animationDuration?: number;
  
  /**
   * Animation easing function
   * @default 'ease-in-out'
   */
  animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
}

/**
 * Utility type for extracting component props
 */
export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Utility type for making certain props required
 */
export type RequireProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Utility type for making certain props optional
 */
export type OptionalProps<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
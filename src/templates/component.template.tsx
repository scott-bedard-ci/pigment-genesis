// Component template for creating new design system components
// This template ensures consistency across all components in the system

import React from 'react';
import { cn } from '@/utils/classNames';
import { buttonVariants } from '@/utils/componentVariants';
import type { VariantComponentProps } from '@/types/component';
import type { VariantProps } from 'class-variance-authority';

// Component-specific variant configuration
const componentNameVariants = buttonVariants.extend({
  variants: {
    // Override or extend base variants as needed
    variant: {
      primary: 'bg-primary-500 text-white hover:bg-primary-600',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
      outline: 'border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-50',
      ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100'
    },
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

/**
 * Props interface for ComponentName
 * Extends base component props with component-specific properties
 */
interface ComponentNameProps 
  extends VariantComponentProps,
          VariantProps<typeof componentNameVariants> {
  /**
   * Click handler for the component
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Whether the component is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Custom component-specific prop example
   */
  customProp?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
}

/**
 * ComponentName - Brief description of what this component does
 * 
 * This component follows the atomic design principles and uses design tokens
 * exclusively for all styling. It's fully responsive and accessible.
 * 
 * @example
 * ```tsx
 * <ComponentName variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </ComponentName>
 * ```
 */
export const ComponentName = React.forwardRef<
  HTMLButtonElement,
  ComponentNameProps
>(({
  size = 'md',
  variant = 'primary',
  disabled = false,
  loading = false,
  className,
  children,
  onClick,
  customProp,
  'data-testid': testId,
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        // Component base classes with responsive design
        'inline-flex items-center justify-center',
        'font-medium',
        'rounded-md',
        'transition-colors duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        // Responsive touch targets
        'min-h-[44px] min-w-[44px]', // Minimum touch target size
        // Component variants
        componentNameVariants({ variant, size }),
        // Loading state
        loading && 'opacity-75 cursor-wait',
        // Custom className override
        className
      )}
      disabled={disabled || loading}
      onClick={handleClick}
      data-testid={testId}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
});

ComponentName.displayName = 'ComponentName';

export default ComponentName;
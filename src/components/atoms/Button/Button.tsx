import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classNames';
import { BaseComponentProps } from '@/types/component';

// Button variant configuration using extracted Figma design tokens
const buttonVariants = cva(
  [
    // Base styles extracted from Figma
    'inline-flex items-center justify-center',
    'font-semibold transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:cursor-not-allowed',
    'relative overflow-hidden',
    'text-center whitespace-nowrap',
    'border-0' // All buttons use background colors, not borders (except secondary)
  ],
  {
    variants: {
      // Type variants extracted from Figma button frame
      variant: {
        primary: [
          'bg-interactive-bg-bold text-interactive-text-on-fill',
          'hover:bg-interactive-bg-bold-hover',
          'active:bg-interactive-bg-bold-pressed',
          'disabled:bg-interactive-border-disabled disabled:text-interactive-text-disabled'
        ],
        secondary: [
          'bg-neutral-bg-primary text-interactive-text-default',
          'border border-interactive-border-bold',
          'hover:bg-primary-50',  // Original Figma-designed hover color (very light blue)
          'active:bg-primary-100', // Original Figma-designed active color (light blue)
          'disabled:bg-neutral-bg-primary disabled:text-interactive-text-disabled disabled:border-interactive-border-disabled'
        ],
        tertiary: [
          'bg-partnership-bg-bold text-partnership-text-on-fill',
          'hover:bg-secondary-600',  // Original Figma-designed hover color (darker red)
          'active:bg-secondary-700', // Original Figma-designed active color (even darker red)
          'disabled:bg-interactive-border-disabled disabled:text-interactive-text-disabled'
        ],
        text: [
          'bg-transparent text-interactive-text-default',
          'hover:bg-primary-50',  // Original Figma-designed hover color (consistent with secondary)
          'active:bg-primary-100', // Original Figma-designed active color (consistent with secondary)
          'disabled:text-interactive-text-disabled'
        ]
      },
      // Size variants extracted from Figma button frame
      size: {
        small: [
          'h-8 min-w-16 px-4 py-1.5',
          'text-xs leading-4',
          'rounded-md'
        ],
        medium: [
          'h-10 min-w-16 px-4 py-2',
          'text-sm leading-[18px]',
          'rounded-md'
        ],
        large: [
          'h-12 min-w-16 px-4 py-3',
          'text-base leading-5',
          'rounded-md'
        ]
      },
      // Icon position for buttons with icons
      iconPosition: {
        none: '',
        left: 'flex-row gap-2',
        right: 'flex-row-reverse gap-2',
        only: 'p-3'                                          // Icon only, square padding
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
      iconPosition: 'none'
    }
  }
);

// Button component props interface
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    VariantProps<typeof buttonVariants>,
    BaseComponentProps {
  /**
   * Button label text
   */
  children?: React.ReactNode;
  
  /**
   * Icon element to display with button
   */
  icon?: React.ReactNode;
  
  /**
   * Loading state - shows spinner and disables interaction
   */
  loading?: boolean;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * Custom icon size (defaults to 24px for large, 20px for medium, 16px for small)
   */
  iconSize?: number;
}

/**
 * Button Component
 * 
 * A comprehensive button component built from Figma design specifications.
 * Supports multiple variants, sizes, and icon positioning with pixel-perfect
 * accuracy to Figma designs.
 * 
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button>Click me</Button>
 * 
 * // Secondary button with icon
 * <Button variant="secondary" icon={<PlusIcon />} iconPosition="left">
 *   Add Item
 * </Button>
 * 
 * // Icon-only button
 * <Button variant="primary" icon={<SearchIcon />} iconPosition="only" />
 * 
 * // Disabled button
 * <Button disabled>Cannot click</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'large',
      iconPosition = 'none',
      children,
      icon,
      loading = false,
      fullWidth = false,
      iconSize,
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine if this is an icon-only button
    const isIconOnly = iconPosition === 'only' || (!children && icon);
    const effectiveIconPosition = isIconOnly ? 'only' : iconPosition;
    
    // Default icon sizes based on button size (extracted from Figma)
    const defaultIconSize = size === 'small' ? 16 : size === 'medium' ? 20 : 24;
    const effectiveIconSize = iconSize || defaultIconSize;
    
    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className="animate-spin"
        width={effectiveIconSize}
        height={effectiveIconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="32"
          strokeDashoffset="32"
        >
          <animate
            attributeName="strokeDasharray"
            dur="2s"
            values="0 32;16 16;0 32;0 32"
            repeatCount="indefinite"
          />
          <animate
            attributeName="strokeDashoffset"
            dur="2s"
            values="0;-16;-32;-32"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    );
    
    // Clone icon with proper size
    const renderIcon = (iconElement: React.ReactNode) => {
      if (!iconElement) return null;
      
      return React.cloneElement(iconElement as React.ReactElement, {
        width: effectiveIconSize,
        height: effectiveIconSize,
        className: cn(
          'shrink-0',
          (iconElement as React.ReactElement).props?.className
        )
      });
    };
    
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        className={cn(
          buttonVariants({ variant, size, iconPosition: effectiveIconPosition }),
          fullWidth && 'w-full',
          loading && 'cursor-wait',
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            {!isIconOnly && children && (
              <span className="ml-2">{children}</span>
            )}
          </>
        ) : (
          <>
            {icon && (effectiveIconPosition === 'left' || effectiveIconPosition === 'only') && 
              renderIcon(icon)
            }
            {!isIconOnly && children}
            {icon && effectiveIconPosition === 'right' && renderIcon(icon)}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Component variant types for external use
export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
export type ButtonIconPosition = VariantProps<typeof buttonVariants>['iconPosition'];
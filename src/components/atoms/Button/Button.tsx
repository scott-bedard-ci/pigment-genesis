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
          'bg-[#1e39d2] text-[#ffffff]',                    // interactive.background.bold + interactive.text.onFill
          'hover:bg-[#182ea8]',                              // interactive.background.boldHover
          'active:bg-[#132486]',                             // interactive.background.boldPressed
          'disabled:bg-[rgba(0,0,0,0.18)] disabled:text-[rgba(0,0,0,0.41)]' // interactive.background.boldDisabled + interactive.text.disabled
        ],
        secondary: [
          'bg-[#ffffff] text-[#1e39d2]',                     // neutral.gray.000 + primitives.blue.default
          'border border-[#1e39d2]',                         // primitives.blue.default border
          'hover:bg-[#f8faff]',                              // Subtle hover background
          'active:bg-[#f0f4ff]',                             // Subtle active background
          'disabled:bg-[#ffffff] disabled:text-[rgba(0,0,0,0.41)] disabled:border-[rgba(0,0,0,0.18)]'
        ],
        tertiary: [
          'bg-[#fa3c00] text-[#ffffff]',                     // primitives.red.default + interactive.text.onFill
          'hover:bg-[#e63600]',                              // Darker red hover
          'active:bg-[#cc3000]',                             // Darker red active
          'disabled:bg-[rgba(0,0,0,0.18)] disabled:text-[rgba(0,0,0,0.41)]'
        ],
        text: [
          'bg-transparent text-[#1e39d2]',                   // No background + primitives.blue.default
          'hover:bg-[#f8faff]',                              // Subtle hover background
          'active:bg-[#f0f4ff]',                             // Subtle active background
          'disabled:text-[rgba(0,0,0,0.41)]'                 // interactive.text.disabled
        ]
      },
      // Size variants extracted from Figma button frame
      size: {
        small: [
          'h-8 min-w-16 px-4 py-1.5',                       // 32px height, 16px padding, 6px vertical
          'text-xs leading-4',                               // 12px font size, 16px line height
          'rounded-md'                                       // 6px border radius
        ],
        medium: [
          'h-10 min-w-16 px-4 py-2',                        // 40px height, 16px padding, 8px vertical
          'text-sm leading-[18px]',                          // 14px font size, 18px line height
          'rounded-md'                                       // 6px border radius
        ],
        large: [
          'h-12 min-w-16 px-4 py-3',                        // 48px height, 16px padding, 12px vertical
          'text-base leading-5',                             // 16px font size, 20px line height
          'rounded-md'                                       // 6px border radius
        ]
      },
      // Icon position for buttons with icons
      iconPosition: {
        none: '',
        left: 'flex-row gap-2',                              // Icon on left with 8px gap
        right: 'flex-row-reverse gap-2',                     // Icon on right with 8px gap
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
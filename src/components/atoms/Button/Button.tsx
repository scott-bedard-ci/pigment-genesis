import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classNames';
import type { BaseComponentProps } from '@/types/component';

const buttonVariants = cva(
  [
    // Base styles - mobile-first responsive
    'inline-flex items-center justify-center gap-2',
    'rounded-md font-semibold transition-all duration-200',
    'border-0 cursor-pointer relative overflow-hidden',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    // Touch targets for mobile
    'min-h-[44px] min-w-[44px]',
    // Typography
    'font-[\'Sharp_Sans:Semibold\',_sans-serif] leading-tight',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[#1e39d2] text-white',
          'hover:bg-[#182ea8] focus:ring-[#1e39d2]',
          'active:bg-[#132486]',
          'disabled:bg-[rgba(0,0,0,0.18)] disabled:text-[rgba(0,0,0,0.41)]',
        ],
        secondary: [
          'bg-white text-[#1e39d2] border-2 border-[#1e39d2]',
          'hover:bg-[#f8f9ff] focus:ring-[#1e39d2]',
          'active:bg-[#e6e9ff]',
          'disabled:bg-[rgba(0,0,0,0.18)] disabled:text-[rgba(0,0,0,0.41)] disabled:border-[rgba(0,0,0,0.18)]',
        ],
        tertiary: [
          'bg-[#fa3c00] text-white',
          'hover:bg-[#e03600] focus:ring-[#fa3c00]',
          'active:bg-[#c62f00]',
          'disabled:bg-[rgba(0,0,0,0.18)] disabled:text-[rgba(0,0,0,0.41)]',
        ],
      },
      size: {
        sm: [
          'px-4 py-1.5 text-xs leading-4',
          'md:px-4 md:py-2 md:text-sm md:leading-5',
          'min-h-[32px]',
        ],
        md: [
          'px-4 py-2 text-sm leading-[18px]',
          'md:px-6 md:py-3 md:text-base md:leading-6',
          'min-h-[40px]',
        ],
        lg: [
          'px-4 py-3 text-base leading-5',
          'md:px-6 md:py-4 md:text-lg md:leading-7',
          'min-h-[48px]',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  }
);

export interface ButtonProps 
  extends BaseComponentProps,
    VariantProps<typeof buttonVariants>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * The content of the button - can be text or any React node
   */
  children: React.ReactNode;
  /**
   * Icon to display on the left side of the button text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display on the right side of the button text
   */
  rightIcon?: React.ReactNode;
  /**
   * If true, only displays an icon without text (children will be used as accessible label)
   */
  iconOnly?: boolean;
  /**
   * Loading state - shows loading spinner and disables interaction
   */
  loading?: boolean;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'lg',
  children,
  leftIcon,
  rightIcon,
  iconOnly = false,
  loading = false,
  disabled = false,
  className,
  'data-testid': testId,
  onClick,
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        // Full width on mobile, auto on desktop
        'w-full md:w-auto',
        className
      )}
      disabled={isDisabled}
      onClick={handleClick}
      data-testid={testId}
      aria-label={iconOnly ? String(children) : undefined}
      {...props}
    >
      {loading && (
        <svg 
          className="animate-spin h-4 w-4" 
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
      
      {!loading && leftIcon && !iconOnly && (
        <span className="flex-shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      
      {iconOnly && !loading ? (
        <span className="flex-shrink-0" aria-hidden="true">
          {leftIcon || rightIcon}
        </span>
      ) : (
        children && (
          <span className={cn(
            'inline-block',
            // Ensure text doesn't wrap on mobile
            'whitespace-nowrap'
          )}>
            {children}
          </span>
        )
      )}
      
      {!loading && rightIcon && !iconOnly && (
        <span className="flex-shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

Button.displayName = 'Button';
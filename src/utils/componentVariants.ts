// Shared variant system using class-variance-authority with responsive support
// This utility creates consistent variant patterns across all components

import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Creates a component variant configuration using class-variance-authority
 * This is the foundation for all component styling variants in the design system
 * 
 * Features:
 * - Type-safe variant definitions
 * - Responsive variant support
 * - Consistent variant patterns across components
 * - Automatic class conflict resolution when used with cn()
 */

// Base component variants that are extended by specific components
export const baseComponentVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base', 
      lg: 'text-lg'
    },
    variant: {
      primary: '',
      secondary: '',
      outline: ''
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary'
  }
});

// Responsive sizing utilities that work across breakpoints
export const responsiveSize = {
  sm: 'text-sm md:text-base',
  md: 'text-base md:text-lg',
  lg: 'text-lg md:text-xl'
} as const;

// Responsive spacing utilities
export const responsiveSpacing = {
  sm: 'p-2 md:p-3',
  md: 'p-3 md:p-4', 
  lg: 'p-4 md:p-6'
} as const;

// Touch target utilities for mobile accessibility
export const touchTargets = {
  minimum: 'min-h-[44px] min-w-[44px]', // iOS minimum touch target size
  comfortable: 'min-h-[48px] min-w-[48px]', // Comfortable touch target
  large: 'min-h-[56px] min-w-[56px]' // Large touch target for accessibility
} as const;

// Focus ring utilities for keyboard navigation
export const focusRing = {
  default: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
  inset: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset',
  none: 'focus-visible:outline-none'
} as const;

// Disabled state utilities
export const disabledStates = {
  default: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
  subtle: 'disabled:opacity-60 disabled:cursor-not-allowed',
  interactive: 'disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:pointer-events-none'
} as const;

// Loading state utilities
export const loadingStates = {
  default: 'animate-pulse',
  spinner: 'animate-spin',
  fade: 'animate-pulse opacity-50'
} as const;

// Transition utilities for smooth interactions
export const transitions = {
  default: 'transition-colors duration-200 ease-in-out',
  fast: 'transition-all duration-150 ease-in-out',
  slow: 'transition-all duration-300 ease-in-out',
  colors: 'transition-colors duration-200 ease-in-out',
  transform: 'transition-transform duration-200 ease-in-out',
  opacity: 'transition-opacity duration-200 ease-in-out'
} as const;

// Button-specific variants that components can extend
export const buttonVariants = cva(
  // Base classes applied to all buttons
  [
    'inline-flex items-center justify-center',
    'font-medium',
    'border border-transparent',
    'rounded-md',
    touchTargets.minimum,
    focusRing.default,
    transitions.default,
    disabledStates.default
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-500 text-white',
          'hover:bg-primary-600',
          'active:bg-primary-700'
        ],
        secondary: [
          'bg-secondary-500 text-white',
          'hover:bg-secondary-600', 
          'active:bg-secondary-700'
        ],
        outline: [
          'border-neutral-300 bg-transparent text-neutral-700',
          'hover:bg-neutral-50 hover:border-neutral-400',
          'active:bg-neutral-100'
        ],
        ghost: [
          'bg-transparent text-neutral-700',
          'hover:bg-neutral-100',
          'active:bg-neutral-200'
        ]
      },
      size: {
        sm: ['px-3 py-2', responsiveSize.sm],
        md: ['px-4 py-3', responsiveSize.md],
        lg: ['px-6 py-4', responsiveSize.lg]
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

// Input-specific variants
export const inputVariants = cva(
  [
    'block w-full',
    'border border-neutral-300',
    'rounded-md',
    'bg-white text-neutral-900',
    'placeholder:text-neutral-500',
    focusRing.default,
    transitions.colors,
    disabledStates.default
  ],
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-6 py-4 text-lg'
      },
      variant: {
        default: 'border-neutral-300 focus:border-primary-500',
        error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
        success: 'border-success-500 focus:border-success-500 focus:ring-success-500'
      }
    },
    defaultVariants: {
      size: 'md',
      variant: 'default'
    }
  }
);

// Card-specific variants
export const cardVariants = cva(
  [
    'rounded-lg',
    'bg-white',
    'border border-neutral-200',
    transitions.default
  ],
  {
    variants: {
      variant: {
        default: 'shadow-sm',
        elevated: 'shadow-md',
        interactive: 'shadow-sm hover:shadow-md cursor-pointer'
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md'
    }
  }
);

// Type exports for TypeScript support
export type BaseComponentVariants = VariantProps<typeof baseComponentVariants>;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type InputVariants = VariantProps<typeof inputVariants>;
export type CardVariants = VariantProps<typeof cardVariants>;
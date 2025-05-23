import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './classNames';

/**
 * Base component variants system using class-variance-authority
 * Provides consistent variant patterns across all components
 */

/**
 * Standard size variants with responsive classes
 * Used across buttons, inputs, and other interactive components
 */
export const sizeVariants = cva('', {
  variants: {
    size: {
      sm: [
        // Mobile-first sizing
        'px-2 py-1 text-sm',
        // Tablet enhancements
        'md:px-3 md:py-2 md:text-base',
        // Desktop enhancements
        'lg:px-3 lg:py-2 lg:text-base'
      ],
      md: [
        // Mobile-first sizing
        'px-3 py-2 text-base',
        // Tablet enhancements
        'md:px-4 md:py-3 md:text-lg',
        // Desktop enhancements
        'lg:px-4 lg:py-3 lg:text-lg'
      ],
      lg: [
        // Mobile-first sizing
        'px-4 py-3 text-lg',
        // Tablet enhancements
        'md:px-6 md:py-4 md:text-xl',
        // Desktop enhancements
        'lg:px-6 lg:py-4 lg:text-xl'
      ]
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

/**
 * Standard color variants using design tokens
 * Maintains consistency across all interactive components
 */
export const colorVariants = cva('', {
  variants: {
    variant: {
      primary: [
        'bg-primary-500 text-white',
        'hover:bg-primary-600',
        'active:bg-primary-700',
        'focus-visible:ring-primary-500'
      ],
      secondary: [
        'bg-secondary-500 text-white',
        'hover:bg-secondary-600',
        'active:bg-secondary-700',
        'focus-visible:ring-secondary-500'
      ],
      outline: [
        'border border-gray-300 bg-transparent text-gray-700',
        'hover:bg-gray-50 hover:border-gray-400',
        'active:bg-gray-100',
        'focus-visible:ring-primary-500'
      ],
      ghost: [
        'bg-transparent text-gray-700',
        'hover:bg-gray-100',
        'active:bg-gray-200',
        'focus-visible:ring-primary-500'
      ],
      success: [
        'bg-success-500 text-white',
        'hover:bg-success-600',
        'active:bg-success-700',
        'focus-visible:ring-success-500'
      ],
      warning: [
        'bg-warning-500 text-white',
        'hover:bg-warning-600',
        'active:bg-warning-700',
        'focus-visible:ring-warning-500'
      ],
      error: [
        'bg-error-500 text-white',
        'hover:bg-error-600',
        'active:bg-error-700',
        'focus-visible:ring-error-500'
      ]
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

/**
 * Interactive component base classes
 * Shared foundation for buttons, links, and other clickable elements
 */
export const interactiveBase = cva([
  // Base styling
  'inline-flex items-center justify-center',
  'font-medium',
  'rounded-md',
  'border border-transparent',
  
  // Focus management
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  
  // Transitions with motion preferences
  'motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-in-out',
  
  // Touch targets for mobile
  'min-h-[44px]',
  
  // Disabled state
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
]);

/**
 * Card/container variants for layout components
 * Provides consistent elevation and spacing patterns
 */
export const cardVariants = cva([
  'rounded-lg',
  'bg-white',
  'border border-gray-200'
], {
  variants: {
    variant: {
      flat: 'shadow-none',
      raised: 'shadow-sm',
      elevated: 'shadow-md',
      floating: 'shadow-lg'
    },
    padding: {
      none: 'p-0',
      sm: 'p-3 md:p-4',
      md: 'p-4 md:p-6',
      lg: 'p-6 md:p-8'
    }
  },
  defaultVariants: {
    variant: 'raised',
    padding: 'md'
  }
});

/**
 * Text variants for typography consistency
 * Maps to design token typography scale
 */
export const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs leading-4',
      sm: 'text-sm leading-5',
      base: 'text-base leading-6',
      lg: 'text-lg leading-7',
      xl: 'text-xl leading-8',
      '2xl': 'text-2xl leading-9',
      '3xl': 'text-3xl leading-10',
      '4xl': 'text-4xl leading-11'
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    },
    color: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
      accent: 'text-primary-600',
      success: 'text-success-600',
      warning: 'text-warning-600',
      error: 'text-error-600'
    }
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'primary'
  }
});

/**
 * Input variants for form components
 * Consistent styling across all input types
 */
export const inputVariants = cva([
  'block w-full',
  'border border-gray-300',
  'rounded-md',
  'shadow-sm',
  'placeholder-gray-400',
  'focus:border-primary-500 focus:ring-primary-500 focus:ring-1',
  'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
  'motion-safe:transition-colors motion-safe:duration-200'
], {
  variants: {
    size: {
      sm: 'px-2 py-1 text-sm min-h-[36px]',
      md: 'px-3 py-2 text-base min-h-[44px]',
      lg: 'px-4 py-3 text-lg min-h-[48px]'
    },
    state: {
      default: '',
      error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
      success: 'border-success-500 focus:border-success-500 focus:ring-success-500',
      warning: 'border-warning-500 focus:border-warning-500 focus:ring-warning-500'
    }
  },
  defaultVariants: {
    size: 'md',
    state: 'default'
  }
});

/**
 * Spacing variants for consistent layout spacing
 * Maps to design token spacing scale
 */
export const spacingVariants = {
  none: '',
  xs: 'space-y-1',
  sm: 'space-y-2',
  md: 'space-y-4',
  lg: 'space-y-6',
  xl: 'space-y-8'
};

/**
 * Responsive utility variants
 * Helps create mobile-first responsive components
 */
export const responsiveVariants = {
  stack: 'flex flex-col md:flex-row',
  stackReverse: 'flex flex-col md:flex-row-reverse',
  center: 'items-center justify-center',
  spaceBetween: 'justify-between',
  spaceAround: 'justify-around',
  start: 'items-start justify-start',
  end: 'items-end justify-end'
};

/**
 * Animation variants with motion preferences
 * Provides consistent animation patterns
 */
export const animationVariants = {
  none: '',
  fadeIn: 'motion-safe:animate-fade-in',
  fadeOut: 'motion-safe:animate-fade-out',
  slideUp: 'motion-safe:animate-slide-up',
  slideDown: 'motion-safe:animate-slide-down',
  bounce: 'motion-safe:animate-bounce',
  pulse: 'motion-safe:animate-pulse'
};

/**
 * Creates component-specific variants by combining base variants
 * Reduces code duplication and ensures consistency
 * 
 * @param baseClasses - Base classes for the component
 * @param customVariants - Component-specific variant overrides
 * @returns CVA function with combined variants
 * 
 * @example
 * ```tsx
 * const buttonVariants = createComponentVariants(
 *   interactiveBase.base,
 *   {
 *     variants: {
 *       shape: {
 *         rounded: 'rounded-full',
 *         square: 'rounded-none'
 *       }
 *     }
 *   }
 * );
 * ```
 */
export const createComponentVariants = (
  baseClasses: string | string[],
  customVariants?: Parameters<typeof cva>[1]
) => {
  return cva(baseClasses, {
    variants: {
      // Include standard size and color variants
      ...sizeVariants.config.variants,
      ...colorVariants.config.variants,
      // Add custom variants
      ...customVariants?.variants
    },
    defaultVariants: {
      // Include standard defaults
      ...sizeVariants.config.defaultVariants,
      ...colorVariants.config.defaultVariants,
      // Add custom defaults
      ...customVariants?.defaultVariants
    },
    // Allow variant compound combinations
    compoundVariants: customVariants?.compoundVariants
  });
};

/**
 * Type utilities for variant props
 */
export type SizeVariantProps = VariantProps<typeof sizeVariants>;
export type ColorVariantProps = VariantProps<typeof colorVariants>;
export type CardVariantProps = VariantProps<typeof cardVariants>;
export type TextVariantProps = VariantProps<typeof textVariants>;
export type InputVariantProps = VariantProps<typeof inputVariants>;

/**
 * Helper function to merge variant props with custom classes
 * Ensures proper class precedence and conflict resolution
 * 
 * @param variantFn - CVA variant function
 * @param props - Variant props
 * @param className - Additional custom classes
 * @returns Merged class string
 * 
 * @example
 * ```tsx
 * const classes = mergeVariants(
 *   buttonVariants,
 *   { size: 'lg', variant: 'primary' },
 *   'custom-class'
 * );
 * ```
 */
export const mergeVariants = <T extends Record<string, any>>(
  variantFn: (props?: T) => string,
  props?: T,
  className?: string
): string => {
  return cn(variantFn(props), className);
};

export default {
  sizeVariants,
  colorVariants,
  interactiveBase,
  cardVariants,
  textVariants,
  inputVariants,
  spacingVariants,
  responsiveVariants,
  animationVariants,
  createComponentVariants,
  mergeVariants
};
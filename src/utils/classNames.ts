import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges Tailwind CSS classes with clsx and tailwind-merge
 * 
 * @param inputs - Class values to combine
 * @returns Merged class string
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-2 py-1', 'text-sm')
 * // Result: 'px-2 py-1 text-sm'
 * 
 * // Conditional classes
 * cn('px-2 py-1', {
 *   'bg-primary-500': isPrimary,
 *   'bg-secondary-500': isSecondary
 * })
 * 
 * // Conflicting classes (tailwind-merge resolves)
 * cn('px-2', 'px-4') 
 * // Result: 'px-4' (later class wins)
 * 
 * // With component variants
 * cn(
 *   'base-classes',
 *   variants({ size, variant }),
 *   className
 * )
 * ```
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

/**
 * Type-safe class name builder for component variants
 * Ensures proper TypeScript inference for class names
 */
export type ClassNameBuilder<T extends Record<string, any>> = (props: T) => string;

/**
 * Creates a class name builder function with type safety
 * 
 * @param builder - Function that takes props and returns class names
 * @returns Type-safe class name builder
 * 
 * @example
 * ```tsx
 * interface ButtonProps {
 *   size: 'sm' | 'md' | 'lg';
 *   variant: 'primary' | 'secondary';
 * }
 * 
 * const buttonClasses = createClassBuilder<ButtonProps>(({ size, variant }) => 
 *   cn(
 *     'base-button-classes',
 *     size === 'sm' && 'px-2 py-1 text-sm',
 *     size === 'md' && 'px-3 py-2 text-base',
 *     size === 'lg' && 'px-4 py-3 text-lg',
 *     variant === 'primary' && 'bg-primary-500 text-white',
 *     variant === 'secondary' && 'bg-secondary-500 text-white'
 *   )
 * );
 * ```
 */
export const createClassBuilder = <T extends Record<string, any>>(
  builder: (props: T) => string
): ClassNameBuilder<T> => {
  return builder;
};

/**
 * Utility for responsive class combinations
 * Helps build mobile-first responsive class strings
 * 
 * @param mobile - Mobile classes (base)
 * @param tablet - Tablet classes (md: prefix)
 * @param desktop - Desktop classes (lg: prefix)
 * @returns Combined responsive class string
 * 
 * @example
 * ```tsx
 * responsive(
 *   'text-sm px-2 py-1',     // Mobile (base)
 *   'text-base px-3 py-2',   // Tablet (md:)
 *   'text-lg px-4 py-3'      // Desktop (lg:)
 * )
 * // Result: 'text-sm px-2 py-1 md:text-base md:px-3 md:py-2 lg:text-lg lg:px-4 lg:py-3'
 * ```
 */
export const responsive = (
  mobile: string,
  tablet?: string,
  desktop?: string
): string => {
  return cn(
    mobile,
    tablet && tablet.split(' ').map(cls => `md:${cls}`).join(' '),
    desktop && desktop.split(' ').map(cls => `lg:${cls}`).join(' ')
  );
};

/**
 * Utility for focus-visible classes with keyboard navigation support
 * Provides consistent focus styling across components
 * 
 * @param classes - Additional focus classes
 * @returns Combined focus class string
 * 
 * @example
 * ```tsx
 * focusRing() 
 * // Result: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
 * 
 * focusRing('ring-red-500')
 * // Result: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
 * ```
 */
export const focusRing = (classes?: string): string => {
  return cn(
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    classes ? `focus-visible:${classes}` : 'focus-visible:ring-primary-500'
  );
};

/**
 * Utility for disabled state classes
 * Provides consistent disabled styling across components
 * 
 * @param isDisabled - Whether the component is disabled
 * @param classes - Additional disabled classes
 * @returns Combined disabled class string
 * 
 * @example
 * ```tsx
 * disabledClasses(true)
 * // Result: 'opacity-50 cursor-not-allowed pointer-events-none'
 * 
 * disabledClasses(isDisabled, 'bg-gray-100')
 * // Result: 'opacity-50 cursor-not-allowed pointer-events-none bg-gray-100' (when disabled)
 * ```
 */
export const disabledClasses = (isDisabled: boolean, classes?: string): string => {
  if (!isDisabled) return '';
  
  return cn(
    'opacity-50 cursor-not-allowed pointer-events-none',
    classes
  );
};

/**
 * Utility for touch target classes
 * Ensures minimum touch target sizes for mobile accessibility
 * 
 * @param size - Touch target size variant
 * @returns Touch target class string
 * 
 * @example
 * ```tsx
 * touchTarget('minimum')
 * // Result: 'min-h-[44px] min-w-[44px]'
 * 
 * touchTarget('comfortable')
 * // Result: 'min-h-[48px] min-w-[48px]'
 * ```
 */
export const touchTarget = (size: 'minimum' | 'comfortable' | 'large' = 'minimum'): string => {
  const sizes = {
    minimum: 'min-h-[44px] min-w-[44px]',      // iOS minimum
    comfortable: 'min-h-[48px] min-w-[48px]',  // Material Design
    large: 'min-h-[56px] min-w-[56px]'         // Large touch targets
  };
  
  return sizes[size];
};

/**
 * Utility for animation classes with reduced motion support
 * Respects user's motion preferences
 * 
 * @param animationClasses - Animation classes to apply
 * @returns Motion-safe animation classes
 * 
 * @example
 * ```tsx
 * motionSafe('transition-all duration-200 ease-in-out')
 * // Result: 'motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-in-out'
 * ```
 */
export const motionSafe = (animationClasses: string): string => {
  return animationClasses
    .split(' ')
    .map(cls => `motion-safe:${cls}`)
    .join(' ');
};

export default cn;
// Utility for conditional CSS class names with Tailwind merge support
// This is the core utility for combining conditional classes in all components

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names conditionally and merges Tailwind CSS classes intelligently
 * 
 * This utility function:
 * - Combines conditional class names using clsx
 * - Merges conflicting Tailwind classes using tailwind-merge
 * - Prevents duplicate classes and resolves conflicts
 * 
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns Merged class string with conflicts resolved
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-2 py-1', 'text-sm') // 'px-2 py-1 text-sm'
 * 
 * // Conditional classes
 * cn('px-2 py-1', { 'bg-red-500': isError, 'bg-green-500': isSuccess })
 * 
 * // Resolving conflicts (tailwind-merge)
 * cn('px-2', 'px-4') // 'px-4' (px-2 is overridden)
 * 
 * // In components
 * const buttonClasses = cn(
 *   'inline-flex items-center justify-center',
 *   variants({ variant, size }),
 *   disabled && 'opacity-50 cursor-not-allowed',
 *   className
 * );
 * ```
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
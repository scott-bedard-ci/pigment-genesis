import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/classNames';

// Input variant configuration using extracted Figma design tokens
const inputVariants = cva(
  [
    // Base container styles extracted from Figma
    'relative w-full'
  ],
  {
    variants: {
      state: {
        default: '',
        focused: '',
        disabled: '',
        error: ''
      }
    },
    defaultVariants: {
      state: 'default'
    }
  }
);

// Input container variants using design tokens
const inputContainerVariants = cva(
  [
    // Base styles extracted from Figma
    'relative min-h-[40px] rounded border flex items-center',
    'bg-neutral-bg-primary' // Default white background
  ],
  {
    variants: {
      state: {
        default: [
          'border-neutral-border-strong' // rgba(0,0,0,0.17) equivalent
        ],
        focused: [
          'border-primary-500' // #1e39d2 - activity.focus.border
        ],
        disabled: [
          'bg-interactive-border-very-disabled', // rgba(0,0,0,0.04) - subtle background
          'border-interactive-border-very-disabled' // Very light border
        ],
        error: [
          'border-error-500' // #da1e28 - feedback.danger-bold
        ]
      }
    },
    defaultVariants: {
      state: 'default'
    }
  }
);

// Label variants using design tokens
const labelVariants = cva(
  [
    'text-[14px] font-medium font-["Sharp_Sans",sans-serif] leading-[1.25]',
    'text-neutral-text-primary' // rgba(0,0,0,0.86)
  ]
);

// Input field variants using design tokens
const inputFieldVariants = cva(
  [
    'flex-1 min-w-0 bg-transparent border-0 outline-none',
    'text-[14px] font-medium font-["Sharp_Sans",sans-serif] leading-[1.25]',
    'focus:outline-none focus:ring-0',
    'placeholder:text-interactive-text-disabled' // rgba(0,0,0,0.28)
  ],
  {
    variants: {
      state: {
        default: [
          'text-neutral-text-primary'
        ],
        focused: [
          'text-neutral-text-primary'
        ],
        disabled: [
          'text-interactive-text-disabled'
        ],
        error: [
          'text-neutral-text-primary'
        ]
      }
    },
    defaultVariants: {
      state: 'default'
    }
  }
);

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
  /**
   * Input state variant
   * @default "default"
   */
  state?: 'default' | 'focused' | 'disabled' | 'error';
  
  /**
   * Label text for the input
   */
  label?: string;
  
  /**
   * Show or hide the label
   * @default true
   */
  showLabel?: boolean;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Help text to display below input
   */
  helpText?: string;
  
  /**
   * Show help text below input
   * @default false
   */
  showHelpText?: boolean;
  
  /**
   * Mark field as required
   * @default false
   */
  required?: boolean;
  
  /**
   * Show tooltip icon next to label
   * @default false
   */
  tooltip?: boolean;
  
  /**
   * Left icon element
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Right icon element  
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Prefix text before input value
   */
  prefix?: string;
  
  /**
   * Suffix text after input value
   */
  suffix?: string;
  
  /**
   * Show spacing below component for stacking
   * @default true
   */
  spacer?: boolean;
  
  /**
   * Show checkbox below input
   * @default false
   */
  showCheckbox?: boolean;
  
  /**
   * Checkbox label text
   */
  checkboxLabel?: string;
  
  /**
   * Checkbox checked state
   */
  checkboxChecked?: boolean;
  
  /**
   * Checkbox change handler
   */
  onCheckboxChange?: (checked: boolean) => void;
}

/**
 * Input Field Component
 * 
 * A dynamic input component with multiple variants including states, 
 * icons, prefix/suffix text, help text, and optional checkbox.
 * 
 * Features:
 * - Multiple states: default, focused, disabled, error
 * - Optional label with required indicator and tooltip
 * - Left and right icon support
 * - Prefix and suffix text support
 * - Help text and error messages
 * - Optional checkbox below input
 * - Configurable spacing for stacking
 * 
 * @example
 * ```tsx
 * <Input 
 *   label="Email Address"
 *   placeholder="Enter your email"
 *   required
 * />
 * 
 * <Input
 *   label="Price"
 *   prefix="$"
 *   suffix="USD"
 *   placeholder="99.00"
 * />
 * 
 * <Input
 *   label="Search"
 *   leftIcon={<SearchIcon />}
 *   placeholder="Type to search..."
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state = 'default',
      label = 'Label',
      showLabel = true,
      error,
      helpText,
      showHelpText = false,
      required = false,
      tooltip = false,
      leftIcon,
      rightIcon,
      prefix,
      suffix,
      spacer = true,
      showCheckbox = false,
      checkboxLabel = 'Item',
      checkboxChecked = false,
      onCheckboxChange,
      className,
      disabled,
      placeholder = 'Text',
      ...props
    },
    ref
  ) => {
    // Determine actual state based on props
    const actualState = disabled ? 'disabled' : state;
    const hasError = !!error;
    const displayState = hasError ? 'error' : actualState;

    return (
      <div className={cn(inputVariants({ state: displayState }), className)}>
        {/* Label */}
        {showLabel && (
          <div className="flex items-center gap-0.5 mb-1">
            <label 
              className={cn(labelVariants())}
              htmlFor={props.id}
            >
              {label}
              {required && (
                <span className="ml-1 text-error-500">*</span>
              )}
            </label>
            {tooltip && (
              <button
                type="button"
                className="ml-1 w-4 h-4 rounded-full bg-neutral-border-strong text-interactive-text-disabled flex items-center justify-center text-xs hover:opacity-80"
                aria-label="More information"
              >
                ?
              </button>
            )}
          </div>
        )}
        
        {/* Input Container */}
        <div className={cn(inputContainerVariants({ state: displayState }))}>
          <div className="flex items-center w-full px-[13px] py-[9px] gap-1.5">
            {/* Prefix */}
            {prefix && (
              <span className="text-[14px] font-medium font-['Sharp_Sans',sans-serif] leading-[1.25] shrink-0 text-neutral-text-primary">
                {prefix}
              </span>
            )}
            
            {/* Left Icon */}
            {leftIcon && (
              <div className="shrink-0 w-4 h-4 flex items-center justify-center text-neutral-text-primary">
                {leftIcon}
              </div>
            )}
            
            {/* Input */}
            <input
              ref={ref}
              className={cn(inputFieldVariants({ state: displayState }))}
              placeholder={placeholder}
              disabled={disabled || displayState === 'disabled'}
              {...props}
            />
            
            {/* Suffix */}
            {suffix && (
              <span className="text-[14px] font-medium font-['Sharp_Sans',sans-serif] leading-[1.25] shrink-0 text-neutral-text-primary">
                {suffix}
              </span>
            )}
            
            {/* Right Icon */}
            {rightIcon && (
              <div className="shrink-0 w-4 h-4 flex items-center justify-center text-neutral-text-primary">
                {rightIcon}
              </div>
            )}
          </div>
        </div>
        
        {/* Error Message */}
        {hasError && error && (
          <div className="flex items-center gap-1 mt-1">
            <div className="w-4 h-4 shrink-0">
              <svg 
                className="w-full h-full text-error-500" 
                fill="currentColor" 
                viewBox="0 0 14 13"
                preserveAspectRatio="none"
              >
                <path
                  clipRule="evenodd"
                  d="M8.22512 1.06392L13.0161 9.57734C13.8083 10.9851 13.0316 12.3165 11.4176 12.3165L1.91301 12.3165C0.297439 12.3165 -0.479613 10.9881 0.313317 9.5776L5.09936 1.06417C5.89653 -0.353844 7.42632 -0.35552 8.22512 1.06392ZM7.06343 1.71783C6.77488 1.20509 6.48539 1.30471 6.2619 1.71757L1.47586 10.231C1.24858 10.6773 1.31739 10.9832 1.91329 10.9832H11.4179C11.8544 10.9832 12.1468 10.7509 11.8544 10.2313L7.06343 1.71783ZM6.66195 10.3165C6.29376 10.3165 5.99528 10.018 5.99528 9.6498C5.99528 9.28161 6.29376 8.98313 6.66195 8.98313C7.03014 8.98313 7.32861 9.28161 7.32861 9.6498C7.32861 10.018 7.03014 10.3165 6.66195 10.3165ZM5.99528 4.3185C5.99528 3.94923 6.29119 3.64988 6.66195 3.64988C7.03014 3.64988 7.32861 3.9489 7.32861 4.3185V7.64793C7.32861 8.0172 7.0327 8.31655 6.66195 8.31655C6.29376 8.31655 5.99528 8.01753 5.99528 7.64793V4.3185Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-[14px] font-medium font-['Sharp_Sans',sans-serif] leading-[1.25] flex-1 text-feedback-danger-bold">
              {error}
            </span>
          </div>
        )}
        
        {/* Help Text */}
        {showHelpText && helpText && !hasError && (
          <div className="mt-1">
            <span className="text-[14px] font-medium font-['Sharp_Sans',sans-serif] leading-[20px] text-interactive-text-disabled">
              {helpText}
            </span>
          </div>
        )}
        
        {/* Checkbox */}
        {showCheckbox && (
          <div className="flex items-start gap-2 pt-2">
            <div className="flex items-center pt-0.5">
              <input
                type="checkbox"
                checked={checkboxChecked}
                onChange={(e) => onCheckboxChange?.(e.target.checked)}
                className="w-4 h-4 border border-neutral-border-strong bg-neutral-bg-primary rounded-sm focus:ring-0 focus:ring-offset-0"
              />
            </div>
            <label className="text-[14px] font-medium font-['Sharp_Sans',sans-serif] leading-[20px] text-neutral-text-primary">
              {checkboxLabel}
            </label>
          </div>
        )}
        
        {/* Spacer */}
        {spacer && (
          <div className="h-3 w-full" />
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
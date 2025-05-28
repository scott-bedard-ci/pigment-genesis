import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/classNames';
import type { BaseComponentProps } from '@/types/component';
import { Icon } from '../Icon';

// Checkbox variants using extracted Figma design tokens
const checkboxVariants = cva(
  [
    // Base styles using Figma-extracted measurements
    'relative',
    'flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'transition-colors',
    'duration-200',
    'ease-in-out',
    'cursor-pointer',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        default: [
          'h-[18px]',  // Figma: exact checkbox size
          'w-[18px]',  // Figma: exact checkbox size
          'rounded-[2.75px]', // Figma: radius/xs value
          'border-2',
        ],
      },
      checked: {
        false: [
          // Original Figma-designed unchecked border (precise opacity)
          'border-neutral-border-strong',
          'bg-transparent',
        ],
        true: [
          // Uses semantic tokens for checked state
          'bg-interactive-bg-bold',
          'border-interactive-bg-bold',
        ],
      },
      disabled: {
        false: '',
        true: [
          // Original Figma-designed disabled border (very light)
          'border-interactive-border-very-disabled',
          'bg-transparent',
        ],
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: false,
        className: [
          // Selected state styling using semantic tokens
          'bg-interactive-bg-bold',
          'border-interactive-bg-bold',
        ],
      },
      {
        disabled: true,
        className: [
          // Original Figma-designed disabled state
          'border-interactive-border-very-disabled',
          'bg-transparent',
        ],
      },
    ],
    defaultVariants: {
      size: 'default',
      checked: false,
      disabled: false,
    },
  }
);


// Container styles using Figma layout specifications
const checkboxContainerVariants = cva([
  'flex',
  'items-center',
  'gap-2', // 8px gap between checkbox and label
  'min-h-8', // Figma: 32px container height
], {
  variants: {
    disabled: {
      false: '',
      true: 'cursor-not-allowed',
    },
  },
});

// Label styles using Figma typography specifications
const labelVariants = cva([
  'select-none',
  'font-medium', // Figma: Sharp Sans Medium
  'text-sm',     // Figma: 14px font size
  'leading-[1.25]', // Figma: 1.25 line height
], {
  variants: {
    disabled: {
      false: 'text-neutral-text-primary', // Uses semantic token for primary text
      true: 'text-interactive-text-disabled',  // Uses semantic token for disabled text
    },
  },
});

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'checked' | 'disabled'>,
    BaseComponentProps {
  /** The label text for the checkbox */
  label?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Callback fired when the checkbox state changes */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether to show the label (defaults to true if label is provided) */
  showLabel?: boolean;
  /** Custom className for the container */
  containerClassName?: string;
  /** Custom className for the label */
  labelClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked = false,
      disabled = false,
      onChange,
      showLabel = true,
      className,
      containerClassName,
      labelClassName,
      'data-testid': testId,
      id,
      ...htmlProps
    },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange?.(event.target.checked, event);
    };

    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={cn(
          checkboxContainerVariants({ disabled }),
          containerClassName
        )}
        data-testid={testId}
      >
        <div className="relative">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            className="sr-only" // Hide native checkbox, use custom styling
            {...htmlProps}
          />
          <label
            htmlFor={checkboxId}
            className={cn(
              checkboxVariants({
                checked,
                disabled,
              }),
              className
            )}
          >
            {checked && !disabled && (
              <Icon 
                name="check"
                size="sm"
                color="inverse"
                className="absolute inset-0 m-auto"
                style={{ width: '14px', height: '14px' }} // Figma: exact 14px checkmark size
                decorative
              />
            )}
          </label>
        </div>
        
        {label && showLabel && (
          <label
            htmlFor={checkboxId}
            className={cn(
              labelVariants({ disabled }),
              labelClassName
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
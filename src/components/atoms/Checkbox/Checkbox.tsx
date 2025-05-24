import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/classNames';
import type { BaseComponentProps } from '@/types/component';

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
          // Figma: interactive/border/strong for unchecked state
          'border-[rgba(0,0,0,0.74)]',
          'bg-transparent',
        ],
        true: [
          // Figma: interactive/background/bold for checked state
          'bg-[#1e39d2]',
          'border-[#1e39d2]',
        ],
      },
      disabled: {
        false: '',
        true: [
          // Figma: interactive/border/disabled for disabled state
          'border-[rgba(0,0,0,0.03)]',
          'bg-transparent',
        ],
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: false,
        className: [
          // Selected state styling from Figma
          'bg-[#1e39d2]',
          'border-[#1e39d2]',
        ],
      },
      {
        disabled: true,
        className: [
          // Disabled state overrides from Figma
          'border-[rgba(0,0,0,0.03)]',
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

// Checkmark icon using Figma specifications
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('h-3.5 w-3.5', className)} // Figma: 14px checkmark size
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M12.3671 0.320351C12.7943 0.747487 12.7943 1.44001 12.3671 1.86715L5.0609 9.17341C4.85532 9.37898 4.57636 9.49426 4.28563 9.49376C3.99491 9.49326 3.71634 9.37704 3.51147 9.17076L0.317717 5.95514C-0.107959 5.52655 -0.105595 4.83403 0.322996 4.40835C0.751587 3.98268 1.44411 3.98504 1.86978 4.41363L4.29014 6.85057L10.8204 0.320353C11.2475 -0.106784 11.94 -0.106784 12.3671 0.320351Z"
      fill="#ffffff" // Figma: neutral/icon/onFill
      fillRule="evenodd"
    />
  </svg>
);

// Container styles using Figma layout specifications
const checkboxContainerVariants = cva([
  'flex',
  'items-center',
  'gap-2', // Figma: 8px gap between checkbox and label
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
      false: 'text-[rgba(0,0,0,0.86)]', // Figma: neutral/text/primary
      true: 'text-[rgba(0,0,0,0.41)]',  // Figma: interactive/text/disabled
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
              <CheckIcon className="absolute inset-0 m-auto" />
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
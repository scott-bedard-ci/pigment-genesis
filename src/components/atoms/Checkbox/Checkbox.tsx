import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classNames';
import type { BaseComponentProps } from '@/types/component';

const checkboxVariants = cva(
  [
    // Base styles
    'relative inline-flex items-center gap-2',
    'cursor-pointer select-none',
    // Focus styles
    'focus-within:outline-none',
  ],
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const checkboxInputVariants = cva(
  [
    // Base styles
    'relative w-[18px] h-[18px] rounded-[2.75px]',
    'transition-all duration-200 ease-in-out',
    'border-2 border-solid',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e39d2]',
    // Ensure proper touch target
    'min-h-[44px] min-w-[44px] flex items-center justify-center',
    // Typography
    'font-[\'Sharp_Sans:Medium\',_sans-serif]',
  ],
  {
    variants: {
      checked: {
        true: [
          'bg-[#1e39d2] border-[#1e39d2]',
          'text-white',
        ],
        false: [
          'bg-white border-[rgba(0,0,0,0.74)]',
          'hover:border-[#1e39d2]',
        ],
      },
      disabled: {
        true: [
          'border-[rgba(0,0,0,0.03)] bg-white',
          'cursor-not-allowed',
        ],
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        class: [
          'bg-[rgba(0,0,0,0.18)] border-[rgba(0,0,0,0.18)]',
          'text-[rgba(0,0,0,0.41)]',
        ],
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
);

// Check icon component
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn('w-3.5 h-3.5', className)}
    fill="none"
    viewBox="0 0 13 10"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M12.3671 0.320351C12.7943 0.747487 12.7943 1.44001 12.3671 1.86715L5.0609 9.17341C4.85532 9.37898 4.57636 9.49426 4.28563 9.49376C3.99491 9.49326 3.71634 9.37704 3.51147 9.17076L0.317717 5.95514C-0.107959 5.52655 -0.105595 4.83403 0.322996 4.40835C0.751587 3.98268 1.44411 3.98504 1.86978 4.41363L4.29014 6.85057L10.8204 0.320353C11.2475 -0.106784 11.94 -0.106784 12.3671 0.320351Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export interface CheckboxProps 
  extends BaseComponentProps,
    VariantProps<typeof checkboxVariants>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Label text for the checkbox
   */
  label?: string;
  /**
   * Whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * Whether the checkbox is in an indeterminate state
   */
  indeterminate?: boolean;
  /**
   * Called when the checked state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Additional className for the label
   */
  labelClassName?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  indeterminate = false,
  disabled = false,
  onCheckedChange,
  labelClassName,
  className,
  'data-testid': testId,
  onChange,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [internalChecked, setInternalChecked] = React.useState(false);
  
  // Determine if this is controlled or uncontrolled
  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : internalChecked;

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onCheckedChange?.(newChecked);
    onChange?.(event);
  };

  const isChecked = indeterminate ? false : checkedValue;

  return (
    <label
      className={cn(
        checkboxVariants({ disabled }),
        // Full width container for proper touch targets on mobile
        'w-full md:w-auto',
        className
      )}
      data-testid={testId}
    >
      <div className="relative">
        <input
          ref={inputRef}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
          aria-describedby={label ? undefined : 'checkbox-description'}
          {...props}
        />
        
        <div
          className={cn(
            checkboxInputVariants({ 
              checked: isChecked || indeterminate, 
              disabled 
            }),
            // Reduce touch target for visual checkbox while maintaining label click area
            'min-h-[18px] min-w-[18px]'
          )}
          role="presentation"
        >
          {(isChecked || indeterminate) && (
            <CheckIcon className="absolute inset-0 m-auto" />
          )}
        </div>
      </div>
      
      {label && (
        <span
          className={cn(
            'text-sm leading-5 select-none',
            'font-[\'Sharp_Sans:Medium\',_sans-serif]',
            disabled 
              ? 'text-[rgba(0,0,0,0.41)]' 
              : 'text-[rgba(0,0,0,0.86)]',
            // Ensure text is selectable on larger screens but not mobile
            'md:select-text',
            labelClassName
          )}
        >
          {label}
        </span>
      )}
      
      {!label && (
        <span id="checkbox-description" className="sr-only">
          Checkbox
        </span>
      )}
    </label>
  );
};

Checkbox.displayName = 'Checkbox';
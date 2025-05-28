import React, { useState, useRef, useEffect } from 'react';
import { semanticColors } from '../../../tokens/colors';
import { componentSpacing, semanticSpacing } from '../../../tokens/spacing';
import { typography } from '../../../tokens/typography';
import { Icon } from '../Icon';


export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * Array of options to display in the dropdown
   */
  options: DropdownOption[];
  
  /**
   * Currently selected value
   */
  value?: string;
  
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  
  /**
   * Error state
   */
  error?: boolean;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Label for the dropdown
   */
  label?: string;
  
  /**
   * Whether to show the label
   */
  showLabel?: boolean;
  
  /**
   * Callback when an option is selected
   */
  onSelect?: (value: string) => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select option',
  disabled = false,
  error = false,
  errorMessage = 'Error text goes here',
  label = 'Label',
  showLabel = true,
  onSelect,
  className = '',
  'data-testid': testId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Find selected option
  const selectedOption = options.find(option => option.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => {
            const enabledOptions = options.filter(option => !option.disabled);
            const currentEnabledIndex = enabledOptions.findIndex(option => option.value === options[prev]?.value);
            const nextEnabledIndex = (currentEnabledIndex + 1) % enabledOptions.length;
            return options.findIndex(option => option.value === enabledOptions[nextEnabledIndex].value);
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => {
            const enabledOptions = options.filter(option => !option.disabled);
            const currentEnabledIndex = enabledOptions.findIndex(option => option.value === options[prev]?.value);
            const prevEnabledIndex = currentEnabledIndex <= 0 ? enabledOptions.length - 1 : currentEnabledIndex - 1;
            return options.findIndex(option => option.value === enabledOptions[prevEnabledIndex].value);
          });
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (focusedIndex >= 0 && !options[focusedIndex]?.disabled) {
            handleOptionSelect(options[focusedIndex].value);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          triggerRef.current?.focus();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, focusedIndex, options]);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    setFocusedIndex(-1);
  };

  const handleOptionSelect = (optionValue: string) => {
    onSelect?.(optionValue);
    setIsOpen(false);
    setFocusedIndex(-1);
    triggerRef.current?.focus();
  };

  // Dynamic styles using design tokens
  const dropdownStyles = {
    container: {
      position: 'relative' as const,
      width: '100%',
    },
    label: {
      fontFamily: typography.fontFamily.body.join(', '),
      fontSize: typography.fontSize['body-md'],
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight['body-md'],
      color: semanticColors.neutral.text.primary,
      marginBottom: '4px',
      display: 'block',
    },
    trigger: {
      width: '100%',
      minHeight: componentSpacing.dropdown.fieldHeight,
      backgroundColor: semanticColors.neutral.background.primary,
      border: error ? '1px solid rgb(var(--pigment-feedback-danger-bold))' : '1px solid rgb(var(--pigment-neutral-border-strong))',
      borderRadius: componentSpacing.dropdown.borderRadius,
      padding: '9px 13px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: typography.fontFamily.body.join(', '),
      fontSize: typography.fontSize['body-md'],
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight['body-md'],
      color: selectedOption ? semanticColors.neutral.text.primary : semanticColors.interactive.text.placeholder,
      textAlign: 'left' as const,
      gap: componentSpacing.dropdown.fieldGap,
      opacity: disabled ? 0.5 : 1,
      outline: 'none',
      transition: 'border-color 0.2s ease',
    },
    triggerFocused: {
      borderColor: semanticColors.interactive.background.bold,
      boxShadow: '0 0 0 1px rgb(var(--pigment-interactive-border-bold))',
    },
    menu: {
      position: 'absolute' as const,
      top: '100%',
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: semanticColors.neutral.background.primary,
      border: '1px solid rgb(var(--pigment-neutral-border-strong))',
      borderRadius: componentSpacing.dropdown.menuBorderRadius,
      boxShadow: '0px 6px 12px 0px rgba(0,0,0,0.11)', // TODO: Map to semantic shadow token
      marginTop: '1px', // Figma: minimal gap to clear input focus outline
      maxHeight: '200px',
      overflowY: 'auto' as const,
      padding: '8px 0',
    },
    option: {
      width: '100%',
      padding: '8px 8px',
      minHeight: componentSpacing.dropdown.itemMinHeight,
      display: 'flex',
      alignItems: 'center',
      fontFamily: typography.fontFamily.body.join(', '),
      fontSize: typography.fontSize['body-md'],
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight['body-md'],
      color: semanticColors.neutral.text.primary,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left' as const,
      outline: 'none',
      transition: 'background-color 0.2s ease',
    },
    optionHovered: {
      backgroundColor: semanticColors.interactive.background.subtle,
    },
    optionFocused: {
      backgroundColor: semanticColors.interactive.background.subtle, // rgba(30, 57, 210, 0.0800)
    },
    optionDisabled: {
      color: semanticColors.interactive.text.disabled,
      cursor: 'not-allowed',
      backgroundColor: 'transparent',
    },
    errorMessage: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      marginTop: '4px',
      fontFamily: typography.fontFamily.body.join(', '),
      fontSize: typography.fontSize['body-md'],
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight['body-md'],
      color: semanticColors.feedback['danger-accessible'],
    },
  };

  return (
    <div
      ref={dropdownRef}
      style={dropdownStyles.container}
      className={className}
      data-testid={testId}
    >
      {/* Label */}
      {showLabel && (
        <label style={dropdownStyles.label}>
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        ref={triggerRef}
        style={{
          ...dropdownStyles.trigger,
          ...(isOpen ? dropdownStyles.triggerFocused : {}),
        }}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={label}
        data-testid={testId ? `${testId}-trigger` : undefined}
      >
        <span style={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <Icon 
          name="chevron-down" 
          size="md"
          color="secondary"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
          decorative
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          style={dropdownStyles.menu}
          data-testid={testId ? `${testId}-menu` : undefined}
        >
          {options.map((option, index) => (
            <li key={option.value} role="option" aria-selected={option.value === value}>
              <button
                style={{
                  ...dropdownStyles.option,
                  ...(index === focusedIndex ? dropdownStyles.optionFocused : {}),
                  ...(option.disabled ? dropdownStyles.optionDisabled : {}),
                }}
                onClick={() => !option.disabled && handleOptionSelect(option.value)}
                disabled={option.disabled}
                data-testid={testId ? `${testId}-option-${option.value}` : undefined}
                onMouseEnter={() => !option.disabled && setFocusedIndex(index)}
                onMouseLeave={() => setFocusedIndex(-1)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Error Message */}
      {error && errorMessage && (
        <div style={dropdownStyles.errorMessage}>
          <Icon 
            name="warning-triangle"
            size="sm" 
            color="danger"
            aria-label="Error"
          />
          {errorMessage}
        </div>
      )}

    </div>
  );
};

export default Dropdown;
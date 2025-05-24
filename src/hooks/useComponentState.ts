// Shared component state logic and patterns
// This module provides reusable state management patterns for design system components

import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Hook for managing component hover state
 * Provides consistent hover behavior across components
 */
export const useHoverState = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    isHovered,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};

/**
 * Hook for managing component focus state
 * Provides consistent focus behavior and focus-visible support
 */
export const useFocusState = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const handleFocus = useCallback((event: React.FocusEvent) => {
    setIsFocused(true);
    // Check if focus is from keyboard navigation
    setIsFocusVisible(event.target.matches(':focus-visible'));
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFocusVisible(false);
  }, []);

  return {
    isFocused,
    isFocusVisible,
    focusProps: {
      onFocus: handleFocus,
      onBlur: handleBlur,
    },
  };
};

/**
 * Hook for managing component loading state
 * Provides consistent loading behavior and timing
 */
export const useLoadingState = (initialLoading = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const setLoading = useCallback((loading: boolean, delay = 0) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsLoading(loading);
      }, delay);
    } else {
      setIsLoading(loading);
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isLoading,
    setLoading,
  };
};

/**
 * Hook for managing component disabled state
 * Provides consistent disabled behavior across components
 */
export const useDisabledState = (disabled: boolean = false) => {
  const getDisabledProps = useCallback(() => {
    if (disabled) {
      return {
        disabled: true,
        'aria-disabled': true,
        tabIndex: -1,
      };
    }
    return {};
  }, [disabled]);

  return {
    isDisabled: disabled,
    disabledProps: getDisabledProps(),
  };
};

/**
 * Hook for managing component error state
 * Provides consistent error handling and display
 */
export const useErrorState = (initialError?: string) => {
  const [error, setError] = useState<string | undefined>(initialError);
  const [hasError, setHasError] = useState(!!initialError);

  const setErrorMessage = useCallback((errorMessage?: string) => {
    setError(errorMessage);
    setHasError(!!errorMessage);
  }, []);

  const clearError = useCallback(() => {
    setError(undefined);
    setHasError(false);
  }, []);

  return {
    error,
    hasError,
    setError: setErrorMessage,
    clearError,
  };
};

/**
 * Hook for managing component validation state
 * Provides consistent validation patterns across form components
 */
export const useValidationState = <T>(
  value: T,
  validators: Array<(value: T) => string | undefined> = []
) => {
  const [validationError, setValidationError] = useState<string | undefined>();
  const [isValid, setIsValid] = useState(true);

  const validate = useCallback((valueToValidate: T) => {
    for (const validator of validators) {
      const error = validator(valueToValidate);
      if (error) {
        setValidationError(error);
        setIsValid(false);
        return false;
      }
    }
    setValidationError(undefined);
    setIsValid(true);
    return true;
  }, [validators]);

  // Validate whenever value changes
  useEffect(() => {
    validate(value);
  }, [value, validate]);

  return {
    isValid,
    validationError,
    validate,
  };
};

/**
 * Hook for managing component press state
 * Provides consistent press/active behavior across interactive components
 */
export const usePressState = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPressed(false);
  }, []);

  return {
    isPressed,
    pressProps: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
    },
  };
};

/**
 * Hook for managing component open/closed state
 * Useful for modals, dropdowns, accordions, etc.
 */
export const useOpenState = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle,
    setIsOpen,
  };
};

/**
 * Hook for managing component selection state
 * Useful for buttons, tabs, menu items, etc.
 */
export const useSelectionState = <T>(initialSelected?: T) => {
  const [selected, setSelected] = useState<T | undefined>(initialSelected);

  const select = useCallback((item: T) => {
    setSelected(item);
  }, []);

  const deselect = useCallback(() => {
    setSelected(undefined);
  }, []);

  const isSelected = useCallback((item: T) => {
    return selected === item;
  }, [selected]);

  return {
    selected,
    select,
    deselect,
    isSelected,
    setSelected,
  };
};

/**
 * Combined hook for interactive component states
 * Combines hover, focus, press, and disabled states
 */
export const useInteractiveState = (disabled = false) => {
  const { isHovered, hoverProps } = useHoverState();
  const { isFocused, isFocusVisible, focusProps } = useFocusState();
  const { isPressed, pressProps } = usePressState();
  const { disabledProps } = useDisabledState(disabled);

  const isInteractive = !disabled;

  const interactiveProps = {
    ...(!disabled && hoverProps),
    ...(!disabled && focusProps),
    ...(!disabled && pressProps),
    ...disabledProps,
  };

  return {
    // Individual states
    isHovered: isInteractive && isHovered,
    isFocused: isInteractive && isFocused,
    isFocusVisible: isInteractive && isFocusVisible,
    isPressed: isInteractive && isPressed,
    isDisabled: disabled,
    isInteractive,
    // Combined props
    interactiveProps,
  };
};

/**
 * Hook for managing form field state
 * Combines value, validation, error, and interactive states
 */
export const useFormFieldState = <T>(
  initialValue: T,
  validators: Array<(value: T) => string | undefined> = [],
  disabled = false
) => {
  const [value, setValue] = useState<T>(initialValue);
  const { isValid, validationError, validate } = useValidationState(value, validators);
  const { error, hasError, setError, clearError } = useErrorState();
  const interactiveState = useInteractiveState(disabled);

  const hasValidationError = !isValid && !!validationError;
  const hasFormError = hasError && !!error;
  const showError = hasValidationError || hasFormError;
  const errorMessage = validationError || error;

  const handleValueChange = useCallback((newValue: T) => {
    setValue(newValue);
    // Clear errors when value changes
    if (hasFormError) {
      clearError();
    }
  }, [hasFormError, clearError]);

  return {
    // Value state
    value,
    setValue: handleValueChange,
    
    // Validation state
    isValid: isValid && !hasFormError,
    validationError,
    validate,
    
    // Error state
    error,
    hasError: showError,
    errorMessage,
    setError,
    clearError,
    
    // Interactive state
    ...interactiveState,
  };
};

/**
 * Hook for managing component size state
 * Provides responsive size management
 */
export const useSizeState = (
  initialSize: 'sm' | 'md' | 'lg' = 'md',
  responsive = false
) => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>(initialSize);

  // Auto-adjust size based on screen size if responsive
  useEffect(() => {
    if (!responsive) return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSize('sm');
      } else if (width < 1024) {
        setSize('md');
      } else {
        setSize('lg');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsive]);

  return {
    size,
    setSize,
    isSmall: size === 'sm',
    isMedium: size === 'md',
    isLarge: size === 'lg',
  };
};

/**
 * Hook for managing component variant state
 * Provides consistent variant switching
 */
export const useVariantState = <T extends string>(
  initialVariant: T,
  availableVariants: T[]
) => {
  const [variant, setVariant] = useState<T>(initialVariant);

  const isVariant = useCallback((variantToCheck: T) => {
    return variant === variantToCheck;
  }, [variant]);

  const hasVariant = useCallback((variantToCheck: T) => {
    return availableVariants.includes(variantToCheck);
  }, [availableVariants]);

  return {
    variant,
    setVariant,
    isVariant,
    hasVariant,
    availableVariants,
  };
};
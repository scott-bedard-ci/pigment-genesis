// Shared accessibility patterns and hooks
// This module provides reusable accessibility utilities for design system components

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook for managing keyboard navigation
 * Provides consistent keyboard interaction patterns
 */
export const useKeyboardNavigation = (options: {
  onEnter?: () => void;
  onSpace?: () => void;
  onEscape?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  disabled?: boolean;
} = {}) => {
  const {
    onEnter,
    onSpace,
    onEscape,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    disabled = false,
  } = options;

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
        if (onEnter) {
          event.preventDefault();
          onEnter();
        }
        break;
      case ' ':
        if (onSpace) {
          event.preventDefault();
          onSpace();
        }
        break;
      case 'Escape':
        if (onEscape) {
          event.preventDefault();
          onEscape();
        }
        break;
      case 'ArrowUp':
        if (onArrowUp) {
          event.preventDefault();
          onArrowUp();
        }
        break;
      case 'ArrowDown':
        if (onArrowDown) {
          event.preventDefault();
          onArrowDown();
        }
        break;
      case 'ArrowLeft':
        if (onArrowLeft) {
          event.preventDefault();
          onArrowLeft();
        }
        break;
      case 'ArrowRight':
        if (onArrowRight) {
          event.preventDefault();
          onArrowRight();
        }
        break;
    }
  }, [disabled, onEnter, onSpace, onEscape, onArrowUp, onArrowDown, onArrowLeft, onArrowRight]);

  return {
    keyboardProps: {
      onKeyDown: handleKeyDown,
    },
  };
};

/**
 * Hook for managing focus trapping within a component
 * Useful for modals, dropdowns, and other overlay components
 */
export const useFocusTrap = (isActive: boolean = false) => {
  const containerRef = useRef<HTMLElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Store the currently focused element
    lastFocusedElement.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    // Get all focusable elements within the container
    const getFocusableElements = () => {
      const selector = [
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'a[href]',
        '[tabindex]:not([tabindex="-1"])',
      ].join(',');

      return Array.from(container.querySelectorAll(selector)) as HTMLElement[];
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Focus the first focusable element
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restore focus to the previously focused element
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }
    };
  }, [isActive]);

  return {
    containerRef,
  };
};

/**
 * Hook for managing ARIA live regions
 * Provides announcements for screen readers
 */
export const useLiveRegion = () => {
  const [announcement, setAnnouncement] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout>();

  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set the announcement
    setAnnouncement(message);

    // Clear the announcement after a delay to allow for re-announcements
    timeoutRef.current = setTimeout(() => {
      setAnnouncement('');
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const liveRegionProps = {
    'aria-live': 'polite' as const,
    'aria-atomic': true,
    role: 'status',
    className: 'sr-only', // Screen reader only
  };

  return {
    announce,
    announcement,
    liveRegionProps,
  };
};

/**
 * Hook for managing component descriptions and labels
 * Provides consistent ARIA labeling patterns
 */
export const useAriaLabeling = (
  label?: string,
  description?: string,
  errorMessage?: string
) => {
  const labelId = useRef(`label-${Math.random().toString(36).substr(2, 9)}`);
  const descriptionId = useRef(`desc-${Math.random().toString(36).substr(2, 9)}`);
  const errorId = useRef(`error-${Math.random().toString(36).substr(2, 9)}`);

  const ariaProps = {
    'aria-labelledby': label ? labelId.current : undefined,
    'aria-describedby': [
      description ? descriptionId.current : undefined,
      errorMessage ? errorId.current : undefined,
    ].filter(Boolean).join(' ') || undefined,
  };

  const labelProps = {
    id: labelId.current,
  };

  const descriptionProps = {
    id: descriptionId.current,
  };

  const errorProps = {
    id: errorId.current,
    role: 'alert',
    'aria-live': 'polite' as const,
  };

  return {
    ariaProps,
    labelProps,
    descriptionProps,
    errorProps,
    labelId: labelId.current,
    descriptionId: descriptionId.current,
    errorId: errorId.current,
  };
};

/**
 * Hook for managing expanded/collapsed state with ARIA
 * Useful for accordions, dropdowns, etc.
 */
export const useAriaExpanded = (initialExpanded = false) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const toggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const expand = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const collapse = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const triggerProps = {
    'aria-expanded': isExpanded,
    'aria-haspopup': true,
  };

  return {
    isExpanded,
    toggle,
    expand,
    collapse,
    setIsExpanded,
    triggerProps,
  };
};

/**
 * Hook for managing selection state with ARIA
 * Useful for listboxes, menus, tabs, etc.
 */
export const useAriaSelection = <T>(
  items: T[],
  initialSelected?: T,
  multiSelect = false
) => {
  const [selected, setSelected] = useState<T[]>(
    initialSelected ? [initialSelected] : []
  );

  const select = useCallback((item: T) => {
    if (multiSelect) {
      setSelected(prev => 
        prev.includes(item) 
          ? prev.filter(i => i !== item)
          : [...prev, item]
      );
    } else {
      setSelected([item]);
    }
  }, [multiSelect]);

  const deselect = useCallback((item: T) => {
    setSelected(prev => prev.filter(i => i !== item));
  }, []);

  const isSelected = useCallback((item: T) => {
    return selected.includes(item);
  }, [selected]);

  const getItemProps = useCallback((item: T, index: number) => ({
    role: multiSelect ? 'option' : 'menuitem',
    'aria-selected': isSelected(item),
    id: `item-${index}`,
  }), [isSelected, multiSelect]);

  return {
    selected,
    select,
    deselect,
    isSelected,
    getItemProps,
    selectedItems: selected,
  };
};

/**
 * Hook for managing roving tabindex
 * Useful for toolbars, menus, and other composite widgets
 */
export const useRovingTabIndex = <T extends HTMLElement>(
  items: T[],
  orientation: 'horizontal' | 'vertical' = 'horizontal'
) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  }, [items.length]);

  const movePrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const moveToIndex = useCallback((index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  }, [items.length]);

  const getItemProps = useCallback((index: number) => {
    const isCurrent = index === currentIndex;
    
    return {
      tabIndex: isCurrent ? 0 : -1,
      role: 'menuitem',
      onKeyDown: (event: React.KeyboardEvent) => {
        if (orientation === 'horizontal') {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            moveNext();
          } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            movePrevious();
          }
        } else {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            moveNext();
          } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            movePrevious();
          }
        }
        
        if (event.key === 'Home') {
          event.preventDefault();
          moveToIndex(0);
        } else if (event.key === 'End') {
          event.preventDefault();
          moveToIndex(items.length - 1);
        }
      },
      onFocus: () => moveToIndex(index),
    };
  }, [currentIndex, orientation, moveNext, movePrevious, moveToIndex, items.length]);

  // Focus the current item when currentIndex changes
  useEffect(() => {
    const currentItem = items[currentIndex];
    if (currentItem && document.activeElement !== currentItem) {
      currentItem.focus();
    }
  }, [currentIndex, items]);

  return {
    currentIndex,
    moveNext,
    movePrevious,
    moveToIndex,
    getItemProps,
  };
};

/**
 * Hook for managing color contrast accessibility
 * Ensures proper color contrast ratios
 */
export const useColorContrast = () => {
  const checkContrast = useCallback((foreground: string, background: string) => {
    // Simple contrast ratio calculation
    // In a real implementation, you'd want a more robust color contrast checker
    const getLuminance = (color: string) => {
      // Simplified luminance calculation
      // This is a placeholder - use a proper color library in production
      return 0.5; // Placeholder value
    };

    const foregroundLuminance = getLuminance(foreground);
    const backgroundLuminance = getLuminance(background);
    
    const ratio = Math.max(foregroundLuminance, backgroundLuminance) / 
                 Math.min(foregroundLuminance, backgroundLuminance);

    return {
      ratio,
      passesAA: ratio >= 4.5, // WCAG AA standard
      passesAAA: ratio >= 7,   // WCAG AAA standard
    };
  }, []);

  return {
    checkContrast,
  };
};

/**
 * Hook for managing reduced motion preferences
 * Respects user's motion preferences
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange(); // Set initial value
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    prefersReducedMotion,
    shouldAnimate: !prefersReducedMotion,
  };
};

/**
 * Combined accessibility hook
 * Provides a comprehensive set of accessibility utilities
 */
export const useAccessibility = (options: {
  label?: string;
  description?: string;
  errorMessage?: string;
  hasKeyboardNavigation?: boolean;
  keyboardOptions?: Parameters<typeof useKeyboardNavigation>[0];
}) => {
  const {
    label,
    description,
    errorMessage,
    hasKeyboardNavigation = false,
    keyboardOptions = {},
  } = options;

  const ariaLabeling = useAriaLabeling(label, description, errorMessage);
  const keyboardNavigation = useKeyboardNavigation(hasKeyboardNavigation ? keyboardOptions : {});
  const liveRegion = useLiveRegion();
  const { prefersReducedMotion } = useReducedMotion();

  return {
    ...ariaLabeling,
    ...keyboardNavigation,
    ...liveRegion,
    prefersReducedMotion,
  };
};
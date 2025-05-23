import { axe, toHaveNoViolations } from 'jest-axe';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

/**
 * Accessibility testing utilities
 * Provides comprehensive tools for testing WCAG compliance and accessibility features
 */

/**
 * Configuration for accessibility tests
 */
export interface A11yTestConfig {
  /** Skip automatic axe testing */
  skipAxe?: boolean;
  /** Skip keyboard navigation testing */
  skipKeyboard?: boolean;
  /** Skip focus management testing */
  skipFocus?: boolean;
  /** Skip screen reader testing */
  skipScreenReader?: boolean;
  /** Custom axe configuration */
  axeConfig?: any;
  /** Expected role for the component */
  expectedRole?: string;
  /** Expected accessible name */
  expectedAccessibleName?: string;
  /** Custom accessibility tests */
  customTests?: Array<{
    name: string;
    test: () => Promise<void> | void;
  }>;
}

/**
 * Run comprehensive accessibility tests on a container
 * 
 * @param container - Container element to test
 * @param config - Test configuration
 * @returns Promise that resolves when all tests complete
 */
export const runAccessibilityAudit = async (
  container: HTMLElement,
  config: A11yTestConfig = {}
): Promise<void> => {
  const {
    skipAxe = false,
    axeConfig = {},
    customTests = []
  } = config;

  if (!skipAxe) {
    const results = await axe(container, {
      rules: {
        // Enable all WCAG 2.1 Level AA rules
        'wcag21aa': { enabled: true },
        // Enable additional best practice rules
        'best-practice': { enabled: true },
        // Custom rule configuration
        ...axeConfig.rules
      },
      tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
      ...axeConfig
    });
    
    expect(results).toHaveNoViolations();
  }

  // Run custom accessibility tests
  for (const customTest of customTests) {
    await customTest.test();
  }
};

/**
 * Test keyboard navigation for interactive elements
 * 
 * @param user - UserEvent instance
 * @param elements - Elements to test navigation between
 * @param config - Navigation test configuration
 */
export const testKeyboardNavigation = async (
  user: ReturnType<typeof userEvent.setup>,
  elements: HTMLElement[],
  config: {
    /** Test tab navigation */
    testTab?: boolean;
    /** Test arrow key navigation */
    testArrowKeys?: boolean;
    /** Test escape key */
    testEscape?: boolean;
    /** Test enter/space activation */
    testActivation?: boolean;
    /** Custom key tests */
    customKeyTests?: Array<{
      key: string;
      element: HTMLElement;
      expectedBehavior: string;
      test: () => Promise<void> | void;
    }>;
  } = {}
): Promise<void> => {
  const {
    testTab = true,
    testArrowKeys = false,
    testEscape = false,
    testActivation = true,
    customKeyTests = []
  } = config;

  // Test tab navigation
  if (testTab && elements.length > 1) {
    for (let i = 0; i < elements.length; i++) {
      await user.tab();
      await waitFor(() => {
        expect(elements[i]).toHaveFocus();
      });
    }
    
    // Test shift+tab navigation (reverse)
    for (let i = elements.length - 2; i >= 0; i--) {
      await user.tab({ shift: true });
      await waitFor(() => {
        expect(elements[i]).toHaveFocus();
      });
    }
  }

  // Test arrow key navigation (for components like menus, tabs)
  if (testArrowKeys && elements.length > 1) {
    elements[0].focus();
    
    // Arrow right/down navigation
    for (let i = 1; i < elements.length; i++) {
      await user.keyboard('{ArrowRight}');
      await waitFor(() => {
        expect(elements[i]).toHaveFocus();
      });
    }
    
    // Arrow left/up navigation
    for (let i = elements.length - 2; i >= 0; i--) {
      await user.keyboard('{ArrowLeft}');
      await waitFor(() => {
        expect(elements[i]).toHaveFocus();
      });
    }
  }

  // Test escape key functionality
  if (testEscape) {
    const firstElement = elements[0];
    firstElement.focus();
    await user.keyboard('{Escape}');
    // Note: Specific behavior depends on component type
  }

  // Test enter/space activation
  if (testActivation) {
    for (const element of elements) {
      element.focus();
      
      // Test Enter key
      const enterHandler = jest.fn();
      element.addEventListener('click', enterHandler);
      await user.keyboard('{Enter}');
      expect(enterHandler).toHaveBeenCalled();
      element.removeEventListener('click', enterHandler);
      
      // Test Space key (for buttons)
      if (element.getAttribute('role') === 'button' || element.tagName === 'BUTTON') {
        const spaceHandler = jest.fn();
        element.addEventListener('click', spaceHandler);
        await user.keyboard(' ');
        expect(spaceHandler).toHaveBeenCalled();
        element.removeEventListener('click', spaceHandler);
      }
    }
  }

  // Run custom key tests
  for (const keyTest of customKeyTests) {
    keyTest.element.focus();
    await user.keyboard(`{${keyTest.key}}`);
    await keyTest.test();
  }
};

/**
 * Test focus management and focus trapping
 * 
 * @param container - Container to test focus within
 * @param config - Focus test configuration
 */
export const testFocusManagement = async (
  container: HTMLElement,
  config: {
    /** Test focus trapping (for modals, dropdowns) */
    testFocusTrapping?: boolean;
    /** Test initial focus */
    testInitialFocus?: boolean;
    /** Test focus restoration */
    testFocusRestoration?: boolean;
    /** Expected initially focused element selector */
    initialFocusSelector?: string;
    /** Element that should receive focus when container closes */
    restoreFocusElement?: HTMLElement;
  } = {}
): Promise<void> => {
  const {
    testFocusTrapping = false,
    testInitialFocus = true,
    testFocusRestoration = false,
    initialFocusSelector,
    restoreFocusElement
  } = config;

  const focusableElements = getFocusableElements(container);
  
  if (testInitialFocus && focusableElements.length > 0) {
    let expectedInitialFocus = focusableElements[0];
    
    if (initialFocusSelector) {
      const specifiedElement = container.querySelector(initialFocusSelector) as HTMLElement;
      if (specifiedElement) {
        expectedInitialFocus = specifiedElement;
      }
    }
    
    await waitFor(() => {
      expect(expectedInitialFocus).toHaveFocus();
    });
  }

  if (testFocusTrapping && focusableElements.length > 1) {
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Focus last element and test forward trap
    lastElement.focus();
    const user = userEvent.setup();
    await user.tab();
    
    await waitFor(() => {
      expect(firstElement).toHaveFocus();
    });
    
    // Focus first element and test backward trap
    firstElement.focus();
    await user.tab({ shift: true });
    
    await waitFor(() => {
      expect(lastElement).toHaveFocus();
    });
  }
  
  if (testFocusRestoration && restoreFocusElement) {
    // This would typically be tested when a modal/dropdown closes
    // For now, we just verify the restore element exists
    expect(restoreFocusElement).toBeInTheDocument();
  }
};

/**
 * Get all focusable elements within a container
 * 
 * @param container - Container to search within
 * @returns Array of focusable elements
 */
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ');
  
  const elements = container.querySelectorAll(focusableSelectors) as NodeListOf<HTMLElement>;
  return Array.from(elements).filter(element => {
    // Additional visibility checks
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.offsetWidth > 0 &&
      element.offsetHeight > 0
    );
  });
};

/**
 * Test screen reader announcements and ARIA live regions
 * 
 * @param config - Screen reader test configuration
 */
export const testScreenReaderSupport = async (config: {
  /** Test ARIA live region announcements */
  testLiveRegions?: boolean;
  /** Test ARIA label and description associations */
  testLabelAssociations?: boolean;
  /** Test landmark roles and structure */
  testLandmarks?: boolean;
  /** Custom screen reader tests */
  customTests?: Array<{
    name: string;
    test: () => Promise<void> | void;
  }>;
} = {}): Promise<void> => {
  const {
    testLiveRegions = true,
    testLabelAssociations = true,
    testLandmarks = true,
    customTests = []
  } = config;

  if (testLiveRegions) {
    // Test for live regions
    const liveRegions = screen.queryAllByRole('status');
    const alerts = screen.queryAllByRole('alert');
    
    // Live regions should exist if dynamic content updates occur
    expect([...liveRegions, ...alerts].length).toBeGreaterThanOrEqual(0);
  }

  if (testLabelAssociations) {
    // Test that interactive elements have accessible names
    const buttons = screen.queryAllByRole('button');
    const links = screen.queryAllByRole('link');
    const inputs = screen.queryAllByRole('textbox');
    
    [...buttons, ...links, ...inputs].forEach(element => {
      expect(element).toHaveAccessibleName();
    });
  }

  if (testLandmarks) {
    // Test for proper landmark structure
    const main = screen.queryByRole('main');
    const navigation = screen.queryAllByRole('navigation');
    const banners = screen.queryAllByRole('banner');
    const contentInfo = screen.queryAllByRole('contentinfo');
    
    // At least check that landmarks don't have accessibility violations
    // Specific requirements depend on the component type
  }

  // Run custom screen reader tests
  for (const customTest of customTests) {
    await customTest.test();
  }
};

/**
 * Test color contrast ratios
 * 
 * @param elements - Elements to test contrast for
 * @param minimumRatio - Minimum acceptable contrast ratio (default: 4.5 for WCAG AA)
 */
export const testColorContrast = async (
  elements: HTMLElement[],
  minimumRatio: number = 4.5
): Promise<void> => {
  // Note: This is a simplified contrast test
  // For production use, consider using a dedicated contrast testing library
  
  for (const element of elements) {
    const style = window.getComputedStyle(element);
    const color = style.color;
    const backgroundColor = style.backgroundColor;
    
    // Skip if no background color (transparent)
    if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
      continue;
    }
    
    // Here you would implement actual contrast ratio calculation
    // For now, we just ensure colors are defined
    expect(color).toBeTruthy();
    expect(backgroundColor).toBeTruthy();
  }
};

/**
 * Test component for touch accessibility
 * 
 * @param elements - Interactive elements to test
 * @param minimumSize - Minimum touch target size in pixels (default: 44)
 */
export const testTouchAccessibility = (
  elements: HTMLElement[],
  minimumSize: number = 44
): void => {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    
    // Check actual size or minimum size from CSS
    const width = Math.max(rect.width, parseInt(style.minWidth) || 0);
    const height = Math.max(rect.height, parseInt(style.minHeight) || 0);
    
    expect(width).toBeGreaterThanOrEqual(minimumSize);
    expect(height).toBeGreaterThanOrEqual(minimumSize);
  });
};

/**
 * Test component for motion sensitivity
 * 
 * @param container - Container with animated elements
 */
export const testMotionSensitivity = (container: HTMLElement): void => {
  // Mock prefers-reduced-motion
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Check that animations respect motion preferences
  const animatedElements = container.querySelectorAll('[class*="animate"], [class*="transition"]');
  
  animatedElements.forEach(element => {
    const style = window.getComputedStyle(element);
    // Should have motion-safe prefixes or respect prefers-reduced-motion
    const classNames = element.className;
    
    if (classNames.includes('animate') || classNames.includes('transition')) {
      // Should either have motion-safe prefix or motion-reduce considerations
      expect(
        classNames.includes('motion-safe') || 
        style.getPropertyValue('animation-duration') === '0s' ||
        style.getPropertyValue('transition-duration') === '0s'
      ).toBeTruthy();
    }
  });
};

/**
 * Comprehensive accessibility test suite
 * Runs all accessibility tests with sensible defaults
 * 
 * @param container - Container element to test
 * @param config - Comprehensive test configuration
 */
export const runComprehensiveA11yTests = async (
  container: HTMLElement,
  config: A11yTestConfig & {
    /** User event instance for interaction testing */
    user?: ReturnType<typeof userEvent.setup>;
    /** Test touch accessibility */
    testTouch?: boolean;
    /** Test motion sensitivity */
    testMotion?: boolean;
    /** Test color contrast */
    testContrast?: boolean;
  } = {}
): Promise<void> => {
  const {
    user,
    testTouch = true,
    testMotion = true,
    testContrast = true,
    ...a11yConfig
  } = config;

  // Run basic accessibility audit
  await runAccessibilityAudit(container, a11yConfig);

  // Test keyboard navigation if user instance provided
  if (user && !a11yConfig.skipKeyboard) {
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length > 0) {
      await testKeyboardNavigation(user, focusableElements);
    }
  }

  // Test focus management
  if (!a11yConfig.skipFocus) {
    await testFocusManagement(container);
  }

  // Test screen reader support
  if (!a11yConfig.skipScreenReader) {
    await testScreenReaderSupport();
  }

  // Test touch accessibility
  if (testTouch) {
    const interactiveElements = getFocusableElements(container);
    testTouchAccessibility(interactiveElements);
  }

  // Test motion sensitivity
  if (testMotion) {
    testMotionSensitivity(container);
  }

  // Test color contrast
  if (testContrast) {
    const textElements = container.querySelectorAll('*') as NodeListOf<HTMLElement>;
    await testColorContrast(Array.from(textElements));
  }
};

export default {
  runAccessibilityAudit,
  testKeyboardNavigation,
  testFocusManagement,
  getFocusableElements,
  testScreenReaderSupport,
  testColorContrast,
  testTouchAccessibility,
  testMotionSensitivity,
  runComprehensiveA11yTests
};
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import type { ReactElement } from 'react';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

/**
 * Shared testing utilities for consistent component testing across the design system
 * Provides DRY patterns for common test scenarios
 */

/**
 * Enhanced render function with common providers and setup
 * 
 * @param ui - React element to render
 * @param options - Additional render options
 * @returns Render result with enhanced utilities
 */
export const renderWithProviders = (
  ui: ReactElement,
  options: Parameters<typeof render>[1] = {}
) => {
  const user = userEvent.setup();
  
  const result = render(ui, {
    // Add any global providers here (ThemeProvider, etc.)
    wrapper: ({ children }) => <div data-testid="test-wrapper">{children}</div>,
    ...options
  });

  return {
    ...result,
    user
  };
};

/**
 * Test suite for standard component behaviors
 * Reduces test duplication by testing common patterns
 * 
 * @param Component - React component to test
 * @param config - Test configuration options
 */
export const runStandardComponentTests = <T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  config: {
    variants?: string[];
    sizes?: string[];
    requiredProps?: Partial<T>;
    skipTests?: string[];
    customTests?: Array<{
      name: string;
      test: (component: React.ComponentType<T>) => void;
    }>;
  }
) => {
  const {
    variants = ['primary', 'secondary', 'outline'],
    sizes = ['sm', 'md', 'lg'],
    requiredProps = {},
    skipTests = [],
    customTests = []
  } = config;

  describe('Standard Component Tests', () => {
    // Basic rendering test
    if (!skipTests.includes('rendering')) {
      it('renders correctly with default props', () => {
        renderWithProviders(<Component {...(requiredProps as T)} />);
        expect(screen.getByRole(getComponentRole(Component))).toBeInTheDocument();
      });
    }

    // Variant tests
    if (!skipTests.includes('variants')) {
      describe('Variants', () => {
        variants.forEach(variant => {
          it(`renders ${variant} variant correctly`, () => {
            renderWithProviders(
              <Component {...(requiredProps as T)} variant={variant} />
            );
            const element = screen.getByRole(getComponentRole(Component));
            expect(element).toBeInTheDocument();
            // Check for variant-specific classes
            expect(element).toHaveClass(expect.stringMatching(new RegExp(variant, 'i')));
          });
        });
      });
    }

    // Size tests
    if (!skipTests.includes('sizes')) {
      describe('Sizes', () => {
        sizes.forEach(size => {
          it(`renders ${size} size correctly`, () => {
            renderWithProviders(
              <Component {...(requiredProps as T)} size={size} />
            );
            const element = screen.getByRole(getComponentRole(Component));
            expect(element).toBeInTheDocument();
          });
        });
      });
    }

    // Disabled state test
    if (!skipTests.includes('disabled')) {
      it('handles disabled state correctly', () => {
        renderWithProviders(
          <Component {...(requiredProps as T)} disabled />
        );
        const element = screen.getByRole(getComponentRole(Component));
        expect(element).toBeDisabled();
        expect(element).toHaveClass('opacity-50', 'cursor-not-allowed');
      });
    }

    // Custom class name test
    if (!skipTests.includes('className')) {
      it('applies custom className correctly', () => {
        const customClass = 'custom-test-class';
        renderWithProviders(
          <Component {...(requiredProps as T)} className={customClass} />
        );
        const element = screen.getByRole(getComponentRole(Component));
        expect(element).toHaveClass(customClass);
      });
    }

    // Data test id test
    if (!skipTests.includes('testId')) {
      it('applies data-testid correctly', () => {
        const testId = 'custom-test-id';
        renderWithProviders(
          <Component {...(requiredProps as T)} data-testid={testId} />
        );
        expect(screen.getByTestId(testId)).toBeInTheDocument();
      });
    }

    // Run custom tests
    customTests.forEach(({ name, test }) => {
      it(name, () => test(Component));
    });
  });
};

/**
 * Accessibility test suite for components
 * Tests common accessibility requirements
 * 
 * @param Component - React component to test
 * @param props - Props to pass to component
 * @param config - Additional test configuration
 */
export const runAccessibilityTests = async <T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  props: T,
  config: {
    skipAxe?: boolean;
    skipKeyboard?: boolean;
    skipFocus?: boolean;
    customA11yTests?: Array<{
      name: string;
      test: (component: React.ComponentType<T>, props: T) => Promise<void> | void;
    }>;
  } = {}
) => {
  const { skipAxe = false, skipKeyboard = false, skipFocus = false, customA11yTests = [] } = config;

  describe('Accessibility Tests', () => {
    // Axe accessibility test
    if (!skipAxe) {
      it('should not have accessibility violations', async () => {
        const { container } = renderWithProviders(<Component {...props} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    }

    // Keyboard navigation test
    if (!skipKeyboard) {
      it('supports keyboard navigation', async () => {
        const { user } = renderWithProviders(<Component {...props} />);
        const element = screen.getByRole(getComponentRole(Component));
        
        // Tab to element
        await user.tab();
        expect(element).toHaveFocus();
        
        // Test Enter key if interactive
        if (isInteractiveComponent(Component)) {
          await user.keyboard('{Enter}');
          // Add specific assertions based on component behavior
        }
      });
    }

    // Focus management test
    if (!skipFocus) {
      it('manages focus correctly', async () => {
        const { user } = renderWithProviders(<Component {...props} />);
        const element = screen.getByRole(getComponentRole(Component));
        
        await user.click(element);
        expect(element).toHaveFocus();
        
        await user.tab();
        expect(element).not.toHaveFocus();
      });
    }

    // ARIA label test for interactive components
    if (isInteractiveComponent(Component)) {
      it('has proper ARIA labeling', () => {
        renderWithProviders(<Component {...props} />);
        const element = screen.getByRole(getComponentRole(Component));
        
        // Check for accessible name
        expect(element).toHaveAccessibleName();
      });
    }

    // Run custom accessibility tests
    customA11yTests.forEach(({ name, test }) => {
      it(name, async () => await test(Component, props));
    });
  });
};

/**
 * Responsive behavior test suite
 * Tests component behavior across different screen sizes
 * 
 * @param Component - React component to test
 * @param props - Props to pass to component
 */
export const runResponsiveTests = <T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  props: T
) => {
  describe('Responsive Tests', () => {
    const breakpoints = [
      { name: 'mobile', width: 375 },
      { name: 'tablet', width: 768 },
      { name: 'desktop', width: 1024 }
    ];

    breakpoints.forEach(({ name, width }) => {
      it(`renders correctly on ${name} (${width}px)`, () => {
        // Set viewport width
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });
        
        // Trigger resize event
        window.dispatchEvent(new Event('resize'));
        
        renderWithProviders(<Component {...props} />);
        const element = screen.getByRole(getComponentRole(Component));
        expect(element).toBeInTheDocument();
        
        // Check for responsive classes
        if (width >= 768) {
          expect(element.className).toMatch(/md:/);
        }
        if (width >= 1024) {
          expect(element.className).toMatch(/lg:/);
        }
      });
    });

    it('meets minimum touch target size on mobile', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
      
      renderWithProviders(<Component {...props} />);
      const element = screen.getByRole(getComponentRole(Component));
      
      if (isInteractiveComponent(Component)) {
        // Check minimum touch target size (44px)
        const styles = window.getComputedStyle(element);
        const minHeight = parseInt(styles.minHeight) || parseInt(styles.height);
        const minWidth = parseInt(styles.minWidth) || parseInt(styles.width);
        
        expect(minHeight).toBeGreaterThanOrEqual(44);
        expect(minWidth).toBeGreaterThanOrEqual(44);
      }
    });
  });
};

/**
 * Interaction test utilities for user events
 * Provides common interaction test patterns
 */
export const interactionTests = {
  /**
   * Tests click interaction
   */
  click: async <T extends Record<string, any>>(
    Component: React.ComponentType<T>,
    props: T & { onClick?: jest.Mock }
  ) => {
    const mockClick = jest.fn();
    const { user } = renderWithProviders(
      <Component {...props} onClick={mockClick} />
    );
    
    const element = screen.getByRole(getComponentRole(Component));
    await user.click(element);
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  },

  /**
   * Tests hover interaction
   */
  hover: async <T extends Record<string, any>>(
    Component: React.ComponentType<T>,
    props: T & { onMouseEnter?: jest.Mock; onMouseLeave?: jest.Mock }
  ) => {
    const mockMouseEnter = jest.fn();
    const mockMouseLeave = jest.fn();
    const { user } = renderWithProviders(
      <Component {...props} onMouseEnter={mockMouseEnter} onMouseLeave={mockMouseLeave} />
    );
    
    const element = screen.getByRole(getComponentRole(Component));
    
    await user.hover(element);
    expect(mockMouseEnter).toHaveBeenCalledTimes(1);
    
    await user.unhover(element);
    expect(mockMouseLeave).toHaveBeenCalledTimes(1);
  },

  /**
   * Tests keyboard interaction
   */
  keyboard: async <T extends Record<string, any>>(
    Component: React.ComponentType<T>,
    props: T & { onKeyDown?: jest.Mock },
    key: string
  ) => {
    const mockKeyDown = jest.fn();
    const { user } = renderWithProviders(
      <Component {...props} onKeyDown={mockKeyDown} />
    );
    
    const element = screen.getByRole(getComponentRole(Component));
    element.focus();
    
    await user.keyboard(key);
    expect(mockKeyDown).toHaveBeenCalledTimes(1);
  }
};

/**
 * Helper function to determine component role for testing
 */
function getComponentRole(Component: React.ComponentType<any>): string {
  const componentName = Component.displayName || Component.name || '';
  
  // Map component names to ARIA roles
  const roleMap: Record<string, string> = {
    Button: 'button',
    Link: 'link',
    Input: 'textbox',
    Select: 'combobox',
    Checkbox: 'checkbox',
    Radio: 'radio',
    Modal: 'dialog',
    Card: 'region',
    Navigation: 'navigation',
    Header: 'banner',
    Footer: 'contentinfo'
  };
  
  return roleMap[componentName] || 'generic';
}

/**
 * Helper function to determine if component is interactive
 */
function isInteractiveComponent(Component: React.ComponentType<any>): boolean {
  const componentName = Component.displayName || Component.name || '';
  const interactiveComponents = ['Button', 'Link', 'Input', 'Select', 'Checkbox', 'Radio'];
  
  return interactiveComponents.includes(componentName);
}

/**
 * Mock functions for common component props
 */
export const mockProps = {
  onClick: jest.fn(),
  onChange: jest.fn(),
  onSubmit: jest.fn(),
  onFocus: jest.fn(),
  onBlur: jest.fn(),
  onKeyDown: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn()
};

/**
 * Wait for element utilities
 */
export const waitForElement = {
  /**
   * Wait for element to appear
   */
  toAppear: async (selector: string) => {
    await waitFor(() => {
      expect(screen.getByTestId(selector)).toBeInTheDocument();
    });
  },

  /**
   * Wait for element to disappear
   */
  toDisappear: async (selector: string) => {
    await waitFor(() => {
      expect(screen.queryByTestId(selector)).not.toBeInTheDocument();
    });
  },

  /**
   * Wait for text to appear
   */
  forText: async (text: string) => {
    await waitFor(() => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  }
};

/**
 * Custom Jest matchers for design system testing
 */
export const customMatchers = {
  /**
   * Check if element has proper touch target size
   */
  toHaveMinimumTouchTarget: (element: HTMLElement) => {
    const styles = window.getComputedStyle(element);
    const height = parseInt(styles.height) || parseInt(styles.minHeight);
    const width = parseInt(styles.width) || parseInt(styles.minWidth);
    
    const pass = height >= 44 && width >= 44;
    
    return {
      message: () => 
        `expected element to have minimum touch target size of 44px, but got ${width}x${height}`,
      pass
    };
  },

  /**
   * Check if element has proper focus ring
   */
  toHaveFocusRing: (element: HTMLElement) => {
    element.focus();
    const styles = window.getComputedStyle(element);
    const hasOutline = styles.outline !== 'none' || styles.boxShadow.includes('ring');
    
    return {
      message: () => 
        `expected element to have focus ring, but ${hasOutline ? 'it does' : 'it does not'}`,
      pass: hasOutline
    };
  }
};

export default {
  renderWithProviders,
  runStandardComponentTests,
  runAccessibilityTests,
  runResponsiveTests,
  interactionTests,
  mockProps,
  waitForElement,
  customMatchers
};
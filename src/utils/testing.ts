// Shared testing utilities for consistent test patterns across components
// This module provides reusable testing patterns and utilities for all component tests

import React from 'react';
import { render, type RenderOptions, type RenderResult } from '@testing-library/react';
import { axe, type AxeResults } from 'jest-axe';
import userEvent from '@testing-library/user-event';

/**
 * Enhanced render function with providers and common setup
 * Use this instead of the default render from @testing-library/react
 */
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  /**
   * Additional props to pass to providers
   */
  providerProps?: Record<string, any>;
}

/**
 * Custom render function that includes common providers and setup
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  options: CustomRenderOptions = {}
): RenderResult => {
  const { providerProps = {}, ...renderOptions } = options;

  // Wrapper component that includes all necessary providers
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div data-testid="test-wrapper" {...providerProps}>
        {children}
      </div>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

/**
 * Accessibility testing utility using jest-axe
 * Tests component for accessibility violations
 */
export const testAccessibility = async (container: HTMLElement): Promise<AxeResults> => {
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  return results;
};

/**
 * Keyboard navigation testing utility
 * Tests that component can be navigated using keyboard
 */
export const testKeyboardNavigation = {
  /**
   * Test Tab navigation
   */
  async tab(element: HTMLElement): Promise<void> {
    const user = userEvent.setup();
    await user.tab();
    expect(element).toHaveFocus();
  },

  /**
   * Test Shift+Tab navigation
   */
  async shiftTab(element: HTMLElement): Promise<void> {
    const user = userEvent.setup();
    await user.tab({ shift: true });
    expect(element).toHaveFocus();
  },

  /**
   * Test Enter key activation
   */
  async enter(element: HTMLElement, expectation?: () => void): Promise<void> {
    const user = userEvent.setup();
    element.focus();
    await user.keyboard('{Enter}');
    if (expectation) expectation();
  },

  /**
   * Test Space key activation
   */
  async space(element: HTMLElement, expectation?: () => void): Promise<void> {
    const user = userEvent.setup();
    element.focus();
    await user.keyboard(' ');
    if (expectation) expectation();
  },

  /**
   * Test Escape key behavior
   */
  async escape(element: HTMLElement, expectation?: () => void): Promise<void> {
    const user = userEvent.setup();
    element.focus();
    await user.keyboard('{Escape}');
    if (expectation) expectation();
  }
};

/**
 * Standard component test suite that can be reused across components
 * This provides a consistent set of tests for all components
 */
interface ComponentTestOptions<T = Record<string, any>> {
  component: React.ComponentType<T>;
  variants?: string[];
  sizes?: string[];
  requiredProps?: Partial<T>;
  skipTests?: string[];
  customTests?: (Component: React.ComponentType<T>, props: Partial<T>) => void;
}

export const runStandardComponentTests = <T extends Record<string, any>>(
  options: ComponentTestOptions<T>
): void => {
  const {
    component: Component,
    variants = ['primary', 'secondary', 'outline'],
    sizes = ['sm', 'md', 'lg'],
    requiredProps = {} as Partial<T>,
    skipTests = [],
    customTests
  } = options;

  const shouldSkip = (testName: string) => skipTests.includes(testName);

  describe(`${Component.displayName || Component.name} Component`, () => {
    // Basic rendering test
    if (!shouldSkip('rendering')) {
      it('renders correctly with default props', () => {
        const { container } = renderWithProviders(
          <Component {...requiredProps} />
        );
        expect(container.firstChild).toBeInTheDocument();
      });
    }

    // Props and variants tests
    if (!shouldSkip('variants')) {
      describe('Variants', () => {
        variants.forEach(variant => {
          it(`renders ${variant} variant correctly`, () => {
            const { container } = renderWithProviders(
              <Component {...requiredProps} variant={variant} />
            );
            expect(container.firstChild).toBeInTheDocument();
          });
        });
      });
    }

    // Size tests
    if (!shouldSkip('sizes')) {
      describe('Sizes', () => {
        sizes.forEach(size => {
          it(`renders ${size} size correctly`, () => {
            const { container } = renderWithProviders(
              <Component {...requiredProps} size={size} />
            );
            expect(container.firstChild).toBeInTheDocument();
          });
        });
      });
    }

    // Accessibility tests
    if (!shouldSkip('accessibility')) {
      describe('Accessibility', () => {
        it('should not have accessibility violations', async () => {
          const { container } = renderWithProviders(
            <Component {...requiredProps} />
          );
          await testAccessibility(container);
        });

        it('supports keyboard navigation', async () => {
          const { container } = renderWithProviders(
            <Component {...requiredProps} />
          );
          const element = container.firstChild as HTMLElement;
          
          if (element && element.tabIndex >= 0) {
            await testKeyboardNavigation.tab(element);
          }
        });
      });
    }

    // Disabled state tests
    if (!shouldSkip('disabled')) {
      describe('Disabled State', () => {
        it('handles disabled state correctly', () => {
          const { container } = renderWithProviders(
            <Component {...requiredProps} disabled />
          );
          const element = container.firstChild as HTMLElement;
          
          if (element) {
            expect(element).toHaveAttribute('disabled');
          }
        });
      });
    }

    // Custom className tests
    if (!shouldSkip('className')) {
      it('accepts custom className', () => {
        const customClass = 'custom-test-class';
        const { container } = renderWithProviders(
          <Component {...requiredProps} className={customClass} />
        );
        expect(container.firstChild).toHaveClass(customClass);
      });
    }

    // Data attributes tests
    if (!shouldSkip('dataAttributes')) {
      it('accepts data-testid attribute', () => {
        const testId = 'custom-test-id';
        const { getByTestId } = renderWithProviders(
          <Component {...requiredProps} data-testid={testId} />
        );
        expect(getByTestId(testId)).toBeInTheDocument();
      });
    }

    // Run custom tests if provided
    if (customTests && !shouldSkip('custom')) {
      describe('Custom Tests', () => {
        customTests(Component, requiredProps);
      });
    }
  });
};

/**
 * Utility for testing responsive behavior
 */
export const testResponsiveComponent = (
  Component: React.ComponentType<any>,
  props: Record<string, any> = {}
): void => {
  const breakpoints = [
    { name: 'mobile', width: 375 },
    { name: 'tablet', width: 768 },
    { name: 'desktop', width: 1024 }
  ];

  breakpoints.forEach(({ name, width }) => {
    it(`renders correctly on ${name} (${width}px)`, () => {
      // Mock window.innerWidth
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
      });

      const { container } = renderWithProviders(<Component {...props} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });
};

/**
 * Mock user event setup for consistent testing
 */
export const setupUserEvent = () => userEvent.setup();

/**
 * Common test data and fixtures
 */
export const testFixtures = {
  // Common text content for testing
  text: {
    short: 'Test',
    medium: 'Test Button Content',
    long: 'This is a longer test content that might wrap to multiple lines in smaller containers'
  },
  
  // Common props for testing
  props: {
    onClick: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onChange: jest.fn(),
    onSubmit: jest.fn()
  },
  
  // Reset all mocks
  resetMocks: () => {
    Object.values(testFixtures.props).forEach(mock => {
      if (jest.isMockFunction(mock)) {
        mock.mockReset();
      }
    });
  }
};

// Setup and teardown for each test
beforeEach(() => {
  testFixtures.resetMocks();
});

export { userEvent };
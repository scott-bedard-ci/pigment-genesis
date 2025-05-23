import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Test provider wrapper for consistent component testing
 * Provides necessary context providers and setup for design system components
 */

/**
 * All the providers wrapper component
 * Add any global providers here (ThemeProvider, RouterProvider, etc.)
 */
function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <div data-testid="test-providers-wrapper">
      {/* Add global providers here as needed */}
      {/* <ThemeProvider theme={theme}> */}
      {/* <RouterProvider> */}
      {children}
      {/* </RouterProvider> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

/**
 * Enhanced render function with providers and user event setup
 * 
 * @param ui - React element to render
 * @param options - Additional render options
 * @returns Render result with enhanced utilities
 * 
 * @example
 * ```tsx
 * import { renderWithProviders } from '../tests/utils';
 * 
 * test('renders component correctly', () => {
 *   const { user } = renderWithProviders(<Button>Click me</Button>);
 *   
 *   // Use user for interactions
 *   await user.click(screen.getByRole('button'));
 * });
 * ```
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'wrapper'> & {
    /** Custom wrapper component */
    wrapper?: React.ComponentType<{ children: React.ReactNode }>;
    /** User event options */
    userOptions?: Parameters<typeof userEvent.setup>[0];
  } = {}
) => {
  const { wrapper = AllTheProviders, userOptions, ...renderOptions } = options;
  
  // Set up user event with custom options
  const user = userEvent.setup({
    // Default user event options
    advanceTimers: jest.advanceTimersByTime,
    ...userOptions
  });

  // Render with providers
  const renderResult = render(ui, {
    wrapper,
    ...renderOptions
  });

  // Return enhanced render result
  return {
    ...renderResult,
    user
  };
};

/**
 * Render component for accessibility testing
 * Includes additional setup for accessibility test tools
 * 
 * @param ui - React element to render
 * @param options - Additional render options
 * @returns Render result optimized for accessibility testing
 */
export const renderForAccessibility = (
  ui: React.ReactElement,
  options: Parameters<typeof renderWithProviders>[1] = {}
) => {
  const result = renderWithProviders(ui, {
    ...options,
    // Add accessibility-specific setup if needed
    container: document.body.appendChild(document.createElement('div'))
  });

  return {
    ...result,
    // Add accessibility-specific utilities here
    getAccessibilityTree: () => {
      // Return accessibility tree representation if needed
      return result.container;
    }
  };
};

/**
 * Render component for responsive testing
 * Sets up viewport and media query mocking
 * 
 * @param ui - React element to render
 * @param viewport - Viewport configuration
 * @param options - Additional render options
 * @returns Render result with viewport utilities
 */
export const renderForResponsive = (
  ui: React.ReactElement,
  viewport: {
    width: number;
    height: number;
  } = { width: 1024, height: 768 },
  options: Parameters<typeof renderWithProviders>[1] = {}
) => {
  // Mock viewport dimensions
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: viewport.width,
  });
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: viewport.height,
  });

  // Trigger resize event
  window.dispatchEvent(new Event('resize'));

  const result = renderWithProviders(ui, options);

  return {
    ...result,
    /**
     * Change viewport size
     */
    setViewport: (newViewport: { width: number; height: number }) => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: newViewport.width,
      });
      
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: newViewport.height,
      });

      window.dispatchEvent(new Event('resize'));
    },
    
    /**
     * Get current viewport
     */
    getViewport: () => ({
      width: window.innerWidth,
      height: window.innerHeight
    })
  };
};

/**
 * Render component for animation testing
 * Sets up animation and motion testing utilities
 * 
 * @param ui - React element to render
 * @param options - Additional render options
 * @returns Render result with animation utilities
 */
export const renderForAnimation = (
  ui: React.ReactElement,
  options: Parameters<typeof renderWithProviders>[1] = {}
) => {
  // Mock animation frame
  const mockRAF = jest.fn((callback) => {
    return setTimeout(callback, 16); // ~60fps
  });
  
  const originalRAF = global.requestAnimationFrame;
  global.requestAnimationFrame = mockRAF;

  const result = renderWithProviders(ui, options);

  return {
    ...result,
    
    /**
     * Advance animations by time
     */
    advanceAnimations: (ms: number) => {
      jest.advanceTimersByTime(ms);
    },
    
    /**
     * Complete all pending animations
     */
    completeAnimations: () => {
      jest.runAllTimers();
    },
    
    /**
     * Cleanup animation mocks
     */
    cleanup: () => {
      global.requestAnimationFrame = originalRAF;
      jest.clearAllTimers();
    }
  };
};

/**
 * Custom render hook for testing React hooks in isolation
 * 
 * @param hook - Hook to test
 * @param options - Hook testing options
 * @returns Hook testing result
 */
export const renderHookWithProviders = <T extends any[], R>(
  hook: (...args: T) => R,
  options: {
    initialProps?: T;
    wrapper?: React.ComponentType<{ children: React.ReactNode }>;
  } = {}
) => {
  const { wrapper = AllTheProviders, initialProps } = options;
  
  let result: { current: R };
  let error: Error | undefined;
  
  const TestComponent = (props: { hookArgs?: T }) => {
    try {
      result = { current: hook(...(props.hookArgs || ([] as unknown as T))) };
      error = undefined;
    } catch (e) {
      error = e as Error;
    }
    return null;
  };

  const renderResult = render(
    <TestComponent hookArgs={initialProps} />,
    { wrapper }
  );

  return {
    result: result!,
    error,
    rerender: (newProps?: T) => {
      renderResult.rerender(<TestComponent hookArgs={newProps} />);
    },
    unmount: renderResult.unmount
  };
};

/**
 * Wait for component to be ready
 * Useful for components with async initialization
 * 
 * @param testId - Test ID of the component to wait for
 * @param timeout - Maximum time to wait
 * @returns Promise that resolves when component is ready
 */
export const waitForComponentReady = async (
  testId: string,
  timeout: number = 5000
): Promise<HTMLElement> => {
  const { waitFor, screen } = await import('@testing-library/react');
  
  return waitFor(
    () => {
      const element = screen.getByTestId(testId);
      expect(element).toBeInTheDocument();
      return element;
    },
    { timeout }
  );
};

/**
 * Utilities for testing focus management
 */
export const focusUtils = {
  /**
   * Get the currently focused element
   */
  getFocusedElement: (): Element | null => {
    return document.activeElement;
  },
  
  /**
   * Check if an element has focus
   */
  hasFocus: (element: HTMLElement): boolean => {
    return document.activeElement === element;
  },
  
  /**
   * Focus an element and verify it received focus
   */
  focusElement: async (element: HTMLElement): Promise<void> => {
    element.focus();
    const { waitFor } = await import('@testing-library/react');
    await waitFor(() => {
      expect(element).toHaveFocus();
    });
  },
  
  /**
   * Test tab order of multiple elements
   */
  testTabOrder: async (user: ReturnType<typeof userEvent.setup>, expectedOrder: HTMLElement[]): Promise<void> => {
    for (let i = 0; i < expectedOrder.length; i++) {
      await user.tab();
      expect(expectedOrder[i]).toHaveFocus();
    }
  }
};

/**
 * Utilities for testing component state changes
 */
export const stateUtils = {
  /**
   * Wait for element to have specific class
   */
  waitForClass: async (element: HTMLElement, className: string, timeout: number = 1000): Promise<void> => {
    const { waitFor } = await import('@testing-library/react');
    await waitFor(
      () => {
        expect(element).toHaveClass(className);
      },
      { timeout }
    );
  },
  
  /**
   * Wait for element to not have specific class
   */
  waitForClassRemoval: async (element: HTMLElement, className: string, timeout: number = 1000): Promise<void> => {
    const { waitFor } = await import('@testing-library/react');
    await waitFor(
      () => {
        expect(element).not.toHaveClass(className);
      },
      { timeout }
    );
  },
  
  /**
   * Wait for attribute to have specific value
   */
  waitForAttribute: async (
    element: HTMLElement, 
    attribute: string, 
    value: string, 
    timeout: number = 1000
  ): Promise<void> => {
    const { waitFor } = await import('@testing-library/react');
    await waitFor(
      () => {
        expect(element).toHaveAttribute(attribute, value);
      },
      { timeout }
    );
  }
};

export default renderWithProviders;
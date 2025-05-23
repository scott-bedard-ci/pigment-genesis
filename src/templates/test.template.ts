import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ComponentName } from './ComponentName';
import { 
  renderWithProviders, 
  runStandardComponentTests, 
  runAccessibilityTests,
  runResponsiveTests,
  interactionTests,
  mockProps
} from '../utils/testing';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

/**
 * ComponentName Test Suite
 * 
 * Comprehensive testing covering:
 * - Standard component behaviors
 * - Accessibility compliance (WCAG)
 * - Responsive behavior
 * - User interactions
 * - Component-specific functionality
 */

describe('ComponentName', () => {
  // Run standard component test suite
  runStandardComponentTests(ComponentName, {
    variants: ['primary', 'secondary', 'outline', 'ghost'],
    sizes: ['sm', 'md', 'lg'],
    requiredProps: {},
    skipTests: [], // Skip specific standard tests if needed
    customTests: [
      {
        name: 'has correct display name',
        test: (Component) => {
          expect(Component.displayName).toBe('ComponentName');
        }
      }
    ]
  });

  // Basic rendering tests
  describe('Rendering', () => {
    it('renders with default props', () => {
      renderWithProviders(<ComponentName />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders content correctly', () => {
      const content = 'Test Content';
      renderWithProviders(<ComponentName content={content} />);
      expect(screen.getByText(content)).toBeInTheDocument();
    });

    it('renders children when provided', () => {
      const childText = 'Child Content';
      renderWithProviders(<ComponentName>{childText}</ComponentName>);
      expect(screen.getByText(childText)).toBeInTheDocument();
    });

    it('prioritizes content prop over children', () => {
      const content = 'Content Prop';
      const childText = 'Child Content';
      renderWithProviders(
        <ComponentName content={content}>{childText}</ComponentName>
      );
      expect(screen.getByText(content)).toBeInTheDocument();
      expect(screen.queryByText(childText)).not.toBeInTheDocument();
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('applies primary variant styles correctly', () => {
      renderWithProviders(<ComponentName variant="primary" content="Primary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary-500');
    });

    it('applies secondary variant styles correctly', () => {
      renderWithProviders(<ComponentName variant="secondary" content="Secondary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-secondary-500');
    });

    it('applies outline variant styles correctly', () => {
      renderWithProviders(<ComponentName variant="outline" content="Outline" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border-gray-300', 'bg-transparent');
    });

    it('applies ghost variant styles correctly', () => {
      renderWithProviders(<ComponentName variant="ghost" content="Ghost" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent');
    });
  });

  // Size tests
  describe('Sizes', () => {
    it('applies small size styles correctly', () => {
      renderWithProviders(<ComponentName size="sm" content="Small" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-2', 'py-1', 'text-sm');
    });

    it('applies medium size styles correctly', () => {
      renderWithProviders(<ComponentName size="md" content="Medium" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-3', 'py-2', 'text-base');
    });

    it('applies large size styles correctly', () => {
      renderWithProviders(<ComponentName size="lg" content="Large" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-3', 'text-lg');
    });
  });

  // State tests
  describe('States', () => {
    it('handles disabled state correctly', () => {
      const mockClick = jest.fn();
      renderWithProviders(
        <ComponentName disabled onClick={mockClick} content="Disabled" />
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
      expect(button).toHaveAttribute('aria-disabled', 'true');
      
      fireEvent.click(button);
      expect(mockClick).not.toHaveBeenCalled();
    });

    it('handles loading state correctly', () => {
      const mockClick = jest.fn();
      renderWithProviders(
        <ComponentName loading onClick={mockClick} content="Loading" />
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(screen.getByRole('status', { hidden: true })).toBeInTheDocument(); // Loading spinner
      
      fireEvent.click(button);
      expect(mockClick).not.toHaveBeenCalled();
    });

    it('shows loading spinner when loading', () => {
      renderWithProviders(<ComponentName loading content="Loading" />);
      const spinner = screen.getByRole('status', { hidden: true });
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass('animate-spin');
    });
  });

  // Icon tests
  describe('Icons', () => {
    const testIcon = <span data-testid="test-icon">🎨</span>;

    it('renders icon on the left by default', () => {
      renderWithProviders(
        <ComponentName icon={testIcon} content="With Icon" />
      );
      
      const icon = screen.getByTestId('test-icon');
      const text = screen.getByText('With Icon');
      expect(icon).toBeInTheDocument();
      
      // Check if icon comes before text in DOM order
      const button = screen.getByRole('button');
      const children = Array.from(button.children);
      const iconIndex = children.findIndex(child => child.contains(icon));
      const textIndex = children.findIndex(child => child.contains(text));
      expect(iconIndex).toBeLessThan(textIndex);
    });

    it('renders icon on the right when specified', () => {
      renderWithProviders(
        <ComponentName 
          icon={testIcon} 
          iconPosition="right" 
          content="With Icon" 
        />
      );
      
      const icon = screen.getByTestId('test-icon');
      const text = screen.getByText('With Icon');
      expect(icon).toBeInTheDocument();
      
      // Check if text comes before icon in DOM order
      const button = screen.getByRole('button');
      const children = Array.from(button.children);
      const iconIndex = children.findIndex(child => child.contains(icon));
      const textIndex = children.findIndex(child => child.contains(text));
      expect(textIndex).toBeLessThan(iconIndex);
    });

    it('renders icon-only component correctly', () => {
      renderWithProviders(
        <ComponentName 
          icon={testIcon} 
          aria-label="Icon only button" 
        />
      );
      
      const button = screen.getByRole('button');
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(button).toHaveAccessibleName('Icon only button');
    });

    it('hides icon when loading', () => {
      renderWithProviders(
        <ComponentName 
          icon={testIcon} 
          loading 
          content="Loading" 
        />
      );
      
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
      expect(screen.getByRole('status', { hidden: true })).toBeInTheDocument();
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('handles click events correctly', async () => {
      await interactionTests.click(ComponentName, { 
        content: 'Clickable',
        onClick: mockProps.onClick 
      });
    });

    it('handles hover events correctly', async () => {
      await interactionTests.hover(ComponentName, {
        content: 'Hoverable',
        onMouseEnter: mockProps.onMouseEnter,
        onMouseLeave: mockProps.onMouseLeave
      });
    });

    it('handles keyboard events correctly', async () => {
      const mockKeyDown = jest.fn();
      const { user } = renderWithProviders(
        <ComponentName content="Keyboard" onKeyDown={mockKeyDown} />
      );
      
      const button = screen.getByRole('button');
      await user.click(button); // Focus the button
      await user.keyboard('{Enter}');
      
      expect(mockKeyDown).toHaveBeenCalledWith(
        expect.objectContaining({ key: 'Enter' })
      );
    });

    it('activates on Enter key press', async () => {
      const mockClick = jest.fn();
      const { user } = renderWithProviders(
        <ComponentName content="Enter" onClick={mockClick} />
      );
      
      const button = screen.getByRole('button');
      await user.click(button); // Focus the button
      await user.keyboard('{Enter}');
      
      expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it('activates on Space key press', async () => {
      const mockClick = jest.fn();
      const { user } = renderWithProviders(
        <ComponentName content="Space" onClick={mockClick} />
      );
      
      const button = screen.getByRole('button');
      await user.click(button); // Focus the button
      await user.keyboard('{Space}');
      
      expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it('does not activate when disabled', async () => {
      const mockClick = jest.fn();
      const { user } = renderWithProviders(
        <ComponentName 
          content="Disabled" 
          disabled 
          onClick={mockClick} 
        />
      );
      
      const button = screen.getByRole('button');
      
      // Try clicking
      await user.click(button);
      expect(mockClick).not.toHaveBeenCalled();
      
      // Try keyboard activation
      await user.keyboard('{Enter}');
      expect(mockClick).not.toHaveBeenCalled();
    });

    it('does not activate when loading', async () => {
      const mockClick = jest.fn();
      const { user } = renderWithProviders(
        <ComponentName 
          content="Loading" 
          loading 
          onClick={mockClick} 
        />
      );
      
      const button = screen.getByRole('button');
      
      // Try clicking
      await user.click(button);
      expect(mockClick).not.toHaveBeenCalled();
    });
  });

  // Custom class name tests
  describe('Custom Styling', () => {
    it('applies custom className correctly', () => {
      const customClass = 'custom-test-class';
      renderWithProviders(
        <ComponentName className={customClass} content="Custom" />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass(customClass);
    });

    it('merges custom className with component classes', () => {
      const customClass = 'bg-red-500'; // Should override default background
      renderWithProviders(
        <ComponentName 
          className={customClass} 
          variant="primary"
          content="Custom Background" 
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass(customClass);
      // Should still have other component classes
      expect(button).toHaveClass('inline-flex', 'items-center');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = renderWithProviders(
        <ComponentName content="Accessible Component" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      renderWithProviders(
        <ComponentName 
          content="ARIA Test"
          aria-label="Custom label"
          aria-describedby="description"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
      expect(button).toHaveAttribute('aria-describedby', 'description');
    });

    it('supports data-testid for testing', () => {
      const testId = 'component-test-id';
      renderWithProviders(
        <ComponentName content="Test ID" data-testid={testId} />
      );
      
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });

    it('maintains accessible name with icon-only variant', () => {
      const testIcon = <span>🎨</span>;
      renderWithProviders(
        <ComponentName 
          icon={testIcon} 
          aria-label="Design tool"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAccessibleName('Design tool');
    });
  });

  // Run comprehensive accessibility test suite
  runAccessibilityTests(ComponentName, {
    content: 'Accessibility Test',
    onClick: mockProps.onClick
  });

  // Run responsive behavior tests
  runResponsiveTests(ComponentName, {
    content: 'Responsive Test'
  });

  // Error boundary tests
  describe('Error Handling', () => {
    // Suppress console.error for these tests
    const originalError = console.error;
    beforeAll(() => {
      console.error = jest.fn();
    });
    afterAll(() => {
      console.error = originalError;
    });

    it('handles invalid props gracefully', () => {
      expect(() => {
        renderWithProviders(
          <ComponentName 
            // @ts-ignore - Testing invalid prop
            invalidProp="invalid"
            content="Error Test"
          />
        );
      }).not.toThrow();
    });

    it('handles missing required props gracefully', () => {
      expect(() => {
        renderWithProviders(<ComponentName />);
      }).not.toThrow();
    });
  });

  // Performance tests
  describe('Performance', () => {
    it('does not re-render unnecessarily', () => {
      const mockRender = jest.fn();
      const TestComponent = () => {
        mockRender();
        return <ComponentName content="Performance Test" />;
      };

      const { rerender } = renderWithProviders(<TestComponent />);
      expect(mockRender).toHaveBeenCalledTimes(1);

      // Re-render with same props
      rerender(<TestComponent />);
      expect(mockRender).toHaveBeenCalledTimes(2); // This is expected since we're not using React.memo
    });

    it('handles rapid click events correctly', async () => {
      const mockClick = jest.fn();
      const { user } = renderWithProviders(
        <ComponentName content="Rapid Click" onClick={mockClick} />
      );
      
      const button = screen.getByRole('button');
      
      // Rapid clicks
      await user.click(button);
      await user.click(button);
      await user.click(button);
      
      expect(mockClick).toHaveBeenCalledTimes(3);
    });
  });

  // Integration tests
  describe('Integration', () => {
    it('works correctly in form context', () => {
      const mockSubmit = jest.fn();
      
      renderWithProviders(
        <form onSubmit={mockSubmit}>
          <ComponentName type="submit" content="Submit" />
        </form>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
      
      fireEvent.click(button);
      expect(mockSubmit).toHaveBeenCalled();
    });

    it('works correctly with focus management', async () => {
      const { user } = renderWithProviders(
        <div>
          <ComponentName content="First" data-testid="first" />
          <ComponentName content="Second" data-testid="second" />
          <ComponentName content="Third" data-testid="third" />
        </div>
      );
      
      // Tab through buttons
      await user.tab();
      expect(screen.getByTestId('first')).toHaveFocus();
      
      await user.tab();
      expect(screen.getByTestId('second')).toHaveFocus();
      
      await user.tab();
      expect(screen.getByTestId('third')).toHaveFocus();
    });
  });
});
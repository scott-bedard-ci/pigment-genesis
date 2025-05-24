// Test template for consistent component testing
// This template provides comprehensive test coverage for all components

import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { ComponentName } from './ComponentName';
import { 
  renderWithProviders, 
  testAccessibility, 
  testKeyboardNavigation,
  runStandardComponentTests,
  testFixtures,
  setupUserEvent
} from '@/utils/testing';

// Run standard component test suite
runStandardComponentTests({
  component: ComponentName,
  variants: ['primary', 'secondary', 'outline', 'ghost'],
  sizes: ['sm', 'md', 'lg'],
  requiredProps: {
    children: 'Test Component'
  },
  skipTests: [], // Skip specific tests if needed
  customTests: (Component, props) => {
    // Component-specific tests will be added here by the custom tests section below
  }
});

// Component-specific tests
describe('ComponentName Specific Behavior', () => {
  beforeEach(() => {
    testFixtures.resetMocks();
  });

  describe('Click Handling', () => {
    it('calls onClick when clicked', () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <ComponentName onClick={handleClick}>Click me</ComponentName>
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <ComponentName onClick={handleClick} disabled>
          Disabled
        </ComponentName>
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <ComponentName onClick={handleClick} loading>
          Loading
        </ComponentName>
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Loading State', () => {
    it('shows loading spinner when loading is true', () => {
      renderWithProviders(
        <ComponentName loading>Loading...</ComponentName>
      );
      
      const spinner = screen.getByRole('button').querySelector('svg');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass('animate-spin');
    });

    it('sets aria-busy when loading', () => {
      renderWithProviders(
        <ComponentName loading>Loading...</ComponentName>
      );
      
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });

    it('does not show spinner when not loading', () => {
      renderWithProviders(
        <ComponentName>Not loading</ComponentName>
      );
      
      const spinner = screen.getByRole('button').querySelector('svg');
      expect(spinner).not.toBeInTheDocument();
    });
  });

  describe('Custom Props', () => {
    it('accepts and renders with custom prop', () => {
      renderWithProviders(
        <ComponentName customProp="test-value">
          Custom prop test
        </ComponentName>
      );
      
      expect(screen.getByRole('button')).toBeInTheDocument();
      // Add specific assertions for custom prop behavior
    });
  });

  describe('Variant Styling', () => {
    it('applies primary variant classes correctly', () => {
      renderWithProviders(
        <ComponentName variant="primary">Primary</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary-500');
    });

    it('applies secondary variant classes correctly', () => {
      renderWithProviders(
        <ComponentName variant="secondary">Secondary</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-secondary-500');
    });

    it('applies outline variant classes correctly', () => {
      renderWithProviders(
        <ComponentName variant="outline">Outline</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('border', 'bg-transparent');
    });

    it('applies ghost variant classes correctly', () => {
      renderWithProviders(
        <ComponentName variant="ghost">Ghost</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-transparent');
    });
  });

  describe('Size Styling', () => {
    it('applies small size classes correctly', () => {
      renderWithProviders(
        <ComponentName size="sm">Small</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-3', 'py-2', 'text-sm');
    });

    it('applies medium size classes correctly', () => {
      renderWithProviders(
        <ComponentName size="md">Medium</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-3', 'text-base');
    });

    it('applies large size classes correctly', () => {
      renderWithProviders(
        <ComponentName size="lg">Large</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-6', 'py-4', 'text-lg');
    });
  });

  describe('Accessibility', () => {
    it('has proper button role', () => {
      renderWithProviders(
        <ComponentName>Accessible button</ComponentName>
      );
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      renderWithProviders(
        <ComponentName aria-label="Custom aria label">
          Button
        </ComponentName>
      );
      
      expect(screen.getByLabelText('Custom aria label')).toBeInTheDocument();
    });

    it('sets aria-disabled when disabled', () => {
      renderWithProviders(
        <ComponentName disabled>Disabled</ComponentName>
      );
      
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });

    it('supports keyboard navigation', async () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <ComponentName onClick={handleClick}>Keyboard test</ComponentName>
      );
      
      const button = screen.getByRole('button');
      await testKeyboardNavigation.enter(button, () => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });

    it('supports Space key activation', async () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <ComponentName onClick={handleClick}>Space test</ComponentName>
      );
      
      const button = screen.getByRole('button');
      await testKeyboardNavigation.space(button, () => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });

    it('has no accessibility violations', async () => {
      const { container } = renderWithProviders(
        <ComponentName>Accessibility test</ComponentName>
      );
      
      await testAccessibility(container);
    });
  });

  describe('Event Handling', () => {
    it('handles focus events', async () => {
      const handleFocus = jest.fn();
      renderWithProviders(
        <ComponentName onFocus={handleFocus}>Focus test</ComponentName>
      );
      
      const button = screen.getByRole('button');
      fireEvent.focus(button);
      
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('handles blur events', async () => {
      const handleBlur = jest.fn();
      renderWithProviders(
        <ComponentName onBlur={handleBlur}>Blur test</ComponentName>
      );
      
      const button = screen.getByRole('button');
      fireEvent.focus(button);
      fireEvent.blur(button);
      
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains minimum touch target size', () => {
      renderWithProviders(
        <ComponentName size="sm">Small touch target</ComponentName>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('min-h-[44px]', 'min-w-[44px]');
    });

    it('applies responsive classes correctly', () => {
      renderWithProviders(
        <ComponentName>Responsive test</ComponentName>
      );
      
      const button = screen.getByRole('button');
      // Test for responsive classes if component has them
      expect(button).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      renderWithProviders(<ComponentName />);
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles very long text content', () => {
      const longText = 'Very long text content that might wrap to multiple lines and test component behavior with extended content';
      renderWithProviders(
        <ComponentName>{longText}</ComponentName>
      );
      
      expect(screen.getByRole('button')).toHaveTextContent(longText);
    });

    it('handles multiple rapid clicks gracefully', async () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <ComponentName onClick={handleClick}>Rapid click test</ComponentName>
      );
      
      const button = screen.getByRole('button');
      
      // Simulate rapid clicks
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('Performance', () => {
    it('does not cause unnecessary re-renders', () => {
      const TestWrapper = () => {
        const [count, setCount] = React.useState(0);
        return (
          <div>
            <ComponentName onClick={() => setCount(c => c + 1)}>
              Click count: {count}
            </ComponentName>
          </div>
        );
      };

      renderWithProviders(<TestWrapper />);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(screen.getByText('Click count: 1')).toBeInTheDocument();
    });
  });
});
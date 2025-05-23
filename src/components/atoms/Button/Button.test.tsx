import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

// Mock icon for testing
const TestIcon = () => (
  <svg data-testid="test-icon" width="16" height="16" viewBox="0 0 16 16">
    <path d="M8 0L16 8L8 16L0 8L8 0Z" fill="currentColor" />
  </svg>
);

describe('Button Component', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Test Button</Button>);
      
      const button = screen.getByRole('button', { name: 'Test Button' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Test Button');
    });

    it('renders with custom className', () => {
      render(<Button className="custom-class">Test Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('renders with data-testid', () => {
      render(<Button data-testid="test-button">Test Button</Button>);
      
      expect(screen.getByTestId('test-button')).toBeInTheDocument();
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('applies primary variant styles by default', () => {
      render(<Button>Primary Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-[#1e39d2]');
    });

    it('applies secondary variant styles', () => {
      render(<Button variant="secondary">Secondary Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-white', 'text-[#1e39d2]', 'border-2', 'border-[#1e39d2]');
    });

    it('applies tertiary variant styles', () => {
      render(<Button variant="tertiary">Tertiary Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-[#fa3c00]');
    });
  });

  // Size tests
  describe('Sizes', () => {
    it('applies large size by default', () => {
      render(<Button>Large Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-3', 'text-base', 'leading-5');
    });

    it('applies small size styles', () => {
      render(<Button size="sm">Small Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-1.5', 'text-xs', 'leading-4');
    });

    it('applies medium size styles', () => {
      render(<Button size="md">Medium Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4', 'py-2', 'text-sm');
    });
  });

  // Icon tests
  describe('Icon Support', () => {
    it('renders with left icon', () => {
      render(
        <Button leftIcon={<TestIcon />}>
          Button with Left Icon
        </Button>
      );
      
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Button with Left Icon')).toBeInTheDocument();
    });

    it('renders with right icon', () => {
      render(
        <Button rightIcon={<TestIcon />}>
          Button with Right Icon
        </Button>
      );
      
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Button with Right Icon')).toBeInTheDocument();
    });

    it('renders icon-only button with accessible label', () => {
      render(
        <Button iconOnly leftIcon={<TestIcon />}>
          Add to cart
        </Button>
      );
      
      const button = screen.getByRole('button', { name: 'Add to cart' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('aria-label', 'Add to cart');
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(button).not.toHaveTextContent('Add to cart');
    });

    it('hides icons when loading', () => {
      render(
        <Button loading leftIcon={<TestIcon />}>
          Loading Button
        </Button>
      );
      
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
      expect(screen.getByText('Loading Button')).toBeInTheDocument();
    });
  });

  // State tests
  describe('States', () => {
    it('handles disabled state', () => {
      const handleClick = jest.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
      
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('handles loading state', () => {
      const handleClick = jest.fn();
      render(
        <Button loading onClick={handleClick}>
          Loading Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument(); // Loading spinner
      
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('shows loading spinner with proper attributes', () => {
      render(<Button loading>Loading</Button>);
      
      const button = screen.getByRole('button');
      const spinner = button.querySelector('svg');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveAttribute('aria-hidden', 'true');
      expect(spinner).toHaveClass('animate-spin');
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Clickable Button</Button>);
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Button loading onClick={handleClick}>
          Loading Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('can be focused with keyboard', async () => {
      const user = userEvent.setup();
      
      render(<Button>Focusable Button</Button>);
      
      const button = screen.getByRole('button');
      await user.tab();
      
      expect(button).toHaveFocus();
    });

    it('can be activated with Enter key', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Enter Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('can be activated with Space key', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Space Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard(' ');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('cannot be focused when disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
    });
  });

  // Responsive tests
  describe('Responsive Behavior', () => {
    it('applies mobile-first responsive classes', () => {
      render(<Button>Responsive Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-full', 'md:w-auto');
    });

    it('applies responsive sizing classes', () => {
      render(<Button size="sm">Small Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('md:px-4', 'md:py-2', 'md:text-sm');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Button>Accessible Button</Button>);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with icons', async () => {
      const { container } = render(
        <Button leftIcon={<TestIcon />} rightIcon={<TestIcon />}>
          Button with Icons
        </Button>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when disabled', async () => {
      const { container } = render(<Button disabled>Disabled Button</Button>);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when loading', async () => {
      const { container } = render(<Button loading>Loading Button</Button>);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides proper aria-label for icon-only buttons', () => {
      render(
        <Button iconOnly leftIcon={<TestIcon />}>
          Add item
        </Button>
      );
      
      const button = screen.getByRole('button', { name: 'Add item' });
      expect(button).toHaveAttribute('aria-label', 'Add item');
    });

    it('marks decorative icons as aria-hidden', () => {
      render(
        <Button leftIcon={<TestIcon />}>
          Button with Icon
        </Button>
      );
      
      const iconContainer = screen.getByTestId('test-icon').parentElement;
      expect(iconContainer).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Edge cases and error handling
  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      render(<Button>{''}</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('handles null children gracefully', () => {
      render(<Button>{null}</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('preserves other button attributes', () => {
      render(
        <Button type="submit" form="test-form" title="Submit button">
          Submit
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('form', 'test-form');
      expect(button).toHaveAttribute('title', 'Submit button');
    });
  });

  // Performance tests
  describe('Performance', () => {
    it('does not re-render unnecessarily', () => {
      const { rerender } = render(<Button>Test Button</Button>);
      
      // Re-render with same props
      rerender(<Button>Test Button</Button>);
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
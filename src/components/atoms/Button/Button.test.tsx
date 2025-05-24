import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

// Sample icon for testing
const TestIcon = () => (
  <svg data-testid="test-icon" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

describe('Button', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<Button data-testid="button">Click me</Button>);
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders without children for icon-only buttons', () => {
      render(<Button icon={<TestIcon />} iconPosition="only" data-testid="button" />);
      expect(screen.getByTestId('button')).toBeInTheDocument();
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(<Button className="custom-class" data-testid="button">Click me</Button>);
      expect(screen.getByTestId('button')).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Click me</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('renders primary variant correctly', () => {
      render(<Button variant="primary" data-testid="button">Primary</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('bg-[#1e39d2]', 'text-[#ffffff]');
    });

    it('renders secondary variant correctly', () => {
      render(<Button variant="secondary" data-testid="button">Secondary</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('bg-[#ffffff]', 'text-[#1e39d2]', 'border-[#1e39d2]');
    });

    it('renders tertiary variant correctly', () => {
      render(<Button variant="tertiary" data-testid="button">Tertiary</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('bg-[#fa3c00]', 'text-[#ffffff]');
    });

    it('renders text variant correctly', () => {
      render(<Button variant="text" data-testid="button">Text</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('bg-transparent', 'text-[#1e39d2]');
    });
  });

  // Size tests
  describe('Sizes', () => {
    it('renders small size correctly', () => {
      render(<Button size="small" data-testid="button">Small</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('h-8', 'text-xs', 'px-4', 'py-1.5');
    });

    it('renders medium size correctly', () => {
      render(<Button size="medium" data-testid="button">Medium</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('h-10', 'text-sm', 'px-4', 'py-2');
    });

    it('renders large size correctly', () => {
      render(<Button size="large" data-testid="button">Large</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('h-12', 'text-base', 'px-4', 'py-3');
    });
  });

  // Icon tests
  describe('Icon Positioning', () => {
    it('renders icon on the left', () => {
      render(
        <Button icon={<TestIcon />} iconPosition="left" data-testid="button">
          With Icon
        </Button>
      );
      const button = screen.getByTestId('button');
      const icon = screen.getByTestId('test-icon');
      
      expect(button).toContainElement(icon);
      expect(button).toHaveClass('flex-row', 'gap-2');
    });

    it('renders icon on the right', () => {
      render(
        <Button icon={<TestIcon />} iconPosition="right" data-testid="button">
          With Icon
        </Button>
      );
      const button = screen.getByTestId('button');
      const icon = screen.getByTestId('test-icon');
      
      expect(button).toContainElement(icon);
      expect(button).toHaveClass('flex-row-reverse', 'gap-2');
    });

    it('renders icon-only button', () => {
      render(<Button icon={<TestIcon />} iconPosition="only" data-testid="button" />);
      const button = screen.getByTestId('button');
      const icon = screen.getByTestId('test-icon');
      
      expect(button).toContainElement(icon);
      expect(button).toHaveClass('p-3');
      expect(button).not.toHaveTextContent();
    });

    it('auto-detects icon-only when no children provided', () => {
      render(<Button icon={<TestIcon />} data-testid="button" />);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('p-3');
    });
  });

  // State tests
  describe('States', () => {
    it('renders disabled state correctly', () => {
      render(<Button disabled data-testid="button">Disabled</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled:pointer-events-none');
    });

    it('renders loading state correctly', () => {
      render(<Button loading data-testid="button">Loading</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('cursor-wait');
    });

    it('shows loading spinner when loading', () => {
      render(<Button loading data-testid="button">Loading</Button>);
      const spinner = screen.getByTestId('button').querySelector('svg');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass('animate-spin');
    });

    it('renders full width correctly', () => {
      render(<Button fullWidth data-testid="button">Full Width</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('w-full');
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} data-testid="button">Click me</Button>);
      const button = screen.getByTestId('button');
      
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} disabled data-testid="button">Disabled</Button>);
      const button = screen.getByTestId('button');
      
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} loading data-testid="button">Loading</Button>);
      const button = screen.getByTestId('button');
      
      await user.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('supports multiple clicks', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} data-testid="button">Click me</Button>);
      const button = screen.getByTestId('button');
      
      await user.click(button);
      await user.click(button);
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('can be focused with Tab key', async () => {
      const user = userEvent.setup();
      
      render(<Button data-testid="button">Focus me</Button>);
      const button = screen.getByTestId('button');
      
      await user.tab();
      
      expect(button).toHaveFocus();
    });

    it('can be activated with Enter key', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} data-testid="button">Press Enter</Button>);
      const button = screen.getByTestId('button');
      
      button.focus();
      await user.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('can be activated with Space key', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} data-testid="button">Press Space</Button>);
      const button = screen.getByTestId('button');
      
      button.focus();
      await user.keyboard(' ');
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not respond to keyboard when disabled', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} disabled data-testid="button">Disabled</Button>);
      const button = screen.getByTestId('button');
      
      button.focus();
      await user.keyboard('{Enter}');
      await user.keyboard(' ');
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Button>Accessible button</Button>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with icon', async () => {
      const { container } = render(
        <Button icon={<TestIcon />} iconPosition="left">
          Button with icon
        </Button>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when disabled', async () => {
      const { container } = render(
        <Button disabled>Disabled button</Button>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper button role', () => {
      render(<Button data-testid="button">Button</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'button');
      expect(button.tagName).toBe('BUTTON');
    });

    it('supports aria-label for icon-only buttons', () => {
      render(
        <Button 
          icon={<TestIcon />} 
          iconPosition="only" 
          aria-label="Search button"
          data-testid="button"
        />
      );
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('aria-label', 'Search button');
    });

    it('maintains focus indicators', () => {
      render(<Button data-testid="button">Focus me</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-2');
    });
  });

  // Design token validation tests
  describe('Design Tokens', () => {
    it('applies correct Figma-extracted button heights', () => {
      render(
        <div>
          <Button size="small" data-testid="small">Small</Button>
          <Button size="medium" data-testid="medium">Medium</Button>
          <Button size="large" data-testid="large">Large</Button>
        </div>
      );
      
      expect(screen.getByTestId('small')).toHaveClass('h-8'); // 32px
      expect(screen.getByTestId('medium')).toHaveClass('h-10'); // 40px
      expect(screen.getByTestId('large')).toHaveClass('h-12'); // 48px
    });

    it('applies correct Figma-extracted colors for variants', () => {
      render(
        <div>
          <Button variant="primary" data-testid="primary">Primary</Button>
          <Button variant="secondary" data-testid="secondary">Secondary</Button>
          <Button variant="tertiary" data-testid="tertiary">Tertiary</Button>
        </div>
      );
      
      expect(screen.getByTestId('primary')).toHaveClass('bg-[#1e39d2]');
      expect(screen.getByTestId('secondary')).toHaveClass('bg-[#ffffff]');
      expect(screen.getByTestId('tertiary')).toHaveClass('bg-[#fa3c00]');
    });

    it('applies correct Figma-extracted typography', () => {
      render(
        <div>
          <Button size="small" data-testid="small">Small</Button>
          <Button size="medium" data-testid="medium">Medium</Button>
          <Button size="large" data-testid="large">Large</Button>
        </div>
      );
      
      expect(screen.getByTestId('small')).toHaveClass('text-xs'); // 12px
      expect(screen.getByTestId('medium')).toHaveClass('text-sm'); // 14px
      expect(screen.getByTestId('large')).toHaveClass('text-base'); // 16px
    });

    it('applies correct Figma-extracted border radius', () => {
      render(<Button data-testid="button">Button</Button>);
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('rounded-md'); // 6px border radius
    });

    it('applies correct Figma-extracted spacing', () => {
      render(
        <Button icon={<TestIcon />} iconPosition="left" data-testid="button">
          With Icon
        </Button>
      );
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('gap-2'); // 8px gap from Figma
    });
  });

  // Edge case tests
  describe('Edge Cases', () => {
    it('handles missing onClick gracefully', () => {
      expect(() => {
        render(<Button data-testid="button">No onClick</Button>);
        fireEvent.click(screen.getByTestId('button'));
      }).not.toThrow();
    });

    it('handles invalid icon gracefully', () => {
      expect(() => {
        render(<Button icon={null} data-testid="button">Button</Button>);
      }).not.toThrow();
    });

    it('handles undefined children gracefully', () => {
      expect(() => {
        render(<Button children={undefined} data-testid="button" />);
      }).not.toThrow();
    });

    it('maintains button semantics with custom props', () => {
      render(
        <Button 
          data-testid="button"
          type="submit"
          form="test-form"
          name="test-button"
          value="test-value"
        >
          Submit
        </Button>
      );
      
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).toHaveAttribute('form', 'test-form');
      expect(button).toHaveAttribute('name', 'test-button');
      expect(button).toHaveAttribute('value', 'test-value');
    });
  });

  // Loading state specific tests
  describe('Loading States', () => {
    it('preserves text content when loading', () => {
      render(<Button loading data-testid="button">Loading Text</Button>);
      expect(screen.getByText('Loading Text')).toBeInTheDocument();
    });

    it('shows spinner for icon-only loading buttons', () => {
      render(
        <Button 
          icon={<TestIcon />} 
          iconPosition="only" 
          loading 
          data-testid="button" 
        />
      );
      const button = screen.getByTestId('button');
      const spinner = button.querySelector('svg');
      expect(spinner).toBeInTheDocument();
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });

    it('maintains button dimensions when loading', () => {
      const { rerender } = render(
        <Button size="large" data-testid="button">Normal</Button>
      );
      const normalButton = screen.getByTestId('button');
      const normalHeight = normalButton.classList.toString();
      
      rerender(<Button size="large" loading data-testid="button">Loading</Button>);
      const loadingButton = screen.getByTestId('button');
      
      expect(loadingButton).toHaveClass('h-12'); // Maintains height
      expect(loadingButton.classList.toString()).toContain('h-12');
    });
  });
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Checkbox } from './Checkbox';

expect.extend(toHaveNoViolations);

describe('Checkbox', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      render(<Checkbox data-testid="checkbox" />);
      expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });

    it('renders with label when provided', () => {
      render(<Checkbox label="Test Label" />);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
    });

    it('renders without label when showLabel is false', () => {
      render(<Checkbox label="Test Label" showLabel={false} />);
      expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
    });

    it('applies custom className to checkbox', () => {
      render(<Checkbox className="custom-class" data-testid="checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox.closest('label')).toHaveClass('custom-class');
    });

    it('applies custom containerClassName', () => {
      render(<Checkbox containerClassName="container-class" data-testid="checkbox" />);
      expect(screen.getByTestId('checkbox')).toHaveClass('container-class');
    });
  });

  // State tests
  describe('States', () => {
    it('renders unchecked state correctly', () => {
      render(<Checkbox checked={false} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });

    it('renders checked state correctly', () => {
      render(<Checkbox checked={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('renders disabled state correctly', () => {
      render(<Checkbox disabled={true} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });

    it('shows checkmark icon when checked and not disabled', () => {
      render(<Checkbox checked={true} disabled={false} />);
      const checkIcon = screen.getByRole('checkbox').closest('label')?.querySelector('svg');
      expect(checkIcon).toBeInTheDocument();
    });

    it('does not show checkmark icon when checked but disabled', () => {
      render(<Checkbox checked={true} disabled={true} />);
      const checkIcon = screen.getByRole('checkbox').closest('label')?.querySelector('svg');
      expect(checkIcon).not.toBeInTheDocument();
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('calls onChange when clicked', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('calls onChange with correct value when clicking label', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox label="Click me" onChange={handleChange} />);
      const label = screen.getByText('Click me');
      
      await user.click(label);
      
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('does not call onChange when disabled', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox disabled={true} onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('toggles state on repeated clicks', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      
      await user.click(checkbox);
      expect(handleChange).toHaveBeenLastCalledWith(true, expect.any(Object));
      
      await user.click(checkbox);
      expect(handleChange).toHaveBeenLastCalledWith(false, expect.any(Object));
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('can be focused with Tab key', async () => {
      const user = userEvent.setup();
      
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      
      await user.tab();
      
      expect(checkbox).toHaveFocus();
    });

    it('can be toggled with Space key', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      
      checkbox.focus();
      await user.keyboard(' ');
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('can be toggled with Enter key', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      
      checkbox.focus();
      await user.keyboard('{Enter}');
      
      expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
    });

    it('does not respond to keyboard when disabled', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox disabled={true} onChange={handleChange} />);
      const checkbox = screen.getByRole('checkbox');
      
      checkbox.focus();
      await user.keyboard(' ');
      
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Checkbox label="Accessible checkbox" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when checked', async () => {
      const { container } = render(
        <Checkbox label="Checked checkbox" checked={true} />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when disabled', async () => {
      const { container } = render(
        <Checkbox label="Disabled checkbox" disabled={true} />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(<Checkbox label="Test checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      
      expect(checkbox).toHaveAttribute('type', 'checkbox');
      expect(checkbox).toHaveAttribute('aria-checked');
    });

    it('associates label with checkbox input', () => {
      render(<Checkbox label="Associated label" />);
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText('Associated label');
      
      expect(checkbox).toHaveAttribute('id');
      expect(label).toHaveAttribute('for', checkbox.getAttribute('id'));
    });

    it('has proper focus management', async () => {
      const user = userEvent.setup();
      
      render(
        <div>
          <Checkbox label="First" />
          <Checkbox label="Second" />
        </div>
      );
      
      const firstCheckbox = screen.getByRole('checkbox', { name: 'First' });
      const secondCheckbox = screen.getByRole('checkbox', { name: 'Second' });
      
      await user.tab();
      expect(firstCheckbox).toHaveFocus();
      
      await user.tab();
      expect(secondCheckbox).toHaveFocus();
    });
  });

  // Design token validation tests
  describe('Design Tokens', () => {
    it('applies correct Figma-extracted border radius', () => {
      render(<Checkbox />);
      const checkboxLabel = screen.getByRole('checkbox').closest('label');
      expect(checkboxLabel).toHaveClass('rounded-[2.75px]');
    });

    it('applies correct Figma-extracted dimensions', () => {
      render(<Checkbox />);
      const checkboxLabel = screen.getByRole('checkbox').closest('label');
      expect(checkboxLabel).toHaveClass('h-[18px]', 'w-[18px]');
    });

    it('applies correct Figma-extracted colors for checked state', () => {
      render(<Checkbox checked={true} />);
      const checkboxLabel = screen.getByRole('checkbox').closest('label');
      expect(checkboxLabel).toHaveClass('bg-[#1e39d2]');
    });

    it('applies correct Figma-extracted spacing', () => {
      render(<Checkbox label="Test" data-testid="checkbox" />);
      const container = screen.getByTestId('checkbox');
      expect(container).toHaveClass('gap-2'); // 8px gap from Figma
    });
  });

  // Error boundary tests
  describe('Error Handling', () => {
    it('handles missing onChange gracefully', () => {
      expect(() => {
        render(<Checkbox />);
        fireEvent.click(screen.getByRole('checkbox'));
      }).not.toThrow();
    });

    it('handles invalid checked prop gracefully', () => {
      expect(() => {
        render(<Checkbox checked={undefined as any} />);
      }).not.toThrow();
    });
  });

  // Forward ref test
  describe('Forward Ref', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.type).toBe('checkbox');
    });
  });
});
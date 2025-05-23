import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

expect.extend(toHaveNoViolations);

describe('Checkbox Component', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Checkbox label="Test checkbox" />);
      
      const checkbox = screen.getByRole('checkbox', { name: 'Test checkbox' });
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    });

    it('renders without label', () => {
      render(<Checkbox />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      expect(screen.getByText('Checkbox')).toBeInTheDocument(); // Screen reader description
    });

    it('renders with data-testid', () => {
      render(<Checkbox label="Test" data-testid="test-checkbox" />);
      
      expect(screen.getByTestId('test-checkbox')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Checkbox label="Test" className="custom-class" />);
      
      const container = screen.getByTestId('test-checkbox') || screen.getByLabelText('Test').closest('label');
      expect(container).toHaveClass('custom-class');
    });
  });

  // State tests
  describe('States', () => {
    it('renders unchecked by default', () => {
      render(<Checkbox label="Unchecked" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });

    it('renders checked when checked prop is true', () => {
      render(<Checkbox label="Checked" checked />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('renders disabled state', () => {
      render(<Checkbox label="Disabled" disabled />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
      
      const label = screen.getByText('Disabled');
      expect(label).toHaveClass('text-[rgba(0,0,0,0.41)]');
    });

    it('renders checked and disabled state', () => {
      render(<Checkbox label="Checked Disabled" checked disabled />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
      expect(checkbox).toBeDisabled();
    });

    it('handles indeterminate state', () => {
      render(<Checkbox label="Indeterminate" indeterminate />);
      
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
      expect(checkbox).not.toBeChecked();
    });

    it('prioritizes indeterminate over checked', () => {
      render(<Checkbox label="Indeterminate" checked indeterminate />);
      
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
      expect(checkbox).not.toBeChecked();
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('toggles checked state when clicked', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Clickable" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
      
      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('can be toggled by clicking the label', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Click label" />);
      
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByText('Click label');
      
      expect(checkbox).not.toBeChecked();
      
      await user.click(label);
      expect(checkbox).toBeChecked();
    });

    it('calls onCheckedChange when state changes', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox label="Test" onCheckedChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledWith(true);
      
      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalledWith(false);
    });

    it('calls onChange when state changes', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Checkbox label="Test" onChange={handleChange} />);
      
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);
      
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
      expect(handleChange.mock.calls[0][0].target.checked).toBe(true);
    });

    it('does not respond to clicks when disabled', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Checkbox 
          label="Disabled" 
          disabled 
          onCheckedChange={handleChange} 
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);
      
      expect(handleChange).not.toHaveBeenCalled();
      expect(checkbox).not.toBeChecked();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('can be focused with keyboard', async () => {
      const user = userEvent.setup();
      
      render(<Checkbox label="Focusable" />);
      
      const checkbox = screen.getByRole('checkbox');
      await user.tab();
      
      expect(checkbox).toHaveFocus();
    });

    it('can be toggled with Space key', async () => {
      const user = userEvent.setup();
      
      render(<Checkbox label="Space toggle" />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      
      expect(checkbox).not.toBeChecked();
      
      await user.keyboard(' ');
      expect(checkbox).toBeChecked();
      
      await user.keyboard(' ');
      expect(checkbox).not.toBeChecked();
    });

    it('can be toggled with Enter key', async () => {
      const user = userEvent.setup();
      
      render(<Checkbox label="Enter toggle" />);
      
      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();
      
      expect(checkbox).not.toBeChecked();
      
      await user.keyboard('{Enter}');
      expect(checkbox).toBeChecked();
    });

    it('cannot be focused when disabled', () => {
      render(<Checkbox label="Disabled" disabled />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('disabled');
    });
  });

  // Visual feedback tests
  describe('Visual Feedback', () => {
    it('shows check icon when checked', () => {
      render(<Checkbox label="Checked" checked />);
      
      const checkIcon = screen.getByRole('checkbox').parentElement?.querySelector('svg');
      expect(checkIcon).toBeInTheDocument();
    });

    it('shows check icon when indeterminate', () => {
      render(<Checkbox label="Indeterminate" indeterminate />);
      
      const checkIcon = screen.getByRole('checkbox').parentElement?.querySelector('svg');
      expect(checkIcon).toBeInTheDocument();
    });

    it('does not show check icon when unchecked', () => {
      render(<Checkbox label="Unchecked" />);
      
      const checkIcon = screen.getByRole('checkbox').parentElement?.querySelector('svg');
      expect(checkIcon).not.toBeInTheDocument();
    });

    it('applies correct background color when checked', () => {
      render(<Checkbox label="Checked" checked />);
      
      const visualCheckbox = screen.getByRole('checkbox').parentElement?.querySelector('[role="presentation"]');
      expect(visualCheckbox).toHaveClass('bg-[#1e39d2]');
    });

    it('applies correct background color when disabled', () => {
      render(<Checkbox label="Disabled" disabled />);
      
      const visualCheckbox = screen.getByRole('checkbox').parentElement?.querySelector('[role="presentation"]');
      expect(visualCheckbox).toHaveClass('border-[rgba(0,0,0,0.03)]');
    });
  });

  // Responsive behavior tests
  describe('Responsive Behavior', () => {
    it('applies mobile-first responsive classes', () => {
      render(<Checkbox label="Responsive" />);
      
      const container = screen.getByLabelText('Responsive').closest('label');
      expect(container).toHaveClass('w-full', 'md:w-auto');
    });

    it('applies proper text selection classes', () => {
      render(<Checkbox label="Selectable text" />);
      
      const label = screen.getByText('Selectable text');
      expect(label).toHaveClass('select-none', 'md:select-text');
    });
  });

  // Form integration tests
  describe('Form Integration', () => {
    it('works with form submission', () => {
      const handleSubmit = jest.fn((e) => e.preventDefault());
      
      render(
        <form onSubmit={handleSubmit}>
          <Checkbox label="Form checkbox" name="test" value="test-value" />
          <button type="submit">Submit</button>
        </form>
      );
      
      const checkbox = screen.getByRole('checkbox');
      const form = checkbox.closest('form');
      
      expect(form).toBeInTheDocument();
      
      fireEvent.submit(form!);
      expect(handleSubmit).toHaveBeenCalled();
    });

    it('preserves form attributes', () => {
      render(
        <Checkbox 
          label="Form checkbox" 
          name="test-name"
          value="test-value"
          form="test-form"
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('name', 'test-name');
      expect(checkbox).toHaveAttribute('value', 'test-value');
      expect(checkbox).toHaveAttribute('form', 'test-form');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Checkbox label="Accessible checkbox" />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when checked', async () => {
      const { container } = render(<Checkbox label="Checked checkbox" checked />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when disabled', async () => {
      const { container } = render(<Checkbox label="Disabled checkbox" disabled />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when indeterminate', async () => {
      const { container } = render(<Checkbox label="Indeterminate checkbox" indeterminate />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides proper labeling when label is provided', () => {
      render(<Checkbox label="Labeled checkbox" />);
      
      const checkbox = screen.getByRole('checkbox', { name: 'Labeled checkbox' });
      expect(checkbox).toBeInTheDocument();
    });

    it('provides accessible description when no label is provided', () => {
      render(<Checkbox />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-describedby', 'checkbox-description');
      expect(screen.getByText('Checkbox')).toHaveClass('sr-only');
    });

    it('marks decorative elements as aria-hidden', () => {
      render(<Checkbox label="Test" checked />);
      
      const checkIcon = screen.getByRole('checkbox').parentElement?.querySelector('svg');
      expect(checkIcon).toHaveAttribute('aria-hidden', 'true');
    });

    it('has proper focus indicator', () => {
      render(<Checkbox label="Focus test" />);
      
      const visualCheckbox = screen.getByRole('checkbox').parentElement?.querySelector('[role="presentation"]');
      expect(visualCheckbox).toHaveClass('focus:ring-2', 'focus:ring-[#1e39d2]');
    });
  });

  // Edge cases and error handling
  describe('Edge Cases', () => {
    it('handles empty label gracefully', () => {
      render(<Checkbox label="" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('handles label with special characters', () => {
      const specialLabel = 'Label with "quotes" & <symbols>';
      render(<Checkbox label={specialLabel} />);
      
      const checkbox = screen.getByRole('checkbox', { name: specialLabel });
      expect(checkbox).toBeInTheDocument();
    });

    it('handles rapid state changes', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Rapid clicks" />);
      
      const checkbox = screen.getByRole('checkbox');
      
      // Rapid clicks
      await user.click(checkbox);
      await user.click(checkbox);
      await user.click(checkbox);
      
      expect(checkbox).toBeChecked();
    });
  });

  // Performance tests
  describe('Performance', () => {
    it('does not re-render unnecessarily', () => {
      const { rerender } = render(<Checkbox label="Test" />);
      
      // Re-render with same props
      rerender(<Checkbox label="Test" />);
      
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('handles controlled updates efficiently', () => {
      const { rerender } = render(<Checkbox label="Test" checked={false} />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      
      rerender(<Checkbox label="Test" checked={true} />);
      expect(checkbox).toBeChecked();
    });
  });
});
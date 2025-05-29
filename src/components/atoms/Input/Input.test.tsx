import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Input } from './Input';

expect.extend(toHaveNoViolations);

describe('Input', () => {
  // Basic Rendering
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Input />);
      
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'Text');
    });

    it('renders with custom label', () => {
      render(<Input label="Email Address" />);
      
      expect(screen.getByText('Email Address')).toBeInTheDocument();
      expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    });

    it('renders with custom placeholder', () => {
      render(<Input placeholder="Enter your email" />);
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('placeholder', 'Enter your email');
    });

    it('can hide label when showLabel is false', () => {
      render(<Input label="Hidden Label" showLabel={false} />);
      
      expect(screen.queryByText('Hidden Label')).not.toBeInTheDocument();
    });
  });

  // States
  describe('States', () => {
    it('renders in default state', () => {
      render(<Input state="default" />);
      
      const input = screen.getByRole('textbox');
      expect(input).not.toBeDisabled();
      expect(input.parentElement).toHaveClass('border-[rgba(0,0,0,0.17)]');
    });

    it('renders in focused state', () => {
      render(<Input state="focused" />);
      
      const container = screen.getByRole('textbox').parentElement;
      expect(container).toHaveClass('border-[#1e39d2]');
    });

    it('renders in disabled state', () => {
      render(<Input disabled />);
      
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
      expect(input.parentElement).toHaveClass('bg-[rgba(0,0,0,0.04)]');
    });

    it('renders in error state when error prop is provided', () => {
      render(<Input error="Invalid input" />);
      
      const container = screen.getByRole('textbox').parentElement;
      expect(container).toHaveClass('border-[#da1e28]');
      expect(screen.getByText('Invalid input')).toBeInTheDocument();
    });
  });

  // Required Field
  describe('Required Field', () => {
    it('shows required indicator when required is true', () => {
      render(<Input label="Email" required />);
      
      expect(screen.getByText('*')).toBeInTheDocument();
      expect(screen.getByText('*')).toHaveClass('text-[#da1e28]');
    });

    it('does not show required indicator when required is false', () => {
      render(<Input label="Email" required={false} />);
      
      expect(screen.queryByText('*')).not.toBeInTheDocument();
    });
  });

  // Error Handling
  describe('Error Handling', () => {
    it('displays error message with warning icon', () => {
      render(<Input error="This field is required" />);
      
      expect(screen.getByText('This field is required')).toBeInTheDocument();
      
      // Check for warning icon SVG
      const errorIcon = screen.getByRole('textbox').parentElement?.parentElement?.querySelector('svg');
      expect(errorIcon).toBeInTheDocument();
    });

    it('overrides state to error when error prop is provided', () => {
      render(<Input state="focused" error="Error message" />);
      
      const container = screen.getByRole('textbox').parentElement;
      expect(container).toHaveClass('border-[#da1e28]');
    });

    it('does not show help text when error is present', () => {
      render(
        <Input 
          error="Error message" 
          helpText="Help text" 
          showHelpText 
        />
      );
      
      expect(screen.getByText('Error message')).toBeInTheDocument();
      expect(screen.queryByText('Help text')).not.toBeInTheDocument();
    });
  });

  // Help Text
  describe('Help Text', () => {
    it('shows help text when showHelpText is true', () => {
      render(<Input helpText="This is helpful" showHelpText />);
      
      expect(screen.getByText('This is helpful')).toBeInTheDocument();
    });

    it('does not show help text when showHelpText is false', () => {
      render(<Input helpText="This is helpful" showHelpText={false} />);
      
      expect(screen.queryByText('This is helpful')).not.toBeInTheDocument();
    });
  });

  // Icons
  describe('Icons', () => {
    it('renders left icon when provided', () => {
      const LeftIcon = () => <svg data-testid="left-icon" />;
      render(<Input leftIcon={<LeftIcon />} />);
      
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('renders right icon when provided', () => {
      const RightIcon = () => <svg data-testid="right-icon" />;
      render(<Input rightIcon={<RightIcon />} />);
      
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('renders both icons when provided', () => {
      const LeftIcon = () => <svg data-testid="left-icon" />;
      const RightIcon = () => <svg data-testid="right-icon" />;
      render(<Input leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />);
      
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });
  });

  // Prefix and Suffix
  describe('Prefix and Suffix', () => {
    it('renders prefix text', () => {
      render(<Input prefix="$" />);
      
      expect(screen.getByText('$')).toBeInTheDocument();
    });

    it('renders suffix text', () => {
      render(<Input suffix="USD" />);
      
      expect(screen.getByText('USD')).toBeInTheDocument();
    });

    it('renders both prefix and suffix', () => {
      render(<Input prefix="$" suffix="USD" />);
      
      expect(screen.getByText('$')).toBeInTheDocument();
      expect(screen.getByText('USD')).toBeInTheDocument();
    });
  });

  // Tooltip
  describe('Tooltip', () => {
    it('renders tooltip button when tooltip is true', () => {
      render(<Input label="Email" tooltip />);
      
      const tooltipButton = screen.getByRole('button', { name: 'More information' });
      expect(tooltipButton).toBeInTheDocument();
    });

    it('does not render tooltip when tooltip is false', () => {
      render(<Input label="Email" tooltip={false} />);
      
      expect(screen.queryByRole('button', { name: 'More information' })).not.toBeInTheDocument();
    });
  });

  // Checkbox
  describe('Checkbox', () => {
    it('renders checkbox when showCheckbox is true', () => {
      render(<Input showCheckbox checkboxLabel="Accept terms" />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      expect(screen.getByText('Accept terms')).toBeInTheDocument();
    });

    it('handles checkbox state changes', async () => {
      const user = userEvent.setup();
      const handleCheckboxChange = jest.fn();
      
      render(
        <Input 
          showCheckbox 
          checkboxLabel="Accept terms"
          onCheckboxChange={handleCheckboxChange}
        />
      );
      
      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);
      
      expect(handleCheckboxChange).toHaveBeenCalledWith(true);
    });

    it('renders checked checkbox when checkboxChecked is true', () => {
      render(<Input showCheckbox checkboxChecked />);
      
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });
  });

  // Spacer
  describe('Spacer', () => {
    it('renders spacer by default', () => {
      const { container } = render(<Input />);
      
      const spacer = container.querySelector('.h-3');
      expect(spacer).toBeInTheDocument();
    });

    it('does not render spacer when spacer is false', () => {
      const { container } = render(<Input spacer={false} />);
      
      const spacer = container.querySelector('.h-3');
      expect(spacer).not.toBeInTheDocument();
    });
  });

  // User Interactions
  describe('User Interactions', () => {
    it('handles input changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      
      render(<Input onChange={handleChange} />);
      
      const input = screen.getByRole('textbox');
      await user.type(input, 'test');
      
      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('test');
    });

    it('handles focus and blur events', async () => {
      const user = userEvent.setup();
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      
      render(<Input onFocus={handleFocus} onBlur={handleBlur} />);
      
      const input = screen.getByRole('textbox');
      
      await user.click(input);
      expect(handleFocus).toHaveBeenCalled();
      
      await user.tab();
      expect(handleBlur).toHaveBeenCalled();
    });
  });

  // Accessibility
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Input 
          label="Email Address" 
          placeholder="Enter your email"
          required
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with error state', async () => {
      const { container } = render(
        <Input 
          label="Email Address" 
          error="Invalid email address"
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('properly associates label with input', () => {
      render(<Input label="Email Address" id="email-input" />);
      
      const input = screen.getByRole('textbox');
      const label = screen.getByText('Email Address');
      
      expect(input).toHaveAttribute('id', 'email-input');
      expect(label).toHaveAttribute('for', 'email-input');
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      
      render(
        <div>
          <Input label="First Input" />
          <Input label="Second Input" />
        </div>
      );
      
      const firstInput = screen.getByLabelText('First Input');
      const secondInput = screen.getByLabelText('Second Input');
      
      await user.tab();
      expect(firstInput).toHaveFocus();
      
      await user.tab();
      expect(secondInput).toHaveFocus();
    });
  });

  // Forward Ref
  describe('Forward Ref', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      
      render(<Input ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current).toHaveAttribute('type', 'text');
    });
  });

  // Custom Props
  describe('Custom Props', () => {
    it('passes through HTML input attributes', () => {
      render(
        <Input 
          type="email"
          name="email"
          id="email-field"
          autoComplete="email"
          maxLength={50}
        />
      );
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
      expect(input).toHaveAttribute('name', 'email');
      expect(input).toHaveAttribute('id', 'email-field');
      expect(input).toHaveAttribute('autocomplete', 'email');
      expect(input).toHaveAttribute('maxlength', '50');
    });

    it('applies custom className', () => {
      const { container } = render(<Input className="custom-class" />);
      
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });
});
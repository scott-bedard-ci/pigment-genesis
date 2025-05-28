import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Dropdown, type DropdownOption } from './Dropdown';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample test data
const sampleOptions: DropdownOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

const optionsWithDisabled: DropdownOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2 (Disabled)', value: '2', disabled: true },
  { label: 'Option 3', value: '3' },
];

describe('Dropdown', () => {
  it('renders with default props', () => {
    render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
    
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument();
    expect(screen.getByText('Select option')).toBeInTheDocument();
  });

  it('displays custom placeholder text', () => {
    render(
      <Dropdown 
        options={sampleOptions} 
        placeholder="Choose an option..." 
        data-testid="dropdown" 
      />
    );
    
    expect(screen.getByText('Choose an option...')).toBeInTheDocument();
  });

  it('displays label when showLabel is true', () => {
    render(
      <Dropdown 
        options={sampleOptions} 
        label="Custom Label" 
        showLabel={true}
        data-testid="dropdown" 
      />
    );
    
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });

  it('hides label when showLabel is false', () => {
    render(
      <Dropdown 
        options={sampleOptions} 
        label="Custom Label" 
        showLabel={false}
        data-testid="dropdown" 
      />
    );
    
    expect(screen.queryByText('Custom Label')).not.toBeInTheDocument();
  });

  it('opens dropdown when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
    
    const trigger = screen.getByTestId('dropdown-trigger');
    await user.click(trigger);
    
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('displays all options when opened', async () => {
    const user = userEvent.setup();
    render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
    
    await user.click(screen.getByTestId('dropdown-trigger'));
    
    sampleOptions.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('closes dropdown when option is selected', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <Dropdown 
        options={sampleOptions} 
        onSelect={onSelect}
        data-testid="dropdown" 
      />
    );
    
    // Open dropdown
    await user.click(screen.getByTestId('dropdown-trigger'));
    
    // Select an option
    await user.click(screen.getByText('Option 2'));
    
    expect(onSelect).toHaveBeenCalledWith('2');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('displays selected option in trigger', () => {
    render(
      <Dropdown 
        options={sampleOptions} 
        value="3"
        data-testid="dropdown" 
      />
    );
    
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('handles disabled state correctly', () => {
    render(
      <Dropdown 
        options={sampleOptions} 
        disabled={true}
        data-testid="dropdown" 
      />
    );
    
    const trigger = screen.getByTestId('dropdown-trigger');
    expect(trigger).toBeDisabled();
  });

  it('skips disabled options during keyboard navigation', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown 
        options={optionsWithDisabled} 
        data-testid="dropdown" 
      />
    );
    
    // Open dropdown
    await user.click(screen.getByTestId('dropdown-trigger'));
    
    // Focus should skip disabled options
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}'); // Should skip disabled option 2
    await user.keyboard('{Enter}');
    
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('closes dropdown on Escape key', async () => {
    const user = userEvent.setup();
    render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
    
    // Open dropdown
    await user.click(screen.getByTestId('dropdown-trigger'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    // Press Escape
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Dropdown options={sampleOptions} data-testid="dropdown" />
        <button>Outside button</button>
      </div>
    );
    
    // Open dropdown
    await user.click(screen.getByTestId('dropdown-trigger'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    
    // Click outside
    await user.click(screen.getByText('Outside button'));
    
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('navigates options with arrow keys', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <Dropdown 
        options={sampleOptions} 
        onSelect={onSelect}
        data-testid="dropdown" 
      />
    );
    
    // Open dropdown
    await user.click(screen.getByTestId('dropdown-trigger'));
    
    // Navigate with arrows and select
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    
    expect(onSelect).toHaveBeenCalledWith('2');
  });

  it('displays error state correctly', () => {
    render(
      <Dropdown 
        options={sampleOptions} 
        error={true}
        errorMessage="This field is required"
        data-testid="dropdown" 
      />
    );
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('prevents disabled options from being selected', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <Dropdown 
        options={optionsWithDisabled} 
        onSelect={onSelect}
        data-testid="dropdown" 
      />
    );
    
    // Open dropdown
    await user.click(screen.getByTestId('dropdown-trigger'));
    
    // Try to click disabled option
    const disabledOption = screen.getByText('Option 2 (Disabled)');
    await user.click(disabledOption);
    
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('maintains focus management correctly', async () => {
    const user = userEvent.setup();
    render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
    
    const trigger = screen.getByTestId('dropdown-trigger');
    
    // Open dropdown
    await user.click(trigger);
    
    // Select option with Enter
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    
    // Focus should return to trigger
    expect(trigger).toHaveFocus();
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Dropdown 
          options={sampleOptions} 
          label="Accessible Dropdown"
          data-testid="dropdown" 
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
      
      const trigger = screen.getByTestId('dropdown-trigger');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('has proper ARIA attributes when expanded', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
      
      const trigger = screen.getByTestId('dropdown-trigger');
      await user.click(trigger);
      
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('has proper option roles and attributes', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown 
          options={sampleOptions} 
          value="2"
          data-testid="dropdown" 
        />
      );
      
      await user.click(screen.getByTestId('dropdown-trigger'));
      
      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(sampleOptions.length);
      
      // Check selected option has proper aria-selected
      const selectedOption = options.find(option => 
        option.querySelector('button')?.textContent === 'Option 2'
      );
      expect(selectedOption).toHaveAttribute('aria-selected', 'true');
    });

    it('supports keyboard navigation for accessibility', async () => {
      const user = userEvent.setup();
      render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
      
      const trigger = screen.getByTestId('dropdown-trigger');
      
      // Tab to focus dropdown
      await user.tab();
      expect(trigger).toHaveFocus();
      
      // Space to open
      await user.keyboard(' ');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      
      // Arrow navigation
      await user.keyboard('{ArrowDown}');
      await user.keyboard('{ArrowUp}');
      
      // Escape to close
      await user.keyboard('{Escape}');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(trigger).toHaveFocus();
    });
  });

  describe('Design Token Integration', () => {
    it('applies correct styling based on design tokens', () => {
      render(<Dropdown options={sampleOptions} data-testid="dropdown" />);
      
      const trigger = screen.getByTestId('dropdown-trigger');
      const computedStyle = window.getComputedStyle(trigger);
      
      // Check that styles are applied (basic check since jsdom has limitations)
      expect(trigger).toHaveStyle({
        fontFamily: expect.stringContaining('Sharp_Sans'),
      });
    });

    it('applies error styling when in error state', () => {
      render(
        <Dropdown 
          options={sampleOptions} 
          error={true}
          data-testid="dropdown" 
        />
      );
      
      const trigger = screen.getByTestId('dropdown-trigger');
      
      // Error border should be applied
      expect(trigger).toHaveStyle({
        borderColor: '#da1e28',
      });
    });
  });
});
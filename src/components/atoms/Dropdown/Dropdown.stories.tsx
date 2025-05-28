import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown, type DropdownProps } from './Dropdown';

// Sample options for stories
const sampleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' },
  { label: 'Option 8', value: '8' },
];

const optionsWithDisabled = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2 (Disabled)', value: '2', disabled: true },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4 (Disabled)', value: '4', disabled: true },
  { label: 'Option 5', value: '5' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Dropdown Component

A customizable dropdown component built with design tokens extracted from Figma. The dropdown component extends from the input field component and provides selection functionality with proper accessibility support.

## Features

- **Keyboard Navigation**: Arrow keys, Enter/Space to select, Escape to close
- **Accessibility**: ARIA labels, roles, and proper focus management
- **Error States**: Visual error styling with custom error messages
- **Disabled Options**: Support for disabled individual options
- **Design Token Integration**: Uses extracted Figma tokens for consistent styling
- **Responsive**: Works across desktop and mobile breakpoints
- **Touch Friendly**: Proper touch targets for mobile interaction

## Design System Integration

This component uses design tokens extracted directly from Figma:
- Colors: \`semanticColors.neutral.text.primary\`, \`semanticColors.interactive.icon.subtle\`, \`semanticColors.feedback.danger-bold\`
- Spacing: \`componentSpacing.dropdown.*\` for padding, heights, and gaps
- Typography: \`Sharp Sans Medium\` font family with consistent sizing
- Effects: Custom shadow value matching Figma specifications

## Usage Guidelines

- Use clear, descriptive option labels
- Provide appropriate placeholder text
- Include error states with helpful error messages
- Consider disabled states for unavailable options
- Ensure proper labeling for accessibility
        `,
      },
    },
  },
  argTypes: {
    options: {
      description: 'Array of options to display in the dropdown',
      control: { type: 'object' },
    },
    value: {
      description: 'Currently selected value',
      control: { type: 'text' },
    },
    placeholder: {
      description: 'Placeholder text when no option is selected',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Whether the dropdown is disabled',
      control: { type: 'boolean' },
    },
    error: {
      description: 'Whether to show error state',
      control: { type: 'boolean' },
    },
    errorMessage: {
      description: 'Error message to display',
      control: { type: 'text' },
    },
    label: {
      description: 'Label for the dropdown',
      control: { type: 'text' },
    },
    showLabel: {
      description: 'Whether to show the label',
      control: { type: 'boolean' },
    },
    onSelect: {
      description: 'Callback when an option is selected',
      action: 'selected',
    },
  },
  args: {
    options: sampleOptions,
    placeholder: 'Select option',
    label: 'Label',
    showLabel: true,
    disabled: false,
    error: false,
    errorMessage: 'Error text goes here',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Interactive wrapper for controlling state
const DropdownWithState = (args: DropdownProps) => {
  const [value, setValue] = useState<string>(args.value || '');
  
  return (
    <div style={{ maxWidth: '320px' }}>
      <Dropdown
        {...args}
        value={value}
        onSelect={(selectedValue) => {
          setValue(selectedValue);
          args.onSelect?.(selectedValue);
        }}
      />
    </div>
  );
};

/**
 * Default dropdown state with 8 options, matching Figma specifications.
 */
export const Default: Story = {
  render: DropdownWithState,
};

/**
 * Dropdown in expanded state showing all options. This matches the Figma frame
 * with expand=True state.
 */
export const Expanded: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>('');
    
    return (
      <div style={{ maxWidth: '320px', height: '300px' }}>
        <Dropdown
          {...args}
          value={value}
          onSelect={(selectedValue) => {
            setValue(selectedValue);
            args.onSelect?.(selectedValue);
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown shown in expanded state with all options visible. This demonstrates the dropdown menu styling with shadow and proper option spacing.',
      },
    },
  },
};

/**
 * Dropdown with a pre-selected value.
 */
export const WithSelectedValue: Story = {
  render: DropdownWithState,
  args: {
    value: '3',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with Option 3 pre-selected, showing how selected values are displayed.',
      },
    },
  },
};

/**
 * Dropdown in error state with error message.
 */
export const ErrorState: Story = {
  render: DropdownWithState,
  args: {
    error: true,
    errorMessage: 'Please select a valid option',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown in error state showing red border and error message with warning icon. Uses feedback.dangerBold and feedback.dangerAccessible design tokens.',
      },
    },
  },
};

/**
 * Dropdown in disabled state.
 */
export const Disabled: Story = {
  render: DropdownWithState,
  args: {
    disabled: true,
    value: '2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled dropdown that cannot be interacted with. Shows reduced opacity and disabled cursor.',
      },
    },
  },
};

/**
 * Dropdown with some disabled options.
 */
export const WithDisabledOptions: Story = {
  render: DropdownWithState,
  args: {
    options: optionsWithDisabled,
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with some options disabled. Disabled options cannot be selected and show reduced opacity.',
      },
    },
  },
};

/**
 * Dropdown without label.
 */
export const WithoutLabel: Story = {
  render: DropdownWithState,
  args: {
    showLabel: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown without a visible label. Useful for inline forms or when the label is provided by surrounding context.',
      },
    },
  },
};

/**
 * Dropdown with custom placeholder.
 */
export const CustomPlaceholder: Story = {
  render: DropdownWithState,
  args: {
    placeholder: 'Choose an option...',
    label: 'Select your preference',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with custom placeholder text and label.',
      },
    },
  },
};

/**
 * Playground for testing all dropdown states and interactions.
 */
export const Playground: Story = {
  render: () => {
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('3');
    const [value3, setValue3] = useState<string>('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '320px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>Default State</h3>
          <Dropdown
            options={sampleOptions}
            value={value1}
            onSelect={setValue1}
            placeholder="Select option"
            label="Label"
          />
        </div>
        
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>With Selection</h3>
          <Dropdown
            options={sampleOptions}
            value={value2}
            onSelect={setValue2}
            placeholder="Select option"
            label="Label"
          />
        </div>
        
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>Error State</h3>
          <Dropdown
            options={sampleOptions}
            value={value3}
            onSelect={setValue3}
            placeholder="Select option"
            label="Label"
            error={true}
            errorMessage="This field is required"
          />
        </div>
        
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>Disabled</h3>
          <Dropdown
            options={sampleOptions}
            value="2"
            placeholder="Select option"
            label="Label"
            disabled={true}
          />
        </div>
        
        <div>
          <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: '600' }}>With Disabled Options</h3>
          <Dropdown
            options={optionsWithDisabled}
            value=""
            onSelect={() => {}}
            placeholder="Select option"
            label="Label"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground showing all dropdown states: default, with selection, error, disabled, and with disabled options.',
      },
    },
  },
};
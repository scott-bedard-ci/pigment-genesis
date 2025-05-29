import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
// Note: Icon components to be created when full icon system is implemented

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Input Field Component

A dynamic input component that can be used in forms or general text areas. The Input component provides multiple states, variants, and configuration options to support different use cases.

## Features

- **Multiple States**: Default, focused, disabled, and error states
- **Flexible Configuration**: Optional label, help text, icons, prefix/suffix text
- **Validation Support**: Error state with warning icon and custom error messages
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation
- **Icon Support**: Left and right icon positions with customizable icons
- **Form Integration**: Works with form libraries and supports all standard input props

## Design Tokens

All styling uses design tokens extracted directly from Figma:
- Colors: Semantic color tokens for text, borders, and backgrounds
- Typography: Sharp Sans font family with proper sizing and weights
- Spacing: Consistent padding, margins, and gap values
- Border Radius: Field radius token for consistent corner rounding

## Usage Guidelines

### Do's
- Adjust the width manually to fit your experience
- Stack vertically and horizontally for form layouts
- Use clear, descriptive labels and placeholder text
- Provide helpful error messages and validation feedback

### Don'ts  
- Manually resize the height - use the component's built-in sizing
- Change font color - use the provided semantic color tokens
- Override spacing without consideration for the overall design system
        `
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'focused', 'disabled', 'error'],
      description: 'Visual state of the input field'
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the input'
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty'
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required (shows asterisk)'
    },
    tooltip: {
      control: 'boolean',
      description: 'Whether to show tooltip icon next to label'
    },
    error: {
      control: 'text',
      description: 'Error message to display below input'
    },
    helpText: {
      control: 'text',
      description: 'Help text to display below input'
    },
    showHelpText: {
      control: 'boolean',
      description: 'Whether to show help text'
    },
    prefix: {
      control: 'text',
      description: 'Text to display before input value'
    },
    suffix: {
      control: 'text',
      description: 'Text to display after input value'
    },
    spacer: {
      control: 'boolean',
      description: 'Whether to add spacing below for stacking inputs'
    },
    showCheckbox: {
      control: 'boolean',
      description: 'Whether to show checkbox below input'
    },
    checkboxLabel: {
      control: 'text',
      description: 'Label for the checkbox'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default story
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Text',
    showLabel: true,
    spacer: true
  }
};

// States
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input label="Default State" placeholder="Enter text here" />
      <Input label="Focused State" placeholder="Enter text here" state="focused" />
      <Input label="Disabled State" placeholder="Enter text here" disabled />
      <Input label="Error State" placeholder="Enter text here" error="Error text goes here" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available input states: default, focused, disabled, and error.'
      }
    }
  }
};

// Text Styles
export const TextStyles: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input label="Placeholder Style" placeholder="Text" />
      <Input label="Entered Style" placeholder="Text" defaultValue="Entered text" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between placeholder text style and entered text style.'
      }
    }
  }
};

// Label Variants
export const LabelVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input label="Regular Label" placeholder="Enter text here" />
      <Input label="Required Field" placeholder="Enter text here" required />
      <Input label="With Tooltip" placeholder="Enter text here" tooltip />
      <Input placeholder="No Label" showLabel={false} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different label configurations: regular, required field marker, tooltip icon, and no label.'
      }
    }
  }
};

// Icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        label="Left Icon" 
        placeholder="Search..." 
        leftIcon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>}
      />
      <Input 
        label="Right Icon" 
        placeholder="Username" 
        rightIcon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>}
      />
      <Input 
        label="Both Icons" 
        placeholder="Password" 
        leftIcon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>}
        rightIcon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields with left icons, right icons, or both. Icons help provide visual context for the input purpose.'
      }
    }
  }
};

// Prefix and Suffix
export const PrefixSuffix: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        label="With Prefix" 
        placeholder="99.00" 
        prefix="$"
      />
      <Input 
        label="With Suffix" 
        placeholder="99.00" 
        suffix="USD"
      />
      <Input 
        label="Prefix and Suffix" 
        placeholder="99.00" 
        prefix="$"
        suffix="USD"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields with prefix text (before input), suffix text (after input), or both. Useful for currency, units, or other contextual text.'
      }
    }
  }
};

// Help Text
export const WithHelpText: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        label="Email Address" 
        placeholder="user@example.com"
        helpText="We'll never share your email with anyone else"
        showHelpText
      />
      <Input 
        label="Password" 
        type="password"
        placeholder="Enter your password"
        helpText="Must be at least 8 characters long"
        showHelpText
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields with helpful descriptive text below. Help text provides additional context or instructions.'
      }
    }
  }
};

// Error State
export const ErrorStates: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        label="Email Address" 
        placeholder="user@example.com"
        error="Please enter a valid email address"
      />
      <Input 
        label="Password" 
        type="password"
        placeholder="Enter your password"
        error="Password must be at least 8 characters"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields in error state with validation messages. Error state includes red border and warning icon.'
      }
    }
  }
};

// With Checkbox
export const WithCheckbox: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <Input 
        label="Email Address" 
        placeholder="user@example.com"
        showCheckbox
        checkboxLabel="Subscribe to newsletter"
      />
      <Input 
        label="Terms Agreement" 
        placeholder="Enter your name"
        showCheckbox
        checkboxLabel="I agree to the terms and conditions"
        checkboxChecked
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields with optional checkbox below. Useful for opt-ins, agreements, or related boolean choices.'
      }
    }
  }
};

// Form Layout
export const FormLayout: Story = {
  render: () => (
    <div className="max-w-md space-y-0">
      <Input 
        label="First Name" 
        placeholder="Enter your first name"
        required
      />
      <Input 
        label="Last Name" 
        placeholder="Enter your last name"
        required
      />
      <Input 
        label="Email Address" 
        type="email"
        placeholder="user@example.com"
        required
        helpText="We'll use this to send you updates"
        showHelpText
        spacer={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of stacked input fields in a form layout. The spacer prop controls spacing between fields.'
      }
    }
  }
};

// Playground
export const Playground: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text here',
    showLabel: true,
    required: false,
    tooltip: false,
    helpText: 'This is helpful text',
    showHelpText: false,
    error: '',
    prefix: '',
    suffix: '',
    spacer: true,
    showCheckbox: false,
    checkboxLabel: 'Checkbox item',
    disabled: false,
    state: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all Input component props and configurations.'
      }
    }
  }
};
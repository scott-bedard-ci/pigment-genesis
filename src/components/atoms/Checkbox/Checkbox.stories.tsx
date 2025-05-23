import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Checkbox Component

Checkbox component has multiple variants that lets you switch the state of the checkbox. Selected vs enabled and even disabled state.

### Key Features
- **State Management**: Enabled, Selected, and Disabled states
- **Interactive**: Click to toggle state with proper visual feedback
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Touch-Friendly**: Proper touch targets for mobile devices
- **Design Token Based**: Uses CustomInk's exact specifications from Figma

### Usage Guidelines
- Use for binary choices (yes/no, on/off, selected/unselected)
- Always provide clear labels to indicate what the checkbox controls
- Group related checkboxes logically
- Consider using in forms for optional selections or agreement confirmations

### Technical Notes
- Supports controlled and uncontrolled usage patterns
- Includes indeterminate state for partial selections
- Proper focus management for keyboard navigation
- Built-in support for form integration
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
  },
  args: {
    label: 'Item',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories
export const Default: Story = {
  name: 'Default (Enabled)',
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Checkbox States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium mb-3">Enabled</h4>
            <Checkbox label="Item" />
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-medium mb-3">Selected</h4>
            <Checkbox label="Item" checked />
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-medium mb-3">Disabled</h4>
            <Checkbox label="Item" disabled />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three checkbox states: Enabled (default), Selected (checked), and Disabled (non-interactive).',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  name: 'Interactive Example',
  render: () => {
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    
    return (
      <div className="flex flex-col gap-8 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Interactive Checkbox</h3>
          <div className="space-y-4">
            <Checkbox 
              label="Main checkbox item"
              checked={checked}
              disabled={disabled}
              onCheckedChange={setChecked}
            />
            
            <div className="border-t pt-4 space-y-2">
              <h4 className="font-medium">Controls:</h4>
              <Checkbox 
                label="Disable checkbox"
                checked={disabled}
                onCheckedChange={setDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing checkbox state management and the effect of the disabled state.',
      },
    },
  },
};

export const IndeterminateState: Story = {
  name: 'Indeterminate State',
  render: () => {
    const [parentChecked, setParentChecked] = useState(false);
    const [childStates, setChildStates] = useState([false, false, false]);
    
    const checkedCount = childStates.filter(Boolean).length;
    const isIndeterminate = checkedCount > 0 && checkedCount < childStates.length;
    const isParentChecked = checkedCount === childStates.length;
    
    const handleParentChange = (checked: boolean) => {
      setChildStates(childStates.map(() => checked));
      setParentChecked(checked);
    };
    
    const handleChildChange = (index: number, checked: boolean) => {
      const newStates = [...childStates];
      newStates[index] = checked;
      setChildStates(newStates);
    };
    
    React.useEffect(() => {
      setParentChecked(isParentChecked);
    }, [isParentChecked]);
    
    return (
      <div className="flex flex-col gap-6 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Parent-Child Relationship</h3>
          <div className="space-y-3">
            <Checkbox
              label="Select all items"
              checked={isParentChecked}
              indeterminate={isIndeterminate}
              onCheckedChange={handleParentChange}
            />
            
            <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
              {childStates.map((checked, index) => (
                <Checkbox
                  key={index}
                  label={`Item ${index + 1}`}
                  checked={checked}
                  onCheckedChange={(checked) => handleChildChange(index, checked)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Note:</strong> The parent checkbox shows an indeterminate state when some (but not all) child items are selected.</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of indeterminate state for parent-child checkbox relationships.',
      },
    },
  },
};

export const FormIntegration: Story = {
  name: 'Form Integration',
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: false,
      terms: false,
      marketing: false,
    });
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Form submitted with: ${JSON.stringify(formData, null, 2)}`);
    };
    
    return (
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-lg font-semibold">Form Example</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div className="space-y-3">
            <Checkbox
              label="Subscribe to newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, newsletter: checked }))
              }
            />
            
            <Checkbox
              label="I agree to the terms and conditions"
              checked={formData.terms}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, terms: checked }))
              }
            />
            
            <Checkbox
              label="Receive marketing communications"
              checked={formData.marketing}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, marketing: checked }))
              }
            />
          </div>
          
          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-[#1e39d2] text-white rounded-md hover:bg-[#182ea8] disabled:opacity-50"
            disabled={!formData.terms}
          >
            Submit
          </button>
          
          {!formData.terms && (
            <p className="text-sm text-red-600">
              You must agree to the terms and conditions to submit.
            </p>
          )}
        </form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of checkbox integration in forms with validation.',
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  name: 'Responsive Behavior',
  render: () => (
    <div className="space-y-8">
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Mobile (&lt; 768px)</h4>
        <div className="max-w-sm border-2 border-dashed border-gray-300 p-4">
          <div className="space-y-2">
            <Checkbox label="Full width touch target" />
            <Checkbox label="Easy thumb interaction" />
          </div>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Desktop (≥ 768px)</h4>
        <div className="border-2 border-dashed border-gray-300 p-4">
          <div className="space-y-2">
            <Checkbox label="Compact desktop layout" />
            <Checkbox label="Mouse-optimized interaction" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior: Full-width touch targets on mobile, compact layout on desktop.',
      },
    },
  },
};

// Individual control stories
export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  name: 'Disabled + Checked',
  args: {
    disabled: true,
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const WithoutLabel: Story = {
  name: 'Without Label',
  args: {
    label: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox without visible label (still has screen reader accessible description).',
      },
    },
  },
};
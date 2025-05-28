import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

// Helper component for interactive checkboxes in stories
const InteractiveCheckbox = ({ initialChecked = false, ...props }: any) => {
  const [checked, setChecked] = useState(initialChecked);
  return <Checkbox {...props} checked={checked} onChange={setChecked} />;
};

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
# Checkbox Component

A pixel-perfect checkbox component built from Figma design specifications using extracted design tokens.

## Features

- ✅ **Figma-accurate measurements** - 18×18px checkbox with 2.75px border radius
- ✅ **Design token usage** - All colors and spacing from extracted Figma tokens
- ✅ **Interactive states** - Enabled, selected, disabled with proper styling
- ✅ **Accessibility** - Proper ARIA labels, keyboard navigation, screen reader support
- ✅ **Typography** - Sharp Sans Medium, 14px with 1.25 line height
- ✅ **Touch targets** - 32px minimum touch target for mobile

## Design Tokens Used

### Colors (Hybrid Approach - Semantic + Precise)
- \`semanticColors.interactive.background.bold\` (#1e39d2) - Selected checkbox background
- **Precise Figma value** rgba(0,0,0,0.74) - Default checkbox border (maintains exact opacity)
- **Precise Figma value** rgba(0,0,0,0.03) - Disabled checkbox border (very light)
- \`semanticColors.neutral.text.primary\` (rgba(0,0,0,0.86)) - Default label text
- \`semanticColors.interactive.text.disabled\` (rgba(0,0,0,0.41)) - Disabled label text
- \`semanticColors.neutral.icon.on-fill\` (#ffffff) - Checkmark color

### Spacing
- \`checkbox.size\` (18px) - Checkbox dimensions
- \`checkbox.containerHeight\` (32px) - Touch target height
- \`checkbox.labelGap\` (8px) - Gap between checkbox and label
- \`checkbox.borderRadius\` (2.75px) - Border radius

### Typography
- Font: Sharp Sans Medium
- Size: 14px
- Line height: 1.25
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when checkbox state changes',
    },
  },
  args: {
    label: 'Item',
    checked: false,
    disabled: false,
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default checkbox story with interactive state
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    label: 'Item',
    checked: false,
    disabled: false,
  },
};

// All states showcase with interactive state
export const AllStates: Story = {
  name: 'All States',
  render: () => {
    const [enabled, setEnabled] = useState(false);
    const [selected, setSelected] = useState(true);
    
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Interactive States</h3>
          <div className="space-y-2">
            <Checkbox label="Enabled (Default)" checked={enabled} disabled={false} onChange={setEnabled} />
            <Checkbox label="Selected" checked={selected} disabled={false} onChange={setSelected} />
            <Checkbox label="Disabled" checked={false} disabled={true} />
          </div>
        </div>
      </div>
    );
  },
};

// Selected state with interactive behavior
export const Selected: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    label: 'Item',
    checked: true,
    disabled: false,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: 'Item',
    checked: false,
    disabled: true,
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    showLabel: false,
  },
};

// Custom styling example
export const CustomStyling: Story = {
  args: {
    label: 'Custom styled checkbox',
    checked: false,
    disabled: false,
    containerClassName: 'p-4 bg-gray-50 rounded-lg',
    labelClassName: 'font-bold text-blue-600',
  },
};

// Responsive demo showing touch targets
export const ResponsiveDemo: Story = {
  name: 'Responsive Demo',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Touch Target Test</h3>
        <p className="text-sm text-gray-600 mb-4">
          Each checkbox has a 32px minimum touch target for mobile accessibility.
        </p>
        <div className="space-y-2">
          <InteractiveCheckbox label="Option 1" />
          <InteractiveCheckbox label="Option 2" initialChecked={true} />
          <Checkbox label="Option 3 (Disabled)" disabled={true} />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Grid Layout</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <InteractiveCheckbox label="Grid Item 1" />
          <InteractiveCheckbox label="Grid Item 2" initialChecked={true} />
          <InteractiveCheckbox label="Grid Item 3" />
          <Checkbox label="Grid Item 4" disabled={true} />
          <InteractiveCheckbox label="Grid Item 5" />
          <InteractiveCheckbox label="Grid Item 6" initialChecked={true} />
        </div>
      </div>
    </div>
  ),
};

// Interactive playground with state management
export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    label: 'Interactive Checkbox',
    checked: false,
    disabled: false,
  },
};

// Design token showcase
export const DesignTokens: Story = {
  name: 'Design Tokens Showcase',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Extracted from Figma</h3>
        <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
          <p className="text-green-800 text-sm">
            ✅ All design values extracted from Figma checkbox component frame
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Color Tokens</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#1e39d2] rounded"></div>
              <code>semanticColors.interactive.background.bold</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[rgba(0,0,0,0.74)] rounded"></div>
              <code>Precise Figma value (rgba(0,0,0,0.74))</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[rgba(0,0,0,0.03)] rounded"></div>
              <code>Precise Figma value (rgba(0,0,0,0.03))</code>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Spacing Tokens</h4>
          <div className="space-y-2 text-sm">
            <div><code>checkbox.size: 18px</code></div>
            <div><code>checkbox.containerHeight: 32px</code></div>
            <div><code>checkbox.labelGap: 8px</code></div>
            <div><code>checkbox.borderRadius: 2.75px</code></div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Live Examples</h4>
        <div className="space-y-2">
          <InteractiveCheckbox label="Default state" initialChecked={false} />
          <InteractiveCheckbox label="Selected state" initialChecked={true} />
          <Checkbox label="Disabled state" disabled={true} />
        </div>
      </div>
    </div>
  ),
};
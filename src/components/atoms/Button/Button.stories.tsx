import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from './Button';

// Helper component for interactive buttons in stories
const InteractiveButton = ({ onClick, ...props }: any) => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(prev => prev + 1);
    onClick?.(clickCount + 1);
  };
  return <Button {...props} onClick={handleClick} />;
};

// Sample icons for demonstration
const PlusIcon = ({ width = 24, height = 24, ...props }: any) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = ({ width = 24, height = 24, ...props }: any) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = ({ width = 24, height = 24, ...props }: any) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
# Button Component

A comprehensive button component built from Figma design specifications using extracted design tokens.

## Features

- ✅ **Figma-accurate measurements** - Exact padding, heights, and spacing from Figma
- ✅ **Design token usage** - All colors, typography, and spacing from extracted Figma tokens
- ✅ **Multiple variants** - Primary, Secondary, Tertiary, and Text-only styles
- ✅ **Three sizes** - Small (32px), Medium (40px), Large (48px) heights
- ✅ **Icon support** - Left, right, or icon-only positioning
- ✅ **Interactive states** - Hover, active, focus, disabled, and loading states
- ✅ **Accessibility** - Proper ARIA attributes, keyboard navigation, screen reader support
- ✅ **Loading states** - Built-in spinner animation
- ✅ **Typography** - Sharp Sans Semibold, exact font sizes and line heights

## Design Tokens Used

### Colors (Hybrid Approach - Semantic + Precise)
- \`semanticColors.interactive.background.bold\` (#1e39d2) - Primary button background  
- \`semanticColors.interactive.background.bold-hover\` (#182ea8) - Primary button hover
- \`semanticColors.interactive.background.bold-pressed\` (#132486) - Primary button pressed
- \`semanticColors.interactive.background.bold-disabled\` (rgba(0,0,0,0.18)) - Disabled background
- \`semanticColors.interactive.text.on-fill\` (#ffffff) - Button text on colored backgrounds
- \`semanticColors.interactive.text.disabled\` (rgba(0,0,0,0.41)) - Disabled text color
- \`semanticColors.partnership.background.bold\` (#fa3c00) - Tertiary button color
- \`semanticColors.interactive.text.default\` (#1e39d2) - Secondary button border/text
- \`semanticColors.neutral.background.primary\` (#ffffff) - Secondary button background
- **Precise Figma values** for hover states where semantic tokens differ from original design

### Spacing (Extracted from Figma)
- \`button.small.height\` (32px) - Small button height
- \`button.medium.height\` (40px) - Medium button height
- \`button.large.height\` (48px) - Large button height
- \`button.iconGap\` (8px) - Gap between icon and text
- \`button.minWidth\` (64px) - Minimum button width
- \`button.borderRadius\` (6px) - Border radius

### Typography (Extracted from Figma)
- Font: Sharp Sans Semibold (600 weight)
- Small: 12px / 16px line height
- Medium: 14px / 18px line height  
- Large: 16px / 20px line height
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'text'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'left', 'right', 'only'],
      description: 'Icon position relative to text',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'large',
    iconPosition: 'none',
    loading: false,
    disabled: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default button story with interactive behavior
export const Default: Story = {
  render: (args) => (
    <InteractiveButton {...args} />
  ),
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'large',
  },
};

// All variants showcase
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <InteractiveButton variant="primary">Primary</InteractiveButton>
          <InteractiveButton variant="secondary">Secondary</InteractiveButton>
          <InteractiveButton variant="tertiary">Tertiary</InteractiveButton>
          <InteractiveButton variant="text">Text Only</InteractiveButton>
        </div>
      </div>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
        <div className="flex flex-wrap items-end gap-4">
          <div className="text-center">
            <InteractiveButton variant="primary" size="small">Small</InteractiveButton>
            <p className="text-xs text-gray-600 mt-1">32px height</p>
          </div>
          <div className="text-center">
            <InteractiveButton variant="primary" size="medium">Medium</InteractiveButton>
            <p className="text-xs text-gray-600 mt-1">40px height</p>
          </div>
          <div className="text-center">
            <InteractiveButton variant="primary" size="large">Large</InteractiveButton>
            <p className="text-xs text-gray-600 mt-1">48px height</p>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-base font-medium mb-2">Usage Guidelines</h4>
        <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
          <p className="text-blue-800">
            <strong>Large (48px):</strong> Recommended for consumer-facing applications and primary CTAs<br/>
            <strong>Medium (40px):</strong> Standard form elements, internal applications<br/>
            <strong>Small (32px):</strong> Compact spaces, secondary actions
          </p>
        </div>
      </div>
    </div>
  ),
};

// Interactive states showcase
export const InteractiveStates: Story = {
  name: 'Interactive States',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button States</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <InteractiveButton variant="primary">Enabled</InteractiveButton>
            <p className="text-xs text-gray-600 mt-1">Default state</p>
          </div>
          <div className="text-center">
            <InteractiveButton variant="primary" className="hover:bg-[#182ea8]">Hover</InteractiveButton>
            <p className="text-xs text-gray-600 mt-1">Hover over me</p>
          </div>
          <div className="text-center">
            <InteractiveButton variant="primary" className="bg-[#132486]">Pressed</InteractiveButton>
            <p className="text-xs text-gray-600 mt-1">Active/pressed</p>
          </div>
          <div className="text-center">
            <Button variant="primary" disabled>Disabled</Button>
            <p className="text-xs text-gray-600 mt-1">Non-interactive</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Icon buttons showcase
export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Positions</h3>
        <div className="flex flex-wrap gap-4">
          <InteractiveButton variant="primary" icon={<PlusIcon />} iconPosition="left">
            Add Item
          </InteractiveButton>
          <InteractiveButton variant="primary" icon={<DownloadIcon />} iconPosition="right">
            Download
          </InteractiveButton>
          <InteractiveButton variant="primary" icon={<SearchIcon />} iconPosition="only" />
        </div>
      </div>
      
      <div>
        <h4 className="text-base font-medium mb-4">Icon Variants</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <InteractiveButton variant="primary" icon={<PlusIcon />} iconPosition="left" size="small">
            Small
          </InteractiveButton>
          <InteractiveButton variant="secondary" icon={<SearchIcon />} iconPosition="only" size="medium" />
          <InteractiveButton variant="tertiary" icon={<DownloadIcon />} iconPosition="right" size="large">
            Download
          </InteractiveButton>
          <InteractiveButton variant="text" icon={<PlusIcon />} iconPosition="left">
            Text with Icon
          </InteractiveButton>
        </div>
      </div>
    </div>
  ),
};

// Loading states showcase
export const LoadingStates: Story = {
  name: 'Loading States',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Loading States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" loading>Loading</Button>
          <Button variant="secondary" loading>Processing</Button>
          <Button variant="tertiary" loading>Saving</Button>
          <Button variant="primary" icon={<PlusIcon />} iconPosition="only" loading />
        </div>
      </div>
      
      <div>
        <h4 className="text-base font-medium mb-2">Loading Behavior</h4>
        <p className="text-sm text-gray-600">
          Loading buttons are automatically disabled and show a spinner animation.
          The loading state preserves button dimensions and text (when present).
        </p>
      </div>
    </div>
  ),
};

// Responsive demo
export const ResponsiveDemo: Story = {
  name: 'Responsive Demo',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Responsive Button Layout</h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <InteractiveButton variant="primary" fullWidth className="sm:w-auto">
              Primary Action
            </InteractiveButton>
            <InteractiveButton variant="secondary" fullWidth className="sm:w-auto">
              Secondary Action
            </InteractiveButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <InteractiveButton variant="primary" size="small">Action 1</InteractiveButton>
            <InteractiveButton variant="secondary" size="small">Action 2</InteractiveButton>
            <InteractiveButton variant="tertiary" size="small">Action 3</InteractiveButton>
            <InteractiveButton variant="text" size="small">Action 4</InteractiveButton>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-base font-medium mb-2">Touch Target Guidelines</h4>
        <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
          <p className="text-green-800">
            ✅ Large buttons (48px) meet minimum touch target requirements for mobile<br/>
            ✅ Medium and Small buttons should be used carefully on touch devices<br/>
            ✅ All buttons maintain proper spacing for easy interaction
          </p>
        </div>
      </div>
    </div>
  ),
};

// Design tokens showcase
export const DesignTokens: Story = {
  name: 'Design Tokens Showcase',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Extracted from Figma</h3>
        <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
          <p className="text-green-800 text-sm">
            ✅ All design values extracted from Figma button component frame (node-2949_3144)
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Color Tokens</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#1e39d2] rounded"></div>
              <code>interactive.background.bold</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#182ea8] rounded"></div>
              <code>interactive.background.boldHover</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#fa3c00] rounded"></div>
              <code>primitives.red.default</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#ffffff] border rounded"></div>
              <code>neutral.gray.000</code>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Spacing & Typography</h4>
          <div className="space-y-2 text-sm">
            <div><code>button.large.height: 48px</code></div>
            <div><code>button.medium.height: 40px</code></div>
            <div><code>button.small.height: 32px</code></div>
            <div><code>button.iconGap: 8px</code></div>
            <div><code>button.borderRadius: 6px</code></div>
            <div><code>fontWeight.semibold: 600</code></div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Live Examples</h4>
        <div className="space-y-2">
          <InteractiveButton variant="primary">Primary Button</InteractiveButton>
          <InteractiveButton variant="secondary">Secondary Button</InteractiveButton>
          <InteractiveButton variant="tertiary">Tertiary Button</InteractiveButton>
          <InteractiveButton variant="text">Text Button</InteractiveButton>
        </div>
      </div>
    </div>
  ),
};

// Interactive playground
export const Playground: Story = {
  render: (args) => (
    <div className="space-y-4">
      <InteractiveButton {...args} />
      <p className="text-sm text-gray-600">
        Use the controls panel to experiment with all button options.
        All styling comes from extracted Figma design tokens.
      </p>
    </div>
  ),
  args: {
    children: 'Interactive Button',
    variant: 'primary',
    size: 'large',
    iconPosition: 'none',
  },
};
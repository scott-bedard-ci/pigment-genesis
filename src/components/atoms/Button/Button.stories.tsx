import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Example icon component for demos
const ShirtAddIcon = () => (
  <svg width="24" height="20" viewBox="0 0 22 20" fill="none">
    <path
      d="M13.5 10C13.5 9.44771 13.9477 9 14.5 9C15.0523 9 15.5 9.44772 15.5 10V11.5H17C17.5523 11.5 18 11.9477 18 12.5C18 13.0523 17.5523 13.5 17 13.5H15.5V15C15.5 15.5523 15.0523 16 14.5 16C13.9477 16 13.5 15.5523 13.5 15V13.5H12C11.4477 13.5 11 13.0523 11 12.5C11 11.9477 11.4477 11.5 12 11.5H13.5V10Z"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M8 1C8 0.447715 7.55228 0 7 0H2C0.89543 0 0 0.89543 0 2V5C0 6.10457 0.89543 7 2 7H3V16C3 17.1046 3.89543 18 5 18H9.40093C10.7391 19.2412 12.5309 20 14.5 20C18.6421 20 22 16.6421 22 12.5C22 10.1208 20.8922 8.00039 19.1642 6.62639C19.6703 6.26349 20 5.67025 20 5V2C20 0.89543 19.1046 0 18 0H13C12.4477 0 12 0.447715 12 1C12 2.10457 11.1046 3 10 3C8.89543 3 8 2.10457 8 1ZM14.5 5C15.0705 5 15.6261 5.0637 16.1601 5.18437C16.4155 5.06604 16.7 5 17 5H18V2H13.874C13.4299 3.72523 11.8638 5 10 5C8.13616 5 6.57006 3.72523 6.12602 2H2V5H3C4.10457 5 5 5.89543 5 7V16H7.86505C7.31273 14.9551 7 13.7641 7 12.5C7 8.35786 10.3579 5 14.5 5ZM9 12.5C9 15.5376 11.4624 18 14.5 18C17.5376 18 20 15.5376 20 12.5C20 9.46243 17.5376 7 14.5 7C11.4624 7 9 9.46243 9 12.5Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Button Component

Button component has multiple variants that lets you switch variations to fit your design. 

### Key Features
- **Design Token Based**: Uses CustomInk's exact color specifications from Figma
- **Responsive**: Mobile-first design with proper touch targets (44px minimum)
- **Accessible**: WCAG 2.1 AA compliant with proper focus states and ARIA labels
- **Interactive States**: Enabled, Hover, Pressed, Disabled with proper visual feedback
- **Icon Support**: Left icon, right icon, text only, or icon only configurations
- **Loading State**: Built-in loading spinner with proper disabled interaction

### Usage Notes
- **Size Guidelines**: Currently we do not use medium in most consumer-facing experiences. Small may be used for internal applications, but consumer facing should all be Large.
- **State Variants**: Unless you are showing a prototype, state variants will not be used. The disabled component can be used to show when steps are not completed.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button (recommended: lg for consumer-facing)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and applies disabled styling',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner and disables interaction',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Display only icon without text',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories
export const Default: Story = {
  name: 'Default (Primary Large)',
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three button variants: Primary (default action), Secondary (secondary action), and Tertiary (destructive/warning actions).',
      },
    },
  },
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
        <div className="flex flex-wrap items-end gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          <strong>Note:</strong> Large is recommended for consumer-facing applications. 
          Medium and Small may be used for internal applications.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available sizes. Large (48px) is recommended for consumer-facing applications for better touch targets.',
      },
    },
  },
};

export const ButtonStates: Story = {
  name: 'Interactive States',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Button States</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Enabled</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          <strong>Note:</strong> Hover and pressed states are automatic on interaction. 
          Disabled state is used when actions are not available.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button states. Hover and pressed states are shown automatically on user interaction.',
      },
    },
  },
};

export const WithIcons: Story = {
  name: 'Icon Variations',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Configurations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Text Only</h4>
            <Button>Button</Button>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Icon Only</h4>
            <Button iconOnly leftIcon={<ShirtAddIcon />}>
              Add to cart
            </Button>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Left Icon</h4>
            <Button leftIcon={<ShirtAddIcon />}>Button</Button>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Right Icon</h4>
            <Button rightIcon={<ShirtAddIcon />}>Button</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different icon configurations. Icon-only buttons use the children prop as an accessible label.',
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
          <Button className="w-full">Full Width Button</Button>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Desktop (≥ 768px)</h4>
        <div className="border-2 border-dashed border-gray-300 p-4">
          <div className="flex gap-4">
            <Button>Auto Width</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior: Full width on mobile devices, auto width on desktop.',
      },
    },
  },
};

// Interactive examples
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <ShirtAddIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ShirtAddIcon />,
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    leftIcon: <ShirtAddIcon />,
    children: 'Add to cart',
  },
};
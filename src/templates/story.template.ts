// Storybook story template for consistent story creation
// This template provides a standard structure for all component stories

import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';
import { 
  createStoryMeta, 
  standardArgTypes, 
  generateStandardStories,
  createComponentStory
} from '@/utils/storybook';

// Component meta configuration
const meta: Meta<typeof ComponentName> = {
  ...createStoryMeta(
    'Atoms/ComponentName', // Update category based on atomic design level
    ComponentName,
    `
The ComponentName component is a fundamental building block of the Pigment Genesis design system. 
It demonstrates the consistent use of design tokens and responsive behavior across all components.

## Key Features
- **Design Token Integration**: All visual properties come from Figma design tokens
- **Responsive Design**: Adapts seamlessly from mobile to desktop
- **Accessibility**: Full keyboard navigation and screen reader support
- **Touch Friendly**: Meets minimum 44px touch target requirements
- **Loading States**: Built-in loading indication support

## Design Tokens Used
- \`tokens.colors.primary\` - Primary color palette
- \`tokens.spacing.md\` - Standard padding and margins
- \`tokens.typography.bodyMedium\` - Text styling
- \`tokens.effects.shadow.sm\` - Subtle elevation

## Responsive Behavior
- **Mobile (< 768px)**: Full width layout with optimized touch targets
- **Tablet (768px - 1024px)**: Balanced sizing with enhanced spacing
- **Desktop (> 1024px)**: Optimal desktop experience with hover states
    `
  ),
  argTypes: {
    ...standardArgTypes,
    // Component-specific argTypes
    customProp: {
      control: 'text',
      description: 'Custom property specific to this component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading state with spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when component is clicked'
    }
  },
  parameters: {
    docs: {
      story: {
        inline: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Generate standard stories automatically
const standardStories = generateStandardStories(ComponentName, {
  variants: ['primary', 'secondary', 'outline', 'ghost'],
  sizes: ['sm', 'md', 'lg'],
  hasResponsiveDemo: true,
  baseProps: {
    children: 'ComponentName'
  }
});

// Export standard stories
export const { Default, AllVariants, ResponsiveDemo, Accessibility } = standardStories;

// Custom stories specific to this component
export const WithCustomProp: Story = createComponentStory(ComponentName, {
  children: 'Custom Prop Example',
  customProp: 'example value',
  variant: 'primary'
});

export const LoadingState: Story = createComponentStory(ComponentName, {
  children: 'Loading...',
  loading: true,
  variant: 'primary'
});

export const DisabledState: Story = createComponentStory(ComponentName, {
  children: 'Disabled',
  disabled: true,
  variant: 'primary'
});

export const AllSizes: Story = {
  name: 'Size Variations',
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <ComponentName size="sm">Small</ComponentName>
      <ComponentName size="md">Medium</ComponentName>
      <ComponentName size="lg">Large</ComponentName>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all available size variants with consistent scaling.'
      }
    }
  }
};

export const InteractiveDemo: Story = {
  name: 'Interactive States',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Hover and Focus States</h3>
        <p className="text-sm text-neutral-600">
          Hover over components or use Tab to navigate and see state changes.
        </p>
        <div className="flex gap-4">
          <ComponentName variant="primary">Primary</ComponentName>
          <ComponentName variant="secondary">Secondary</ComponentName>
          <ComponentName variant="outline">Outline</ComponentName>
          <ComponentName variant="ghost">Ghost</ComponentName>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Special States</h3>
        <div className="flex gap-4">
          <ComponentName loading>Loading</ComponentName>
          <ComponentName disabled>Disabled</ComponentName>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of hover, focus, loading, and disabled states.'
      }
    }
  }
};

export const ResponsiveShowcase: Story = {
  name: 'Responsive Layout',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Mobile Layout (< 768px)</h3>
        <div className="max-w-sm border border-neutral-200 rounded-lg p-4">
          <div className="space-y-3">
            <ComponentName variant="primary" className="w-full">
              Full Width Button
            </ComponentName>
            <ComponentName variant="outline" className="w-full">
              Mobile Optimized
            </ComponentName>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Desktop Layout (> 768px)</h3>
        <div className="border border-neutral-200 rounded-lg p-6">
          <div className="flex gap-4">
            <ComponentName variant="primary">Desktop Button</ComponentName>
            <ComponentName variant="secondary">Secondary Action</ComponentName>
            <ComponentName variant="outline">Tertiary Action</ComponentName>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component adapts to different screen sizes and layouts.'
      }
    }
  }
};

export const DesignTokenDemo: Story = {
  name: 'Design Token Usage',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Color Tokens</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <ComponentName variant="primary" size="sm">Primary</ComponentName>
            <p className="text-xs text-neutral-600">tokens.colors.primary.500</p>
          </div>
          <div className="space-y-2">
            <ComponentName variant="secondary" size="sm">Secondary</ComponentName>
            <p className="text-xs text-neutral-600">tokens.colors.secondary.500</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Spacing Tokens</h3>
        <div className="space-y-2">
          <ComponentName size="sm">Small (tokens.spacing.sm)</ComponentName>
          <ComponentName size="md">Medium (tokens.spacing.md)</ComponentName>
          <ComponentName size="lg">Large (tokens.spacing.lg)</ComponentName>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates which design tokens are used for styling, enabling easy rebrand capability.'
      }
    }
  }
};
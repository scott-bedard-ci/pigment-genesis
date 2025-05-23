import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';
import { 
  createStoryMeta, 
  standardArgTypes, 
  generateStandardStories,
  mockActions
} from '../utils/storybook';

/**
 * ComponentName Storybook Stories
 * 
 * Comprehensive story collection showcasing all component variants,
 * responsive behavior, accessibility features, and usage examples.
 */

// Story metadata with enhanced documentation
const meta: Meta<typeof ComponentName> = {
  ...createStoryMeta('Atoms/ComponentName', ComponentName, {
    // Component-specific arg types
    content: {
      control: { type: 'text' },
      description: 'Text content to display in the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' }
      }
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Whether to show an icon',
      mapping: {
        true: <span>🎨</span>,
        false: undefined
      },
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' }
      }
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'left' }
      }
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the component is in a loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when component is clicked',
      table: {
        type: { summary: '(event: MouseEvent) => void' }
      }
    }
  }),
  
  // Enhanced parameters for better documentation
  parameters: {
    docs: {
      description: {
        component: `
## ComponentName Overview

The ComponentName component is a versatile, accessible UI element built with the Pigment-Genesis design system. It provides consistent styling, responsive behavior, and comprehensive accessibility support.

### Key Features

- **🎨 Design Token Based**: Uses Figma design tokens for consistent theming and instant rebrand capability
- **📱 Mobile-First Responsive**: Adapts seamlessly across all device sizes with touch-friendly interactions
- **♿ WCAG Compliant**: Full keyboard navigation, screen reader support, and proper ARIA attributes
- **🔧 Highly Customizable**: Multiple size and variant options with extensive customization support
- **⚡ Performance Optimized**: Lightweight with efficient rendering and minimal re-renders
- **🎭 Motion Aware**: Respects user motion preferences with appropriate animations

### Design Tokens Used

This component leverages the following design tokens:
- **Colors**: Primary, secondary, and semantic color palettes
- **Spacing**: Consistent padding and margin from the spacing scale
- **Typography**: Font sizes and weights from the typography system
- **Effects**: Shadows and elevation from the effects system
- **Breakpoints**: Responsive behavior using the breakpoint system

### Accessibility Features

- **Keyboard Navigation**: Full support for Tab, Enter, and Space key interactions
- **Screen Reader Support**: Proper ARIA labeling and semantic HTML structure
- **Focus Management**: Visible focus indicators and logical tab order
- **Touch Targets**: Minimum 44px touch targets for mobile accessibility
- **Motion Sensitivity**: Respects \`prefers-reduced-motion\` user preferences

### Usage Guidelines

#### Do's
- Use semantic variants (primary, secondary, success, warning, error) to convey meaning
- Provide clear, descriptive text for the component content
- Use appropriate sizes based on the component's importance and context
- Include proper loading states for async operations

#### Don'ts
- Don't use vague or generic text like "Click here" or "Button"
- Don't override design tokens with custom CSS unless absolutely necessary
- Don't create inaccessible color combinations that fail WCAG contrast requirements
- Don't use the component for non-interactive decorative purposes

### Related Components

- **ButtonGroup**: For grouping multiple related actions
- **IconButton**: For icon-only interactive elements
- **Link**: For navigation and external references
- **Badge**: For status indicators and labels

### Browser Support

This component supports all modern browsers including:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Considerations

- Component is lightweight (~2KB gzipped)
- Uses CSS-in-JS with optimal class generation
- Minimal JavaScript bundle impact
- Efficient re-rendering with React.memo optimizations
        `.trim()
      }
    },
    
    // Design tokens reference
    designTokens: {
      colors: ['primary-500', 'secondary-500', 'success-500', 'warning-500', 'error-500'],
      spacing: ['xs', 'sm', 'md', 'lg', 'xl'],
      typography: ['body-medium', 'label-medium'],
      effects: ['shadow-sm', 'shadow-md'],
      breakpoints: ['sm', 'md', 'lg']
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Generate standard stories with comprehensive examples
const standardStories = generateStandardStories(ComponentName, {
  defaultProps: { 
    content: 'Example Component',
    onClick: mockActions.onClick
  },
  variants: {
    size: ['sm', 'md', 'lg'],
    variant: ['primary', 'secondary', 'outline', 'ghost']
  },
  includeResponsive: true,
  includeAccessibility: true,
  includeInteractive: true
});

// Export all standard stories
export const { Default, Variants, Responsive, Accessibility, Interactive } = standardStories;

// Custom stories for specific use cases

/**
 * Loading States Story
 * Demonstrates the component in various loading states
 */
export const LoadingStates: Story = {
  name: 'Loading States',
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Loading States</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName content="Default" />
          <ComponentName content="Loading..." loading />
          <ComponentName content="With Icon" icon={<span>🎨</span>} loading />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Loading with Different Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <ComponentName size="sm" content="Small Loading" loading />
          <ComponentName size="md" content="Medium Loading" loading />
          <ComponentName size="lg" content="Large Loading" loading />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the loading states of the component. During loading, the component shows a spinner and becomes non-interactive while maintaining accessibility.'
      }
    }
  }
};

/**
 * With Icons Story
 * Shows the component with various icon configurations
 */
export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Positions</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName 
            content="Left Icon" 
            icon={<span>🎨</span>} 
            iconPosition="left" 
          />
          <ComponentName 
            content="Right Icon" 
            icon={<span>🎨</span>} 
            iconPosition="right" 
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Only (No Text)</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName 
            icon={<span>🎨</span>} 
            aria-label="Design tool"
            className="px-3"
          />
          <ComponentName 
            icon={<span>⚙️</span>} 
            aria-label="Settings"
            variant="secondary"
            className="px-3"
          />
          <ComponentName 
            icon={<span>❤️</span>} 
            aria-label="Favorite"
            variant="outline"
            className="px-3"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Icons with Different Variants</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="primary" content="Primary" icon={<span>🎨</span>} />
          <ComponentName variant="secondary" content="Secondary" icon={<span>🎨</span>} />
          <ComponentName variant="success" content="Success" icon={<span>✅</span>} />
          <ComponentName variant="warning" content="Warning" icon={<span>⚠️</span>} />
          <ComponentName variant="error" content="Error" icon={<span>❌</span>} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases the component with various icon configurations. Icons can be positioned on the left or right of text, or used alone. Always provide proper aria-label attributes for icon-only components.'
      }
    }
  }
};

/**
 * Semantic Variants Story
 * Demonstrates semantic meaning through component variants
 */
export const SemanticVariants: Story = {
  name: 'Semantic Variants',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Action Types</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="primary" content="Primary Action" />
          <ComponentName variant="secondary" content="Secondary Action" />
          <ComponentName variant="outline" content="Tertiary Action" />
          <ComponentName variant="ghost" content="Subtle Action" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Status Actions</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="success" content="Confirm" icon={<span>✅</span>} />
          <ComponentName variant="warning" content="Warning" icon={<span>⚠️</span>} />
          <ComponentName variant="error" content="Delete" icon={<span>🗑️</span>} />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled States</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="primary" content="Disabled Primary" disabled />
          <ComponentName variant="secondary" content="Disabled Secondary" disabled />
          <ComponentName variant="outline" content="Disabled Outline" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to use semantic variants to convey meaning and hierarchy. Use primary for main actions, secondary for supporting actions, and semantic colors (success, warning, error) for status-specific actions.'
      }
    }
  }
};

/**
 * Real World Examples Story
 * Shows practical usage examples in common UI patterns
 */
export const RealWorldExamples: Story = {
  name: 'Real World Examples',
  render: () => (
    <div className="space-y-8">
      {/* Form Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Form Actions</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="primary" content="Save Changes" />
          <ComponentName variant="outline" content="Cancel" />
          <ComponentName variant="ghost" content="Reset Form" />
        </div>
      </div>
      
      {/* Card Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Actions</h3>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-lg font-medium mb-2">Product Card</h4>
          <p className="text-gray-600 mb-4">Product description goes here...</p>
          <div className="flex gap-3">
            <ComponentName variant="primary" content="Add to Cart" size="sm" />
            <ComponentName variant="outline" content="Details" size="sm" />
            <ComponentName variant="ghost" icon={<span>❤️</span>} size="sm" aria-label="Add to favorites" />
          </div>
        </div>
      </div>
      
      {/* Navigation Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Navigation Actions</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="outline" content="← Previous" />
          <ComponentName variant="primary" content="Next →" />
          <ComponentName variant="ghost" content="Skip" />
        </div>
      </div>
      
      {/* Status Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Status Actions</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="success" content="Approve" icon={<span>✅</span>} />
          <ComponentName variant="warning" content="Review" icon={<span>⚠️</span>} />
          <ComponentName variant="error" content="Reject" icon={<span>❌</span>} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story shows real-world usage examples of the component in common UI patterns like forms, cards, navigation, and status actions. These examples demonstrate proper hierarchy and semantic meaning.'
      }
    }
  }
};

/**
 * Edge Cases Story
 * Tests the component behavior in edge cases and unusual scenarios
 */
export const EdgeCases: Story = {
  name: 'Edge Cases',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Long Content</h3>
        <div className="max-w-md space-y-4">
          <ComponentName content="This is a very long text that should be handled gracefully by the component" />
          <ComponentName 
            content="This is an extremely long text that definitely exceeds the normal expected length for this type of component and should demonstrate how text truncation works"
            size="sm" 
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Empty States</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName content="" />
          <ComponentName icon={<span>🎨</span>} />
          <ComponentName>{/* No content */}</ComponentName>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Multiple States Combined</h3>
        <div className="flex flex-wrap gap-4">
          <ComponentName 
            content="Loading with Icon" 
            icon={<span>🎨</span>} 
            loading 
            size="lg" 
          />
          <ComponentName 
            content="Disabled with Icon" 
            icon={<span>⚙️</span>} 
            disabled 
            variant="secondary" 
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story tests edge cases and unusual scenarios to ensure the component handles them gracefully. It includes long content, empty states, and multiple combined states.'
      }
    }
  }
};
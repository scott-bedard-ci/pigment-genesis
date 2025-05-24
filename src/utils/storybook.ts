// Shared Storybook utilities for consistent story creation across components
// This module provides reusable patterns for Storybook stories and documentation

import type { Meta, StoryObj } from '@storybook/react';

/**
 * Creates standardized Storybook meta configuration for components
 * 
 * @param title - Story title (e.g., 'Atoms/Button')
 * @param component - React component
 * @param description - Optional component description
 * @returns Meta configuration object
 */
export const createStoryMeta = <T extends React.ComponentType<any>>(
  title: string,
  component: T,
  description?: string
): Meta<T> => ({
  title,
  component,
  parameters: {
    docs: {
      description: {
        component: description || generateComponentDocs(component.displayName || component.name)
      }
    },
    layout: 'padded'
  },
  tags: ['autodocs']
});

/**
 * Generates component documentation based on component name
 * This creates consistent documentation patterns across all components
 */
export const generateComponentDocs = (componentName: string): string => {
  return `
The ${componentName} component is part of the Pigment Genesis design system. It follows atomic design principles and uses design tokens for consistent styling across all implementations.

## Features
- **Responsive Design**: Adapts seamlessly across all screen sizes
- **Accessibility**: Meets WCAG guidelines with proper ARIA support
- **Design Tokens**: Uses Figma-extracted tokens for instant rebrand capability
- **Touch Friendly**: Meets minimum touch target requirements (44px)
- **Keyboard Navigation**: Full keyboard accessibility support

## Design Tokens
All visual properties come directly from Figma design tokens:
- Colors from \`tokens.colors\`
- Spacing from \`tokens.spacing\`
- Typography from \`tokens.typography\`
- Effects from \`tokens.effects\`

## Responsive Behavior
The component is built with mobile-first responsive design:
- **Mobile (default)**: Optimized for touch interaction
- **Tablet (768px+)**: Enhanced spacing and sizing
- **Desktop (1024px+)**: Full desktop experience
  `;
};

/**
 * Standard argTypes for common component props
 * These provide consistent controls across all component stories
 */
export const standardArgTypes = {
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
    description: 'Size variant affecting padding, font size, and overall scale',
    table: {
      type: { summary: "'sm' | 'md' | 'lg'" },
      defaultValue: { summary: 'md' }
    }
  },
  variant: {
    control: 'select', 
    options: ['primary', 'secondary', 'outline', 'ghost'],
    description: 'Visual variant determining color scheme and styling',
    table: {
      type: { summary: "'primary' | 'secondary' | 'outline' | 'ghost'" },
      defaultValue: { summary: 'primary' }
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Disables the component and applies disabled styling',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false }
    }
  },
  className: {
    control: 'text',
    description: 'Additional CSS classes to apply to the component',
    table: {
      type: { summary: 'string' }
    }
  },
  children: {
    control: 'text',
    description: 'Content to display inside the component',
    table: {
      type: { summary: 'React.ReactNode' }
    }
  }
} as const;

/**
 * Creates responsive demo stories that showcase mobile, tablet, and desktop layouts
 */
export const createResponsiveDemo = <T extends React.ComponentType<any>>(
  Component: T,
  props: Record<string, any> = {}
) => ({
  name: 'Responsive Demo',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Mobile (375px)</h3>
        <div className="w-[375px] border border-neutral-200 rounded-lg p-4">
          <Component {...props} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Tablet (768px)</h3>
        <div className="w-[768px] border border-neutral-200 rounded-lg p-6">
          <Component {...props} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Desktop (1024px+)</h3>
        <div className="w-full border border-neutral-200 rounded-lg p-8">
          <Component {...props} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how the component adapts across different screen sizes, showcasing the responsive design implementation.'
      }
    }
  }
});

/**
 * Creates a comprehensive variants showcase story
 */
export const createVariantsDemo = <T extends React.ComponentType<any>>(
  Component: T,
  variants: string[],
  sizes: string[] = ['sm', 'md', 'lg'],
  baseProps: Record<string, any> = {}
) => ({
  name: 'All Variants',
  render: () => (
    <div className="space-y-8">
      {variants.map(variant => (
        <div key={variant} className="space-y-4">
          <h3 className="text-lg font-medium capitalize">{variant} Variant</h3>
          <div className="flex flex-wrap gap-4">
            {sizes.map(size => (
              <div key={size} className="space-y-2">
                <Component
                  {...baseProps}
                  variant={variant}
                  size={size}
                />
                <p className="text-sm text-neutral-600">{size}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all available variants and sizes, demonstrating the full range of styling options.'
      }
    }
  }
});

/**
 * Creates accessibility demo stories that show focus states and keyboard navigation
 */
export const createAccessibilityDemo = <T extends React.ComponentType<any>>(
  Component: T,
  props: Record<string, any> = {}
) => ({
  name: 'Accessibility Features',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Focus States</h3>
        <p className="text-sm text-neutral-600">
          Click in this area and use Tab to navigate between components to see focus indicators.
        </p>
        <div className="flex gap-4 p-4 border border-neutral-200 rounded-lg">
          <Component {...props} />
          <Component {...props} />
          <Component {...props} />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Disabled State</h3>
        <Component {...props} disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates accessibility features including focus states, keyboard navigation, and disabled states.'
      }
    }
  }
});

/**
 * Auto-generates standard stories for a component
 */
export const generateStandardStories = <T extends React.ComponentType<any>>(
  Component: T,
  options: {
    variants?: string[];
    sizes?: string[];
    hasIcons?: boolean;
    hasResponsiveDemo?: boolean;
    baseProps?: Record<string, any>;
  } = {}
) => {
  const {
    variants = ['primary', 'secondary', 'outline'],
    sizes = ['sm', 'md', 'lg'],
    hasResponsiveDemo = true,
    baseProps = {}
  } = options;

  const stories: Record<string, any> = {
    Default: {
      args: {
        ...baseProps
      }
    },
    
    AllVariants: createVariantsDemo(Component, variants, sizes, baseProps),
    
    Accessibility: createAccessibilityDemo(Component, baseProps)
  };

  if (hasResponsiveDemo) {
    stories.ResponsiveDemo = createResponsiveDemo(Component, baseProps);
  }

  return stories;
};

// Template for creating component-specific stories
export const createComponentStory = <T extends React.ComponentType<any>>(
  Component: T,
  args: Record<string, any> = {}
): StoryObj<T> => ({
  render: (args) => <Component {...args} />,
  args
});
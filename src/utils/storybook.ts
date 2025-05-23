import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { fn } from '@storybook/test';

/**
 * Storybook utilities for consistent story creation across components
 * Provides DRY patterns for component documentation and testing
 */

/**
 * Standard arg types used across all interactive components
 * Ensures consistent control definitions
 */
export const standardArgTypes: ArgTypes = {
  size: {
    control: { type: 'select' },
    options: ['sm', 'md', 'lg'],
    description: 'Size variant affecting padding and font size',
    table: {
      type: { summary: 'sm | md | lg' },
      defaultValue: { summary: 'md' }
    }
  },
  variant: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'outline', 'ghost'],
    description: 'Visual variant of the component',
    table: {
      type: { summary: 'primary | secondary | outline | ghost' },
      defaultValue: { summary: 'primary' }
    }
  },
  disabled: {
    control: { type: 'boolean' },
    description: 'Disables the component and applies disabled styling',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  className: {
    control: { type: 'text' },
    description: 'Additional CSS classes to apply',
    table: {
      type: { summary: 'string' }
    }
  },
  'data-testid': {
    control: { type: 'text' },
    description: 'Test identifier for automated testing',
    table: {
      type: { summary: 'string' }
    }
  }
};

/**
 * Semantic color variant arg types for components with color states
 */
export const semanticArgTypes: ArgTypes = {
  variant: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'success', 'warning', 'error', 'outline', 'ghost'],
    description: 'Visual variant including semantic colors',
    table: {
      type: { summary: 'primary | secondary | success | warning | error | outline | ghost' },
      defaultValue: { summary: 'primary' }
    }
  }
};

/**
 * Input-specific arg types for form components
 */
export const inputArgTypes: ArgTypes = {
  ...standardArgTypes,
  placeholder: {
    control: { type: 'text' },
    description: 'Placeholder text displayed when input is empty',
    table: {
      type: { summary: 'string' }
    }
  },
  label: {
    control: { type: 'text' },
    description: 'Label text for the input field',
    table: {
      type: { summary: 'string' }
    }
  },
  helperText: {
    control: { type: 'text' },
    description: 'Helper text displayed below the input',
    table: {
      type: { summary: 'string' }
    }
  },
  error: {
    control: { type: 'text' },
    description: 'Error message to display',
    table: {
      type: { summary: 'string' }
    }
  },
  required: {
    control: { type: 'boolean' },
    description: 'Whether the input is required',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  }
};

/**
 * Creates standard meta configuration for component stories
 * 
 * @param title - Story title (e.g., 'Atoms/Button')
 * @param component - React component
 * @param argTypes - Additional arg types specific to the component
 * @returns Meta configuration object
 * 
 * @example
 * ```tsx
 * const meta: Meta<typeof Button> = createStoryMeta('Atoms/Button', Button, {
 *   onClick: { action: 'clicked' }
 * });
 * ```
 */
export const createStoryMeta = <T extends Record<string, any>>(
  title: string,
  component: T,
  argTypes?: ArgTypes
): Meta<T> => ({
  title,
  component,
  parameters: {
    docs: {
      description: {
        component: `
## Component Overview

This component is part of the Pigment-Genesis design system. It follows atomic design principles and is built with accessibility and responsive design in mind.

### Key Features
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop
- **Accessibility**: Full keyboard navigation and screen reader support
- **Design Tokens**: Uses Figma design tokens for consistent theming
- **Touch Friendly**: Meets minimum touch target requirements (44px)

### Usage Guidelines
- Use semantic HTML elements when possible
- Ensure proper ARIA labeling for screen readers
- Test keyboard navigation flows
- Validate color contrast ratios
- Test on actual mobile devices when possible
        `.trim()
      }
    },
    viewport: {
      defaultViewport: 'responsive'
    },
    backgrounds: {
      default: 'light'
    }
  },
  argTypes: {
    ...standardArgTypes,
    ...argTypes
  },
  tags: ['autodocs']
});

/**
 * Creates responsive demo stories for components
 * Shows how components adapt across different screen sizes
 * 
 * @param component - React component
 * @param props - Default props for the component
 * @returns Story configuration with responsive viewports
 * 
 * @example
 * ```tsx
 * export const ResponsiveDemo = createResponsiveStory(Button, {
 *   children: 'Button Text'
 * });
 * ```
 */
export const createResponsiveStory = <T extends Record<string, any>>(
  component: T,
  props: Partial<T>
): StoryObj<T> => ({
  render: (args) => {
    const Component = component;
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Mobile (375px)</h3>
          <div className="w-[375px] border border-gray-200 p-4 bg-white rounded-lg">
            <Component {...props} {...args} />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Tablet (768px)</h3>
          <div className="w-[768px] border border-gray-200 p-4 bg-white rounded-lg">
            <Component {...props} {...args} />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Desktop (1024px)</h3>
          <div className="w-[1024px] border border-gray-200 p-4 bg-white rounded-lg">
            <Component {...props} {...args} />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'reset'
    },
    docs: {
      description: {
        story: 'This story demonstrates how the component responds to different screen sizes. The component should maintain usability and visual hierarchy across all breakpoints.'
      }
    }
  }
});

/**
 * Creates variant showcase stories that display all component variants
 * 
 * @param component - React component
 * @param variants - Object with variant options
 * @param baseProps - Base props to apply to all variants
 * @returns Story configuration showing all variants
 * 
 * @example
 * ```tsx
 * export const AllVariants = createVariantStory(Button, {
 *   size: ['sm', 'md', 'lg'],
 *   variant: ['primary', 'secondary', 'outline']
 * }, { children: 'Button' });
 * ```
 */
export const createVariantStory = <T extends Record<string, any>>(
  component: T,
  variants: Record<string, any[]>,
  baseProps: Partial<T> = {}
): StoryObj<T> => ({
  render: () => {
    const Component = component;
    const variantKeys = Object.keys(variants);
    
    return (
      <div className="space-y-8">
        {variantKeys.map(variantKey => (
          <div key={variantKey}>
            <h3 className="text-lg font-semibold mb-4 capitalize">
              {variantKey} Variants
            </h3>
            <div className="flex flex-wrap gap-4">
              {variants[variantKey].map(variantValue => (
                <div key={variantValue} className="space-y-2">
                  <Component
                    {...baseProps}
                    {...{ [variantKey]: variantValue }}
                  />
                  <p className="text-sm text-gray-600 text-center">
                    {variantValue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story showcases all available variants of the component. Use these examples to understand the visual differences between variants and choose the appropriate one for your use case.'
      }
    }
  }
});

/**
 * Creates accessibility demo stories with focus and keyboard navigation examples
 * 
 * @param component - React component
 * @param props - Default props for the component
 * @returns Story configuration with accessibility demonstrations
 */
export const createAccessibilityStory = <T extends Record<string, any>>(
  component: T,
  props: Partial<T>
): StoryObj<T> => ({
  render: (args) => {
    const Component = component;
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Keyboard Navigation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Use Tab to navigate between components. Press Enter or Space to activate.
          </p>
          <div className="space-y-4">
            <Component {...props} {...args} />
            <Component {...props} {...args} />
            <Component {...props} {...args} />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Focus States</h3>
          <p className="text-sm text-gray-600 mb-4">
            Components show clear focus indicators for keyboard users.
          </p>
          <div className="space-y-4">
            <Component {...props} {...args} className="focus:ring-2" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Screen Reader Support</h3>
          <p className="text-sm text-gray-600 mb-4">
            Components include proper ARIA labels and semantic HTML for screen readers.
          </p>
          <Component {...props} {...args} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the accessibility features of the component, including keyboard navigation, focus management, and screen reader support.'
      }
    }
  }
});

/**
 * Creates a complete set of standard stories for a component
 * Reduces boilerplate by generating common story patterns
 * 
 * @param component - React component
 * @param config - Configuration for story generation
 * @returns Object with all standard stories
 * 
 * @example
 * ```tsx
 * const stories = generateStandardStories(Button, {
 *   defaultProps: { children: 'Button' },
 *   variants: {
 *     size: ['sm', 'md', 'lg'],
 *     variant: ['primary', 'secondary']
 *   },
 *   includeResponsive: true,
 *   includeAccessibility: true
 * });
 * 
 * export const { Default, Variants, Responsive, Accessibility } = stories;
 * ```
 */
export const generateStandardStories = <T extends Record<string, any>>(
  component: T,
  config: {
    defaultProps?: Partial<T>;
    variants?: Record<string, any[]>;
    includeResponsive?: boolean;
    includeAccessibility?: boolean;
    includeInteractive?: boolean;
  }
) => {
  const {
    defaultProps = {},
    variants = {},
    includeResponsive = true,
    includeAccessibility = true,
    includeInteractive = true
  } = config;

  const stories: Record<string, StoryObj<T>> = {
    // Default story
    Default: {
      args: defaultProps
    }
  };

  // Add variant stories if variants are provided
  if (Object.keys(variants).length > 0) {
    stories.Variants = createVariantStory(component, variants, defaultProps);
  }

  // Add responsive story if requested
  if (includeResponsive) {
    stories.Responsive = createResponsiveStory(component, defaultProps);
  }

  // Add accessibility story if requested
  if (includeAccessibility) {
    stories.Accessibility = createAccessibilityStory(component, defaultProps);
  }

  // Add interactive story with actions if requested
  if (includeInteractive) {
    stories.Interactive = {
      args: {
        ...defaultProps,
        onClick: fn(),
        onFocus: fn(),
        onBlur: fn()
      },
      parameters: {
        docs: {
          description: {
            story: 'This story demonstrates interactive behaviors with action logging. Check the Actions panel to see event details.'
          }
        }
      }
    };
  }

  return stories;
};

/**
 * Mock action functions for interactive components
 * Provides consistent action patterns across stories
 */
export const mockActions = {
  onClick: fn(),
  onSubmit: fn(),
  onChange: fn(),
  onFocus: fn(),
  onBlur: fn(),
  onKeyDown: fn(),
  onMouseEnter: fn(),
  onMouseLeave: fn()
};

/**
 * Common parameters for stories with specific requirements
 */
export const storyParameters = {
  docs: {
    canvas: {
      sourceState: 'shown'
    }
  },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal }
  }
};

export default {
  standardArgTypes,
  semanticArgTypes,
  inputArgTypes,
  createStoryMeta,
  createResponsiveStory,
  createVariantStory,
  createAccessibilityStory,
  generateStandardStories,
  mockActions,
  storyParameters
};
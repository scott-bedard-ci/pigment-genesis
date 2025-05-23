import type { Preview } from '@storybook/react';
import React from 'react';
import { themes } from '@storybook/theming';
import './styles.css'; // Import our Tailwind styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.light,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
        {
          name: 'gray-50',
          value: '#f9fafb',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        desktopLarge: {
          name: 'Desktop Large',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    // Accessibility addon configuration
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
      manual: true,
    },
  },
  // Global decorators for responsive testing
  decorators: [
    (Story) => {
      return React.createElement('div', 
        { className: 'p-4 min-h-screen bg-white' },
        React.createElement(Story)
      );
    },
  ],
  // Global arg types for consistent controls
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant affecting padding and font size',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual variant of the component',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the component and applies disabled styling',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply',
    },
  },
  // Tags for auto-generated docs
  tags: ['autodocs'],
};

export default preview;
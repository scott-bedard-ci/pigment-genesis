import type { Meta, StoryObj } from '@storybook/react';

const Welcome = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">
      🎨 Pigment-Genesis Design System
    </h1>
    <p className="text-lg text-gray-600 mb-8">
      Welcome to CustomInk's comprehensive design system built with React, TypeScript, and Tailwind CSS.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 bg-primary-50 border border-primary-200 rounded-lg">
        <h2 className="text-xl font-semibold text-primary-900 mb-2">🧩 Components</h2>
        <p className="text-primary-700">
          Atomic design system with atoms, molecules, and organisms following consistent patterns.
        </p>
      </div>
      
      <div className="p-6 bg-secondary-50 border border-secondary-200 rounded-lg">
        <h2 className="text-xl font-semibold text-secondary-900 mb-2">🎯 Design Tokens</h2>
        <p className="text-secondary-700">
          Figma-synced design tokens enable instant rebranding across all components.
        </p>
      </div>
      
      <div className="p-6 bg-success-50 border border-success-200 rounded-lg">
        <h2 className="text-xl font-semibold text-success-900 mb-2">📱 Responsive</h2>
        <p className="text-success-700">
          Mobile-first design with touch-friendly interactions and SwiftUI generation.
        </p>
      </div>
    </div>
    
    <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>Say "I'm ready to add a new component" to begin</li>
        <li>Provide Figma frame links for the component</li>
        <li>Watch as the component is built with design tokens</li>
        <li>Review the auto-generated SwiftUI equivalent</li>
        <li>Test across all responsive breakpoints</li>
      </ol>
    </div>
  </div>
);

const meta: Meta<typeof Welcome> = {
  title: 'Introduction/Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to the Pigment-Genesis Design System. This comprehensive design system provides scalable, maintainable components with automatic SwiftUI generation and instant rebrand capabilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Welcome to Pigment-Genesis',
};
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconTokens } from '../../../tokens/icons';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Icon Component

A universal icon component that renders icons from the Figma design system libraries.
Supports both core interface icons and CustomInk-specific unique icons.

## Features
- **Design Token Integration**: All sizing and colors use design tokens
- **Accessibility**: Proper ARIA labels and screen reader support  
- **Two Icon Libraries**: Core icons and CustomInk unique icons
- **Consistent Sizing**: Standardized icon sizes across the system
- **Color Inheritance**: Icons inherit parent text color by default

## Usage Guidelines
- Use \`decorative={true}\` for purely visual icons
- Provide \`aria-label\` for functional icons
- Prefer design token colors over custom colors
- Use appropriate size for context (sm for inline, md for buttons, lg for headers)
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'chevron-down',
        'chevron-up',
        'chevron-left', 
        'chevron-right',
        'warning-triangle',
        'info',
        'close',
        'check',
        'search',
        't-shirt',
        'facebook',
        'instagram',
        'twitter',
      ],
      description: 'Icon name from the design system libraries',
    },
    size: {
      control: 'select',
      options: Object.keys(iconTokens.sizes),
      description: 'Icon size using design tokens',
    },
    color: {
      control: 'select', 
      options: Object.keys(iconTokens.colors),
      description: 'Icon color using design tokens',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether icon is decorative (hidden from screen readers)',
    },
  },
  args: {
    name: 'chevron-down',
    size: 'md',
    color: 'primary',
    decorative: false,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Default icon
export const Default: Story = {
  args: {
    name: 'chevron-down',
    'aria-label': 'Expand menu',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="xs" aria-label="Extra small search" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xs (12px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="sm" aria-label="Small search" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>sm (16px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="md" aria-label="Medium search" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>md (20px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="lg" aria-label="Large search" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>lg (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="xl" aria-label="Extra large search" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xl (32px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="xxl" aria-label="Extra extra large search" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>xxl (48px)</div>
      </div>
    </div>
  ),
};

// Color variations
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="info" color="primary" aria-label="Primary color info" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="info" color="secondary" aria-label="Secondary color info" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Secondary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="warning-triangle" color="danger" aria-label="Danger warning" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Danger</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="info" color="warning" aria-label="Warning info" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="check" color="success" aria-label="Success check" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Success</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="info" color="info" aria-label="Info color info" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Info</div>
      </div>
    </div>
  ),
};

// Core icons showcase
export const CoreIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
      {['chevron-down', 'chevron-up', 'chevron-left', 'chevron-right', 'warning-triangle', 'info', 'close', 'check', 'search'].map((iconName) => (
        <div key={iconName} style={{ textAlign: 'center', padding: '8px' }}>
          <Icon name={iconName as any} size="lg" aria-label={`${iconName} icon`} />
          <div style={{ fontSize: '12px', marginTop: '4px' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

// Unique icons showcase
export const UniqueIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
      {['t-shirt', 'tank-top', 'hoodie', 'facebook', 'instagram', 'twitter'].map((iconName) => (
        <div key={iconName} style={{ textAlign: 'center', padding: '8px' }}>
          <Icon name={iconName as any} size="lg" aria-label={`${iconName} icon`} />
          <div style={{ fontSize: '12px', marginTop: '4px' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

// In context examples
export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '8px' }}>Button with Icon</h3>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid #ccc', borderRadius: '4px', background: 'white' }}>
          <Icon name="search" size="sm" decorative />
          Search
        </button>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '8px' }}>Dropdown Trigger</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', width: '200px' }}>
          <span>Select option</span>
          <Icon name="chevron-down" size="sm" color="secondary" decorative />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '8px' }}>Alert Message</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px' }}>
          <Icon name="warning-triangle" size="sm" color="danger" aria-label="Warning" />
          <span>This is a warning message</span>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '8px' }}>Social Media Links</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="#" style={{ color: '#1877f2' }}>
            <Icon name="facebook" size="lg" aria-label="Facebook profile" />
          </a>
          <a href="#" style={{ color: '#e4405f' }}>
            <Icon name="instagram" size="lg" aria-label="Instagram profile" />
          </a>
          <a href="#" style={{ color: '#1da1f2' }}>
            <Icon name="twitter" size="lg" aria-label="Twitter profile" />
          </a>
        </div>
      </div>
    </div>
  ),
};
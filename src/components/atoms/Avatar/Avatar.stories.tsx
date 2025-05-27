import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './';

// Sample avatar data for stories
const sampleUsers = [
  { name: 'John Doe' },
  { name: 'Jane Smith' },
  { name: 'Bob Johnson' },
  { name: 'Alice Brown' },
  { name: 'Charlie Wilson' },
  { name: 'Diana Prince' },
  { name: 'Ethan Hunt' },
  { name: 'Fiona Green' },
  { name: 'George Lucas' },
  { name: 'Helen Troy' }
];

const emailUsers = [
  { name: 'john.doe@customink.com' },
  { name: 'jane.smith@customink.com' },
  { name: 'bob.johnson@customink.com' },
  { name: 'alice.brown@customink.com' }
];

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Avatar Component

A comprehensive avatar component built from Figma design specifications with pixel-perfect accuracy.

## Features

- **Deterministic Color Assignment**: Same name/email always generates the same color
- **Two Sizes**: Small (26px) and Large (48px) variants from Figma
- **Photo Support**: Images cover background without replacing it
- **Group Support**: White borders and -3px spacing when in groups
- **Plus Avatars**: Overflow handling with "+n" functionality
- **Tooltip Support**: Hover states show full names
- **Accessibility**: Proper ARIA labels and semantic HTML

## Design Specifications

All measurements and colors are extracted directly from Figma:

- **Typography**: Sharp Sans Medium, 11px (small), proper letter spacing
- **Colors**: 26 deterministic background colors, #181818 text
- **Spacing**: 8px internal padding, 26px/48px sizes
- **Plus Avatar**: Always #E3E3E3 background (never random)

## Usage Guidelines

### DO:
- Use for user profiles, account displays, team lists
- Group multiple avatars for team displays
- Provide meaningful names for color consistency
- Use tooltips for better UX

### DON'T:
- Hardcode initials (let component generate from name)
- Use for decorative purposes only
- Mix sizes within the same group
- Forget alt text for photo avatars
        `
      }
    }
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Name or email to generate avatar from'
    },
    initials: {
      control: 'text',
      description: 'Custom initials (overrides name generation)'
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Avatar size variant'
    },
    src: {
      control: 'text',
      description: 'Image source for photo avatar'
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip on hover'
    },
    inGroup: {
      control: 'boolean',
      description: 'Whether avatar is in a group (shows white border)'
    },
    isPlusAvatar: {
      control: 'boolean',
      description: 'Whether this is a "+n" overflow avatar'
    },
    plusCount: {
      control: 'number',
      description: 'Number to display in plus avatar'
    }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Avatar Stories
export const Default: Story = {
  args: {
    name: 'John Doe',
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    name: 'John Doe',
    size: 'large'
  }
};

export const WithEmail: Story = {
  args: {
    name: 'john.doe@customink.com',
    size: 'small'
  }
};

export const CustomInitials: Story = {
  args: {
    initials: 'JD',
    size: 'small'
  }
};

export const WithTooltip: Story = {
  args: {
    name: 'John Doe',
    showTooltip: true,
    size: 'small'
  }
};

export const InGroup: Story = {
  args: {
    name: 'John Doe',
    inGroup: true,
    size: 'small'
  }
};

export const PhotoAvatar: Story = {
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'John Doe avatar',
    size: 'small'
  }
};

export const PlusAvatar: Story = {
  args: {
    isPlusAvatar: true,
    plusCount: 5,
    size: 'small'
  }
};

// Color Demonstration Stories
export const ColorVariations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George', 'Helen'].map(name => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Avatar name={name} size="small" />
          <span className="text-xs text-gray-600">{name}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates deterministic color assignment - same names always get same colors.'
      }
    }
  }
};

export const AlphabetShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-13 gap-2">
      {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
        <div key={letter} className="flex flex-col items-center gap-1">
          <Avatar name={letter} size="small" />
          <span className="text-xs text-gray-500">{letter}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full alphabet showcase showing color distribution across all letters.'
      }
    }
  }
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar name="John Doe" size="small" />
        <span className="text-xs text-gray-600">Small (26px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="John Doe" size="large" />
        <span className="text-xs text-gray-600">Large (48px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size comparison showing small and large avatar variants.'
      }
    }
  }
};

// Avatar Group Stories
export const BasicGroup: Story = {
  render: () => (
    <AvatarGroup 
      avatars={sampleUsers.slice(0, 3)}
      size="small"
      showTooltips
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic avatar group with 3 users, showing white borders and -3px overlap.'
      }
    }
  }
};

export const GroupWithOverflow: Story = {
  render: () => (
    <AvatarGroup 
      avatars={sampleUsers}
      max={4}
      showOverflow
      size="small"
      showTooltips
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar group with overflow showing "+6" for additional users.'
      }
    }
  }
};

export const GroupSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">2 Avatars</h3>
        <AvatarGroup avatars={sampleUsers.slice(0, 2)} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">4 Avatars</h3>
        <AvatarGroup avatars={sampleUsers.slice(0, 4)} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">5 Avatars</h3>
        <AvatarGroup avatars={sampleUsers.slice(0, 5)} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different group sizes as shown in Figma specifications.'
      }
    }
  }
};

export const EmailAvatars: Story = {
  render: () => (
    <AvatarGroup 
      avatars={emailUsers}
      showTooltips
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar group using email addresses for generation.'
      }
    }
  }
};

export const LargeAvatarGroup: Story = {
  render: () => (
    <AvatarGroup 
      avatars={sampleUsers.slice(0, 3)}
      size="large"
      showTooltips
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large avatar group (note: large avatars are never grouped per Figma spec, but component supports it).'
      }
    }
  }
};

// Edge Cases and Error States
export const EmptyName: Story = {
  args: {
    name: '',
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar with empty name shows "?" as fallback.'
      }
    }
  }
};

export const SpecialCharacters: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar name="José María" />
      <Avatar name="李小明" />
      <Avatar name="Александр" />
      <Avatar name="محمد علي" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with international names and special characters.'
      }
    }
  }
};

export const BrokenImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://broken-image-url.jpg',
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar with broken image URL falls back to initials.'
      }
    }
  }
};
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Avatar Component

Avatar component can be used for single use cases such as profile or email and even used in groups. Each letter has a specific color defined to it to give it variation when grouped.

### Key Features
- **Letter-Based Colors**: Each letter has a specific color defined for visual variation
- **Group Support**: Can be used individually or in groups with overlapping design
- **Image Support**: Supports both letter avatars and photo avatars with fallback
- **Responsive Design**: Scales appropriately across different screen sizes
- **Accessible**: Proper ARIA labels and semantic markup

### Usage Guidelines
- **Individual Use**: Profile pictures, user identification
- **Group Use**: Team members, collaborators, participant lists
- **Interaction**: Avatar groups can be clicked but have no hover or pressed state
        `,
      },
    },
  },
  argTypes: {
    letter: {
      control: 'text',
      description: 'Letter or character to display in the avatar',
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Size of the avatar',
    },
    src: {
      control: 'text',
      description: 'Image URL for photo avatar',
    },
    alt: {
      control: 'text', 
      description: 'Alternative text for accessibility',
    },
  },
  args: {
    letter: 'A',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Stories
export const Default: Story = {
  name: 'Default (Letter A)',
};

export const AllLetters: Story = {
  name: 'All Letter Colors',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Complete Alphabet with Unique Colors</h3>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6">
          {/* First row: A-F */}
          {['A', 'B', 'C', 'D', 'E', 'F'].map(letter => (
            <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Second row: G-L */}
          {['G', 'H', 'I', 'J', 'K', 'L'].map(letter => (
            <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Third row: M-R */}
          {['M', 'N', 'O', 'P', 'Q', 'R'].map(letter => (
            <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Fourth row: S-X */}
          {['S', 'T', 'U', 'V', 'W', 'X'].map(letter => (
            <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 md:grid-cols-13 gap-6 mt-4">
          {/* Fifth row: Y-Z and extras */}
          {['Y', 'Z', '+2'].map(letter => (
            <div key={letter} className="flex flex-col items-center gap-2">
              <Avatar letter={letter} />
              <span className="text-xs text-gray-600">{letter}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete alphabet showing the unique color assigned to each letter for visual variation when grouped.',
      },
    },
  },
};

export const AvatarSizes: Story = {
  name: 'Avatar Sizes',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Available Sizes</h3>
        <div className="flex items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <Avatar letter="A" size="sm" />
            <span className="text-sm text-gray-600">Small (26px)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar letter="A" size="lg" />
            <span className="text-sm text-gray-600">Large (40px)</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different avatar sizes available. Small is commonly used in groups, Large for individual profiles.',
      },
    },
  },
};

export const WithImage: Story = {
  name: 'Photo Avatar',
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Photo Avatar with Fallback</h3>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              letter="J" 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="John Doe"
            />
            <span className="text-sm text-gray-600">Valid Image</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar 
              letter="J" 
              src="invalid-url.jpg" 
              alt="John Doe"
            />
            <span className="text-sm text-gray-600">Fallback to Letter</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Photo avatars with automatic fallback to letter when image fails to load.',
      },
    },
  },
};

// Avatar Group Stories
export const GroupVariations: Story = {
  name: 'Avatar Groups',
  render: () => {
    const sampleAvatars = [
      { letter: 'A', alt: 'Alice' },
      { letter: 'E', alt: 'Emma' },
      { letter: 'J', alt: 'John' },
      { letter: 'M', alt: 'Mike' },
      { letter: 'S', alt: 'Sarah' },
    ];

    const largeGroup = [
      { letter: 'M', alt: 'Mike' },
      { letter: 'B', alt: 'Bob' },
      { letter: 'V', alt: 'Victoria' },
      { letter: 'H', alt: 'Henry' },
      { letter: 'G', alt: 'Grace' },
      { letter: 'T', alt: 'Tom' },
      { letter: 'L', alt: 'Lisa' },
    ];

    return (
      <div className="flex flex-col gap-8 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Avatar Group Variations</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">2 Avatars</span>
                <AvatarGroup avatars={sampleAvatars.slice(0, 2)} />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">4 Avatars</span>
                <AvatarGroup avatars={sampleAvatars.slice(0, 4)} />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">5 Avatars</span>
                <AvatarGroup avatars={sampleAvatars} />
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-md font-medium mb-4">Has Extras Variant</h4>
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">3 avatars, no extras</span>
                  <AvatarGroup 
                    avatars={sampleAvatars.slice(0, 3)} 
                    showExtras={false}
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium">3 avatars, has extras (+4)</span>
                  <AvatarGroup 
                    avatars={largeGroup} 
                    max={3}
                    showExtras={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Notes:</strong> The avatar group can be clicked on but there is no hover or pressed state</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different avatar group configurations showing overlapping avatars and the "+N" extras indicator.',
      },
    },
  },
};

// Individual control stories
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const LetterB: Story = {
  args: {
    letter: 'B',
  },
};

export const LetterZ: Story = {
  args: {
    letter: 'Z',
  },
};

export const PlusExtra: Story = {
  name: '+2 Extra Indicator',
  args: {
    letter: '+2',
  },
};
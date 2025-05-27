import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Avatar, AvatarGroup } from './';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Avatar', () => {
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders with custom initials', () => {
      render(<Avatar initials="AB" />);
      expect(screen.getByText('AB')).toBeInTheDocument();
    });

    it('renders small size by default', () => {
      const { container } = render(<Avatar name="John Doe" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar).toHaveClass('w-[26px]', 'h-[26px]');
    });

    it('renders large size when specified', () => {
      const { container } = render(<Avatar name="John Doe" size="large" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar).toHaveClass('w-12', 'h-12');
    });
  });

  describe('Initials Generation', () => {
    it('generates initials from full name', () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('generates initials from single name', () => {
      render(<Avatar name="John" />);
      expect(screen.getByText('J')).toBeInTheDocument();
    });

    it('generates initials from email address', () => {
      render(<Avatar name="john.doe@example.com" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles names with multiple parts', () => {
      render(<Avatar name="John Michael Doe" />);
      expect(screen.getByText('JM')).toBeInTheDocument();
    });

    it('handles names with special separators', () => {
      render(<Avatar name="john_doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('shows fallback for empty name', () => {
      render(<Avatar name="" />);
      expect(screen.getByText('?')).toBeInTheDocument();
    });

    it('converts to uppercase', () => {
      render(<Avatar name="john doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });
  });

  describe('Color Assignment', () => {
    it('assigns consistent colors for same names', () => {
      const { container: container1 } = render(<Avatar name="John Doe" />);
      const { container: container2 } = render(<Avatar name="John Doe" />);
      
      const avatar1 = container1.firstChild as HTMLElement;
      const avatar2 = container2.firstChild as HTMLElement;
      
      expect(avatar1.style.backgroundColor).toBe(avatar2.style.backgroundColor);
    });

    it('assigns different colors for different names', () => {
      const { container: container1 } = render(<Avatar name="John Doe" />);
      const { container: container2 } = render(<Avatar name="Jane Smith" />);
      
      const avatar1 = container1.firstChild as HTMLElement;
      const avatar2 = container2.firstChild as HTMLElement;
      
      expect(avatar1.style.backgroundColor).not.toBe(avatar2.style.backgroundColor);
    });

    it('uses gray background for plus avatars', () => {
      const { container } = render(<Avatar isPlusAvatar plusCount={5} />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.style.backgroundColor).toBe('rgb(227, 227, 227)'); // #e3e3e3
    });
  });

  describe('Photo Avatars', () => {
    it('renders image when src is provided', () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" alt="John's avatar" />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', '/avatar.jpg');
      expect(image).toHaveAttribute('alt', "John's avatar");
    });

    it('falls back to alt text from name when alt not provided', () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('alt', 'John Doe');
    });

    it('still shows initials as fallback', () => {
      render(<Avatar name="John Doe" src="/avatar.jpg" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });
  });

  describe('Plus Avatars', () => {
    it('renders plus count', () => {
      render(<Avatar isPlusAvatar plusCount={5} />);
      expect(screen.getByText('+5')).toBeInTheDocument();
    });

    it('renders plus without count', () => {
      render(<Avatar isPlusAvatar />);
      expect(screen.getByText('+')).toBeInTheDocument();
    });
  });

  describe('Group Styling', () => {
    it('applies group border when inGroup is true', () => {
      const { container } = render(<Avatar name="John Doe" inGroup />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar).toHaveClass('ring-1', 'ring-white');
    });

    it('does not apply group border by default', () => {
      const { container } = render(<Avatar name="John Doe" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar).not.toHaveClass('ring-1', 'ring-white');
    });
  });

  describe('Tooltips', () => {
    it('shows tooltip when showTooltip is true', () => {
      render(<Avatar name="John Doe" showTooltip />);
      const avatar = screen.getByText('JD').parentElement;
      expect(avatar).toHaveAttribute('title', 'John Doe');
    });

    it('shows custom tooltip content', () => {
      render(<Avatar name="John Doe" showTooltip tooltipContent="Custom tooltip" />);
      const avatar = screen.getByText('JD').parentElement;
      expect(avatar).toHaveAttribute('title', 'Custom tooltip');
    });

    it('does not show tooltip by default', () => {
      render(<Avatar name="John Doe" />);
      const avatar = screen.getByText('JD').parentElement;
      expect(avatar).not.toHaveAttribute('title');
    });
  });

  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Avatar name="John Doe" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper accessibility for photo avatars', async () => {
      const { container } = render(
        <Avatar name="John Doe" src="/avatar.jpg" alt="John's profile picture" />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Custom Props', () => {
    it('forwards custom className', () => {
      const { container } = render(<Avatar name="John Doe" className="custom-class" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar).toHaveClass('custom-class');
    });

    it('forwards other props', () => {
      render(<Avatar name="John Doe" data-testid="custom-avatar" />);
      expect(screen.getByTestId('custom-avatar')).toBeInTheDocument();
    });
  });
});

describe('AvatarGroup', () => {
  const mockUsers = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Bob Johnson' },
    { name: 'Alice Brown' },
    { name: 'Charlie Wilson' }
  ];

  describe('Basic Rendering', () => {
    it('renders all avatars when no max is set', () => {
      render(<AvatarGroup avatars={mockUsers.slice(0, 3)} />);
      expect(screen.getByText('JD')).toBeInTheDocument();
      expect(screen.getByText('JS')).toBeInTheDocument();
      expect(screen.getByText('BJ')).toBeInTheDocument();
    });

    it('applies group styling to all avatars', () => {
      const { container } = render(<AvatarGroup avatars={mockUsers.slice(0, 2)} />);
      const avatars = container.querySelectorAll('[class*="ring-1"]');
      expect(avatars).toHaveLength(2);
    });
  });

  describe('Overflow Handling', () => {
    it('shows overflow avatar when max is exceeded', () => {
      render(<AvatarGroup avatars={mockUsers} max={3} showOverflow />);
      expect(screen.getByText('+3')).toBeInTheDocument(); // 5 total - 2 visible = +3
    });

    it('does not show overflow when disabled', () => {
      render(<AvatarGroup avatars={mockUsers} max={3} showOverflow={false} />);
      expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
    });

    it('shows all avatars when count is within max', () => {
      render(<AvatarGroup avatars={mockUsers.slice(0, 2)} max={3} />);
      expect(screen.getByText('JD')).toBeInTheDocument();
      expect(screen.getByText('JS')).toBeInTheDocument();
      expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
    });

    it('calculates overflow count correctly', () => {
      render(<AvatarGroup avatars={mockUsers} max={4} showOverflow />);
      // 5 users, max 4, so show 3 + "+2"
      expect(screen.getByText('+2')).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('applies size to all avatars', () => {
      const { container } = render(<AvatarGroup avatars={mockUsers.slice(0, 2)} size="large" />);
      const avatars = container.querySelectorAll('[class*="w-12"]');
      expect(avatars).toHaveLength(2);
    });
  });

  describe('Tooltips', () => {
    it('enables tooltips for all avatars when showTooltips is true', () => {
      render(<AvatarGroup avatars={mockUsers.slice(0, 2)} showTooltips />);
      
      const johnAvatar = screen.getByText('JD').parentElement;
      const janeAvatar = screen.getByText('JS').parentElement;
      
      expect(johnAvatar).toHaveAttribute('title', 'John Doe');
      expect(janeAvatar).toHaveAttribute('title', 'Jane Smith');
    });

    it('shows tooltip for overflow avatar', () => {
      render(<AvatarGroup avatars={mockUsers} max={3} showOverflow showTooltips />);
      const overflowAvatar = screen.getByText('+3').parentElement;
      expect(overflowAvatar).toHaveAttribute('title', '3 more');
    });
  });

  describe('Custom Spacing', () => {
    it('applies custom spacing', () => {
      const { container } = render(<AvatarGroup avatars={mockUsers.slice(0, 2)} spacing="normal" />);
      const avatars = container.querySelectorAll('[style*="marginLeft"]');
      expect(avatars.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<AvatarGroup avatars={mockUsers.slice(0, 3)} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('maintains accessibility with overflow', async () => {
      const { container } = render(
        <AvatarGroup avatars={mockUsers} max={3} showOverflow showTooltips />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty avatars array', () => {
      const { container } = render(<AvatarGroup avatars={[]} />);
      expect(container.firstChild?.childNodes).toHaveLength(0);
    });

    it('handles max larger than array length', () => {
      render(<AvatarGroup avatars={mockUsers.slice(0, 2)} max={5} />);
      expect(screen.getByText('JD')).toBeInTheDocument();
      expect(screen.getByText('JS')).toBeInTheDocument();
      expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
    });
  });
});
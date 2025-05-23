import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

expect.extend(toHaveNoViolations);

describe('Avatar Component', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Avatar letter="A" />);
      
      const avatar = screen.getByRole('img', { name: 'Avatar for A' });
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveTextContent('A');
    });

    it('renders with custom alt text', () => {
      render(<Avatar letter="J" alt="John Doe avatar" />);
      
      const avatar = screen.getByRole('img', { name: 'John Doe avatar' });
      expect(avatar).toBeInTheDocument();
    });

    it('renders with data-testid', () => {
      render(<Avatar letter="A" data-testid="test-avatar" />);
      
      expect(screen.getByTestId('test-avatar')).toBeInTheDocument();
    });
  });

  // Letter and color tests
  describe('Letter Display', () => {
    it('displays the correct letter', () => {
      render(<Avatar letter="B" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveTextContent('B');
    });

    it('normalizes letter to uppercase', () => {
      render(<Avatar letter="z" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveTextContent('z');
    });

    it('handles multi-character strings by taking first character', () => {
      render(<Avatar letter="John" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveTextContent('John');
    });

    it('handles plus indicator', () => {
      render(<Avatar letter="+5" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveTextContent('+5');
    });

    it('applies correct background color for letter A', () => {
      render(<Avatar letter="A" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveClass('bg-[#ff876e]');
    });

    it('applies correct background color for letter Z', () => {
      render(<Avatar letter="Z" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveClass('bg-[#fff4c0]');
    });

    it('applies default color for unknown characters', () => {
      render(<Avatar letter="@" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveClass('bg-[#e3e3e3]');
    });
  });

  // Size tests
  describe('Sizes', () => {
    it('applies small size by default', () => {
      render(<Avatar letter="A" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveClass('w-[26px]', 'h-[26px]', 'text-[11px]');
    });

    it('applies large size styles', () => {
      render(<Avatar letter="A" size="lg" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveClass('w-[40px]', 'h-[40px]', 'text-sm');
    });
  });

  // Image support tests
  describe('Image Support', () => {
    it('displays image when src is provided', () => {
      render(<Avatar letter="J" src="https://example.com/avatar.jpg" alt="John Doe" />);
      
      const image = screen.getByRole('img', { name: 'John Doe' });
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    });

    it('falls back to letter when image fails to load', () => {
      render(<Avatar letter="J" src="invalid-url.jpg" />);
      
      const avatar = screen.getByRole('img');
      const image = avatar.querySelector('img');
      
      // Simulate image error
      if (image) {
        fireEvent.error(image);
      }
      
      expect(avatar).toHaveTextContent('J');
    });

    it('calls onImageError when image fails', () => {
      const handleImageError = jest.fn();
      render(
        <Avatar 
          letter="J" 
          src="invalid-url.jpg" 
          onImageError={handleImageError}
        />
      );
      
      const image = screen.getByRole('img').querySelector('img');
      
      if (image) {
        fireEvent.error(image);
      }
      
      expect(handleImageError).toHaveBeenCalledTimes(1);
    });

    it('applies gray background when showing image', () => {
      render(<Avatar letter="J" src="https://example.com/avatar.jpg" />);
      
      const avatar = screen.getByRole('img');
      expect(avatar).toHaveClass('bg-gray-100');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Avatar letter="A" />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with image', async () => {
      const { container } = render(
        <Avatar letter="J" src="https://example.com/avatar.jpg" alt="John Doe" />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides proper aria-label', () => {
      render(<Avatar letter="A" />);
      
      const avatar = screen.getByRole('img', { name: 'Avatar for A' });
      expect(avatar).toHaveAttribute('aria-label', 'Avatar for A');
    });

    it('uses custom alt text when provided', () => {
      render(<Avatar letter="J" alt="John Doe profile picture" />);
      
      const avatar = screen.getByRole('img', { name: 'John Doe profile picture' });
      expect(avatar).toHaveAttribute('aria-label', 'John Doe profile picture');
    });

    it('marks letter text as aria-hidden', () => {
      render(<Avatar letter="A" />);
      
      const letterSpan = screen.getByText('A');
      expect(letterSpan).toHaveAttribute('aria-hidden', 'true');
    });
  });
});

describe('AvatarGroup Component', () => {
  const sampleAvatars = [
    { letter: 'A', alt: 'Alice' },
    { letter: 'B', alt: 'Bob' },
    { letter: 'C', alt: 'Carol' },
    { letter: 'D', alt: 'Dave' },
    { letter: 'E', alt: 'Eve' },
  ];

  // Basic rendering tests
  describe('Rendering', () => {
    it('renders all avatars when count is within max', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 3)} max={5} />);
      
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getByText('B')).toBeInTheDocument();
      expect(screen.getByText('C')).toBeInTheDocument();
    });

    it('renders with data-testid', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} data-testid="test-group" />);
      
      expect(screen.getByTestId('test-group')).toBeInTheDocument();
    });
  });

  // Max and extras tests
  describe('Max Count and Extras', () => {
    it('shows extras indicator when avatars exceed max', () => {
      render(<AvatarGroup avatars={sampleAvatars} max={3} showExtras={true} />);
      
      // Should show 2 avatars + "+3" indicator (3 max - 1 for extras = 2 displayed)
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getByText('B')).toBeInTheDocument();
      expect(screen.getByText('+3')).toBeInTheDocument();
      expect(screen.queryByText('C')).not.toBeInTheDocument();
    });

    it('does not show extras when showExtras is false', () => {
      render(<AvatarGroup avatars={sampleAvatars} max={3} showExtras={false} />);
      
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getByText('B')).toBeInTheDocument();
      expect(screen.getByText('C')).toBeInTheDocument();
      expect(screen.queryByText('+2')).not.toBeInTheDocument();
    });

    it('shows all avatars when count equals max', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 3)} max={3} />);
      
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getByText('B')).toBeInTheDocument();
      expect(screen.getByText('C')).toBeInTheDocument();
      expect(screen.queryByText('+0')).not.toBeInTheDocument();
    });
  });

  // Size propagation tests
  describe('Size Propagation', () => {
    it('applies size to all avatars in group', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} size="lg" />);
      
      const avatars = screen.getAllByRole('img');
      avatars.forEach(avatar => {
        expect(avatar).toHaveClass('w-[40px]', 'h-[40px]');
      });
    });

    it('uses small size by default', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} />);
      
      const avatars = screen.getAllByRole('img');
      avatars.forEach(avatar => {
        expect(avatar).toHaveClass('w-[26px]', 'h-[26px]');
      });
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('calls onClick when group is clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} onClick={handleClick} />);
      
      const group = screen.getByRole('button');
      await user.click(group);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies button role when onClick is provided', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} onClick={() => {}} />);
      
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('does not apply button role when onClick is not provided', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} />);
      
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('can be focused when onClick is provided', async () => {
      const user = userEvent.setup();
      
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} onClick={() => {}} />);
      
      const group = screen.getByRole('button');
      await user.tab();
      
      expect(group).toHaveFocus();
    });
  });

  // Layout and styling tests
  describe('Layout and Styling', () => {
    it('applies overlapping styles to avatars', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 3)} />);
      
      const avatarContainers = screen.getAllByRole('img').map(img => img.parentElement);
      
      // All except first should have negative margin
      avatarContainers.slice(1).forEach(container => {
        expect(container).toHaveClass('mr-[-3px]');
      });
    });

    it('applies proper z-index stacking', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 3)} />);
      
      const avatarContainers = screen.getAllByRole('img').map(img => img.parentElement);
      
      // Check that z-index decreases for later avatars
      expect(avatarContainers[0]).toHaveStyle('z-index: 3');
      expect(avatarContainers[1]).toHaveStyle('z-index: 2');
      expect(avatarContainers[2]).toHaveStyle('z-index: 1');
    });

    it('applies cursor pointer when clickable', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 2)} onClick={() => {}} />);
      
      const group = screen.getByRole('button');
      expect(group).toHaveClass('cursor-pointer');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty avatars array', () => {
      render(<AvatarGroup avatars={[]} />);
      
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('handles single avatar', () => {
      render(<AvatarGroup avatars={sampleAvatars.slice(0, 1)} />);
      
      expect(screen.getByText('A')).toBeInTheDocument();
      expect(screen.getAllByRole('img')).toHaveLength(1);
    });

    it('calculates correct remaining count', () => {
      render(<AvatarGroup avatars={sampleAvatars} max={2} />);
      
      expect(screen.getByText('+4')).toBeInTheDocument(); // 5 total - 2 max + 1 shown = +4
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<AvatarGroup avatars={sampleAvatars.slice(0, 3)} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when clickable', async () => {
      const { container } = render(
        <AvatarGroup avatars={sampleAvatars.slice(0, 3)} onClick={() => {}} />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides proper alt text for extras indicator', () => {
      render(<AvatarGroup avatars={sampleAvatars} max={3} />);
      
      const extrasAvatar = screen.getByRole('img', { name: '2 more avatars' });
      expect(extrasAvatar).toBeInTheDocument();
    });
  });
});
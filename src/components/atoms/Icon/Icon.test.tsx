import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { iconTokens } from '../../../tokens/icons';

describe('Icon', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders chevron-down icon correctly', () => {
      render(<Icon name="chevron-down" aria-label="Expand menu" />);
      const icon = screen.getByLabelText('Expand menu');
      expect(icon).toBeInTheDocument();
    });

    it('renders warning-triangle icon correctly', () => {
      render(<Icon name="warning-triangle" aria-label="Warning" />);
      const icon = screen.getByLabelText('Warning');
      expect(icon).toBeInTheDocument();
    });

    it('renders unique icons correctly', () => {
      render(<Icon name="t-shirt" aria-label="T-shirt product" />);
      const icon = screen.getByLabelText('T-shirt product');
      expect(icon).toBeInTheDocument();
    });

    it('returns null for unknown icon names', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      const { container } = render(<Icon name="unknown-icon" as any />);
      expect(container.firstChild).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith('Icon "unknown-icon" not found in icon libraries');
      consoleSpy.mockRestore();
    });
  });

  // Size prop tests
  describe('Sizing', () => {
    it('applies correct size styles', () => {
      render(<Icon name="chevron-down" size="lg" aria-label="Large chevron" />);
      const icon = screen.getByLabelText('Large chevron');
      expect(icon).toHaveStyle({
        width: iconTokens.sizes.lg,
        height: iconTokens.sizes.lg,
      });
    });

    it('defaults to medium size', () => {
      render(<Icon name="chevron-down" aria-label="Default chevron" />);
      const icon = screen.getByLabelText('Default chevron');
      expect(icon).toHaveStyle({
        width: iconTokens.sizes.md,
        height: iconTokens.sizes.md,
      });
    });

    it('applies all available sizes correctly', () => {
      Object.entries(iconTokens.sizes).forEach(([sizeKey, sizeValue]) => {
        const { unmount } = render(
          <Icon 
            name="chevron-down" 
            size={sizeKey as any} 
            aria-label={`${sizeKey} chevron`} 
          />
        );
        const icon = screen.getByLabelText(`${sizeKey} chevron`);
        expect(icon).toHaveStyle({
          width: sizeValue,
          height: sizeValue,
        });
        unmount();
      });
    });
  });

  // Color prop tests
  describe('Colors', () => {
    it('uses currentColor for primary color', () => {
      render(<Icon name="chevron-down" color="primary" aria-label="Primary chevron" />);
      const icon = screen.getByLabelText('Primary chevron');
      expect(icon).toHaveStyle({ color: 'currentColor' });
    });

    it('applies design token colors', () => {
      render(<Icon name="warning-triangle" color="danger" aria-label="Danger warning" />);
      const icon = screen.getByLabelText('Danger warning');
      expect(icon).toHaveStyle({ color: iconTokens.colors.danger });
    });

    it('applies secondary color correctly', () => {
      render(<Icon name="chevron-down" color="secondary" aria-label="Secondary chevron" />);
      const icon = screen.getByLabelText('Secondary chevron');
      expect(icon).toHaveStyle({ color: iconTokens.colors.secondary });
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('uses provided aria-label', () => {
      render(<Icon name="chevron-down" aria-label="Custom label" />);
      expect(screen.getByLabelText('Custom label')).toBeInTheDocument();
    });

    it('generates default aria-label from icon name', () => {
      render(<Icon name="chevron-down" />);
      expect(screen.getByLabelText('chevron-down icon')).toBeInTheDocument();
    });

    it('sets aria-hidden for decorative icons', () => {
      render(<Icon name="chevron-down" decorative data-testid="decorative-icon" />);
      const icon = screen.getByTestId('decorative-icon');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
      expect(icon).not.toHaveAttribute('aria-label');
    });

    it('sets role="img" for non-decorative icons', () => {
      render(<Icon name="chevron-down" aria-label="Functional icon" />);
      const icon = screen.getByLabelText('Functional icon');
      expect(icon).toHaveAttribute('role', 'img');
    });
  });

  // Style and className tests
  describe('Styling', () => {
    it('applies custom className', () => {
      render(<Icon name="chevron-down" className="custom-class" aria-label="Custom class icon" />);
      const icon = screen.getByLabelText('Custom class icon');
      expect(icon).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
      const customStyle = { marginTop: '10px', opacity: 0.5 };
      render(<Icon name="chevron-down" style={customStyle} aria-label="Custom style icon" />);
      const icon = screen.getByLabelText('Custom style icon');
      expect(icon).toHaveStyle(customStyle);
    });

    it('merges custom styles with design token styles', () => {
      const customStyle = { marginTop: '10px' };
      render(<Icon name="chevron-down" size="lg" style={customStyle} aria-label="Merged style icon" />);
      const icon = screen.getByLabelText('Merged style icon');
      expect(icon).toHaveStyle({
        ...customStyle,
        width: iconTokens.sizes.lg,
        height: iconTokens.sizes.lg,
      });
    });
  });

  // Test ID tests
  describe('Test IDs', () => {
    it('applies data-testid correctly', () => {
      render(<Icon name="chevron-down" data-testid="test-icon" aria-label="Test icon" />);
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
  });

  // Icon library tests
  describe('Icon Libraries', () => {
    it('renders core icons from CoreIcons library', () => {
      const coreIcons = ['chevron-down', 'chevron-up', 'warning-triangle', 'info', 'close', 'check', 'search'];
      coreIcons.forEach((iconName) => {
        const { unmount } = render(<Icon name={iconName as any} aria-label={`${iconName} icon`} />);
        expect(screen.getByLabelText(`${iconName} icon`)).toBeInTheDocument();
        unmount();
      });
    });

    it('renders unique icons from UniqueIcons library', () => {
      const uniqueIcons = ['t-shirt', 'tank-top', 'hoodie', 'facebook', 'instagram', 'twitter'];
      uniqueIcons.forEach((iconName) => {
        const { unmount } = render(<Icon name={iconName as any} aria-label={`${iconName} icon`} />);
        expect(screen.getByLabelText(`${iconName} icon`)).toBeInTheDocument();
        unmount();
      });
    });
  });

  // Design token integration tests
  describe('Design Token Integration', () => {
    it('uses only design token values for sizing', () => {
      Object.keys(iconTokens.sizes).forEach((size) => {
        const { unmount } = render(
          <Icon 
            name="chevron-down" 
            size={size as any} 
            aria-label={`${size} icon`} 
          />
        );
        const icon = screen.getByLabelText(`${size} icon`);
        expect(icon).toHaveStyle({
          width: iconTokens.sizes[size as keyof typeof iconTokens.sizes],
          height: iconTokens.sizes[size as keyof typeof iconTokens.sizes],
        });
        unmount();
      });
    });

    it('applies flexShrink: 0 to prevent icon squishing', () => {
      render(<Icon name="chevron-down" aria-label="Flex icon" />);
      const icon = screen.getByLabelText('Flex icon');
      expect(icon).toHaveStyle({ flexShrink: '0' });
    });

    it('applies display: inline-block for proper layout', () => {
      render(<Icon name="chevron-down" aria-label="Block icon" />);
      const icon = screen.getByLabelText('Block icon');
      expect(icon).toHaveStyle({ display: 'inline-block' });
    });
  });
});
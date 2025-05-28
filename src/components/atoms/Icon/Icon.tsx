import React from 'react';
import { BaseIconProps, IconName, CoreIconName, UniqueIconName } from '../../../types/icons';
import { iconTokens } from '../../../tokens/icons';

// Import icon libraries
import { CoreIcons } from './CoreIcons';
import { UniqueIcons } from './UniqueIcons';

/**
 * Universal Icon component that renders icons from Figma libraries
 * Supports both core icons and CustomInk-specific unique icons
 */
export const Icon: React.FC<BaseIconProps & { name: IconName }> = ({
  name,
  size = 'md',
  color = 'primary',
  className = '',
  'aria-label': ariaLabel,
  decorative = false,
  style,
  'data-testid': testId,
  ...props
}) => {
  // Determine which icon library to use
  const isCoreIcon = name in CoreIcons;
  const isUniqueIcon = name in UniqueIcons;
  
  if (!isCoreIcon && !isUniqueIcon) {
    console.warn(`Icon "${name}" not found in icon libraries`);
    return null;
  }
  
  // Get the icon component
  const IconComponent = isCoreIcon 
    ? CoreIcons[name as CoreIconName]
    : UniqueIcons[name as UniqueIconName];
  
  if (!IconComponent) {
    console.warn(`Icon component for "${name}" not implemented`);
    return null;
  }
  
  // Build styles from design tokens
  const iconStyles: React.CSSProperties = {
    width: iconTokens.sizes[size],
    height: iconTokens.sizes[size],
    color: color === 'primary' ? 'currentColor' : iconTokens.colors[color],
    flexShrink: 0,
    display: 'inline-block',
    ...style,
  };
  
  // Accessibility props
  const accessibilityProps = decorative
    ? { 'aria-hidden': true }
    : { 
        'aria-label': ariaLabel || `${name} icon`,
        role: 'img'
      };
  
  return (
    <IconComponent
      style={iconStyles}
      className={className}
      data-testid={testId}
      {...accessibilityProps}
      {...props}
    />
  );
};

export default Icon;
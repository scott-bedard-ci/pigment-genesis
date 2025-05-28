import React, { forwardRef } from 'react';
import { cn } from '../../../utils/classNames';
import { BaseComponentProps } from '../../../types/component';
import { Avatar, AvatarProps } from './Avatar';

// Avatar group configuration
export interface AvatarGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    BaseComponentProps {
  /**
   * List of avatar data to display
   */
  avatars: Array<Pick<AvatarProps, 'name' | 'initials' | 'src' | 'alt'>>;
  
  /**
   * Maximum number of avatars to show before displaying "+n"
   * If not provided, shows all avatars
   */
  max?: number;
  
  /**
   * Size variant for all avatars in the group
   */
  size?: AvatarProps['size'];
  
  /**
   * Whether to show tooltip for each avatar
   */
  showTooltips?: boolean;
  
  /**
   * Whether to show the "+n" overflow indicator when max is exceeded
   */
  showOverflow?: boolean;
  
  /**
   * Custom content for the overflow avatar (defaults to "+n")
   */
  overflowContent?: string;
  
  /**
   * Custom spacing between avatars (defaults to -3px from Figma)
   */
  spacing?: 'tight' | 'normal' | 'loose' | number;
}

/**
 * AvatarGroup Component
 * 
 * A comprehensive avatar group component built from Figma design specifications.
 * Handles overflow with "+n" functionality, white borders, and proper spacing
 * with pixel-perfect accuracy to Figma designs.
 * 
 * Features:
 * - Automatic overflow handling with +n indicator
 * - White borders on each avatar (Figma requirement)
 * - -3px overlap spacing (Figma specification) 
 * - Deterministic color assignment for consistency
 * - Support for photo avatars
 * - Responsive width adjustment
 * 
 * @example
 * ```tsx
 * // Basic avatar group
 * <AvatarGroup avatars={[
 *   { name: "John Doe" },
 *   { name: "Jane Smith" },
 *   { name: "Bob Johnson" }
 * ]} />
 * 
 * // Limited group with overflow
 * <AvatarGroup 
 *   avatars={users} 
 *   max={3} 
 *   showOverflow 
 * />
 * 
 * // Large avatars with custom spacing
 * <AvatarGroup 
 *   avatars={users}
 *   size="large"
 *   spacing="normal"
 * />
 * ```
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      className,
      avatars = [],
      max,
      size = 'small',
      showTooltips = false,
      showOverflow = true,
      overflowContent,
      spacing = 'tight',
      ...props
    },
    ref
  ) => {
    // Determine spacing value
    const getSpacingValue = () => {
      if (typeof spacing === 'number') return spacing;
      switch (spacing) {
        case 'tight': return -3;  // Figma specification
        case 'normal': return 0;
        case 'loose': return 4;
        default: return -3;
      }
    };
    
    const spacingValue = getSpacingValue();
    
    // Calculate visible avatars and overflow
    const shouldShowOverflow = showOverflow && max && avatars.length > max;
    const visibleAvatars = max ? avatars.slice(0, shouldShowOverflow ? max - 1 : max) : avatars;
    const overflowCount = shouldShowOverflow ? avatars.length - visibleAvatars.length : 0;
    
    const overflowText = overflowContent || `+${overflowCount}`;
    
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          className
        )}
        style={{ 
          // Apply spacing using negative margin, but keep first avatar at 0
          marginLeft: 0 
        }}
        {...props}
      >
        {/* Visible Avatars */}
        {visibleAvatars.map((avatar, index) => (
          <Avatar
            key={`${avatar.name || avatar.initials || 'avatar'}-${index}`}
            name={avatar.name}
            initials={avatar.initials}
            src={avatar.src}
            alt={avatar.alt}
            size={size}
            showTooltip={showTooltips}
            inGroup={true} // This enables the white border
            className={cn(
              'relative',
              // Higher z-index for later avatars so borders show correctly
              index > 0 && 'z-20'
            )}
            style={{
              // Use inline style for dynamic spacing values
              ...(index > 0 && { marginLeft: `${spacingValue}px` }),
              zIndex: 10 + index
            }}
          />
        ))}
        
        {/* Overflow Avatar */}
        {shouldShowOverflow && (
          <Avatar
            isPlusAvatar
            plusCount={overflowCount}
            size={size}
            inGroup={true}
            showTooltip={showTooltips}
            tooltipContent={`${overflowCount} more`}
            className={cn(
              'relative',
              'z-30'
            )}
            style={{
              marginLeft: `${spacingValue}px`,
              zIndex: 10 + visibleAvatars.length
            }}
          />
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
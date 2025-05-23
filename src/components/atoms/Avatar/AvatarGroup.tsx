import React from 'react';
import { cn } from '@/utils/classNames';
import { Avatar, type AvatarProps } from './Avatar';
import type { BaseComponentProps } from '@/types/component';

export interface AvatarGroupProps extends BaseComponentProps {
  /**
   * Maximum number of avatars to display before showing "+N" indicator
   */
  max?: number;
  /**
   * Avatar size for all avatars in the group
   */
  size?: AvatarProps['size'];
  /**
   * Array of avatar data
   */
  avatars: Array<{
    letter: string;
    alt?: string;
    src?: string;
  }>;
  /**
   * Whether to show the "+N" indicator when avatars exceed max
   */
  showExtras?: boolean;
  /**
   * Called when the group or "+N" indicator is clicked
   */
  onClick?: () => void;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  max = 5,
  size = 'sm',
  avatars,
  showExtras = true,
  onClick,
  className,
  'data-testid': testId,
  ...props
}) => {
  const displayAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;
  const hasExtras = showExtras && remainingCount > 0;

  // Adjust displayed avatars if we need to show the extras indicator
  const finalDisplayAvatars = hasExtras ? displayAvatars.slice(0, -1) : displayAvatars;

  return (
    <div
      className={cn(
        'flex items-start',
        // Responsive spacing
        'pl-0 pr-[3px] py-0',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      data-testid={testId}
      {...props}
    >
      {finalDisplayAvatars.map((avatar, index) => (
        <div
          key={`${avatar.letter}-${index}`}
          className={cn(
            // Overlapping effect with white border
            'relative mr-[-3px]',
            'border border-white rounded-full',
            // Ensure proper stacking
            index > 0 && 'ml-0'
          )}
          style={{ zIndex: finalDisplayAvatars.length - index }}
        >
          <Avatar
            letter={avatar.letter}
            alt={avatar.alt}
            src={avatar.src}
            size={size}
          />
        </div>
      ))}
      
      {hasExtras && (
        <div
          className={cn(
            'relative mr-[-3px]',
            'border border-white rounded-full'
          )}
          style={{ zIndex: 0 }}
        >
          <Avatar
            letter={`+${remainingCount}`}
            alt={`${remainingCount} more avatars`}
            size={size}
          />
        </div>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
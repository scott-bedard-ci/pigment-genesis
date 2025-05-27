import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/classNames';
import { BaseComponentProps } from '../../../types/component';
import { colors } from '../../../tokens/colors';

// Avatar variant configuration using extracted Figma design tokens
const avatarVariants = cva(
  [
    // Base styles extracted from Figma
    'inline-flex items-center justify-center',
    'rounded-full',                                    // Perfect circle (border-radius: 999px)
    'font-medium',                                     // Sharp Sans Medium
    'text-[#181818]',                                  // Figma: Avatar letter text color
    'uppercase',                                       // Letters displayed as capitals
    'select-none',                                     // Prevent text selection
    'shrink-0',                                        // Prevent shrinking in flex layouts
    'relative',                                        // For potential image overlay
    'overflow-hidden'                                  // For image support
  ],
  {
    variants: {
      // Size variants extracted from Figma avatar frame
      size: {
        small: [
          'w-[26px] h-[26px]',                         // Figma: Small avatar dimensions
          'p-2',                                       // Figma: 8px internal padding
          'text-[11px] leading-[14px]',                // Figma: Avatar text size/line height
          'tracking-[0.165px]'                         // Figma: Letter spacing
        ],
        large: [
          'w-12 h-12',                                 // Figma: Large avatar dimensions (estimated 48px)
          'p-3',                                       // Figma: 12px internal padding
          'text-base leading-5',                       // Figma: Larger text for large avatars
          'tracking-[0.165px]'                         // Figma: Letter spacing
        ]
      },
      // Background color variant (will be overridden by deterministic color assignment)
      colorScheme: {
        auto: '',                                      // Color assigned automatically based on initials
        plus: 'bg-[#e3e3e3]'                         // Figma: Plus avatar always gray
      }
    },
    defaultVariants: {
      size: 'small',
      colorScheme: 'auto'
    }
  }
);

/**
 * Generate deterministic background color for avatar based on input string
 * Ensures same input always generates same color (deterministic)
 * but different inputs distribute evenly across color palette
 */
const getAvatarBackgroundColor = (input: string): string => {
  if (!input || input.trim() === '') return colors.avatar.backgrounds[0];
  
  // Create a simple hash from the input string
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Use absolute value to ensure positive index
  const index = Math.abs(hash) % colors.avatar.backgrounds.length;
  return colors.avatar.backgrounds[index];
};

/**
 * Generate initials from name or email address
 * Follows Figma specification: 1-2 letters based on data entry
 */
const generateInitials = (name: string): string => {
  if (!name || name.trim() === '') return '?';
  
  const trimmed = name.trim();
  
  // Handle email addresses - use part before @
  const emailMatch = trimmed.match(/^([^@]+)@/);
  const nameToProcess = emailMatch ? emailMatch[1] : trimmed;
  
  // Split by common separators (space, dot, underscore, hyphen)
  const parts = nameToProcess.split(/[\s._-]+/).filter(part => part.length > 0);
  
  if (parts.length === 0) return '?';
  if (parts.length === 1) {
    // Single word - take first 1-2 characters
    return parts[0].charAt(0).toUpperCase();
  }
  
  // Multiple parts - take first character of first two parts
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
};

// Avatar component props interface
export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof avatarVariants>,
    BaseComponentProps {
  /**
   * Name or email address to generate avatar from
   * Used for both initials generation and color assignment
   */
  name?: string;
  
  /**
   * Custom initials to display (overrides name-based generation)
   * Should be 1-2 characters
   */
  initials?: string;
  
  /**
   * Image source for photo avatar
   * When provided, covers the background color (doesn't replace)
   */
  src?: string;
  
  /**
   * Alt text for the avatar image
   */
  alt?: string;
  
  /**
   * Whether this is a "plus" avatar showing additional count
   */
  isPlusAvatar?: boolean;
  
  /**
   * Number to display in plus avatar (e.g., "+3")
   */
  plusCount?: number;
  
  /**
   * Whether to show tooltip on hover
   */
  showTooltip?: boolean;
  
  /**
   * Custom tooltip content (defaults to name)
   */
  tooltipContent?: string;
  
  /**
   * Whether this avatar is part of a group (affects border styling)
   */
  inGroup?: boolean;
}

/**
 * Avatar Component
 * 
 * A comprehensive avatar component built from Figma design specifications.
 * Supports deterministic color assignment, photo overlays, plus avatars,
 * and grouping with pixel-perfect accuracy to Figma designs.
 * 
 * @example
 * ```tsx
 * // Basic avatar with name
 * <Avatar name="John Doe" />
 * 
 * // Avatar with email
 * <Avatar name="john.doe@example.com" />
 * 
 * // Large avatar with custom initials
 * <Avatar size="large" initials="JD" />
 * 
 * // Photo avatar
 * <Avatar name="John Doe" src="/avatar.jpg" alt="John Doe's avatar" />
 * 
 * // Plus avatar for overflow count
 * <Avatar isPlusAvatar plusCount={5} />
 * 
 * // Avatar in group (with border)
 * <Avatar name="John Doe" inGroup />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      size = 'small',
      colorScheme = 'auto',
      name = '',
      initials,
      src,
      alt,
      isPlusAvatar = false,
      plusCount,
      showTooltip = false,
      tooltipContent,
      inGroup = false,
      ...props
    },
    ref
  ) => {
    // Determine what to display
    const displayInitials = isPlusAvatar 
      ? `+${plusCount || ''}` 
      : initials || generateInitials(name);
    
    // Determine background color
    const backgroundColor = isPlusAvatar 
      ? colors.avatar.plus 
      : colorScheme === 'plus' 
        ? colors.avatar.plus
        : getAvatarBackgroundColor(name || initials || '');
    
    // Group border styling
    const groupBorderClass = inGroup ? 'ring-1 ring-white' : '';
    
    const avatarElement = (
      <div
        ref={ref}
        className={cn(
          avatarVariants({ size, colorScheme: isPlusAvatar ? 'plus' : colorScheme }),
          groupBorderClass,
          className
        )}
        style={{ backgroundColor }}
        title={showTooltip ? (tooltipContent || name) : undefined}
        {...props}
      >
        {/* Background image if provided */}
        {src && (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
            onError={(e) => {
              // Hide image on error, fallback to initials
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Initials text */}
        <span className="relative z-10 font-medium">
          {displayInitials}
        </span>
      </div>
    );

    return avatarElement;
  }
);

Avatar.displayName = 'Avatar';

// Component variant types for external use
export type AvatarSize = VariantProps<typeof avatarVariants>['size'];
export type AvatarColorScheme = VariantProps<typeof avatarVariants>['colorScheme'];
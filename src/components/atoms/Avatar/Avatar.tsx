import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/classNames';
import type { BaseComponentProps } from '@/types/component';

// Avatar background colors mapped to letters (extracted from Figma)
const avatarColors = {
  A: 'bg-[#ff876e]', B: 'bg-[#ffc3be]', C: 'bg-[#b467c8]', D: 'bg-[#caa2dd]',
  E: 'bg-[#52c5b8]', F: 'bg-[#7addd4]', G: 'bg-[#a0e9e3]', H: 'bg-[#6f9bf5]',
  I: 'bg-[#9abdfb]', J: 'bg-[#aeaeae]', K: 'bg-[#c8c8c8]', L: 'bg-[#ffdc1e]',
  M: 'bg-[#ffe881]', N: 'bg-[#cbdffe]', O: 'bg-[#f38289]', P: 'bg-[#76efbb]',
  Q: 'bg-[#9ff6d3]', R: 'bg-[#dfcbee]', S: 'bg-[#5abc74]', T: 'bg-[#ffc724]',
  U: 'bg-[#ffe586]', V: 'bg-[#ffaff7]', W: 'bg-[#cdf2f0]', X: 'bg-[#eba0a7]',
  Y: 'bg-[#cefbea]', Z: 'bg-[#fff4c0]', '#': 'bg-[#e3e3e3]'
} as const;

const avatarVariants = cva(
  [
    // Base styles
    'inline-flex items-center justify-center',
    'rounded-full font-medium text-center',
    'select-none cursor-default',
    // Typography
    'font-[\'Sharp_Sans:Medium\',_sans-serif] tracking-[0.165px]',
    // Ensure text is readable
    'text-[rgba(0,0,0,0.86)]',
  ],
  {
    variants: {
      size: {
        sm: [
          'w-[26px] h-[26px] text-[11px] leading-[14px]',
          'md:w-[28px] md:h-[28px] md:text-xs',
        ],
        lg: [
          'w-[40px] h-[40px] text-sm leading-4',
          'md:w-[48px] md:h-[48px] md:text-base',
        ],
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export interface AvatarProps 
  extends BaseComponentProps,
    VariantProps<typeof avatarVariants> {
  /**
   * Single letter or character to display in the avatar
   */
  letter: string;
  /**
   * Alternative text for the avatar
   */
  alt?: string;
  /**
   * Image source for photo avatar (overrides letter)
   */
  src?: string;
  /**
   * Called when image fails to load
   */
  onImageError?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  letter,
  size = 'sm',
  alt,
  src,
  onImageError,
  className,
  'data-testid': testId,
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);
  
  const handleImageError = () => {
    setImageError(true);
    onImageError?.();
  };

  // Normalize letter for color lookup
  const normalizedLetter = letter.toUpperCase().charAt(0);
  const displayLetter = normalizedLetter === '+' ? '#' : normalizedLetter;
  const backgroundColorClass = avatarColors[displayLetter as keyof typeof avatarColors] || avatarColors['#'];

  const shouldShowImage = src && !imageError;

  return (
    <div
      className={cn(
        avatarVariants({ size }),
        !shouldShowImage && backgroundColorClass,
        shouldShowImage && 'bg-gray-100',
        className
      )}
      role="img"
      aria-label={alt || `Avatar for ${letter}`}
      data-testid={testId}
      {...props}
    >
      {shouldShowImage ? (
        <img
          src={src}
          alt={alt || `Avatar for ${letter}`}
          className="w-full h-full object-cover rounded-full"
          onError={handleImageError}
        />
      ) : (
        <span className="block leading-[14px] whitespace-pre" aria-hidden="true">
          {letter}
        </span>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
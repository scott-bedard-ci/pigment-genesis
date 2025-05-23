import React from 'react';
import { cn } from '../utils/classNames';
import { createComponentVariants, touchTarget } from '../utils/componentVariants';
import type { VariantComponentProps } from '../types/component';

/**
 * Component variant definitions using design tokens
 * Extends base variants with component-specific styling
 */
const componentVariants = createComponentVariants([
  // Base responsive classes
  'w-full md:w-auto',
  // Standard interactive base
  'inline-flex items-center justify-center',
  'font-medium',
  'rounded-md',
  'border border-transparent',
  // Focus management
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  // Transitions with motion preferences
  'motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-in-out',
  // Touch targets for mobile
  touchTarget('minimum'),
  // Disabled state
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
], {
  variants: {
    // Component-specific variants can be added here
    shape: {
      rounded: 'rounded-md',
      square: 'rounded-none',
      pill: 'rounded-full'
    }
  },
  defaultVariants: {
    shape: 'rounded'
  }
});

/**
 * Component props interface
 * Extends standard variant props with component-specific properties
 */
interface ComponentNameProps extends VariantComponentProps {
  /** Component-specific prop example */
  content?: string;
  
  /** Icon to display */
  icon?: React.ReactNode;
  
  /** Icon position */
  iconPosition?: 'left' | 'right';
  
  /** Loading state */
  loading?: boolean;
  
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  /** Keyboard event handler */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

/**
 * ComponentName Component
 * 
 * [Component description goes here]
 * 
 * Features:
 * - Mobile-first responsive design
 * - Full keyboard navigation support
 * - WCAG compliant accessibility
 * - Design token-based styling
 * - Touch-friendly on mobile devices
 * 
 * @example
 * ```tsx
 * <ComponentName
 *   size="md"
 *   variant="primary"
 *   content="Click me"
 *   onClick={() => console.log('Clicked!')}
 * />
 * ```
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  size = 'md',
  variant = 'primary',
  disabled = false,
  content,
  icon,
  iconPosition = 'left',
  loading = false,
  className,
  children,
  onClick,
  onKeyDown,
  'data-testid': testId,
  ...props
}) => {
  /**
   * Handle click events
   */
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled || loading) return;
    onClick?.(event);
  };

  /**
   * Handle keyboard events
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (disabled || loading) return;
    
    // Handle Enter and Space for activation
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event as any);
    }
    
    onKeyDown?.(event);
  };

  /**
   * Render icon with proper positioning
   */
  const renderIcon = () => {
    if (!icon || loading) return null;
    
    return (
      <span 
        className={cn(
          'flex-shrink-0',
          iconPosition === 'left' && (content || children) && 'mr-2',
          iconPosition === 'right' && (content || children) && 'ml-2'
        )}
        aria-hidden="true"
      >
        {icon}
      </span>
    );
  };

  /**
   * Render loading indicator
   */
  const renderLoading = () => {
    if (!loading) return null;
    
    return (
      <span 
        className="flex-shrink-0 mr-2 h-4 w-4"
        aria-hidden="true"
      >
        <svg 
          className="animate-spin h-full w-full" 
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4" 
            className="opacity-25"
          />
          <path 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            className="opacity-75"
          />
        </svg>
      </span>
    );
  };

  /**
   * Render content with proper structure
   */
  const renderContent = () => {
    const hasContent = content || children;
    
    return (
      <>
        {iconPosition === 'left' && renderIcon()}
        {renderLoading()}
        {hasContent && (
          <span className="truncate">
            {content || children}
          </span>
        )}
        {iconPosition === 'right' && renderIcon()}
      </>
    );
  };

  return (
    <button
      type="button"
      className={cn(
        // Component variants with responsive sizing
        componentVariants({ size, variant }),
        // Custom classes
        className
      )}
      disabled={disabled || loading}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-testid={testId}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

// Set display name for debugging
ComponentName.displayName = 'ComponentName';

export default ComponentName;
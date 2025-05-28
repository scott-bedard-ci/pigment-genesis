import { IconSize, IconColor, IconSpacing } from '../tokens/icons';

/**
 * Base props for all icon components
 */
export interface BaseIconProps {
  /**
   * Icon size - uses design token values
   */
  size?: IconSize;
  
  /**
   * Icon color - uses design token values or inherits from parent
   */
  color?: IconColor;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
  
  /**
   * Whether icon is decorative (hides from screen readers)
   */
  decorative?: boolean;
  
  /**
   * Custom style overrides
   */
  style?: React.CSSProperties;
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}

/**
 * Icon component props with name specification
 */
export interface IconProps extends BaseIconProps {
  /**
   * Name of the icon to render
   */
  name: IconName;
}

/**
 * All available icon names from Figma libraries
 */
export type CoreIconName = 
  | 'chevron-down'
  | 'chevron-up' 
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-double-right'
  | 'arrow-down'
  | 'arrow-up'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-diagonal'
  | 'info'
  | 'warning-triangle'
  | 'warning-filled'
  | 'close'
  | 'close-circle'
  | 'check'
  | 'check-circle'
  | 'check-filled'
  | 'plus'
  | 'minus'
  | 'search'
  | 'filter'
  | 'menu'
  | 'menu-dots'
  | 'settings'
  | 'settings-gear'
  | 'edit'
  | 'edit-pencil'
  | 'delete'
  | 'trash'
  | 'copy'
  | 'duplicate'
  | 'download'
  | 'upload'
  | 'share'
  | 'link'
  | 'external-link'
  | 'home'
  | 'user'
  | 'users'
  | 'user-circle'
  | 'phone'
  | 'email'
  | 'location'
  | 'calendar'
  | 'clock'
  | 'bookmark'
  | 'bookmark-filled'
  | 'heart'
  | 'heart-filled'
  | 'star'
  | 'star-filled'
  | 'eye'
  | 'eye-off'
  | 'lock'
  | 'unlock'
  | 'refresh'
  | 'sync'
  | 'undo'
  | 'redo'
  | 'play'
  | 'pause'
  | 'stop'
  | 'volume'
  | 'volume-off'
  | 'image'
  | 'document'
  | 'folder'
  | 'file'
  | 'cloud'
  | 'wifi'
  | 'notification'
  | 'bell'
  | 'shopping-cart'
  | 'credit-card'
  | 'dollar'
  | 'help'
  | 'question';

export type UniqueIconName = 
  // Currently no unique icons implemented - all to be extracted from Figma
  // TODO: Add real icon names as they are extracted from Figma Node ID: 16497:30176
  // Example: | 't-shirt' | 'facebook' | 'instagram'
  never; // Prevents usage until real icons are added

export type IconName = CoreIconName | UniqueIconName;

/**
 * Icon categories for organization
 */
export type IconCategory = 
  | 'navigation'
  | 'actions'
  | 'communication'
  | 'interface'
  | 'media'
  | 'commerce'
  | 'apparel'
  | 'design'
  | 'social'
  | 'status';
import React from 'react';
import { BaseIconProps, CoreIconName } from '../../../types/icons';

/**
 * Chevron Down Icon - Extracted from Figma Core Icons
 * Used in dropdowns, accordions, and collapsible components
 */
export const ChevronDownIcon: React.FC<BaseIconProps> = (props) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron Up Icon - Extracted from Figma Core Icons
 * Used in dropdowns, accordions, and collapsible components
 */
export const ChevronUpIcon: React.FC<BaseIconProps> = (props) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 6.5L6 1.5L1 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron Left Icon - Extracted from Figma Core Icons
 */
export const ChevronLeftIcon: React.FC<BaseIconProps> = (props) => (
  <svg
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 11L1.5 6L6.5 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Chevron Right Icon - Extracted from Figma Core Icons
 */
export const ChevronRightIcon: React.FC<BaseIconProps> = (props) => (
  <svg
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 1L6.5 6L1.5 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Warning Triangle Icon - Extracted from Figma Core Icons
 * Used for error messages and alerts
 */
export const WarningTriangleIcon: React.FC<BaseIconProps> = (props) => (
  <svg
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M8.22512 1.06392L13.0161 9.57734C13.8083 10.9851 13.0316 12.3165 11.4176 12.3165L1.91301 12.3165C0.297439 12.3165 -0.479613 10.9881 0.313317 9.5776L5.09936 1.06417C5.89653 -0.353844 7.42632 -0.35552 8.22512 1.06392ZM7.06343 1.71783C6.77488 1.20509 6.48539 1.30471 6.2619 1.71757L1.47586 10.231C1.24858 10.6773 1.31739 10.9832 1.91329 10.9832H11.4179C11.8544 10.9832 12.1468 10.7509 11.8544 10.2313L7.06343 1.71783ZM6.66195 10.3165C6.29376 10.3165 5.99528 10.018 5.99528 9.6498C5.99528 9.28161 6.29376 8.98313 6.66195 8.98313C7.03014 8.98313 7.32861 9.28161 7.32861 9.6498C7.32861 10.018 7.03014 10.3165 6.66195 10.3165ZM5.99528 4.3185C5.99528 3.94923 6.29119 3.64988 6.66195 3.64988C7.03014 3.64988 7.32861 3.9489 7.32861 4.3185V7.64793C7.32861 8.0172 7.0327 8.31655 6.66195 8.31655C6.29376 8.31655 5.99528 8.01753 5.99528 7.64793V4.3185Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

// Placeholder components for icons to be extracted from Figma
// TODO: Extract actual SVG paths from Figma core icons library
export const InfoIcon: React.FC<BaseIconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="m12 16v-4" stroke="currentColor" strokeWidth="2"/>
    <path d="m12 8h.01" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const CloseIcon: React.FC<BaseIconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="m18 6-12 12" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

/**
 * Check Icon - Extracted from Figma Core Icons / Checkbox component
 * Used for checkboxes, confirmations, and success states
 */
export const CheckIcon: React.FC<BaseIconProps> = (props) => (
  <svg
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M12.3671 0.320351C12.7943 0.747487 12.7943 1.44001 12.3671 1.86715L5.0609 9.17341C4.85532 9.37898 4.57636 9.49426 4.28563 9.49376C3.99491 9.49326 3.71634 9.37704 3.51147 9.17076L0.317717 5.95514C-0.107959 5.52655 -0.105595 4.83403 0.322996 4.40835C0.751587 3.98268 1.44411 3.98504 1.86978 4.41363L4.29014 6.85057L10.8204 0.320353C11.2475 -0.106784 11.94 -0.106784 12.3671 0.320351Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const SearchIcon: React.FC<BaseIconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

/**
 * Core Icons Library Mapping
 * Maps icon names to their components
 */
export const CoreIcons: Record<CoreIconName, React.FC<BaseIconProps>> = {
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-double-right': ChevronRightIcon, // TODO: Extract from Figma
  'arrow-down': ChevronDownIcon, // TODO: Extract from Figma
  'arrow-up': ChevronUpIcon, // TODO: Extract from Figma  
  'arrow-left': ChevronLeftIcon, // TODO: Extract from Figma
  'arrow-right': ChevronRightIcon, // TODO: Extract from Figma
  'arrow-diagonal': ChevronRightIcon, // TODO: Extract from Figma
  'info': InfoIcon,
  'warning-triangle': WarningTriangleIcon,
  'warning-filled': WarningTriangleIcon, // TODO: Extract filled version
  'close': CloseIcon,
  'close-circle': CloseIcon, // TODO: Extract from Figma
  'check': CheckIcon,
  'check-circle': CheckIcon, // TODO: Extract from Figma
  'check-filled': CheckIcon, // TODO: Extract from Figma
  'plus': InfoIcon, // TODO: Extract from Figma
  'minus': InfoIcon, // TODO: Extract from Figma
  'search': SearchIcon,
  'filter': SearchIcon, // TODO: Extract from Figma
  'menu': InfoIcon, // TODO: Extract from Figma
  'menu-dots': InfoIcon, // TODO: Extract from Figma
  'settings': InfoIcon, // TODO: Extract from Figma
  'settings-gear': InfoIcon, // TODO: Extract from Figma
  'edit': InfoIcon, // TODO: Extract from Figma
  'edit-pencil': InfoIcon, // TODO: Extract from Figma
  'delete': InfoIcon, // TODO: Extract from Figma
  'trash': InfoIcon, // TODO: Extract from Figma
  'copy': InfoIcon, // TODO: Extract from Figma
  'duplicate': InfoIcon, // TODO: Extract from Figma
  'download': InfoIcon, // TODO: Extract from Figma
  'upload': InfoIcon, // TODO: Extract from Figma
  'share': InfoIcon, // TODO: Extract from Figma
  'link': InfoIcon, // TODO: Extract from Figma
  'external-link': InfoIcon, // TODO: Extract from Figma
  'home': InfoIcon, // TODO: Extract from Figma
  'user': InfoIcon, // TODO: Extract from Figma
  'users': InfoIcon, // TODO: Extract from Figma
  'user-circle': InfoIcon, // TODO: Extract from Figma
  'phone': InfoIcon, // TODO: Extract from Figma
  'email': InfoIcon, // TODO: Extract from Figma
  'location': InfoIcon, // TODO: Extract from Figma
  'calendar': InfoIcon, // TODO: Extract from Figma
  'clock': InfoIcon, // TODO: Extract from Figma
  'bookmark': InfoIcon, // TODO: Extract from Figma
  'bookmark-filled': InfoIcon, // TODO: Extract from Figma
  'heart': InfoIcon, // TODO: Extract from Figma
  'heart-filled': InfoIcon, // TODO: Extract from Figma
  'star': InfoIcon, // TODO: Extract from Figma
  'star-filled': InfoIcon, // TODO: Extract from Figma
  'eye': InfoIcon, // TODO: Extract from Figma
  'eye-off': InfoIcon, // TODO: Extract from Figma
  'lock': InfoIcon, // TODO: Extract from Figma
  'unlock': InfoIcon, // TODO: Extract from Figma
  'refresh': InfoIcon, // TODO: Extract from Figma
  'sync': InfoIcon, // TODO: Extract from Figma
  'undo': InfoIcon, // TODO: Extract from Figma
  'redo': InfoIcon, // TODO: Extract from Figma
  'play': InfoIcon, // TODO: Extract from Figma
  'pause': InfoIcon, // TODO: Extract from Figma
  'stop': InfoIcon, // TODO: Extract from Figma
  'volume': InfoIcon, // TODO: Extract from Figma
  'volume-off': InfoIcon, // TODO: Extract from Figma
  'image': InfoIcon, // TODO: Extract from Figma
  'document': InfoIcon, // TODO: Extract from Figma
  'folder': InfoIcon, // TODO: Extract from Figma
  'file': InfoIcon, // TODO: Extract from Figma
  'cloud': InfoIcon, // TODO: Extract from Figma
  'wifi': InfoIcon, // TODO: Extract from Figma
  'notification': InfoIcon, // TODO: Extract from Figma
  'bell': InfoIcon, // TODO: Extract from Figma
  'shopping-cart': InfoIcon, // TODO: Extract from Figma
  'credit-card': InfoIcon, // TODO: Extract from Figma
  'dollar': InfoIcon, // TODO: Extract from Figma
  'help': InfoIcon, // TODO: Extract from Figma
  'question': InfoIcon, // TODO: Extract from Figma
};
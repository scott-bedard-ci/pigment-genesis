# Component Development Standards

This document outlines the comprehensive standards and guidelines for developing components in the Pigment-Genesis design system.

## Table of Contents

- [Overview](#overview)
- [Design-First Approach](#design-first-approach)
- [Component Architecture](#component-architecture)
- [Design Token Integration](#design-token-integration)
- [Responsive Design](#responsive-design)
- [Accessibility Standards](#accessibility-standards)
- [TypeScript Guidelines](#typescript-guidelines)
- [Testing Requirements](#testing-requirements)
- [Documentation Standards](#documentation-standards)
- [Code Quality](#code-quality)
- [Performance Considerations](#performance-considerations)

## Overview

Pigment-Genesis follows a **design-first approach** where every component is built directly from Figma specifications. This ensures pixel-perfect accuracy, design consistency, and instant rebrand capability through design tokens.

### Core Principles

1. **Design-First**: Never build components without Figma design specifications
2. **Accessibility-First**: WCAG compliance is mandatory, not optional
3. **Mobile-First**: All components must work seamlessly across devices
4. **Token-Driven**: Use design tokens exclusively for rebrand capability
5. **Test-Driven**: Comprehensive testing ensures reliability and quality

## Design-First Approach

### CRITICAL RULE: No Components Without Figma

**NEVER create components without Figma design data.** This is fundamental to maintaining design consistency and ensuring rebrand capability.

#### Required Before Development

1. **Complete Figma Frame URLs** for all component states
2. **Design Token Extraction** from Figma specifications
3. **Responsive Behavior** documented in design files
4. **Interactive States** defined (hover, active, disabled, focus)
5. **Accessibility Requirements** specified in design

#### Figma Frame Documentation

Each component must maintain a `.figmaframes.json` file:

```json
{
  "componentName": "Button",
  "figmaFileId": "abc123def456",
  "frames": [
    {
      "id": "frame-1-2",
      "name": "Button - All States",
      "url": "https://figma.com/design/fileId/fileName?node-id=1-2",
      "description": "Primary button with all interactive states",
      "variants": ["primary", "secondary", "outline"],
      "sizes": ["sm", "md", "lg"],
      "states": ["default", "hover", "active", "disabled", "focus"],
      "responsive": ["mobile", "tablet", "desktop"],
      "dateAdded": "2025-01-31T00:00:00Z",
      "lastUpdated": "2025-01-31T00:00:00Z"
    }
  ],
  "designTokens": {
    "colors": ["primary-500", "primary-600", "primary-700"],
    "spacing": ["sm", "md", "lg"],
    "typography": ["body-medium"],
    "effects": ["shadow-sm", "shadow-md"]
  },
  "buildHistory": [
    {
      "version": "1.0.0",
      "date": "2025-01-31T00:00:00Z",
      "developer": "System",
      "changes": ["Initial implementation"]
    }
  ]
}
```

## Component Architecture

### File Structure

Every component follows a consistent structure:

```
ComponentName/
├── ComponentName.tsx          # Main component implementation
├── ComponentName.stories.ts   # Storybook stories
├── ComponentName.test.ts      # Test suite
├── ComponentName.figmaframes.json  # Figma frame history
└── index.ts                   # Export file
```

### Component Template

Use the standard component template as a foundation:

```typescript
import React from 'react';
import { cn } from '../utils/classNames';
import { createComponentVariants, touchTarget } from '../utils/componentVariants';
import type { VariantComponentProps } from '../types/component';

const componentVariants = createComponentVariants([
  // Base responsive classes
  'w-full md:w-auto',
  // Interactive foundation
  'inline-flex items-center justify-center',
  // Design token integration
  'font-medium rounded-md border border-transparent',
  // Accessibility
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  // Motion with user preferences
  'motion-safe:transition-all motion-safe:duration-200',
  // Touch targets
  touchTarget('minimum'),
  // Disabled state
  'disabled:opacity-50 disabled:cursor-not-allowed'
]);

interface ComponentNameProps extends VariantComponentProps {
  // Component-specific props
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  size = 'md',
  variant = 'primary',
  disabled = false,
  className,
  children,
  'data-testid': testId,
  ...props
}) => {
  return (
    <element
      className={cn(
        componentVariants({ size, variant }),
        className
      )}
      disabled={disabled}
      data-testid={testId}
      {...props}
    >
      {children}
    </element>
  );
};

ComponentName.displayName = 'ComponentName';
```

### Atomic Design Hierarchy

Components are organized by atomic design principles:

- **Atoms**: Basic building blocks (Button, Input, Icon)
- **Molecules**: Simple combinations (InputField, ButtonGroup)
- **Organisms**: Complex combinations (Navigation, Header)
- **Templates**: Page-level layouts
- **Pages**: Specific implementations

## Design Token Integration

### Mandatory Token Usage

**ALL design values must come from design tokens.** Never hardcode:

- Colors (`#ff0000` ❌ → `bg-primary-500` ✅)
- Spacing (`margin: 16px` ❌ → `m-md` ✅)
- Typography (`font-size: 18px` ❌ → `text-lg` ✅)
- Effects (`box-shadow: 0 2px 4px...` ❌ → `shadow-md` ✅)

### Token Categories

```typescript
// Colors - extracted from Figma
colors: {
  primary: { 50: '#f0f4ff', 500: '#6366f1', 900: '#312e81' },
  secondary: { 50: '#fdf4ff', 500: '#d946ef', 900: '#701a75' },
  // ... semantic colors
}

// Spacing - 4px grid system
spacing: {
  xs: '4px',   // Tight layouts
  sm: '8px',   // Compact padding
  md: '16px',  // Default spacing
  lg: '24px',  // Generous padding
  xl: '32px'   // Major separation
}

// Typography - Figma text styles
typography: {
  heading: { h1: { fontSize: 32, fontWeight: 700 } },
  body: { medium: { fontSize: 16, lineHeight: 1.5 } }
}
```

### Rebrand Readiness

Design tokens enable instant rebranding:

1. Update Figma design tokens
2. Run `npm run extract-figma-tokens`
3. All components automatically use new values
4. Complete rebrand with zero code changes

## Responsive Design

### Mobile-First Approach

All components start with mobile design and enhance for larger screens:

```typescript
// Mobile-first responsive classes
const responsiveClasses = cn(
  // Mobile (base)
  'text-sm px-2 py-1',
  // Tablet (md:)
  'md:text-base md:px-3 md:py-2',
  // Desktop (lg:)
  'lg:text-lg lg:px-4 lg:py-3'
);
```

### Breakpoint System

```typescript
// Breakpoints from design tokens
breakpoints: {
  xs: '375px',   // Mobile small
  sm: '640px',   // Mobile large
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Desktop large
  '2xl': '1536px' // Desktop extra large
}
```

### Touch Targets

All interactive elements must meet minimum touch target sizes:

```typescript
// Touch target utilities
touchTarget('minimum')    // 44px minimum (iOS)
touchTarget('comfortable') // 48px comfortable
touchTarget('large')      // 56px large
```

## Accessibility Standards

### WCAG 2.1 AA Compliance

Every component must meet WCAG 2.1 Level AA standards:

#### Keyboard Navigation
- Full keyboard support (Tab, Enter, Space, Arrow keys)
- Logical tab order
- Visible focus indicators
- No keyboard traps

#### Screen Reader Support
- Proper semantic HTML
- ARIA labels and descriptions
- Live region announcements
- Accessible names for all interactive elements

#### Visual Accessibility
- Color contrast ratios ≥ 4.5:1
- No color-only information conveyance
- Scalable text up to 200%
- Motion respects `prefers-reduced-motion`

### Implementation Requirements

```typescript
// Accessibility attributes
<button
  aria-label="Close dialog"
  aria-describedby="dialog-description"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
>
  Close
</button>

// Focus management
const buttonRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  if (autoFocus) {
    buttonRef.current?.focus();
  }
}, [autoFocus]);

// Keyboard handlers
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
};
```

## TypeScript Guidelines

### Interface Standards

All components must use TypeScript with proper interfaces:

```typescript
// Extend base component props
interface ButtonProps extends VariantComponentProps {
  /** Button content */
  children: React.ReactNode;
  
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /** Loading state */
  loading?: boolean;
  
  /** Icon element */
  icon?: React.ReactNode;
  
  /** Icon position */
  iconPosition?: 'left' | 'right';
}

// Use strict typing for variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
```

### Type Safety

- Use discriminated unions for complex prop relationships
- Provide default values for optional props
- Export component prop types for consumption
- Use `React.FC<Props>` for component typing

## Testing Requirements

### Test Coverage Standards

Every component must have **≥80% test coverage** including:

#### Unit Tests
- Component rendering with all prop combinations
- Variant and size applications
- State management (disabled, loading, etc.)
- Event handlers and user interactions

#### Accessibility Tests
- Axe-core violations (zero tolerance)
- Keyboard navigation flows
- Focus management
- Screen reader compatibility

#### Responsive Tests
- Behavior across all breakpoints
- Touch target compliance
- Mobile interaction patterns

#### Integration Tests
- Component composition
- Form integration
- Navigation flows

### Test Structure

```typescript
describe('ComponentName', () => {
  // Standard component tests
  runStandardComponentTests(ComponentName, {
    variants: ['primary', 'secondary', 'outline'],
    sizes: ['sm', 'md', 'lg'],
    requiredProps: {}
  });

  // Accessibility tests
  runAccessibilityTests(ComponentName, {
    content: 'Test content'
  });

  // Component-specific tests
  describe('Component-specific behavior', () => {
    it('handles specific interaction', () => {
      // Test implementation
    });
  });
});
```

## Documentation Standards

### Storybook Stories

Each component requires comprehensive Storybook documentation:

#### Required Stories
- **Default**: Basic component usage
- **Variants**: All visual variants
- **Sizes**: All size options
- **Responsive**: Mobile, tablet, desktop behavior
- **Accessibility**: Keyboard navigation, screen reader testing
- **Interactive**: Event handling demonstrations
- **Edge Cases**: Error states, long content, empty states

#### Story Structure

```typescript
export default {
  title: 'Atoms/ComponentName',
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: `
## Component Overview
Detailed component description with usage guidelines.

### Key Features
- Feature list
- Design token integration
- Accessibility compliance

### Usage Guidelines
- Do's and don'ts
- Best practices
- Related components
        `
      }
    }
  }
};
```

### Code Documentation

```typescript
/**
 * ComponentName provides [brief description]
 * 
 * @example
 * ```tsx
 * <ComponentName
 *   variant="primary"
 *   size="md"
 *   onClick={() => console.log('clicked')}
 * >
 *   Click me
 * </ComponentName>
 * ```
 */
export const ComponentName: React.FC<ComponentNameProps> = ({
  // Component implementation
}) => {
  // Implementation details
};
```

## Code Quality

### ESLint Rules

Follow the project's ESLint configuration:

- Use `const` over `let` when possible
- Prefer functional components
- Use meaningful variable names
- Remove unused imports and variables
- Follow naming conventions

### Code Organization

```typescript
// 1. Imports (grouped and sorted)
import React from 'react';
import { cn } from '../utils/classNames';
import type { ComponentProps } from '../types/component';

// 2. Types and interfaces
interface ComponentNameProps extends ComponentProps {
  // Props definition
}

// 3. Component variants and styles
const componentVariants = createComponentVariants(/* ... */);

// 4. Component implementation
export const ComponentName: React.FC<ComponentNameProps> = (props) => {
  // 4a. Props destructuring
  const { prop1, prop2, ...rest } = props;
  
  // 4b. State and hooks
  const [state, setState] = useState();
  
  // 4c. Event handlers
  const handleEvent = () => {};
  
  // 4d. Render helpers
  const renderHelper = () => {};
  
  // 4e. Main render
  return (/* JSX */);
};

// 5. Display name and exports
ComponentName.displayName = 'ComponentName';
export default ComponentName;
```

### Performance Considerations

- Use `React.memo()` for expensive components
- Implement proper `useCallback` and `useMemo` usage
- Avoid inline objects and functions in JSX
- Minimize re-renders through proper dependency arrays

## Performance Considerations

### Bundle Size

- Keep component bundle size minimal
- Use tree-shaking friendly exports
- Avoid heavy dependencies
- Implement code splitting for large components

### Runtime Performance

- Minimize DOM operations
- Use efficient CSS classes
- Implement proper React optimization patterns
- Test performance across devices

### Memory Management

- Clean up event listeners
- Cancel pending async operations
- Implement proper cleanup in useEffect

## Review Checklist

Before submitting a component for review, ensure:

### Design Compliance
- [ ] Built from Figma specifications
- [ ] Uses design tokens exclusively
- [ ] Maintains pixel-perfect accuracy
- [ ] Documents Figma frame sources

### Functionality
- [ ] All variants and sizes implemented
- [ ] Interactive states working correctly
- [ ] Props interface complete and typed
- [ ] Error handling implemented

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation functional
- [ ] Screen reader compatible
- [ ] Touch targets meet minimum size

### Testing
- [ ] ≥80% test coverage achieved
- [ ] All tests passing
- [ ] Accessibility tests included
- [ ] Responsive behavior tested

### Documentation
- [ ] Storybook stories complete
- [ ] Component documentation written
- [ ] Usage examples provided
- [ ] Edge cases documented

### Code Quality
- [ ] TypeScript interfaces proper
- [ ] ESLint rules followed
- [ ] Performance optimized
- [ ] No console errors or warnings

This comprehensive standards document ensures every component meets the high quality bar expected in the Pigment-Genesis design system.
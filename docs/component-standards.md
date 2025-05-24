# Component Development Standards

This document defines the exact standards and patterns that must be followed when creating components in the Pigment Genesis design system.

## 🎯 PRIMARY DIRECTIVE: PERFECTION IS THE ONLY ACCEPTABLE STANDARD

**CRITICAL MINDSET:** Building each component perfectly is infinitely more important than building components quickly. Take ALL the time necessary to achieve perfection.

**QUALITY REQUIREMENTS:**
- **100% Figma fidelity** - Every pixel must match exactly
- **100% documentation compliance** - Every guideline must be followed  
- **100% accessibility standards** - Every requirement must be met
- **100% design token usage** - No shortcuts or hardcoded values
- **100% test coverage** - Every interaction and state tested

**TIME & COST ARE NOT FACTORS:**
- Spend unlimited time analyzing Figma frames thoroughly
- Take all necessary time to extract every design property perfectly
- Use as many tool calls as needed for thorough analysis
- Perfect implementation matters more than efficiency

## 🎯 Core Principles

### 1. Design-First Development (CRITICAL)
- **NEVER create components without Figma designs** - No "standard" or "common" components
- **ALL design values must come from Figma** - No assumptions or hardcoded values
- **Every pixel must be verified** against Figma specifications
- **Design tokens must be extracted** from Figma design system
- **Rebrand capability is mandatory** - all styling through tokens only

### 2. Atomic Design Hierarchy
```
Atoms → Molecules → Organisms → Templates → Pages
```

**Atoms (Basic Building Blocks)**
- Button, Input, Badge, Avatar, Icon, Typography
- No dependencies on other components
- Pure, reusable, single-purpose elements

**Molecules (Simple Combinations)**
- Card, FormField, SearchBar, Pagination, Tooltip
- Combine 2-3 atoms with specific functionality
- Still relatively simple and reusable

**Organisms (Complex Components)**
- Header, DataTable, Modal, Form, Navigation
- Complex functionality requiring multiple molecules/atoms
- May have complex state management

## 📁 Component Structure

Each component must follow this exact structure:

```
src/components/atoms/Button/
├── Button.tsx                 # Main component file
├── Button.stories.ts          # Storybook stories
├── Button.test.ts             # Comprehensive tests
├── Button.figmaframes.json    # Figma frame history and metadata
└── index.ts                   # Export file
```

### Component File Requirements

#### 1. Main Component File (`ComponentName.tsx`)
```typescript
import React from 'react';
import { cn } from '@/utils/classNames';
import { buttonVariants } from '@/utils/componentVariants';
import type { VariantComponentProps } from '@/types/component';

// Component variants using design tokens exclusively
const componentVariants = buttonVariants.extend({
  // Component-specific extensions
});

interface ComponentProps extends VariantComponentProps {
  // Component-specific props with full TypeScript support
}

/**
 * ComponentName - Brief description
 * 
 * Built from Figma designs with pixel-perfect fidelity.
 * Uses design tokens exclusively for instant rebrand capability.
 */
export const ComponentName = React.forwardRef<HTMLElement, ComponentProps>(
  ({ ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(
          // Base classes from design tokens
          'design-token-classes',
          // Variant classes
          componentVariants({ variant, size }),
          // Responsive classes
          'responsive-classes',
          // Touch targets
          'min-h-[44px] min-w-[44px]',
          // Custom classes
          className
        )}
        {...props}
      />
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

#### 2. Figma Frame History (`ComponentName.figmaframes.md`)
```markdown
# Button Component - Figma Frame History

## Component Information
- **Component Name:** Button
- **Atomic Level:** Atom
- **Last Updated:** 2025-01-23T10:30:00Z
- **Status:** Active
- **Current Version:** 1.0.0

## Current Figma Frames

### Default States
- **Frame ID:** `1:2`
- **Frame URL:** [Button - Primary Default](https://figma.com/file/abc123/design?node-id=1:2)
- **Description:** Primary button default state
- **Status:** Active

- **Frame ID:** `1:3`
- **Frame URL:** [Button - Primary Hover](https://figma.com/file/abc123/design?node-id=1:3)
- **Description:** Primary button hover state
- **Status:** Active

## Design Token Mappings
| Token Path | Figma Token | Current Value | Usage |
|------------|-------------|---------------|-------|
| `colors.primary.500` | colors/primary/500 | #3b82f6 | Primary background |
| `colors.primary.600` | colors/primary/600 | #2563eb | Primary hover state |
| `spacing.md` | spacing/md | 16px | Button padding |
| `typography.bodyMedium` | typography/body/medium | 16px/24px | Button text |

## Build History

### Version 1.0.0 - Initial Implementation
**Date:** 2025-01-23T10:30:00Z
**Changes Made:**
- ✅ Created component from Figma designs
- ✅ Extracted design tokens
- ✅ Implemented all variants and states
- ✅ Added accessibility features

**Quality Audit Results:**
- ✅ Design Fidelity: 98%
- ✅ Token Usage: 100%
- ✅ Accessibility: 100%
```

## 🎨 Design Token Usage

### Mandatory Token Usage
```typescript
// ❌ NEVER - Hardcoded values break rebrand capability
<button className="bg-blue-500 text-white px-4 py-2 rounded-md">

// ✅ ALWAYS - Design tokens enable instant rebrand
<button className={cn(
  'bg-primary-500 text-white',        // Color tokens
  'px-md py-sm',                      // Spacing tokens  
  'rounded-md',                       // Effect tokens
  'text-body-md font-medium'          // Typography tokens
)}>
```

### Required Token Categories
1. **Colors** - `tokens.colors.primary[500]`
2. **Spacing** - `tokens.spacing.md`
3. **Typography** - `tokens.typography.bodyMedium`
4. **Effects** - `tokens.effects.shadow.sm`
5. **Breakpoints** - `tokens.breakpoints.md`

## 📱 Responsive Design Requirements

### Mobile-First Approach
```typescript
// Start with mobile design, enhance for larger screens
className={cn(
  // Mobile-first base
  'w-full px-4 py-2 text-sm',
  // Tablet enhancement
  'md:w-auto md:px-6 md:py-3 md:text-base',
  // Desktop enhancement  
  'lg:px-8 lg:py-4 lg:text-lg'
)}
```

### Touch Target Requirements
- **Minimum size**: 44px × 44px (iOS requirement)
- **Comfortable size**: 48px × 48px  
- **Large size**: 56px × 56px for accessibility

```typescript
// Always include minimum touch targets
className={cn(
  'min-h-[44px] min-w-[44px]',  // Required
  touchTargets.minimum           // From shared utility
)}
```

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance
All components must meet these requirements:

#### 1. Keyboard Navigation
```typescript
// Support Tab, Enter, Space, Escape
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
}}
```

#### 2. ARIA Support
```typescript
// Proper ARIA attributes
aria-label="descriptive label"
aria-describedby="help-text-id"
role="button"
aria-disabled={disabled}
```

#### 3. Focus Management
```typescript
// Visible focus indicators
className={cn(
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-primary-500', 
  'focus-visible:ring-offset-2'
)}
```

#### 4. Color Contrast
- **Text**: 4.5:1 minimum ratio
- **Interactive elements**: 3:1 minimum ratio
- **Graphics**: 3:1 minimum ratio

## 🧪 Testing Requirements

### Comprehensive Test Coverage
Every component requires these test categories:

#### 1. Standard Component Tests (Automated)
```typescript
// Use shared test suite
runStandardComponentTests(Component, {
  variants: ['primary', 'secondary', 'outline'],
  sizes: ['sm', 'md', 'lg'],
  requiredProps: { children: 'Test' }
});
```

#### 2. Component-Specific Tests
```typescript
describe('Button-specific behavior', () => {
  it('handles click events correctly', () => {
    // Component-specific test logic
  });
});
```

#### 3. Accessibility Tests
```typescript
it('has no accessibility violations', async () => {
  const { container } = renderWithProviders(<Component />);
  await testAccessibility(container);
});
```

#### 4. Responsive Tests
```typescript
// Test component behavior across breakpoints
testResponsiveComponent(Component, props);
```

## 📖 Storybook Documentation

### Required Stories
Each component must include these stories:

1. **Default** - Basic usage example
2. **All Variants** - Showcase all variant options
3. **All Sizes** - Demonstrate size options
4. **Responsive Demo** - Cross-breakpoint behavior
5. **Accessibility** - Focus states and keyboard navigation
6. **Design Tokens** - Token usage demonstration

### Story Structure
```typescript
import { createStoryMeta, generateStandardStories } from '@/utils/storybook';

const meta = createStoryMeta('Atoms/Button', Button);

// Auto-generate standard stories
const standardStories = generateStandardStories(Button, {
  variants: ['primary', 'secondary', 'outline'],
  sizes: ['sm', 'md', 'lg'],
  hasResponsiveDemo: true
});

export const { Default, AllVariants, ResponsiveDemo } = standardStories;
```

## 🔄 SwiftUI Integration

### Automatic SwiftUI Generation
Every React component must have a SwiftUI equivalent:

```swift
public struct Button: View {
    // Props matching React component
    private let variant: Variant
    private let size: Size
    private let content: String
    
    public var body: some View {
        SwiftUI.Button(content) {
            action?()
        }
        .font(size.font)                    // Figma token
        .padding(size.padding)              // Figma token  
        .background(variant.backgroundColor) // Figma token
        .foregroundColor(variant.foregroundColor) // Figma token
        .frame(minHeight: 44)               // Touch target
    }
}
```

## 🏗 DRY Principles

### Shared Utilities Usage
Always use shared utilities to avoid code duplication:

#### 1. Class Names
```typescript
import { cn } from '@/utils/classNames';

// Combine classes with conflict resolution
className={cn('base-classes', 'conditional-classes', className)}
```

#### 2. Component Variants  
```typescript
import { buttonVariants } from '@/utils/componentVariants';

// Extend base variants for component-specific needs
const myComponentVariants = buttonVariants.extend({
  // Component-specific variants
});
```

#### 3. Testing Utilities
```typescript
import { 
  renderWithProviders, 
  testAccessibility,
  runStandardComponentTests 
} from '@/utils/testing';
```

#### 4. Storybook Utilities
```typescript
import { 
  createStoryMeta,
  generateStandardStories,
  standardArgTypes 
} from '@/utils/storybook';
```

## 📊 Quality Assurance Checklist

Before any component is considered complete:

### Design Fidelity
- [ ] **95%+ pixel accuracy** to Figma designs
- [ ] **All design tokens extracted** from Figma
- [ ] **No hardcoded values** anywhere in component
- [ ] **Cross-browser compatibility** verified

### Functionality  
- [ ] **All variants working** correctly
- [ ] **All sizes working** correctly
- [ ] **All interactive states** implemented
- [ ] **Error states** handled appropriately

### Accessibility
- [ ] **Keyboard navigation** fully functional
- [ ] **Screen reader** compatibility verified
- [ ] **Color contrast** meets WCAG standards
- [ ] **Touch targets** meet minimum requirements

### Testing
- [ ] **100% test coverage** for component logic
- [ ] **Accessibility tests** passing
- [ ] **Responsive tests** passing
- [ ] **Cross-browser tests** passing

### Documentation
- [ ] **Storybook stories** complete with examples
- [ ] **Component props** fully documented
- [ ] **Usage guidelines** provided
- [ ] **Design token usage** documented

### Cross-Platform
- [ ] **SwiftUI equivalent** generated and verified
- [ ] **Design consistency** across React and SwiftUI
- [ ] **Token mapping** validated

## 🚨 Audit Requirements

### Post-Build Audit (MANDATORY)
Every component must pass comprehensive audit before completion:

1. **Design Fidelity Audit** - Pixel-perfect comparison with Figma
2. **Token Usage Audit** - Verify no hardcoded values
3. **Accessibility Audit** - Automated and manual testing
4. **Performance Audit** - Bundle size and runtime performance
5. **Documentation Audit** - Complete and accurate documentation
6. **Cross-Platform Audit** - React/SwiftUI consistency

### Audit Failure Protocol
🚨 **If audit fails, component development STOPS**

1. **Identify failing criteria**
2. **Fix all issues** before proceeding
3. **Re-run audit** until all criteria pass
4. **Document fixes** in build history

## 📈 Success Metrics

### Component Quality Metrics
- **Design Fidelity**: 95%+ pixel accuracy
- **Test Coverage**: 100% for component logic
- **Accessibility**: Zero violations in automated tests
- **Performance**: < 5KB bundle size increase per component
- **Documentation**: 100% prop documentation coverage

### System-Wide Metrics
- **Token Usage**: 100% design token usage (no hardcoded values)
- **Consistency**: Visual consistency score > 95%
- **Rebrand Capability**: Full rebrand in < 5 minutes
- **Cross-Platform**: 100% React/SwiftUI feature parity

---

These standards ensure every component meets the highest quality bar and contributes to a cohesive, maintainable, and scalable design system.
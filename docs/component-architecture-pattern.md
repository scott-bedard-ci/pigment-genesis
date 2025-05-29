# 🏗️ Component Architecture Pattern - MANDATORY REFERENCE

## 🚨 CRITICAL: This Pattern Must Be Followed Exactly

Every component in the Pigment-Genesis design system **MUST** follow this exact architectural pattern. No exceptions.

## ✅ Required Architecture Template

```typescript
import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/classNames';
import { BaseComponentProps } from '../../../types/component'; // If available

// 1. MANDATORY: CVA Variants Configuration
const componentVariants = cva(
  [
    // Base styles using design token classes
    'inline-flex items-center justify-center',
    'font-medium transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2',
    'disabled:pointer-events-none disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-interactive-bg-bold text-interactive-text-on-fill',
          'hover:bg-interactive-bg-bold-hover',
          'active:bg-interactive-bg-bold-pressed',
          'disabled:bg-interactive-border-disabled disabled:text-interactive-text-disabled'
        ],
        secondary: [
          'bg-neutral-bg-primary text-interactive-text-default',
          'border border-interactive-border-bold',
          'hover:bg-primary-50',
          'active:bg-primary-100',
          'disabled:bg-neutral-bg-primary disabled:text-interactive-text-disabled disabled:border-interactive-border-disabled'
        ]
      },
      size: {
        small: ['text-sm px-3 py-1.5 h-8'],
        medium: ['text-sm px-4 py-2 h-10'],
        large: ['text-base px-6 py-3 h-12']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium'
    }
  }
);

// 2. MANDATORY: TypeScript Interface with VariantProps
export interface ComponentProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
          VariantProps<typeof componentVariants>,
          BaseComponentProps {
  /**
   * Custom prop description
   */
  customProp?: string;
}

// 3. MANDATORY: Component Implementation with forwardRef
export const Component = forwardRef<HTMLButtonElement, ComponentProps>(
  (
    {
      variant,
      size,
      className,
      children,
      customProp,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Component.displayName = 'Component';

export default Component;
```

## 🎯 Design Token Class Examples

### ✅ CORRECT: Use Design Token Classes
```typescript
// Backgrounds
'bg-neutral-bg-primary'           // White background
'bg-interactive-bg-bold'          // Primary blue background
'bg-error-500'                    // Error red background

// Text Colors  
'text-neutral-text-primary'       // Primary text color (87% black)
'text-interactive-text-on-fill'   // White text on colored backgrounds
'text-error-500'                  // Error text color

// Borders
'border-neutral-border-strong'    // Default border color
'border-primary-500'              // Focus border color
'border-error-500'                // Error border color

// States via CVA variants - NOT inline styles
hover:bg-interactive-bg-bold-hover
active:bg-interactive-bg-bold-pressed
disabled:bg-interactive-border-disabled
```

### ❌ FORBIDDEN: Do NOT Use These Patterns
```typescript
// ❌ NEVER: Inline styles with JavaScript objects
style={{ 
  color: semanticColors.neutral.text.primary,
  backgroundColor: colors.primary[500] 
}}

// ❌ NEVER: Direct token imports for styling
import { semanticColors } from '../../../tokens/colors';
const textColor = semanticColors.neutral.text.primary;

// ❌ NEVER: Hardcoded color values
style={{ color: '#1e39d2' }}
className="text-[#1e39d2]"

// ❌ NEVER: Mixed inline and class approaches
<div 
  className="bg-neutral-bg-primary" 
  style={{ color: semanticColors.neutral.text.primary }}
>
```

## 📋 Pre-Implementation Checklist

Before writing any component code, ALWAYS:

1. ✅ **Read Button.tsx** - Reference the CVA + Tailwind pattern
2. ✅ **Read Avatar.tsx** - See how design token classes are used
3. ✅ **Check tailwind.config.js** - Understand available design token classes
4. ✅ **Plan CVA variants** - Map all states and sizes to design token classes
5. ✅ **NO inline styles** - Verify you're not using `style={{}}` anywhere

## 🔍 Existing Component References

### Button Component Pattern
```typescript
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-semibold transition-colors duration-200'
  ],
  {
    variants: {
      variant: {
        primary: ['bg-interactive-bg-bold text-interactive-text-on-fill'],
        secondary: ['bg-neutral-bg-primary border border-interactive-border-bold']
      }
    }
  }
);
```

### Avatar Component Pattern  
```typescript
const avatarVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-full font-medium text-[#181818]'
  ],
  {
    variants: {
      size: {
        small: ['w-[26px] h-[26px] text-[11px]'],
        large: ['w-12 h-12 text-[14px]']
      }
    }
  }
);
```

## 🚨 Architecture Violations = Immediate Fix Required

If you see ANY of these patterns in component code:
- `style={{}}` attributes with JavaScript objects
- `import { semanticColors }` for styling purposes
- Hardcoded color values like `#1e39d2` or `rgba(0,0,0,0.86)`
- Missing CVA variant configuration
- Missing `VariantProps<typeof componentVariants>` in TypeScript interface

**STOP and fix immediately** - these break the design system architecture.

## 💡 Why This Pattern Matters

1. **Consistency**: Every component follows identical patterns
2. **Maintainability**: Design token changes propagate automatically
3. **Performance**: Tailwind CSS optimizes class usage
4. **Rebrand-Ready**: Token updates in Figma → automatic component updates
5. **Type Safety**: CVA provides compile-time validation of variants
6. **Scale**: Pattern works for 50-100+ components

Remember: **Consistency is the foundation of great design systems.**
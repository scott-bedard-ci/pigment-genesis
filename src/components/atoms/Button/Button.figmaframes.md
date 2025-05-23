# Button Component - Figma Frame Reference

## Frame Usage History

### 2025-05-23 - Initial Implementation
**Developer**: Claude (Pigment-Genesis Design System Engineer)  
**Figma Frames Used**:
1. **"How to use" Button Frame**
   - **Node ID**: 2949:3144
   - **Purpose**: Complete button component specification and usage guidelines
   - **Analysis Date**: 2025-05-23
   - **What was extracted**: 
     - Button variants: Primary, Secondary, Tertiary
     - Size specifications: Small (32px), Medium (40px), Large (48px)
     - Interactive states: Enabled, Hover, Pressed, Disabled
     - Icon configurations: Text only, Icon only, Left icon, Right icon
     - Color specifications: #1e39d2 (primary), #182ea8 (hover), #132486 (pressed), #fa3c00 (tertiary)
     - Typography: Sharp Sans Semibold font family
     - Spacing specifications: px-4 py-3 for Large, px-4 py-2 for Medium, px-4 py-1.5 for Small
     - Border radius: 6px (rounded-md)
     - Design guidelines and usage notes
     - Responsive behavior requirements

**Summary of Changes**: Complete button component implementation with all variants, sizes, states, and icon configurations. Built with mobile-first responsive design, proper accessibility, and exact Figma design token specifications.

## Design Specifications Extracted

### Color Design Tokens
- **Primary Background**: `#1e39d2` (interactive/background/bold)
- **Primary Hover**: `#182ea8` (interactive/background/boldHover) 
- **Primary Pressed**: `#132486` (interactive/background/boldPressed)
- **Tertiary Background**: `#fa3c00` (primitives/color/red/default)
- **Text on Fill**: `#ffffff` (interactive/text/onFill)
- **Disabled Background**: `rgba(0,0,0,0.18)` (interactive/background/boldDisabled)
- **Disabled Text**: `rgba(0,0,0,0.41)` (interactive/text/disabled)
- **Secondary Border**: `#1e39d2` (same as primary)

### Typography Specifications  
- **Font Family**: Sharp Sans Semibold
- **Large Size**: 16px / 20px line height
- **Medium Size**: 14px / 18px line height  
- **Small Size**: 12px / 16px line height

### Spacing & Layout
- **Large Button**: px-4 py-3 (16px horizontal, 12px vertical)
- **Medium Button**: px-4 py-2 (16px horizontal, 8px vertical)
- **Small Button**: px-4 py-1.5 (16px horizontal, 6px vertical)
- **Border Radius**: 6px (rounded-md)
- **Icon Gap**: 8px (gap-2)
- **Minimum Touch Target**: 44px (mobile accessibility)

### Responsive Behavior
- **Mobile**: Full width buttons (w-full)
- **Desktop**: Auto width buttons (md:w-auto)
- **Touch Targets**: Minimum 44px height for mobile accessibility
- **Progressive Enhancement**: Enhanced sizing on larger screens

## Implementation Notes

### Component Architecture
- **Base Component**: Button.tsx with comprehensive TypeScript interfaces
- **Variant System**: CVA (Class Variance Authority) for consistent styling
- **Icon Support**: Left icon, right icon, icon-only configurations
- **State Management**: Loading, disabled, and interactive states
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels

### Technical Decisions
- **Mobile-First**: Responsive design starting from mobile breakpoint
- **Design Tokens**: All colors and spacing extracted directly from Figma
- **Touch Accessibility**: 44px minimum touch targets for mobile users
- **Performance**: Optimized rendering with proper event handling
- **Type Safety**: Full TypeScript coverage with shared base interfaces

### Usage Guidelines from Figma
- **Size Recommendations**: Large for consumer-facing, Medium/Small for internal tools
- **State Usage**: Disabled for incomplete workflows, Loading for async operations
- **Icon Guidelines**: Icon-only buttons require accessible labels
- **Responsive Strategy**: Full width on mobile, auto width on desktop

## Future Updates

### Process for Design Changes
1. **Update Figma Frame Reference**: Record new Node ID if frame changes
2. **Extract New Design Tokens**: Update color/spacing specifications
3. **Update Component Implementation**: Apply new specifications to code
4. **Update Tests**: Ensure tests cover new specifications
5. **Update Documentation**: Reflect changes in Storybook and usage guidelines
6. **Update SwiftUI Equivalent**: Sync iOS component with React changes

### Maintainability
- **Design Token Sync**: All values traceable back to Figma specifications
- **Component Tests**: Comprehensive coverage ensures stability during updates
- **Documentation**: Storybook stories reflect current capabilities
- **Accessibility**: Maintained across all updates with automated testing
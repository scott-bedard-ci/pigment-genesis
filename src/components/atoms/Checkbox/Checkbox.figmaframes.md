# Checkbox Component - Figma Frame Reference

## Frame Usage History

### 2025-05-23 - Initial Implementation
**Developer**: Claude (Pigment-Genesis Design System Engineer)  
**Figma Frames Used**:
1. **"How to use" Checkbox Frame**
   - **Node ID**: 3364:3856
   - **Purpose**: Complete checkbox component specification and state variations
   - **Analysis Date**: 2025-05-23
   - **What was extracted**: 
     - Checkbox states: Enabled, Selected, Disabled
     - Visual specifications: 18px checkbox size, 2.75px border radius
     - Color specifications: #1e39d2 (selected), rgba(0,0,0,0.74) (enabled border)
     - Disabled states: rgba(0,0,0,0.03) border, rgba(0,0,0,0.41) text
     - Check icon specifications and positioning
     - Label typography: Sharp Sans Medium, 14px
     - Layout with 8px gap between checkbox and label
     - Interactive behavior notes

**Summary of Changes**: Complete checkbox component implementation with all states, proper accessibility, and exact Figma design specifications. Built with mobile-first responsive design and comprehensive form integration support.

## Design Specifications Extracted

### Color Design Tokens
- **Selected Background**: `#1e39d2` (interactive/background/bold)
- **Selected Border**: `#1e39d2` (same as background)
- **Enabled Border**: `rgba(0,0,0,0.74)` (interactive/border/strong)
- **Disabled Border**: `rgba(0,0,0,0.03)` (interactive/border/disabled)
- **Check Icon Color**: `#ffffff` (neutral/icon/onFill)
- **Label Text (Enabled)**: `rgba(0,0,0,0.86)` (neutral/text/primary)
- **Label Text (Disabled)**: `rgba(0,0,0,0.41)` (interactive/text/disabled)

### Size & Layout Specifications
- **Checkbox Size**: 18px × 18px
- **Border Radius**: 2.75px (radius/xs)
- **Border Width**: 2px
- **Gap**: 8px between checkbox and label
- **Touch Target**: 44px minimum for mobile accessibility
- **Check Icon Size**: 14px × 10px (3.5 × 2.5 in Tailwind)

### Typography Specifications
- **Font Family**: Sharp Sans Medium
- **Font Size**: 14px
- **Line Height**: 20px (1.25)
- **Font Weight**: Medium (500)

### Interactive States
- **Enabled**: White background, gray border, hover effect
- **Selected**: Blue background, blue border, white check icon
- **Disabled**: Light gray border, reduced opacity text
- **Focus**: 2px focus ring with primary color

### Layout Behavior
- **Mobile**: Full-width touch targets for easy interaction
- **Desktop**: Compact layout with precise click targets
- **Label**: Clickable area extends to label text
- **Form Integration**: Proper input element with form attributes

## Implementation Notes

### Component Architecture
- **Base Component**: Checkbox.tsx with comprehensive state management
- **Variant System**: CVA for consistent state styling
- **Form Integration**: Native input element with custom visual styling
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA support

### Technical Decisions
- **Hidden Input**: Screen reader accessible input with custom visual checkbox
- **Touch Targets**: 44px minimum touch area for mobile accessibility
- **Focus Management**: Proper focus indicators and keyboard navigation
- **State Management**: Support for controlled and uncontrolled patterns
- **Indeterminate Support**: Built-in support for partial selection states

### Usage Guidelines from Figma
- **State Usage**: Enabled for available options, Selected for chosen items, Disabled for unavailable options
- **Form Integration**: Works seamlessly with form validation and submission
- **Label Requirements**: Always provide clear, descriptive labels
- **Interaction**: Click anywhere on label or checkbox to toggle state

### Accessibility Features
- **Screen Reader Support**: Proper labeling and state announcement
- **Keyboard Navigation**: Tab focus and Space/Enter activation
- **Focus Indicators**: Visible focus rings for keyboard users
- **Touch Accessibility**: Minimum 44px touch targets
- **Form Compatibility**: Works with assistive technology and form validation

## Future Updates

### Process for Design Changes
1. **Update Figma Frame Reference**: Record new Node ID if frame changes
2. **Extract New Design Tokens**: Update color and sizing specifications
3. **Update Component Implementation**: Apply new specifications to styling
4. **Update Tests**: Ensure tests cover new visual specifications
5. **Update Documentation**: Reflect changes in Storybook and usage guidelines

### Maintainability
- **Design Token Sync**: All colors and dimensions traceable to Figma
- **Component Tests**: Comprehensive coverage for all states and interactions
- **Documentation**: Storybook stories demonstrate all capabilities
- **Form Integration**: Maintains compatibility with standard form patterns
- **Accessibility**: Preserved across all updates with automated testing
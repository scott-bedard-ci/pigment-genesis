# Comprehensive Figma Extraction Guide

## 🎯 Objective: Pixel-Perfect Component Implementation

This guide ensures **every visual property** is extracted from Figma with **zero assumptions** or **estimations**. Every measurement, color, and effect must be precisely captured for 100% design fidelity.

## 🚨 CRITICAL PRINCIPLES

### Never Assume - Always Inspect
- **NEVER estimate any values** - every pixel must be measured
- **NEVER assume standard values** - always verify in Figma
- **NEVER use "common sense" defaults** - extract exact specifications
- **NEVER skip properties that "look standard"** - inspect everything

### Complete Property Extraction
- **Extract ALL visual properties** - leave nothing to assumption
- **Document EVERY measurement** - even if it seems obvious
- **Verify ALL states** - hover, active, focus, disabled, etc.
- **Capture ALL variants** - sizes, themes, conditions

## 📋 MANDATORY Figma Inspection Checklist

### ✅ 1. Element Dimensions & Positioning
```
□ Width (exact pixel value or auto/flex behavior)
□ Height (exact pixel value or auto/flex behavior)  
□ Min-width (if set)
□ Max-width (if set)
□ Min-height (if set)
□ Max-height (if set)
□ Position type (relative, absolute, fixed)
□ Top offset (if positioned)
□ Right offset (if positioned)
□ Bottom offset (if positioned)
□ Left offset (if positioned)
□ Z-index/layer order
```

### ✅ 2. Spacing Properties
```
□ Padding-top (exact pixel value)
□ Padding-right (exact pixel value)
□ Padding-bottom (exact pixel value)
□ Padding-left (exact pixel value)
□ Margin-top (exact pixel value)
□ Margin-right (exact pixel value)
□ Margin-bottom (exact pixel value)
□ Margin-left (exact pixel value)
□ Gap (for flex/grid containers)
□ Row-gap (for grid containers)
□ Column-gap (for grid containers)
```

### ✅ 3. Border Properties
```
□ Border-width (all sides, exact pixel values)
□ Border-style (solid, dashed, dotted, etc.)
□ Border-color (exact hex/rgb values)
□ Border-radius (all corners, exact pixel values)
□ Border-top-left-radius
□ Border-top-right-radius
□ Border-bottom-left-radius
□ Border-bottom-right-radius
□ Outline properties (if any)
□ Outline-offset (if outline exists)
```

### ✅ 4. Color Properties
```
□ Background-color (exact hex/rgb value)
□ Background-gradient (if gradient, full specification)
□ Background-image (if image, URL and properties)
□ Background-size (cover, contain, exact dimensions)
□ Background-position (exact positioning)
□ Background-repeat (repeat, no-repeat, etc.)
□ Text color (exact hex/rgb value)
□ Fill color (for icons/shapes)
□ Stroke color (for icons/shapes)
□ Color opacity/alpha values
```

### ✅ 5. Typography Properties
```
□ Font-family (exact font name)
□ Font-size (exact pixel/rem value)
□ Font-weight (exact numeric value: 300, 400, 500, 600, 700)
□ Line-height (exact pixel/unitless value)
□ Letter-spacing (exact em/pixel value)
□ Text-align (left, center, right, justify)
□ Text-decoration (none, underline, etc.)
□ Text-transform (none, uppercase, lowercase, capitalize)
□ Vertical-align (baseline, top, middle, bottom)
□ Word-spacing (if set)
□ Text-indent (if set)
□ White-space (normal, nowrap, pre, etc.)
```

### ✅ 6. Layout Properties
```
□ Display type (block, inline, flex, grid, inline-block)
□ Flex-direction (row, column, row-reverse, column-reverse)
□ Flex-wrap (nowrap, wrap, wrap-reverse)
□ Justify-content (flex-start, center, space-between, etc.)
□ Align-items (stretch, flex-start, center, flex-end)
□ Align-content (for multi-line flex)
□ Flex-grow (for flex items)
□ Flex-shrink (for flex items)
□ Flex-basis (for flex items)
□ Order (for flex/grid items)
□ Grid-template-columns (for grid containers)
□ Grid-template-rows (for grid containers)
□ Grid-gap (for grid containers)
□ Grid-column (for grid items)
□ Grid-row (for grid items)
```

### ✅ 7. Effects & Transforms
```
□ Box-shadow (offset-x, offset-y, blur-radius, spread-radius, color)
□ Text-shadow (offset-x, offset-y, blur-radius, color)
□ Filter effects (blur, brightness, contrast, etc.)
□ Backdrop-filter (if any)
□ Transform properties (translate, rotate, scale, skew)
□ Transform-origin (if transforms used)
□ Transition properties (duration, timing-function, delay)
□ Animation properties (if any)
□ Opacity (exact decimal value)
□ Visibility (visible, hidden)
□ Overflow (visible, hidden, scroll, auto)
□ Overflow-x (specific horizontal overflow)
□ Overflow-y (specific vertical overflow)
```

### ✅ 8. Interactive States
```
□ Default state (all properties above)
□ Hover state (changed properties)
□ Active/pressed state (changed properties)
□ Focus state (changed properties)
□ Disabled state (changed properties)
□ Loading state (if applicable)
□ Error state (if applicable)
□ Success state (if applicable)
□ Selected state (if applicable)
□ Expanded/collapsed states (if applicable)
```

### ✅ 9. Responsive Variations
```
□ Mobile breakpoint specifications
□ Tablet breakpoint specifications  
□ Desktop breakpoint specifications
□ Large screen specifications
□ Property changes per breakpoint
□ Layout changes per breakpoint
□ Typography scaling per breakpoint
□ Spacing adjustments per breakpoint
```

### ✅ 10. Component Variants
```
□ Size variants (small, medium, large)
□ Color variants (primary, secondary, etc.)
□ Style variants (outline, filled, ghost)
□ State variants (loading, error, success)
□ Icon variations (with/without icons)
□ Content variations (different text lengths)
```

## 🔍 Detailed Inspection Process

### Step 1: Select Component in Figma
1. **Click on the component** in Figma
2. **Open the inspect panel** (right sidebar)
3. **Switch to Code view** for precise measurements
4. **Note the layer name** and component name

### Step 2: Document Base Properties
1. **Screenshot the inspect panel** for reference
2. **Copy ALL CSS properties** from Figma's code output
3. **Note any custom properties** not shown in standard CSS
4. **Check for design tokens** in the design system panel

### Step 3: Verify Every Measurement
```bash
# For each property, ask yourself:
- Is this measurement exact? ✅
- Did I check all sides for padding/margin? ✅  
- Did I verify the units (px, rem, %)? ✅
- Did I check for responsive variations? ✅
- Did I document the design token name? ✅
```

### Step 4: State Inspection
1. **Check prototype interactions** for state changes
2. **Look for hover/focus indicators** in design
3. **Check component variants** in the assets panel
4. **Document state-specific property changes**

### Step 5: Cross-Reference with Design System
1. **Check if properties use design tokens**
2. **Verify token names in Figma design system**
3. **Note any custom values not in the design system**
4. **Confirm token categories (spacing, colors, typography)**

## 📝 Documentation Template

For each component, create this exact documentation:

```markdown
# Component Name - Figma Extraction

## Source Information
- Figma File: [URL]
- Frame ID: [ID]
- Component Name: [Exact name in Figma]
- Extraction Date: [Date]
- Inspector: [Your name]

## Base Properties (Default State)
### Dimensions
- Width: [exact value + unit]
- Height: [exact value + unit]
- Min/Max constraints: [if any]

### Spacing  
- Padding: [top] [right] [bottom] [left]
- Margin: [top] [right] [bottom] [left]
- Gap: [value if flex/grid]

### Border
- Width: [value]
- Style: [solid/dashed/etc]
- Color: [exact hex] (Token: [token-name])
- Radius: [value] or [tl] [tr] [br] [bl]

### Colors
- Background: [hex] (Token: [token-name])
- Text: [hex] (Token: [token-name])
- Border: [hex] (Token: [token-name])

### Typography
- Font-family: [exact font] (Token: [token-name])
- Font-size: [value] (Token: [token-name])
- Font-weight: [numeric value] (Token: [token-name])
- Line-height: [value] (Token: [token-name])
- Letter-spacing: [value] (Token: [token-name])

### Layout
- Display: [type]
- Flex properties: [if flex container]
- Position: [if positioned]

### Effects
- Box-shadow: [full specification] (Token: [token-name])
- Transform: [if any]
- Transition: [if any]
- Opacity: [value]

## Interactive States
### Hover State
[Document all changed properties]

### Active State  
[Document all changed properties]

### Focus State
[Document all changed properties]

### Disabled State
[Document all changed properties]

## Responsive Variations
### Mobile (320px-768px)
[Document all property changes]

### Tablet (768px-1024px)
[Document all property changes]

### Desktop (1024px+)
[Document all property changes]

## Component Variants
### Size Variants
- Small: [property differences]
- Medium: [property differences] 
- Large: [property differences]

### Style Variants
- Primary: [property differences]
- Secondary: [property differences]
- Outline: [property differences]

## Design Tokens Used
- Colors: [list all color tokens]
- Spacing: [list all spacing tokens]
- Typography: [list all typography tokens]
- Effects: [list all effect tokens]

## Implementation Notes
- [Any special considerations]
- [Complex property relationships]
- [Pixel-perfect requirements]
- [Cross-browser considerations]
```

## 🚨 Common Extraction Mistakes to Avoid

### ❌ Assuming Standard Values
```bash
# WRONG: "It looks like standard button padding"
padding: 12px 16px;

# RIGHT: Measured exact values from Figma
padding: 14px 20px 12px 18px;
```

### ❌ Rounding Numbers
```bash
# WRONG: Rounded to "clean" numbers
border-radius: 8px;

# RIGHT: Exact Figma measurement
border-radius: 6px;
```

### ❌ Missing State Variations
```bash
# WRONG: Only documenting default state
background: #3b82f6;

# RIGHT: All states documented
background: #3b82f6;        /* default */
background: #2563eb;        /* hover */
background: #1d4ed8;        /* active */
background: #94a3b8;        /* disabled */
```

### ❌ Ignoring Responsive Changes
```bash
# WRONG: Same values for all screens
font-size: 16px;

# RIGHT: Responsive specifications
font-size: 14px;            /* mobile */
font-size: 16px;            /* tablet */
font-size: 18px;            /* desktop */
```

## ✅ Quality Control Checklist

Before considering extraction complete:

```
□ Every pixel measurement verified in Figma
□ All color values copied exactly (no assumptions)
□ Typography properties match Figma exactly
□ All spacing values measured precisely
□ Interactive states documented completely
□ Responsive variations captured
□ Design tokens identified and mapped
□ Special effects documented with full parameters
□ Component variants accounted for
□ Implementation notes include edge cases
□ No properties left to assumption or "standard values"
```

## 🎯 Success Criteria

**Your extraction is complete when:**
- ✅ You can build the component **without making any design decisions**
- ✅ Every visual property has a **documented source in Figma**
- ✅ No values are **estimated or assumed**
- ✅ All **interactive states** are specified
- ✅ **Responsive behavior** is completely defined
- ✅ **Design tokens** are identified for every property
- ✅ Implementation can achieve **95%+ visual fidelity**

Remember: **The goal is zero assumptions during implementation.** If you need to guess any value during coding, the extraction was incomplete.
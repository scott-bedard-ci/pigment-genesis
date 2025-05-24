# Figma Extraction Checklist

## 🎯 **BEFORE YOU START**
- [ ] Run `npm run validate-tokens` - ensure system is ready
- [ ] Open Figma file and locate exact component/frame
- [ ] Verify you have inspect access to the design
- [ ] Open the comprehensive extraction guide: `docs/figma-extraction-guide.md`

## 📋 **MANDATORY PROPERTY EXTRACTION**

### **Basic Properties**
- [ ] **Width** - exact pixel value or responsive behavior
- [ ] **Height** - exact pixel value or responsive behavior  
- [ ] **Min/Max constraints** - if any
- [ ] **Position type** - relative, absolute, fixed
- [ ] **Z-index/layer order** - if relevant

### **Spacing Properties**  
- [ ] **Padding-top** - exact pixel measurement
- [ ] **Padding-right** - exact pixel measurement
- [ ] **Padding-bottom** - exact pixel measurement
- [ ] **Padding-left** - exact pixel measurement
- [ ] **Margin-top** - exact pixel measurement
- [ ] **Margin-right** - exact pixel measurement
- [ ] **Margin-bottom** - exact pixel measurement
- [ ] **Margin-left** - exact pixel measurement
- [ ] **Gap** - for flex/grid containers
- [ ] **Row-gap** - for grid containers
- [ ] **Column-gap** - for grid containers

### **Border Properties**
- [ ] **Border-width** - all sides, exact values
- [ ] **Border-style** - solid, dashed, dotted, etc.
- [ ] **Border-color** - exact hex + design token
- [ ] **Border-radius** - exact values for all corners
- [ ] **Border-top-left-radius** - individual corner
- [ ] **Border-top-right-radius** - individual corner  
- [ ] **Border-bottom-right-radius** - individual corner
- [ ] **Border-bottom-left-radius** - individual corner

### **Color Properties**
- [ ] **Background-color** - exact hex + design token name
- [ ] **Background-gradient** - full gradient specification
- [ ] **Text color** - exact hex + design token name
- [ ] **Fill color** - for icons/shapes + design token
- [ ] **Stroke color** - for icons/shapes + design token
- [ ] **Opacity/alpha values** - exact decimal values

### **Typography Properties**
- [ ] **Font-family** - exact font name + design token
- [ ] **Font-size** - exact pixel/rem + design token
- [ ] **Font-weight** - exact numeric value + design token
- [ ] **Line-height** - exact value + design token
- [ ] **Letter-spacing** - exact em/pixel + design token
- [ ] **Text-align** - left, center, right, justify
- [ ] **Text-decoration** - none, underline, etc.
- [ ] **Text-transform** - none, uppercase, lowercase

### **Layout Properties**
- [ ] **Display** - block, flex, grid, inline-block
- [ ] **Flex-direction** - row, column, etc.
- [ ] **Flex-wrap** - nowrap, wrap, wrap-reverse
- [ ] **Justify-content** - start, center, space-between, etc.
- [ ] **Align-items** - stretch, start, center, end
- [ ] **Flex-grow** - for flex items
- [ ] **Flex-shrink** - for flex items
- [ ] **Flex-basis** - for flex items

### **Effects & Transforms**
- [ ] **Box-shadow** - exact shadow specification + design token
- [ ] **Text-shadow** - if any shadow effects
- [ ] **Filter effects** - blur, brightness, contrast
- [ ] **Transform** - translate, rotate, scale, skew
- [ ] **Transform-origin** - if transforms used
- [ ] **Transition** - duration, timing-function, delay
- [ ] **Opacity** - exact decimal value
- [ ] **Overflow** - visible, hidden, scroll, auto

## 🎭 **INTERACTIVE STATES**

### **Default State**
- [ ] All properties above documented for default state

### **Hover State**
- [ ] **Background color changes** - exact hex + token
- [ ] **Text color changes** - exact hex + token
- [ ] **Border changes** - width, color, style changes
- [ ] **Shadow changes** - modified shadow properties
- [ ] **Transform changes** - scale, translate modifications
- [ ] **Transition timing** - duration and easing

### **Active/Pressed State**
- [ ] **Background color** - exact pressed state color
- [ ] **Border changes** - active state border modifications
- [ ] **Shadow changes** - pressed state shadow
- [ ] **Transform changes** - pressed state transforms

### **Focus State**
- [ ] **Outline properties** - width, color, style
- [ ] **Background changes** - focus state background
- [ ] **Border changes** - focus state border
- [ ] **Shadow changes** - focus ring or glow effects

### **Disabled State**
- [ ] **Opacity reduction** - exact opacity value
- [ ] **Color changes** - disabled text/background colors
- [ ] **Cursor changes** - not-allowed, default
- [ ] **Interactive removal** - no hover/active states

## 📱 **RESPONSIVE VARIATIONS**

### **Mobile (320px-768px)**
- [ ] **Font-size changes** - smaller mobile typography
- [ ] **Padding adjustments** - mobile-optimized spacing
- [ ] **Margin adjustments** - mobile-optimized margins
- [ ] **Layout changes** - stack vs row layouts
- [ ] **Touch target sizing** - minimum 44px touch targets

### **Tablet (768px-1024px)**
- [ ] **Intermediate sizing** - between mobile and desktop
- [ ] **Layout adjustments** - tablet-specific layouts
- [ ] **Typography scaling** - tablet font sizes

### **Desktop (1024px+)**
- [ ] **Full desktop sizing** - desktop-optimized dimensions
- [ ] **Hover states** - desktop-specific interactions
- [ ] **Layout expansion** - desktop layout patterns

## 🎨 **COMPONENT VARIANTS**

### **Size Variants**
- [ ] **Small variant** - all property differences documented
- [ ] **Medium variant** - all property differences documented
- [ ] **Large variant** - all property differences documented

### **Style Variants**
- [ ] **Primary variant** - primary styling properties
- [ ] **Secondary variant** - secondary styling differences
- [ ] **Outline variant** - outline-specific properties
- [ ] **Ghost variant** - minimal styling properties

### **State Variants**
- [ ] **Loading state** - loading-specific styling
- [ ] **Error state** - error styling and indicators
- [ ] **Success state** - success styling and indicators

## 🔗 **DESIGN TOKEN MAPPING**

### **Color Token Verification**
- [ ] **Primary colors** - mapped to exact Figma token names
- [ ] **Secondary colors** - mapped to exact Figma token names
- [ ] **Semantic colors** - success, error, warning tokens
- [ ] **Neutral colors** - text, background, border tokens

### **Spacing Token Verification**
- [ ] **Base spacing** - xs, sm, md, lg, xl token usage
- [ ] **Component spacing** - button, input, card specific tokens
- [ ] **Layout spacing** - section, container, grid tokens

### **Typography Token Verification**
- [ ] **Font families** - heading, body, mono token usage
- [ ] **Font sizes** - heading and body size tokens
- [ ] **Font weights** - weight value tokens
- [ ] **Line heights** - line-height tokens
- [ ] **Letter spacing** - letter-spacing tokens

## 📄 **DOCUMENTATION COMPLETION**

### **Extraction Documentation**
- [ ] **Source information** - Figma URL, frame ID, date
- [ ] **Base properties** - complete default state documentation
- [ ] **Interactive states** - all state variations documented
- [ ] **Responsive variations** - all breakpoint changes
- [ ] **Component variants** - all variant differences
- [ ] **Design tokens used** - complete token mapping
- [ ] **Implementation notes** - special considerations

### **Implementation Readiness**
- [ ] **Zero assumptions required** - every value documented
- [ ] **Design token mapping complete** - all tokens identified
- [ ] **State documentation complete** - all interactions defined
- [ ] **Responsive behavior defined** - all breakpoints covered
- [ ] **Pixel-perfect specification** - exact measurements recorded

## ✅ **FINAL VERIFICATION**

Before marking extraction complete:

- [ ] **Every visual property** has been measured and documented
- [ ] **No estimations or assumptions** were made
- [ ] **All design tokens** have been identified and mapped
- [ ] **Interactive states** are completely specified
- [ ] **Responsive variations** are fully defined
- [ ] **Component variants** are thoroughly documented
- [ ] **Implementation can proceed** without any design decisions

## 🚨 **QUALITY GATES**

**Do not proceed to implementation if:**
- ❌ Any property is estimated or assumed
- ❌ Design token mapping is incomplete  
- ❌ Interactive states are undefined
- ❌ Responsive behavior is unclear
- ❌ Component variants are missing specifications

**Ready for implementation when:**
- ✅ 100% of visual properties are documented
- ✅ All design tokens are identified and mapped
- ✅ All states and variants are specified
- ✅ Responsive behavior is completely defined
- ✅ Implementation requires zero design decisions

---

**Remember: The goal is pixel-perfect implementation with zero assumptions during coding!**
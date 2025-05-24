# Figma Integration Workflow

This document outlines the step-by-step process for integrating Figma designs into the Pigment Genesis design system using Claude Code.

## 🎯 PRIMARY DIRECTIVE: PERFECTION IS THE ONLY ACCEPTABLE STANDARD

**CRITICAL MINDSET:** Building each component perfectly is infinitely more important than building components quickly. Take ALL the time necessary to achieve perfection.

**FIGMA ANALYSIS REQUIREMENTS:**
- **100% thoroughness** - Inspect every design property systematically  
- **Unlimited time allowed** - Never rush Figma frame analysis
- **Unlimited tool calls** - Use as many as needed for complete extraction
- **Zero assumptions** - Every measurement must come from Figma
- **Perfect documentation** - Record every extracted property

## 🎯 Overview

The Figma-first approach ensures:
- **100% design fidelity** to Figma specifications
- **Automatic design token extraction** from Figma
- **Instant rebrand capability** through token updates
- **Cross-platform consistency** (React + SwiftUI)
- **Design-development alignment** at all times

## 🚨 Critical Rules

### NEVER Create Components Without Figma
- **No "standard" components** - Everything must come from actual designs
- **No assumptions** - Every pixel must be verified against Figma
- **No hardcoded values** - All styling through design tokens only
- **No improvisation** - Build exactly what's designed

## 🔄 Complete Workflow Process

### Phase 1: Preparation

#### 1.1 Design Requirements
Before starting any component:

✅ **Designer Checklist:**
- [ ] Component designs are finalized in Figma
- [ ] All states and variants are designed (default, hover, active, focus, disabled)
- [ ] All size variants are designed (sm, md, lg)
- [ ] Responsive behavior is defined (mobile, tablet, desktop)
- [ ] Design tokens are properly defined in Figma
- [ ] Figma frame sharing permissions are set correctly

✅ **Developer Checklist:**
- [ ] Claude Code is active in project directory
- [ ] Figma MCP connection is verified
- [ ] Project dependencies are up to date
- [ ] Previous components follow established patterns

#### 1.2 Figma Frame Organization
Organize Figma frames for optimal extraction:

```
Component Name/
├── States/
│   ├── Default
│   ├── Hover  
│   ├── Active
│   ├── Focus
│   └── Disabled
├── Variants/
│   ├── Primary
│   ├── Secondary
│   ├── Outline
│   └── Ghost
├── Sizes/
│   ├── Small
│   ├── Medium
│   └── Large
└── Responsive/
    ├── Mobile (375px)
    ├── Tablet (768px)
    └── Desktop (1024px+)
```

### Phase 2: Component Creation with Claude Code

#### 2.1 Initiate Component Creation
Start the process with Claude Code:

```
I'm ready to add a new component
```

#### 2.2 Provide Figma Frame Links
Claude Code will request Figma frames. Provide **all relevant frames**:

```
Here are the Figma frames for the Button component:

## Default States
- Default state: https://figma.com/file/abc123/design?node-id=1:2
- Hover state: https://figma.com/file/abc123/design?node-id=1:3
- Active state: https://figma.com/file/abc123/design?node-id=1:4
- Focus state: https://figma.com/file/abc123/design?node-id=1:5
- Disabled state: https://figma.com/file/abc123/design?node-id=1:6

## Variants
- Primary variant: https://figma.com/file/abc123/design?node-id=2:1
- Secondary variant: https://figma.com/file/abc123/design?node-id=2:2
- Outline variant: https://figma.com/file/abc123/design?node-id=2:3
- Ghost variant: https://figma.com/file/abc123/design?node-id=2:4

## Sizes
- Small size: https://figma.com/file/abc123/design?node-id=3:1
- Medium size: https://figma.com/file/abc123/design?node-id=3:2
- Large size: https://figma.com/file/abc123/design?node-id=3:3

## Responsive
- Mobile layout: https://figma.com/file/abc123/design?node-id=4:1
- Tablet layout: https://figma.com/file/abc123/design?node-id=4:2
- Desktop layout: https://figma.com/file/abc123/design?node-id=4:3
```

#### 2.3 Claude Code Analysis Process
Claude Code will automatically:

1. **Verify Figma Access** ✅
   - Connect to Figma using MCP
   - Verify frame accessibility
   - Confirm design completeness

2. **🚨 CRITICAL: Capture Figma Node IDs FIRST** 📍
   - **IMMEDIATELY** call `get_code_for_node_or_selection` to get Node ID from the response
   - **IMMEDIATELY** call `get_image_for_node_or_selection` to capture frame image
   - **IMMEDIATELY** create `.figmaframes.md` file with captured Node IDs
   - **This MUST happen before any other steps** to prevent Node ID loss

3. **Extract Design Specifications** 🔍
   - Analyze all provided frames using the captured Node IDs
   - Extract exact measurements (padding, margins, sizing)
   - Identify color values and map to design tokens
   - Document typography specifications
   - Note spacing and layout properties
   - Identify effects (shadows, borders, etc.)

3. **Design Token Mapping** 🎨
   - Map Figma colors to design token system
   - Extract spacing values as design tokens
   - Document typography as design tokens
   - Create effect tokens from Figma
   - Ensure rebrand capability through token usage

4. **Component Planning** 📋
   - Determine atomic design level (Atom/Molecule/Organism)
   - Plan component API and prop structure
   - Design variant system based on Figma designs
   - Plan responsive behavior implementation

### Phase 3: Implementation

#### 3.1 React Component Generation
Claude Code builds the React component:

```typescript
// All values extracted from Figma frames
const buttonVariants = cva(
  [
    // Base classes from Figma design
    'inline-flex items-center justify-center',
    'font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2',
    'disabled:pointer-events-none disabled:opacity-50'
  ],
  {
    variants: {
      variant: {
        // Colors extracted directly from Figma
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
        outline: 'border border-input bg-background hover:bg-accent'
      },
      size: {
        // Spacing extracted directly from Figma  
        sm: 'h-9 rounded-md px-3 text-xs',
        md: 'h-10 rounded-md px-4 py-2',
        lg: 'h-11 rounded-md px-8'
      }
    }
  }
);
```

#### 3.2 Design Token Integration
All styling uses design tokens exclusively:

```typescript
// ❌ NEVER - Hardcoded values
className="bg-blue-500 text-white px-4 py-2"

// ✅ ALWAYS - Design tokens from Figma
className={cn(
  'bg-primary-500 text-white',      // Figma: primary-500
  'px-md py-sm',                    // Figma: spacing-md, spacing-sm
  'rounded-md',                     // Figma: border-radius-md
  'text-body-md font-medium'        // Figma: typography tokens
)}
```

#### 3.3 Responsive Implementation
Mobile-first responsive design based on Figma specs:

```typescript
className={cn(
  // Mobile (from Figma mobile frames)
  'w-full px-4 py-2 text-sm',
  // Tablet (from Figma tablet frames)  
  'md:w-auto md:px-6 md:py-3 md:text-base',
  // Desktop (from Figma desktop frames)
  'lg:px-8 lg:py-4 lg:text-lg'
)}
```

### Phase 4: Cross-Platform Generation

#### 4.1 SwiftUI Equivalent
Claude Code generates SwiftUI using same design tokens:

```swift
public struct Button: View {
    public var body: some View {
        SwiftUI.Button(content) {
            action?()
        }
        // All values from Figma design tokens
        .font(size.font)                    // Figma: typography tokens
        .padding(size.padding)              // Figma: spacing tokens
        .background(variant.backgroundColor) // Figma: color tokens
        .foregroundColor(variant.foregroundColor) // Figma: color tokens
        .cornerRadius(PigmentSpacing.sm)    // Figma: border-radius tokens
        .frame(minHeight: 44)               // Touch target requirement
    }
}
```

#### 4.2 Design Token Synchronization
SwiftUI tokens generated from React tokens:

```swift
// Auto-generated from React design tokens
public extension Color {
    static let pigmentPrimary500 = Color(hex: "#3b82f6")   // Figma: primary-500
    static let pigmentSecondary500 = Color(hex: "#a855f7") // Figma: secondary-500
}

public struct PigmentSpacing {
    public static let sm: CGFloat = 8      // Figma: spacing-sm
    public static let md: CGFloat = 16     // Figma: spacing-md
    public static let lg: CGFloat = 24     // Figma: spacing-lg
}
```

### Phase 5: Testing & Documentation

#### 5.1 Comprehensive Testing
Claude Code generates complete test suite:

```typescript
// Standard tests automatically generated
runStandardComponentTests(Button, {
  variants: ['primary', 'secondary', 'outline', 'ghost'],
  sizes: ['sm', 'md', 'lg'],
  requiredProps: { children: 'Test Button' }
});

// Component-specific tests based on Figma interactions
describe('Button interactions from Figma', () => {
  it('matches Figma hover state', () => {
    // Test hover behavior as designed in Figma
  });
  
  it('matches Figma focus state', () => {
    // Test focus behavior as designed in Figma
  });
});
```

#### 5.2 Storybook Documentation
Auto-generated stories with Figma design references:

```typescript
export const DesignTokenDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <h3>Design Tokens from Figma</h3>
      <Button variant="primary">Primary (primary-500 from Figma)</Button>
      <Button variant="secondary">Secondary (secondary-500 from Figma)</Button>
      <p className="text-sm text-gray-600">
        All colors, spacing, and typography extracted directly from Figma design tokens
      </p>
    </div>
  )
};
```

### Phase 6: Quality Assurance

#### 6.1 Design Fidelity Review
Compare built component with Figma designs:

✅ **Visual Review Checklist:**
- [ ] Colors match Figma exactly (use color picker)
- [ ] Spacing matches Figma measurements exactly
- [ ] Typography matches Figma text styles exactly
- [ ] Border radius matches Figma corner radius exactly
- [ ] Shadows match Figma effects exactly
- [ ] All states (hover, focus, disabled) match Figma

✅ **Responsive Review Checklist:**
- [ ] Mobile layout matches Figma mobile frames
- [ ] Tablet layout matches Figma tablet frames  
- [ ] Desktop layout matches Figma desktop frames
- [ ] Breakpoint transitions are smooth
- [ ] Touch targets meet 44px minimum on mobile

#### 6.2 Token Usage Audit
Verify no hardcoded values exist:

```bash
# Audit component for hardcoded values
npm run audit-tokens Button

# Should return: "✅ All values use design tokens"
# Should never return hardcoded colors, spacing, etc.
```

### Phase 7: Documentation & Tracking

#### 7.1 Figma Frame History
Create component's Figma frame tracking file:

```markdown
# Button Component - Figma Frame History

## Component Information
- **Component Name:** Button
- **Last Updated:** 2025-01-23T10:30:00Z
- **Figma File ID:** abc123def456
- **Status:** Active

## Current Figma Frames
- **Frame ID:** `1:2`
- **Frame URL:** [Button - Primary Default](https://figma.com/file/abc123/design?node-id=1:2)
- **Description:** Primary button default state
- **Extracted Tokens:** primary-500, spacing-md, body-md

## Build History

### Version 1.0.0 - Initial Implementation
**Date:** 2025-01-23T10:30:00Z

**Quality Audit Results:**
- ✅ Design Fidelity: 98%
- ✅ Token Usage: 100% 
- ✅ Accessibility: 100%
- ✅ Status: Passed
```

#### 7.2 Component Registry Update
Add component to master registry:

```json
// docs/component-registry.json
{
  "components": {
    "Button": {
      "type": "atom",
      "status": "completed",
      "figmaFrames": "./src/components/atoms/Button/Button.figmaframes.json",
      "lastSync": "2025-01-23T10:30:00Z",
      "versions": ["1.0.0"]
    }
  }
}
```

## 🔄 Ongoing Maintenance

### Design Updates from Figma

#### When Designs Change in Figma:
1. **Say to Claude Code**: `"Refresh Button component from Figma"`
2. **Provide updated frame links**
3. **Claude Code will**:
   - Compare new frames with existing component
   - Extract updated design tokens
   - Update component implementation
   - Run audit to ensure quality
   - Update Figma frame history

#### Global Token Updates:
```bash
# Extract latest tokens from Figma
npm run extract-figma-tokens

# Update all components with new tokens
npm run update-design-tokens  

# Complete rebrand workflow
npm run rebrand
```

### Design System Rebrand Process

#### Complete Rebrand in 5 Steps:
1. **Designer updates Figma design tokens** (e.g., primary color change)
2. **Run**: `npm run extract-figma-tokens`
3. **All components automatically updated** with new tokens
4. **Test**: `npm test` (all tests should pass)
5. **Deploy**: `npm run build && npm run build-storybook`

Result: **Entire design system rebranded instantly** ✨

## 🚨 Troubleshooting

### Common Issues and Solutions

#### 1. Figma Access Issues
**Problem**: "Cannot access Figma frames"
**Solutions**:
- Verify Figma sharing permissions (Anyone with link can view)
- Check MCP Figma connection status
- Ensure frame URLs are correct and accessible
- Try copying frame links again from Figma

#### 2. Design Token Extraction Issues  
**Problem**: "Cannot extract design tokens from Figma"
**Solutions**:
- Ensure design tokens are properly defined in Figma
- Check that colors use Figma's color styles system
- Verify spacing uses consistent spacing tokens
- Confirm typography uses Figma text styles

#### 3. Component Fidelity Issues
**Problem**: "Component doesn't match Figma design"
**Solutions**:
- Re-extract design specifications from Figma
- Verify all frame states were provided
- Check responsive frames for different breakpoints
- Ensure all design tokens are properly mapped

#### 4. Cross-Platform Consistency Issues
**Problem**: "SwiftUI component doesn't match React component"
**Solutions**:
- Re-run SwiftUI token generation: `npm run sync-swiftui-tokens`
- Verify design token consistency across platforms
- Check iOS-specific design requirements
- Update SwiftUI component generation templates

### Getting Help

#### 1. Claude Code Support
- **Provide clear error messages** to Claude Code
- **Share complete Figma frame sets** for proper analysis
- **Follow the design-first approach** - don't try shortcuts

#### 2. Team Communication
- **#design-system** Slack channel for questions
- **Weekly office hours** for complex integration issues
- **GitHub Issues** for technical problems

#### 3. Documentation
- [Component Standards](./component-standards.md) - Implementation requirements
- [Testing Guide](./testing-guide.md) - Testing requirements
- [Design Token Guide](../src/tokens/README.md) - Token system documentation

## 📈 Success Metrics

### Integration Quality Metrics
- **Design Fidelity**: 95%+ pixel accuracy to Figma
- **Token Usage**: 100% design token usage (no hardcoded values)
- **Accessibility**: Zero violations in automated tests
- **Cross-Platform**: 100% React/SwiftUI consistency
- **Rebrand Speed**: Complete rebrand in < 5 minutes

### Process Efficiency Metrics
- **Integration Time**: < 2 hours per component (average)
- **Design Deviation**: < 5% deviation from Figma designs
- **Rework Rate**: < 10% of components require design updates
- **Token Coverage**: 100% of visual properties use design tokens

---

This workflow ensures seamless integration between Figma designs and code implementation, maintaining design fidelity while enabling instant rebrand capability across all platforms.
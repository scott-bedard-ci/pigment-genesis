# New Component Creation Checklist

This checklist ensures every new component follows the Pigment Genesis standards and integrates properly with the design system.

## 🎯 PRIMARY DIRECTIVE: PERFECTION IS THE ONLY ACCEPTABLE STANDARD

**CRITICAL MINDSET:** Building each component perfectly is infinitely more important than building components quickly. Take ALL the time necessary to achieve perfection.

**QUALITY REQUIREMENTS:**
- **100% Figma fidelity** - Every pixel must match exactly
- **100% documentation compliance** - Every checklist item must be completed
- **100% design token usage** - No shortcuts or hardcoded values
- **100% test coverage** - Every interaction must be tested

**TIME & COST ARE NOT FACTORS:**
- Take unlimited time for thorough Figma analysis
- Use unlimited tool calls for complete property extraction
- Never rush any step - quality is the only measure of success

## 🚨 CRITICAL: Design-First Approach

### Before Starting Development
- [ ] **Figma designs are complete** - All states, variants, and sizes designed
- [ ] **Design tokens are defined** in Figma design system
- [ ] **Responsive frames available** for mobile, tablet, desktop
- [ ] **All interactive states designed** (default, hover, active, focus, disabled)
- [ ] **Figma sharing permissions set** (Anyone with link can view)

### NEVER Create Components Without:
- [ ] ✅ **Complete Figma frame links** for all component states
- [ ] ✅ **Figma MCP connection verified** and working
- [ ] ✅ **Design token extraction capability** confirmed
- [ ] ✅ **Proper design specifications** available for analysis

## 📋 Component Creation Process

### Phase 1: Preparation

#### 1.1 Environment Setup
- [ ] Claude Code is active in project directory
- [ ] Dependencies are up to date: `npm install`
- [ ] Figma MCP connection is working
- [ ] Project builds successfully: `npm run build`

#### 1.2 Design Requirements Gathering
- [ ] **Component name and purpose** clearly defined
- [ ] **Atomic design level** determined (Atom/Molecule/Organism)
- [ ] **Figma frame links** collected for all states and variants
- [ ] **Responsive behavior** understood from designs
- [ ] **Accessibility requirements** identified from designs

### Phase 2: Claude Code Integration

#### 2.1 Initiate Component Creation
**Say to Claude Code:**
```
I'm ready to add a new component
```

#### 2.2 Provide Complete Figma Data
**Provide ALL relevant frame links in this format:**
```
Here are the Figma frames for the [ComponentName]:

## States
- Default: https://figma.com/file/abc123/design?node-id=X:X
- Hover: https://figma.com/file/abc123/design?node-id=X:X
- Active: https://figma.com/file/abc123/design?node-id=X:X
- Focus: https://figma.com/file/abc123/design?node-id=X:X
- Disabled: https://figma.com/file/abc123/design?node-id=X:X

## Variants
- Primary: https://figma.com/file/abc123/design?node-id=X:X
- Secondary: https://figma.com/file/abc123/design?node-id=X:X
- [Additional variants...]

## Sizes  
- Small: https://figma.com/file/abc123/design?node-id=X:X
- Medium: https://figma.com/file/abc123/design?node-id=X:X
- Large: https://figma.com/file/abc123/design?node-id=X:X

## Responsive
- Mobile: https://figma.com/file/abc123/design?node-id=X:X
- Tablet: https://figma.com/file/abc123/design?node-id=X:X
- Desktop: https://figma.com/file/abc123/design?node-id=X:X
```

#### 2.3 Verify Claude Code Analysis
- [ ] **🚨 CRITICAL: Figma Node IDs captured FIRST** - before any component building
- [ ] **`.figmaframes.md` file created** with Node IDs immediately after Figma analysis
- [ ] **Claude Code confirms Figma access** and can analyze frames
- [ ] **Design tokens extracted** from Figma successfully  
- [ ] **Component specifications documented** by Claude Code
- [ ] **Implementation plan provided** by Claude Code

### Phase 3: Implementation Verification

#### 3.1 React Component Quality
- [ ] **Component structure follows templates** in `src/templates/`
- [ ] **TypeScript interfaces** properly defined and exported
- [ ] **All styling uses design tokens** (no hardcoded values)
- [ ] **Responsive design implemented** (mobile-first approach)
- [ ] **Accessibility features included** (ARIA, keyboard navigation)
- [ ] **Touch targets meet minimum** 44px requirements
- [ ] **ForwardRef implemented** properly for ref forwarding

#### 3.2 Design Token Usage Verification
```typescript
// ✅ CORRECT - Design tokens only
className={cn(
  'bg-primary-500 text-white',      // Color tokens
  'px-md py-sm',                    // Spacing tokens
  'text-body-md font-medium',       // Typography tokens
  'rounded-md shadow-sm'            // Effect tokens
)}

// ❌ INCORRECT - Hardcoded values
className="bg-blue-500 text-white px-4 py-2 text-base font-medium rounded-md"
```

#### 3.3 File Structure Verification
Ensure proper component structure:
```
src/components/[level]/ComponentName/
├── ComponentName.tsx              ✅ Main component file
├── ComponentName.stories.ts       ✅ Storybook stories  
├── ComponentName.test.ts          ✅ Comprehensive tests
├── ComponentName.figmaframes.md   ✅ Figma frame history
└── index.ts                       ✅ Export file
```

### Phase 4: Testing & Quality Assurance

#### 4.1 Automated Testing
- [ ] **Standard component tests pass**: `npm test ComponentName`
- [ ] **Accessibility tests pass**: `npm run test:a11y ComponentName`
- [ ] **Test coverage meets requirements** (95%+ line coverage)
- [ ] **All variants and sizes tested** comprehensively
- [ ] **Responsive behavior tested** across breakpoints

#### 4.2 Automated Visual Verification (Claude Code)
- [ ] **🚨 MANDATORY: Claude runs visual verification**: `npm run claude-visual-verify ComponentName`
- [ ] **Screenshots captured automatically** for Claude analysis
- [ ] **Claude analyzes screenshots** using Read tool to verify:
  - [ ] **Pixel-perfect accuracy** against Figma designs (95%+ required)
  - [ ] **Design token usage** (no hardcoded values visible)
  - [ ] **Interactive states rendering** correctly
  - [ ] **Responsive behavior** at mobile and desktop viewports
  - [ ] **Visual consistency** with design system standards
- [ ] **Claude approval required** before proceeding to next phase
- [ ] **Issues flagged immediately** if accuracy < 95%

#### 4.3 Manual Testing Checklist
- [ ] **Keyboard navigation functional** (Tab, Enter, Space, Escape)
- [ ] **Screen reader compatibility** tested
- [ ] **Touch targets work on mobile** (minimum 44px)
- [ ] **All interactive states work** (hover, focus, active, disabled)

#### 4.4 Cross-Browser Testing
- [ ] **Chrome** - Component renders and functions correctly
- [ ] **Firefox** - Component renders and functions correctly  
- [ ] **Safari** - Component renders and functions correctly
- [ ] **Edge** - Component renders and functions correctly

### Phase 5: Documentation & Stories

#### 5.1 Storybook Documentation
- [ ] **Default story** with basic usage example
- [ ] **All variants story** showcasing all options
- [ ] **All sizes story** demonstrating size options
- [ ] **Responsive demo** showing cross-breakpoint behavior  
- [ ] **Accessibility demo** with focus states and keyboard navigation
- [ ] **Design token usage** documentation with examples
- [ ] **Component props** fully documented with descriptions

#### 5.2 Component Documentation
- [ ] **Component purpose** clearly documented
- [ ] **Usage examples** provided with code snippets
- [ ] **Prop interface** fully documented
- [ ] **Design token usage** documented
- [ ] **Accessibility features** documented
- [ ] **Do's and Don'ts** section included

### Phase 6: Cross-Platform Integration

#### 6.1 SwiftUI Component Generation
- [ ] **SwiftUI equivalent generated** by Claude Code
- [ ] **Same design tokens used** across React and SwiftUI
- [ ] **Props interface matches** between platforms
- [ ] **Visual consistency verified** between React and SwiftUI
- [ ] **iOS-specific requirements met** (touch targets, accessibility)

#### 6.2 SwiftUI Quality Verification
```swift
// ✅ CORRECT - Uses design tokens
.background(Color.pigmentPrimary500)    // Figma token
.padding(PigmentSpacing.md)             // Figma token
.font(PigmentTypography.bodyMedium)     // Figma token

// ❌ INCORRECT - Hardcoded values  
.background(Color.blue)
.padding(16)
.font(.system(size: 16))
```

### Phase 7: Integration & Registry

#### 7.1 Component Export Integration
- [ ] **Component exported** from `src/components/index.ts`
- [ ] **Types exported** for external usage
- [ ] **Build succeeds** with new component: `npm run build`
- [ ] **Storybook builds** with new component: `npm run build-storybook`

#### 7.2 Component Registry Update
- [ ] **Added to component registry** in `docs/component-registry.json`
- [ ] **Figma frame history documented** in component's `.figmaframes.md`
- [ ] **Build history updated** with new component information
- [ ] **README updated** with new component reference

### Phase 8: Final Quality Audit

#### 8.1 Comprehensive Audit (MANDATORY)
- [ ] **Design fidelity audit**: 95%+ pixel accuracy to Figma
- [ ] **Token usage audit**: 100% design token usage (no hardcoded values)
- [ ] **Accessibility audit**: Zero violations in automated tests
- [ ] **Performance audit**: Bundle size impact < 5KB
- [ ] **Documentation audit**: 100% prop documentation coverage
- [ ] **Cross-platform audit**: React/SwiftUI consistency verified

#### 8.2 Audit Failure Protocol
🚨 **If any audit criteria fail:**
1. **STOP development** - Do not proceed
2. **Identify failing criteria** and root causes
3. **Fix all issues** before continuing
4. **Re-run audit** until all criteria pass
5. **Document fixes** in build history

### Phase 9: Deployment Preparation

#### 9.1 Version Control
- [ ] **All files committed** to version control
- [ ] **Commit message follows conventions** 
- [ ] **No sensitive information** in commit
- [ ] **Build artifacts excluded** from commit (dist/, coverage/)

#### 9.2 CI/CD Verification
- [ ] **All CI tests pass** (if applicable)
- [ ] **Build succeeds** in CI environment
- [ ] **No linting errors** or warnings
- [ ] **No TypeScript errors** or warnings

## 🚀 Success Criteria

### Component Quality Metrics
- ✅ **Design Fidelity**: 95%+ pixel accuracy to Figma
- ✅ **Test Coverage**: 95%+ line coverage
- ✅ **Accessibility**: Zero violations in automated tests
- ✅ **Performance**: < 5KB bundle size impact
- ✅ **Documentation**: 100% prop documentation coverage

### Integration Metrics  
- ✅ **Token Usage**: 100% design token usage
- ✅ **Cross-Platform**: React/SwiftUI consistency
- ✅ **Responsive**: Works seamlessly mobile to desktop
- ✅ **Accessibility**: Full keyboard and screen reader support
- ✅ **Rebrand Ready**: Instant rebrand through token updates

## 🆘 Troubleshooting

### Common Issues

#### 1. Figma Access Problems
**Issue**: Claude Code cannot access Figma frames
**Solution**: 
- Verify Figma sharing permissions
- Check frame URLs are correct
- Confirm MCP Figma connection

#### 2. Design Token Extraction Issues
**Issue**: Cannot extract design tokens from Figma
**Solution**:
- Ensure design tokens are properly defined in Figma
- Check Figma design system setup
- Verify color styles and text styles exist

#### 3. Accessibility Test Failures
**Issue**: Component fails accessibility tests
**Solution**:
- Add proper ARIA labels and roles
- Implement keyboard navigation
- Ensure color contrast meets WCAG standards
- Add focus indicators

#### 4. Cross-Platform Inconsistency
**Issue**: SwiftUI doesn't match React component
**Solution**:
- Re-run SwiftUI generation: `npm run sync-swiftui-tokens`
- Verify design token consistency
- Check iOS-specific requirements

### Getting Help
- **Claude Code**: Provide specific error messages and context
- **Team Slack**: #design-system channel for questions
- **Documentation**: Check component standards and guides
- **Office Hours**: Weekly design system support sessions

## 📊 Completion Verification

### Final Checklist
Before marking component as complete:

- [ ] ✅ **All checklist items above completed**
- [ ] ✅ **Component audit passed** with 95%+ scores
- [ ] ✅ **Documentation complete** and accurate
- [ ] ✅ **Cross-platform consistency** verified
- [ ] ✅ **Integration successful** in design system
- [ ] ✅ **Ready for production use**

### Component Status Update
Update component status in registry:
```json
{
  "ComponentName": {
    "status": "completed",
    "version": "1.0.0", 
    "auditScore": 98,
    "completedDate": "2025-01-23T10:30:00Z"
  }
}
```

---

Following this checklist ensures every component meets the highest quality standards and integrates seamlessly with the Pigment Genesis design system.
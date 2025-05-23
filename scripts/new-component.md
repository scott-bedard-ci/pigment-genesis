# New Component Creation Checklist

This checklist ensures consistent, high-quality component development following the Pigment-Genesis design system standards.

## Pre-Development Phase

### 1. Design Collection & Verification ✅

**CRITICAL: Never proceed without complete Figma designs**

- [ ] **Collect Figma frame URLs** for all component states
  - [ ] Default state
  - [ ] Hover state
  - [ ] Active/pressed state
  - [ ] Disabled state
  - [ ] Focus state
  - [ ] Loading state (if applicable)
  - [ ] Error state (if applicable)

- [ ] **Verify Figma access**
  - [ ] Can access all provided frame URLs
  - [ ] Frames contain sufficient detail for development
  - [ ] All variants and sizes are documented
  - [ ] Responsive behavior is specified

- [ ] **Document all variants and sizes**
  - [ ] Size variants: sm, md, lg (minimum)
  - [ ] Visual variants: primary, secondary, outline, ghost
  - [ ] Semantic variants: success, warning, error (if applicable)
  - [ ] Special variants: loading, disabled, icon-only

- [ ] **Extract design specifications**
  - [ ] Colors used (must be from design token palette)
  - [ ] Spacing values (must be from spacing scale)
  - [ ] Typography settings (must be from typography scale)
  - [ ] Shadow/effects (must be from effects scale)
  - [ ] Border radius values
  - [ ] Animation/transition specifications

### 2. Design Token Verification ✅

- [ ] **Verify all design values exist as tokens**
  - [ ] Colors available in color palette
  - [ ] Spacing values available in spacing scale
  - [ ] Typography styles available in typography system
  - [ ] Effects available in effects system

- [ ] **Map Figma values to design tokens**
  - [ ] Create mapping document
  - [ ] Verify token names match Figma token names
  - [ ] Confirm no hardcoded values needed

### 3. Component Planning ✅

- [ ] **Determine atomic design level**
  - [ ] Atom: Basic building block
  - [ ] Molecule: Simple combination of atoms
  - [ ] Organism: Complex combination of molecules

- [ ] **Plan component API**
  - [ ] Required props
  - [ ] Optional props
  - [ ] Event handlers
  - [ ] Ref forwarding needs
  - [ ] Polymorphic requirements

- [ ] **Plan responsive behavior**
  - [ ] Mobile-first approach
  - [ ] Breakpoint-specific changes
  - [ ] Touch target compliance
  - [ ] Content adaptation strategy

## Development Phase

### 4. Component Implementation ✅

- [ ] **Create component directory structure**
  ```
  ComponentName/
  ├── ComponentName.tsx
  ├── ComponentName.stories.ts
  ├── ComponentName.test.ts
  ├── ComponentName.figmaframes.json
  └── index.ts
  ```

- [ ] **Implement base component**
  - [ ] Use component template as foundation
  - [ ] Extend appropriate base props interface
  - [ ] Implement design token integration
  - [ ] Add responsive classes
  - [ ] Include accessibility attributes

- [ ] **Create component variants**
  - [ ] Use `createComponentVariants` utility
  - [ ] Map all Figma variants to code
  - [ ] Ensure consistent naming
  - [ ] Test variant combinations

- [ ] **Implement interactive states**
  - [ ] Hover effects
  - [ ] Active/pressed states
  - [ ] Focus management
  - [ ] Disabled behavior
  - [ ] Loading states

- [ ] **Add TypeScript interfaces**
  - [ ] Extend base component props
  - [ ] Type all props correctly
  - [ ] Export prop types
  - [ ] Add JSDoc comments

### 5. Accessibility Implementation ✅

- [ ] **Keyboard navigation**
  - [ ] Tab navigation support
  - [ ] Enter/Space activation
  - [ ] Arrow key navigation (if applicable)
  - [ ] Escape key handling (if applicable)

- [ ] **ARIA attributes**
  - [ ] aria-label for icon-only variants
  - [ ] aria-describedby for helper text
  - [ ] aria-expanded for expandable content
  - [ ] aria-disabled for disabled states
  - [ ] aria-busy for loading states

- [ ] **Semantic HTML**
  - [ ] Use appropriate HTML elements
  - [ ] Proper heading hierarchy (if applicable)
  - [ ] Form associations (if applicable)
  - [ ] Landmark roles (if applicable)

- [ ] **Touch accessibility**
  - [ ] Minimum 44px touch targets
  - [ ] Comfortable spacing between targets
  - [ ] Swipe gesture support (if applicable)

### 6. Responsive Implementation ✅

- [ ] **Mobile-first design**
  - [ ] Start with mobile layout
  - [ ] Progressive enhancement for larger screens
  - [ ] Test on actual mobile devices

- [ ] **Breakpoint behavior**
  - [ ] xs (375px): Small mobile
  - [ ] sm (640px): Large mobile
  - [ ] md (768px): Tablet
  - [ ] lg (1024px): Desktop
  - [ ] xl (1280px): Large desktop

- [ ] **Content adaptation**
  - [ ] Text truncation strategies
  - [ ] Image scaling behavior
  - [ ] Layout reflow patterns

## Testing Phase

### 7. Unit Testing ✅

- [ ] **Run standard component tests**
  - [ ] Use `runStandardComponentTests` utility
  - [ ] Test all variants and sizes
  - [ ] Test prop combinations
  - [ ] Test event handlers

- [ ] **Component-specific tests**
  - [ ] Test unique functionality
  - [ ] Test edge cases
  - [ ] Test error conditions
  - [ ] Test async behavior

- [ ] **Achieve test coverage goals**
  - [ ] ≥80% overall coverage
  - [ ] 100% branch coverage for critical paths
  - [ ] Test all public methods

### 8. Accessibility Testing ✅

- [ ] **Automated testing**
  - [ ] Run `runAccessibilityTests` utility
  - [ ] Zero axe-core violations
  - [ ] Keyboard navigation testing
  - [ ] Focus management testing

- [ ] **Manual testing**
  - [ ] Screen reader testing (VoiceOver/NVDA)
  - [ ] Keyboard-only navigation
  - [ ] High contrast mode testing
  - [ ] Zoom testing (up to 200%)

- [ ] **Touch testing**
  - [ ] Test on actual mobile devices
  - [ ] Verify touch target sizes
  - [ ] Test gesture interactions

### 9. Responsive Testing ✅

- [ ] **Cross-device testing**
  - [ ] Mobile phones (portrait/landscape)
  - [ ] Tablets (portrait/landscape)
  - [ ] Desktop monitors
  - [ ] Large displays

- [ ] **Browser testing**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)

## Documentation Phase

### 10. Storybook Stories ✅

- [ ] **Create comprehensive stories**
  - [ ] Default story
  - [ ] All variants story
  - [ ] All sizes story
  - [ ] Responsive demo story
  - [ ] Accessibility demo story
  - [ ] Interactive demo story
  - [ ] Edge cases story

- [ ] **Write story documentation**
  - [ ] Component overview
  - [ ] Usage guidelines
  - [ ] Do's and don'ts
  - [ ] Related components
  - [ ] Design token references

- [ ] **Add interactive controls**
  - [ ] All props controllable
  - [ ] Realistic default values
  - [ ] Helpful descriptions
  - [ ] Grouped logically

### 11. Component Documentation ✅

- [ ] **Write JSDoc comments**
  - [ ] Component description
  - [ ] Usage examples
  - [ ] Prop descriptions
  - [ ] Performance notes

- [ ] **Create usage examples**
  - [ ] Basic usage
  - [ ] Advanced usage
  - [ ] Integration examples
  - [ ] Common patterns

### 12. Figma Documentation ✅

- [ ] **Create `.figmaframes.json`**
  - [ ] Document all frame URLs
  - [ ] Map variants to frames
  - [ ] Include design token usage
  - [ ] Add build history

- [ ] **Update component registry**
  - [ ] Add component to master list
  - [ ] Document dependencies
  - [ ] Update README

## Quality Assurance Phase

### 13. Code Review Preparation ✅

- [ ] **Code quality checks**
  - [ ] ESLint passes with no errors
  - [ ] TypeScript compiles without errors
  - [ ] Prettier formatting applied
  - [ ] No console errors/warnings

- [ ] **Performance checks**
  - [ ] Bundle size impact minimal
  - [ ] No memory leaks
  - [ ] Efficient re-rendering
  - [ ] Optimized CSS classes

- [ ] **Integration testing**
  - [ ] Works with other components
  - [ ] Form integration (if applicable)
  - [ ] Theme integration
  - [ ] SSR compatibility

### 14. Final Audit ✅

- [ ] **Design fidelity audit**
  - [ ] Compare with Figma designs
  - [ ] Verify pixel-perfect accuracy
  - [ ] Check all interactive states
  - [ ] Validate responsive behavior

- [ ] **Accessibility audit**
  - [ ] WCAG 2.1 AA compliance
  - [ ] Screen reader compatibility
  - [ ] Keyboard navigation
  - [ ] Color contrast ratios

- [ ] **Documentation audit**
  - [ ] Complete Storybook stories
  - [ ] Comprehensive examples
  - [ ] Clear usage guidelines
  - [ ] Updated project documentation

## Deployment Phase

### 15. Component Registration ✅

- [ ] **Update exports**
  - [ ] Add to main index.ts
  - [ ] Update component barrel exports
  - [ ] Verify TypeScript exports

- [ ] **Update documentation**
  - [ ] Add to README component list
  - [ ] Update changelog
  - [ ] Tag version (if applicable)

- [ ] **Validate build**
  - [ ] Development build works
  - [ ] Production build works
  - [ ] Storybook build works
  - [ ] Type definitions generated

### 16. Post-Deployment Verification ✅

- [ ] **Smoke testing**
  - [ ] Component renders correctly
  - [ ] All stories work
  - [ ] Tests pass in CI
  - [ ] No build errors

- [ ] **Integration verification**
  - [ ] Works in consuming applications
  - [ ] SSR compatibility confirmed
  - [ ] Bundle size acceptable
  - [ ] Performance metrics good

## Component Creation Commands

```bash
# 1. Create component structure
mkdir -p src/components/atoms/ComponentName

# 2. Copy templates
cp src/templates/component.template.tsx src/components/atoms/ComponentName/ComponentName.tsx
cp src/templates/story.template.ts src/components/atoms/ComponentName/ComponentName.stories.ts
cp src/templates/test.template.ts src/components/atoms/ComponentName/ComponentName.test.ts

# 3. Create Figma documentation
touch src/components/atoms/ComponentName/ComponentName.figmaframes.json

# 4. Create index file
echo "export { ComponentName } from './ComponentName';" > src/components/atoms/ComponentName/index.ts

# 5. Update main exports
echo "export { ComponentName } from './atoms/ComponentName';" >> src/components/index.ts

# 6. Run initial tests
npm test -- ComponentName

# 7. Start Storybook
npm run dev
```

## Quality Gates

**Do not proceed to the next phase until all items in the current phase are complete.**

- [ ] **Phase 1-3 Complete**: Design collection and planning
- [ ] **Phase 4-6 Complete**: Implementation and responsive design
- [ ] **Phase 7-9 Complete**: Testing and accessibility
- [ ] **Phase 10-12 Complete**: Documentation
- [ ] **Phase 13-14 Complete**: Quality assurance
- [ ] **Phase 15-16 Complete**: Deployment and verification

## Success Criteria

A component is considered complete when:

1. ✅ **Design Fidelity**: 95%+ accurate to Figma designs
2. ✅ **Accessibility**: WCAG 2.1 AA compliant with zero violations
3. ✅ **Testing**: ≥80% coverage with all tests passing
4. ✅ **Documentation**: Complete Storybook stories and usage guidelines
5. ✅ **Performance**: Minimal bundle impact and efficient rendering
6. ✅ **Integration**: Works seamlessly with existing components

Remember: **Quality over speed.** It's better to take time and build it right than to rush and create technical debt.
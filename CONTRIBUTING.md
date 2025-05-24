# Contributing to Pigment-Genesis Design System

Welcome to the Pigment-Genesis design system! This guide will help you understand how to contribute effectively using Claude Code as your design system engineer.

## 🎯 PRIMARY DIRECTIVE: PERFECTION IS THE ONLY ACCEPTABLE STANDARD

**CRITICAL MINDSET:** Building each component perfectly is infinitely more important than building components quickly. Take ALL the time necessary to achieve perfection.

- **Quality over speed** - Never rush component development
- **100% compliance required** - Partial implementation is complete failure
- **Time is not a factor** - Spend whatever time needed for perfection
- **Cost is not a consideration** - Perfect implementation matters more than efficiency

## 🎯 For New Team Members Using Claude Code

### Getting Started

1. **Open Claude Code** in this project directory
2. **Claude Code will automatically read** `.claude-instructions.md` and behave as the design system engineer
3. **Say "I'm ready to add a new component"** to begin the component creation process
4. **Provide Figma frame links** when requested for accurate design implementation

### The Claude Code Advantage

Claude Code acts as your expert design system engineer that:
- ✅ **Ensures 100% design fidelity** to Figma specifications
- ✅ **Maintains consistent patterns** across all components  
- ✅ **Generates comprehensive tests** and documentation automatically
- ✅ **Creates SwiftUI equivalents** for iOS development
- ✅ **Follows accessibility best practices** in every component
- ✅ **Uses design tokens exclusively** for instant rebrand capability

## 🚨 Critical Rules

### Design-First Development
- **NEVER create components without Figma designs** - Claude Code will refuse to build "standard" components
- **ALL design values must come from Figma** - no assumptions or hardcoded values
- **Every component must be rebrand-ready** through design token usage
- **Provide complete Figma frame access** for accurate implementation

### Quality Standards
- **100% TypeScript coverage** with proper interfaces
- **Comprehensive test coverage** including accessibility tests
- **Mobile-first responsive design** with desktop enhancements
- **WCAG 2.1 AA compliance** for all interactive elements
- **Complete Storybook documentation** with usage examples

## 🔄 Component Development Process

### 1. Preparation Phase
```bash
# Ensure you have latest codebase
git pull origin main
npm install

# Start development environment
npm run dev
```

### 2. Component Creation with Claude Code

#### Step 1: Initiate Component Creation
Say to Claude Code:
```
I'm ready to add a new component
```

#### Step 2: Provide Figma Frame Links
Claude Code will request Figma frames. Provide all relevant links:
```
Here are the Figma frames for the Button component:
- Default state: https://figma.com/file/abc123/design?node-id=1:2
- Hover state: https://figma.com/file/abc123/design?node-id=1:3  
- Disabled state: https://figma.com/file/abc123/design?node-id=1:4
- All size variants: https://figma.com/file/abc123/design?node-id=1:5
```

#### Step 3: Let Claude Code Analyze and Build
Claude Code will:
1. ✅ **Verify Figma access** and extract design specifications
2. ✅ **Extract design tokens** (colors, spacing, typography, effects)
3. ✅ **Build React component** using tokens exclusively
4. ✅ **Generate comprehensive tests** with accessibility coverage
5. ✅ **Create Storybook stories** with responsive demos
6. ✅ **Generate SwiftUI equivalent** for iOS development
7. ✅ **Update documentation** and component registry

### 3. Review and Refinement

#### Automated Quality Checks
```bash
# Run all quality checks
npm run lint && npm run type-check && npm test
```

#### Design Fidelity Review
- Compare built component with Figma designs
- Test responsive behavior across breakpoints
- Verify accessibility with screen readers
- Test keyboard navigation

#### Cross-Platform Consistency
- Review SwiftUI equivalent for iOS design consistency
- Test design token usage for rebrand capability

## 📋 Component Creation Checklist

### Before Starting
- [ ] Figma designs are complete and accessible
- [ ] Design tokens are defined in Figma
- [ ] Component scope is clearly defined
- [ ] Atomic design level is determined (Atom/Molecule/Organism)

### During Development (Claude Code handles these automatically)
- [ ] All design values extracted from Figma (no hardcoded values)
- [ ] Design tokens used exclusively
- [ ] Responsive behavior implemented (mobile-first)
- [ ] Accessibility features added (ARIA, keyboard navigation)
- [ ] TypeScript interfaces defined
- [ ] Comprehensive tests written
- [ ] Storybook stories created
- [ ] SwiftUI equivalent generated

### After Development
- [ ] Visual review matches Figma designs
- [ ] Responsive behavior tested
- [ ] Accessibility manually tested
- [ ] Cross-browser compatibility verified
- [ ] Performance impact assessed
- [ ] Documentation updated

## 🧪 Testing Standards

### Required Test Coverage
```typescript
// Example comprehensive test structure
describe('Button Component', () => {
  // Automated by Claude Code
  runStandardComponentTests(Button, {
    variants: ['primary', 'secondary', 'outline'],
    sizes: ['sm', 'md', 'lg'],
    requiredProps: { children: 'Test' }
  });

  // Component-specific tests
  describe('Button-specific behavior', () => {
    it('handles click events correctly', () => {
      // Test implementation
    });
  });
});
```

### Accessibility Testing
```bash
# Run accessibility test suite
npm run test:a11y

# Manual testing checklist
- [ ] Screen reader navigation
- [ ] Keyboard-only navigation  
- [ ] Focus management
- [ ] Color contrast verification
- [ ] Touch target size verification
```

## 📚 Documentation Standards

### Storybook Stories
Claude Code automatically generates:
- **Default story** with standard props
- **All variants showcase** showing every option
- **Responsive demo** across breakpoints
- **Accessibility demo** with focus states
- **Design token usage** documentation

### Component Documentation
```typescript
/**
 * Button - Primary interactive element
 * 
 * Built from Figma designs with automatic SwiftUI equivalent.
 * Uses design tokens exclusively for instant rebrand capability.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
```

## 🎨 Design Token Workflow

### Token Extraction from Figma
```bash
# Extract latest tokens from Figma
npm run extract-figma-tokens

# Update all design token files
npm run update-design-tokens

# Generate SwiftUI tokens
npm run sync-swiftui-tokens
```

### Rebrand Process
```bash
# Complete rebrand workflow
npm run rebrand
```

This command:
1. Extracts updated tokens from Figma
2. Regenerates all token files
3. Updates SwiftUI equivalents
4. Rebuilds component library
5. Updates Storybook documentation

## 🔧 Development Tools

### Required Tools
- **Node.js 18+** - Runtime environment
- **Claude Code** - Design system engineer
- **Figma account** - Design source access
- **Git** - Version control

### Recommended VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next", 
    "esbenp.prettier-vscode",
    "ms-playwright.playwright"
  ]
}
```

## 🚀 Release Process

### Preparation
```bash
# Ensure clean working directory
git status

# Run full test suite
npm run test && npm run lint && npm run type-check

# Build production version
npm run build
```

### Version Bump
```bash
# Update version (patch/minor/major)
npm version patch -m "Release: Component updates and bug fixes"
```

### Publication
```bash
# Publish to NPM
npm publish

# Deploy Storybook
npm run build-storybook
# Deploy to GitHub Pages or hosting platform
```

## ❗ Common Issues and Solutions

### Figma Access Issues
**Problem**: Claude Code cannot access Figma frames
**Solution**: 
1. Verify Figma sharing permissions
2. Check MCP Figma connection
3. Provide direct frame URLs with proper access

### Design Token Mismatches  
**Problem**: Component doesn't match Figma design
**Solution**:
1. Re-extract tokens: `npm run extract-figma-tokens`
2. Verify Figma design token definitions
3. Check component token usage

### Accessibility Violations
**Problem**: Tests fail with accessibility errors
**Solution**:
1. Run `npm run test:a11y` for specific errors
2. Use browser dev tools accessibility panel
3. Test with actual screen readers

### SwiftUI Generation Issues
**Problem**: SwiftUI components don't match React components
**Solution**:
1. Verify design token consistency
2. Re-run `npm run sync-swiftui-tokens`
3. Check iOS-specific design requirements

## 🆘 Getting Help

### Claude Code Support
- **Read error messages carefully** - Claude Code provides specific guidance
- **Provide complete Figma access** - Most issues stem from incomplete design data
- **Follow the design-first approach** - Don't try to build without designs

### Team Communication
- **#design-system** Slack channel for questions
- **Weekly design system office hours** for complex issues
- **GitHub Discussions** for feature requests and architectural decisions

### Resources
- [Component Standards Guide](./docs/component-standards.md)
- [Testing Guide](./docs/testing-guide.md)  
- [Figma Workflow Guide](./docs/figma-workflow.md)
- [Storybook Documentation](https://customink.github.io/pigment-genesis)

## 🔄 Workflow Examples

### Adding a New Atom Component
```
1. Designer creates Button component in Figma
2. Say to Claude Code: "I'm ready to add a new component"
3. Provide Figma frame links for all Button states and variants
4. Claude Code extracts tokens and builds component
5. Review generated component and tests
6. Merge and deploy
```

### Updating Existing Component
```
1. Designer updates Card component in Figma  
2. Say to Claude Code: "Refresh Card component from Figma"
3. Provide updated Figma frame links
4. Claude Code updates component using new specifications
5. Review changes and test backwards compatibility
6. Update version and deploy
```

### Global Design Token Update
```
1. Designer updates primary color in Figma design tokens
2. Run: npm run update-design-tokens
3. All components automatically use new primary color
4. Test entire system with new branding
5. Deploy rebrand across all platforms
```

## 📈 Success Metrics

### Component Quality
- ✅ **100% design fidelity** to Figma specifications
- ✅ **Zero accessibility violations** in automated tests  
- ✅ **100% test coverage** for component logic
- ✅ **Mobile-first responsive** implementation
- ✅ **Complete documentation** in Storybook

### Development Efficiency  
- ✅ **Consistent patterns** across all components
- ✅ **Reusable utilities** reduce code duplication
- ✅ **Automated testing** catches regressions
- ✅ **Design token usage** enables instant rebrand
- ✅ **SwiftUI generation** maintains cross-platform consistency

---

Thank you for contributing to Pigment-Genesis! Together we're building a world-class design system that scales across platforms and enables rapid, consistent product development.
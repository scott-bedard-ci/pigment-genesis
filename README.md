# Pigment-Genesis Design System

A comprehensive, accessible, and rebrand-ready design system for CustomInk built with React, TypeScript, Tailwind CSS, and Storybook.

## 🎨 Design-First Philosophy

Pigment-Genesis is built with a **design-first approach** where every component is created directly from Figma specifications. No assumptions, no placeholders, no fallbacks - only pixel-perfect implementations based on actual design data.

### Key Features

- **🎯 Figma-Driven Development**: Every component built from Figma design specifications
- **📱 Mobile-First Responsive**: Components work seamlessly across all devices
- **♿ Accessibility-First**: WCAG compliant with comprehensive testing
- **🔄 Instant Rebrand**: Update Figma design tokens to rebrand entire system
- **📦 Atomic Design**: Scalable component hierarchy from atoms to pages
- **🧪 Comprehensive Testing**: Unit, accessibility, and visual regression tests
- **📚 Rich Documentation**: Detailed Storybook stories with usage guidelines
- **📱 SwiftUI Equivalents**: Auto-generated iOS components from React specs

## 🚀 Quick Start

### Installation

```bash
npm install pigment-genesis
```

### Basic Usage

```tsx
import { Button, Input, Card } from 'pigment-genesis';

function App() {
  return (
    <Card variant="elevated" className="p-6">
      <Input 
        label="Email"
        placeholder="Enter your email"
        size="md"
        className="mb-4"
      />
      <Button 
        variant="primary" 
        size="md"
        onClick={() => console.log('Button clicked!')}
      >
        Get Started
      </Button>
    </Card>
  );
}
```

### Development

```bash
# Install dependencies
npm install

# Start Storybook for component development
npm run dev

# Run tests
npm test

# Run accessibility tests
npm run test:a11y

# Build the library
npm run build
```

## 📋 Component Status

### Atoms
- [ ] Button - *Waiting for Figma designs*
- [ ] Input - *Waiting for Figma designs*
- [ ] Label - *Waiting for Figma designs*
- [ ] Icon - *Waiting for Figma designs*
- [ ] Badge - *Waiting for Figma designs*
- [ ] Avatar - *Waiting for Figma designs*

### Molecules
- [ ] InputField - *Waiting for Figma designs*
- [ ] SearchBox - *Waiting for Figma designs*
- [ ] ButtonGroup - *Waiting for Figma designs*
- [ ] Card - *Waiting for Figma designs*

### Organisms
- [ ] Navigation - *Waiting for Figma designs*
- [ ] Header - *Waiting for Figma designs*
- [ ] Footer - *Waiting for Figma designs*
- [ ] Modal - *Waiting for Figma designs*

## 🎨 Design Token System

### Colors
```tsx
// Primary brand colors
bg-primary-500    // Main brand color
bg-primary-600    // Hover state
text-primary-700  // Text variant

// Semantic colors
bg-success-500    // Success states
bg-warning-500    // Warning states
bg-error-500      // Error states
```

### Spacing
```tsx
// Consistent spacing scale
p-xs    // 4px
p-sm    // 8px
p-md    // 16px
p-lg    // 24px
p-xl    // 32px
```

### Typography
```tsx
// Typography hierarchy
text-xs   // 12px - Helper text
text-sm   // 14px - Secondary text
text-base // 16px - Body text
text-lg   // 18px - Emphasis
text-xl   // 20px - Small headings
text-2xl  // 24px - Section headings
```

## 📱 Responsive Design

All components are built mobile-first with responsive enhancements:

```tsx
<Button 
  size="sm"           // Mobile: small
  className="md:size-md lg:size-lg"  // Tablet: medium, Desktop: large
>
  Responsive Button
</Button>
```

### Breakpoints
- `xs`: 375px (Mobile small)
- `sm`: 640px (Mobile large)
- `md`: 768px (Tablet)
- `lg`: 1024px (Desktop)
- `xl`: 1280px (Desktop large)

## ♿ Accessibility

### Built-in Accessibility Features
- **Semantic HTML**: Proper element usage for screen readers
- **ARIA Labels**: Comprehensive labeling for interactive elements
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG compliant color combinations
- **Touch Targets**: Minimum 44px touch targets for mobile

### Testing
```bash
# Run accessibility tests
npm run test:a11y

# Individual component accessibility test
jest Button.test.ts --testNamePattern="accessibility"
```

## 🔄 Rebrand Capability

The design system is built for instant rebranding through Figma design tokens:

1. **Update Figma design tokens** (colors, spacing, typography)
2. **Run token extraction**: `npm run extract-figma-tokens`
3. **Rebuild system**: `npm run rebrand`
4. **Deploy**: All components automatically use new brand tokens

```bash
# Complete rebrand workflow
npm run rebrand
```

## 📚 Documentation

### Storybook
Access comprehensive component documentation at: `http://localhost:6006`

- **Interactive examples** for all component variants
- **Responsive demos** showing mobile and desktop behavior
- **Accessibility guidelines** for proper implementation
- **Code examples** with copy-paste snippets
- **Design guidelines** and usage best practices

### Component APIs
Each component includes:
- **TypeScript interfaces** for all props
- **Default values** for optional props
- **Usage examples** in multiple contexts
- **Responsive behavior** documentation
- **Accessibility requirements** and testing

## 🧪 Testing Strategy

### Test Types
- **Unit Tests**: Component logic and user interactions
- **Accessibility Tests**: WCAG compliance with jest-axe
- **Visual Regression**: Component appearance consistency
- **Integration Tests**: Component interaction and composition

### Running Tests
```bash
# All tests
npm test

# Watch mode for development
npm run test:watch

# Coverage report
npm run test:coverage

# Accessibility-specific tests
npm run test:a11y
```

## 🏗️ Development Workflow

### Adding New Components

1. **Request Figma designs**: Provide complete frame links for all states
2. **Design token extraction**: Extract colors, spacing, typography from Figma
3. **Component implementation**: Build responsive, accessible React component
4. **SwiftUI generation**: Create iOS equivalent from React specifications
5. **Testing**: Unit tests, accessibility tests, visual regression tests
6. **Documentation**: Storybook stories with usage guidelines
7. **Integration**: Update component registry and build system

### Using Claude Code

When working with Claude Code in this project:

```bash
# Claude Code will automatically read CLAUDE.md for behavior instructions
# Say this to start component development:
"I'm ready to add a new component"

# Provide Figma frame links when requested
# Claude Code will handle the rest following design system standards
```

## 📦 Build and Distribution

### Package Build
```bash
# Build library for distribution
npm run build

# Build Storybook documentation
npm run build-storybook
```

### Import Patterns
```tsx
// Named imports (recommended)
import { Button, Input, Card } from 'pigment-genesis';

// Individual component imports
import { Button } from 'pigment-genesis/Button';
import { Input } from 'pigment-genesis/Input';
```

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed development guidelines.

### Key Principles
- **Design-first approach**: Never build without Figma specifications
- **Accessibility-first**: WCAG compliance in every component
- **Mobile-first**: Responsive design starting from mobile
- **Test-driven**: Comprehensive testing for all functionality
- **Token-driven**: Use design tokens exclusively for rebrand capability

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🏢 CustomInk

Built with ❤️ by the CustomInk design system team.

- [CustomInk](https://www.customink.com)
- [Design System Documentation](https://design.customink.com)
- [Component Library](https://components.customink.com)
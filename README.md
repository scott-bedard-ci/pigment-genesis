# Pigment Genesis Design System

A comprehensive design system built with React, TypeScript, Tailwind CSS, and Storybook for CustomInk. This design system follows atomic design principles and uses Figma design tokens for instant rebrand capability.

## 🎨 Features

- **Design Token Integration**: All styling comes from Figma design tokens for instant rebrand capability
- **Atomic Design**: Organized component hierarchy (Atoms → Molecules → Organisms → Templates → Pages)
- **Responsive Design**: Mobile-first approach with seamless desktop enhancement
- **Accessibility**: WCAG compliant with full keyboard navigation and screen reader support
- **TypeScript**: Fully typed components with comprehensive prop interfaces
- **Testing**: Comprehensive test coverage with React Testing Library and jest-axe
- **Storybook**: Interactive documentation with responsive demos and design token usage examples
- **SwiftUI Generation**: Automatic SwiftUI equivalent generation for iOS development

## 🚀 Quick Start

### Installation

```bash
npm install @customink/pigment-genesis
```

### Basic Usage

```tsx
import { Button, Card, Input } from '@customink/pigment-genesis';
import '@customink/pigment-genesis/styles';

function App() {
  return (
    <Card>
      <Input label="Email" placeholder="Enter your email" />
      <Button variant="primary" size="md" onClick={handleSubmit}>
        Submit
      </Button>
    </Card>
  );
}
```

## 📖 Documentation

- **[Storybook](https://customink.github.io/pigment-genesis)** - Interactive component documentation
- **[Design Tokens](./src/tokens/README.md)** - Complete token reference
- **[Component Guidelines](./docs/component-standards.md)** - Development standards
- **[Contributing Guide](./CONTRIBUTING.md)** - How to contribute

## 🛠 Development

### Prerequisites

- Node.js 18+ 
- npm 8+
- **Sharp Sans font family** installed system-wide (required for accurate typography)

### Setup

```bash
# Clone the repository
git clone https://github.com/customink/pigment-genesis.git
cd pigment-genesis

# Install dependencies
npm install

# Start Storybook development server
npm run dev
```

### 🔤 Font Setup (Required)

The design system uses **Sharp Sans Medium** font family. You must install this font before development:

#### Installation Steps:

**macOS:**
```bash
# Download Sharp Sans from CustomInk's design assets
# Double-click the .otf/.ttf files and click "Install Font"
# Or use Font Book → File → Add Fonts
```

**Windows:**
```bash
# Download Sharp Sans font files
# Right-click each .otf/.ttf file → "Install" or "Install for all users"
```

**Linux (Ubuntu/Debian):**
```bash
# Download Sharp Sans font files
mkdir -p ~/.fonts
cp Sharp-Sans-*.otf ~/.fonts/
fc-cache -fv
```

#### Verification:
- Open browser dev tools → Elements → Computed → font-family
- Should show "Sharp Sans" as active font for component text
- If missing, components will fall back to system fonts (incorrect appearance)

**⚠️ Important:** Restart Storybook after font installation:
```bash
npm run dev
```

### Available Scripts

```bash
# Development
npm run dev                    # Start Storybook dev server
npm run build                  # Build the library
npm run build-storybook        # Build Storybook for production

# Testing
npm run test                   # Run all tests
npm run test:watch             # Run tests in watch mode
npm run test:coverage          # Run tests with coverage report
npm run test:a11y              # Run accessibility tests

# Code Quality
npm run lint                   # Lint code
npm run lint:fix               # Fix linting errors
npm run type-check             # Check TypeScript types
npm run format                 # Format code with Prettier

# Design Tokens
npm run extract-figma-tokens   # Extract tokens from Figma
npm run update-design-tokens   # Update all design tokens
npm run sync-swiftui-tokens    # Generate SwiftUI tokens
npm run rebrand                # Complete rebrand workflow
```

## 📱 Component Library

### Atoms (Basic Building Blocks)
- Button - Primary interactive element
- Input - Form input component  
- Badge - Status and labeling component
- Avatar - User representation component

### Molecules (Simple Combinations)
- Card - Content container
- Form Field - Input with label and validation
- Search Bar - Input with search functionality
- Pagination - Navigation control

### Organisms (Complex Components)
- Header - Site navigation
- Data Table - Complex data display
- Modal - Overlay interactions
- Form - Complete form structures

## 🎨 Design Tokens

All components use design tokens extracted from Figma for consistent styling:

```tsx
// Colors
tokens.colors.primary.500     // #3b82f6
tokens.colors.secondary.500   // #a855f7

// Spacing  
tokens.spacing.md             // 16px
tokens.spacing.lg             // 24px

// Typography
tokens.typography.bodyMedium  // 16px/24px Sharp Sans Medium
tokens.typography.headingLarge // 36px/44px Sharp Sans Medium
```

### Rebrand Ready

Change colors in Figma → Run token extraction → Entire system updates automatically:

```bash
npm run rebrand
```

## 📱 SwiftUI Support

Every React component has a SwiftUI equivalent:

```swift
import PigmentGenesisUI

// SwiftUI equivalent of React Button
Button(content: "Click me", variant: .primary, size: .md) {
    handleClick()
}
```

## ♿ Accessibility

All components meet WCAG 2.1 AA standards:

- **Keyboard Navigation**: Full Tab/Shift+Tab support
- **Screen Readers**: Proper ARIA labels and roles
- **Touch Targets**: Minimum 44px for mobile interaction
- **Color Contrast**: 4.5:1 ratio for text elements
- **Focus Indicators**: Clear visual focus states

## 🧪 Testing

```bash
# Run all tests
npm test

# Test specific component
npm test Button

# Test accessibility
npm run test:a11y

# Visual regression testing
npm run test:visual
```

## 🏗 Architecture

```
src/
├── tokens/              # Design tokens from Figma
├── components/          # Component library
│   ├── atoms/          # Basic components
│   ├── molecules/      # Composed components  
│   └── organisms/      # Complex components
├── utils/              # Shared utilities
├── hooks/              # Reusable hooks
├── types/              # TypeScript definitions
└── templates/          # Component templates
```

## 🔄 Design-First Workflow

1. **Designer updates Figma** with new components or token changes
2. **Extract tokens**: `npm run extract-figma-tokens`
3. **Generate components**: Claude Code analyzes Figma frames and builds React components
4. **Auto-generate SwiftUI**: iOS equivalents created automatically
5. **Update docs**: Storybook stories updated with new components

## 📋 Component Creation Checklist

When creating new components:

- [ ] Extract all design values from Figma (no hardcoded values)
- [ ] Use design tokens exclusively 
- [ ] Implement responsive behavior (mobile-first)
- [ ] Add comprehensive accessibility support
- [ ] Write complete test coverage
- [ ] Create Storybook stories with responsive demos
- [ ] Generate SwiftUI equivalent
- [ ] Document design token usage

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### For New Contributors

1. Read the [Contributing Guide](./CONTRIBUTING.md)
2. Check component standards in [docs/component-standards.md](./docs/component-standards.md)
3. Use Claude Code for consistent development experience
4. Ensure all new components follow Figma-first approach

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🔗 Links

- **[Figma Design System](https://figma.com/file/...)** - Source of truth for all designs
- **[Storybook Documentation](https://customink.github.io/pigment-genesis)** - Interactive component docs
- **[NPM Package](https://www.npmjs.com/package/@customink/pigment-genesis)** - Published package
- **[GitHub Repository](https://github.com/customink/pigment-genesis)** - Source code

---

Built with ❤️ by the CustomInk Design System Team
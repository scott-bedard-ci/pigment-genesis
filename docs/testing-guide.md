# Testing Guide - Pigment Genesis Design System

This guide outlines the comprehensive testing requirements and patterns for all components in the Pigment Genesis design system.

## 🎯 PRIMARY DIRECTIVE: PERFECTION IS THE ONLY ACCEPTABLE STANDARD

**CRITICAL MINDSET:** Perfect test coverage is infinitely more important than quick test development. Take ALL the time necessary to achieve comprehensive testing.

**TESTING REQUIREMENTS:**
- **100% component coverage** - Every function, prop, and interaction tested
- **100% accessibility compliance** - Every component must pass a11y audits
- **100% state coverage** - Every variant, size, and state combination tested
- **Perfect edge case handling** - Every error condition must be tested
- **Complete documentation** - Every test must have clear purpose

**TIME IS NOT A FACTOR:**
- Spend unlimited time writing comprehensive test suites
- Never rush test development for quick completion
- Perfect test coverage matters more than development speed

## 🎯 Testing Philosophy

### Core Testing Principles
1. **100% Component Logic Coverage** - Every function and interaction must be tested
2. **Accessibility First** - Every component must pass automated a11y tests
3. **Responsive Testing** - Components must work across all breakpoints
4. **Cross-Browser Compatibility** - Test in modern browsers
5. **DRY Testing Patterns** - Reuse testing utilities and patterns

## 🧪 Test Categories

### 1. Standard Component Tests (Automated)
Every component automatically gets these tests through `runStandardComponentTests`:

```typescript
import { runStandardComponentTests } from '@/utils/testing';

runStandardComponentTests(Button, {
  variants: ['primary', 'secondary', 'outline', 'ghost'],
  sizes: ['sm', 'md', 'lg'],
  requiredProps: { children: 'Test Button' },
  skipTests: [], // Skip specific tests if needed
});
```

**What's included automatically:**
- Basic rendering with default props
- All variant combinations
- All size combinations  
- Accessibility validation
- Keyboard navigation
- Disabled state handling
- Custom className support
- Data attribute support

### 2. Component-Specific Tests
Test behavior unique to each component:

```typescript
describe('Button-specific behavior', () => {
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    renderWithProviders(
      <Button onClick={handleClick}>Click me</Button>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    renderWithProviders(
      <Button onClick={handleClick} disabled>Disabled</Button>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 3. Accessibility Tests
Comprehensive accessibility validation:

```typescript
import { testAccessibility, testKeyboardNavigation } from '@/utils/testing';

describe('Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = renderWithProviders(<Button>Test</Button>);
    await testAccessibility(container);
  });

  it('supports keyboard navigation', async () => {
    const handleClick = jest.fn();
    renderWithProviders(<Button onClick={handleClick}>Test</Button>);
    
    const button = screen.getByRole('button');
    await testKeyboardNavigation.enter(button, () => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  it('supports Space key activation', async () => {
    const handleClick = jest.fn();
    renderWithProviders(<Button onClick={handleClick}>Test</Button>);
    
    const button = screen.getByRole('button');
    await testKeyboardNavigation.space(button, () => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
```

### 4. Responsive Tests
Test component behavior across breakpoints:

```typescript
import { testResponsiveComponent } from '@/utils/testing';

describe('Responsive Behavior', () => {
  testResponsiveComponent(Button, { children: 'Responsive Button' });

  it('maintains minimum touch target size', () => {
    renderWithProviders(<Button size="sm">Small</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('min-h-[44px]', 'min-w-[44px]');
  });
});
```

### 5. Visual Regression Tests
Test visual consistency across changes:

```typescript
describe('Visual Regression', () => {
  it('matches visual snapshot', () => {
    const { container } = renderWithProviders(
      <Button variant="primary">Visual Test</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

## 🛠 Testing Utilities

### Core Testing Utilities

#### 1. `renderWithProviders`
Enhanced render function with common providers:

```typescript
import { renderWithProviders } from '@/utils/testing';

// Instead of React Testing Library's render
const { getByRole } = renderWithProviders(<Button>Test</Button>);

// With custom providers
const { getByRole } = renderWithProviders(
  <Button>Test</Button>,
  {
    providerProps: { theme: 'dark' }
  }
);
```

#### 2. `testAccessibility`
Automated accessibility testing:

```typescript
import { testAccessibility } from '@/utils/testing';

it('has no accessibility violations', async () => {
  const { container } = renderWithProviders(<Component />);
  await testAccessibility(container); // Throws if violations found
});
```

#### 3. `testKeyboardNavigation`
Keyboard interaction testing:

```typescript
import { testKeyboardNavigation } from '@/utils/testing';

// Test Tab navigation
await testKeyboardNavigation.tab(element);

// Test Enter key
await testKeyboardNavigation.enter(element, () => {
  expect(mockFn).toHaveBeenCalled();
});

// Test Space key
await testKeyboardNavigation.space(element, () => {
  expect(mockFn).toHaveBeenCalled();
});

// Test Escape key
await testKeyboardNavigation.escape(element, () => {
  expect(mockOnClose).toHaveBeenCalled();
});
```

#### 4. `runStandardComponentTests`
Comprehensive component test suite:

```typescript
import { runStandardComponentTests } from '@/utils/testing';

runStandardComponentTests(MyComponent, {
  // Required: Component variants to test
  variants: ['primary', 'secondary', 'outline'],
  
  // Required: Component sizes to test
  sizes: ['sm', 'md', 'lg'],
  
  // Required: Minimum props needed to render
  requiredProps: { children: 'Test Content' },
  
  // Optional: Skip specific test categories
  skipTests: ['variants', 'accessibility'],
  
  // Optional: Custom test implementations
  customTests: (Component, props) => {
    it('custom test', () => {
      // Custom test logic
    });
  }
});
```

### Test Fixtures and Mocks

#### Common Test Data
```typescript
import { testFixtures } from '@/utils/testing';

// Pre-defined text content
testFixtures.text.short      // "Test"
testFixtures.text.medium     // "Test Button Content"  
testFixtures.text.long       // Long paragraph for testing

// Mock functions (automatically reset between tests)
testFixtures.props.onClick   // jest.fn()
testFixtures.props.onChange  // jest.fn()
testFixtures.props.onSubmit  // jest.fn()

// Manual reset if needed
testFixtures.resetMocks();
```

## 📊 Test Coverage Requirements

### Minimum Coverage Thresholds
```javascript
// jest.config.js
coverageThreshold: {
  global: {
    branches: 80,
    functions: 80, 
    lines: 80,
    statements: 80
  }
}
```

### Component-Specific Coverage
Each component must achieve:
- **100% function coverage** - Every function tested
- **95% line coverage** - Nearly every line executed
- **90% branch coverage** - All conditional paths tested
- **100% accessibility coverage** - All a11y features tested

## 🎭 Test Organization

### File Structure
```
src/components/atoms/Button/
├── Button.tsx
├── Button.test.ts              # Main test file
├── Button.stories.ts
├── __tests__/                  # Optional: Complex test suites
│   ├── Button.accessibility.test.ts
│   ├── Button.responsive.test.ts
│   └── Button.integration.test.ts
└── __mocks__/                  # Optional: Component-specific mocks
    └── MockButton.tsx
```

### Test File Template
```typescript
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { 
  renderWithProviders,
  testAccessibility,
  testKeyboardNavigation,
  runStandardComponentTests,
  testFixtures
} from '@/utils/testing';

// Standard component tests (automated)
runStandardComponentTests(Button, {
  variants: ['primary', 'secondary', 'outline', 'ghost'],
  sizes: ['sm', 'md', 'lg'],
  requiredProps: { children: 'Test Button' }
});

// Component-specific tests
describe('Button Specific Behavior', () => {
  beforeEach(() => {
    testFixtures.resetMocks();
  });

  describe('Click Handling', () => {
    it('calls onClick when clicked', () => {
      // Test implementation
    });
  });

  describe('Loading State', () => {
    it('shows loading spinner when loading', () => {
      // Test implementation  
    });
  });
});
```

## 🔍 Accessibility Testing Checklist

### Automated Tests (Required)
- [ ] **jest-axe** validation passes
- [ ] **Keyboard navigation** functional
- [ ] **Focus management** working
- [ ] **ARIA attributes** present and correct

### Manual Testing (Recommended)
- [ ] **Screen reader** compatibility (VoiceOver, NVDA)
- [ ] **High contrast** mode support
- [ ] **Reduced motion** respect
- [ ] **Zoom up to 200%** functionality maintained

### Accessibility Test Examples
```typescript
describe('Accessibility Features', () => {
  it('has proper button role', () => {
    renderWithProviders(<Button>Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('supports aria-label', () => {
    renderWithProviders(
      <Button aria-label="Custom label">Test</Button>
    );
    expect(screen.getByLabelText('Custom label')).toBeInTheDocument();
  });

  it('sets aria-disabled when disabled', () => {
    renderWithProviders(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
  });

  it('maintains focus visibility', () => {
    renderWithProviders(<Button>Test</Button>);
    const button = screen.getByRole('button');
    
    button.focus();
    expect(button).toHaveFocus();
    expect(button).toHaveClass('focus-visible:ring-2');
  });
});
```

## 📱 Responsive Testing

### Breakpoint Testing
```typescript
describe('Responsive Behavior', () => {
  const breakpoints = [
    { name: 'mobile', width: 375 },
    { name: 'tablet', width: 768 },
    { name: 'desktop', width: 1024 }
  ];

  breakpoints.forEach(({ name, width }) => {
    it(`renders correctly on ${name} (${width}px)`, () => {
      // Mock window.innerWidth
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
      });

      renderWithProviders(<Button>Responsive Test</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
```

### Touch Target Testing
```typescript
describe('Touch Targets', () => {
  it('meets minimum touch target size', () => {
    renderWithProviders(<Button size="sm">Small</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('min-h-[44px]', 'min-w-[44px]');
  });

  it('provides comfortable touch targets for larger sizes', () => {
    renderWithProviders(<Button size="lg">Large</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('min-h-[56px]');
  });
});
```

## 🚀 Performance Testing

### Bundle Size Testing
```typescript
describe('Performance', () => {
  it('has reasonable bundle size impact', () => {
    // Mock bundle analyzer results
    const bundleSize = getBundleSize('Button');
    expect(bundleSize).toBeLessThan(5000); // 5KB max
  });

  it('does not cause unnecessary re-renders', () => {
    const renderCount = jest.fn();
    
    const TestComponent = () => {
      renderCount();
      return <Button>Test</Button>;
    };

    const { rerender } = renderWithProviders(<TestComponent />);
    rerender(<TestComponent />);
    
    expect(renderCount).toHaveBeenCalledTimes(2); // Initial + rerender
  });
});
```

## 🎯 Test Commands

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run only accessibility tests
npm run test:a11y

# Run specific component tests
npm test Button

# Run tests for specific pattern
npm test -- --testNamePattern="accessibility"
```

### Coverage Reports
```bash
# Generate coverage report
npm run test:coverage

# View coverage in browser
open coverage/lcov-report/index.html
```

## 🐛 Debugging Tests

### Common Issues and Solutions

#### 1. Accessibility Test Failures
```bash
# Run with detailed accessibility output
npm test -- --verbose Button.test.ts

# Check specific accessibility violations
console.log(await axe(container));
```

#### 2. Responsive Test Issues
```bash
# Mock window dimensions properly
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 768,
});

// Trigger resize event
window.dispatchEvent(new Event('resize'));
```

#### 3. Async Test Problems
```typescript
// Use waitFor for async operations
import { waitFor } from '@testing-library/react';

await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

## 📈 Test Quality Metrics

### Success Criteria
- **Test Coverage**: 95%+ for all components
- **Accessibility**: Zero violations in automated tests
- **Performance**: All tests complete in < 30 seconds
- **Reliability**: < 1% flaky test rate
- **Maintainability**: DRY score > 90%

### Monitoring
- **Coverage tracking** in CI/CD pipeline
- **Performance regression** detection
- **Accessibility violation** alerts
- **Test flakiness** monitoring

---

This testing guide ensures every component meets the highest quality standards and provides confidence in the design system's reliability and accessibility.
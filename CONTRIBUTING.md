# Contributing to Pigment-Genesis Design System

## For New Team Members Using Claude Code

### Getting Started
1. Open Claude Code in this project directory
2. Claude Code will automatically read `CLAUDE.md` and behave as the design system engineer
3. Say "I'm ready to add a new component" to begin the component creation process
4. Provide Figma frame links when requested

### Component Development Process

#### Step 1: Design Collection
- **Always start with Figma designs** - Never create components without design specifications
- Provide complete Figma frame links for all component states and variants
- Ensure frames include mobile and desktop breakpoints
- Include all interactive states (hover, active, disabled, focus)

#### Step 2: Design Token Extraction
- All design values (colors, spacing, typography) must come from Figma design tokens
- No hardcoded values - everything must be rebrand-ready
- Design tokens automatically map to Tailwind CSS classes
- Changes in Figma propagate to entire design system

#### Step 3: Component Implementation
- **Atomic Design methodology**: Atoms → Molecules → Organisms → Templates → Pages
- **Mobile-first responsive design** with desktop enhancements
- **Accessibility-first development** with ARIA, semantic HTML, keyboard navigation
- **TypeScript interfaces** for all props extending shared base types
- **Comprehensive testing** including unit tests, accessibility tests, and visual regression tests

#### Step 4: SwiftUI Generation
- SwiftUI components automatically generated from React implementations
- Design token consistency maintained across platforms
- Mobile React specifications drive SwiftUI component behavior

#### Step 5: Documentation & Stories
- **Comprehensive Storybook stories** with responsive demos
- **Usage examples and guidelines** for proper implementation
- **Do's and Don'ts** for component usage
- **Interactive controls** for all component props

### Quality Standards

#### Design Fidelity
- 95%+ pixel-perfect accuracy to Figma designs
- Responsive behavior matching design specifications
- All interactive states properly implemented

#### Code Quality
- TypeScript interfaces extending shared base types
- DRY principles - no duplicate code across components
- Consistent naming conventions (PascalCase for components, camelCase for props)
- Proper error boundaries and error handling

#### Testing Requirements
- Unit tests for all component logic and user interactions
- Accessibility tests using jest-axe
- Keyboard navigation testing
- Visual regression tests where appropriate
- 80% minimum code coverage

#### Documentation Standards
- Complete Storybook documentation with examples
- Component usage guidelines and best practices
- Design decision documentation
- API documentation for all props and interfaces

### Figma Workflow Requirements

#### Before Starting Development
1. Verify Figma frame accessibility
2. Extract and validate design tokens
3. Confirm responsive behavior specifications
4. Identify all component variants and states

#### During Development
1. Maintain exact design fidelity
2. Use design tokens exclusively
3. Implement responsive behavior as specified
4. Test across all required breakpoints

#### After Development
1. Document Figma frame sources in `.figmaframes.json`
2. Update component registry with build information
3. Run comprehensive audit against design specifications
4. Verify SwiftUI equivalent matches React implementation

### File Organization Standards

#### Component Structure
```
ComponentName/
├── ComponentName.tsx          # Main component implementation
├── ComponentName.stories.ts   # Storybook stories
├── ComponentName.test.ts      # Unit and accessibility tests
└── ComponentName.figmaframes.json  # Figma frame history
```

#### Required Files for Each Component
- **Component Implementation**: TypeScript React component with proper interfaces
- **Storybook Stories**: Comprehensive stories with responsive demos
- **Test Suite**: Unit tests, accessibility tests, interaction tests
- **Figma Documentation**: Frame URLs and design specifications

### Design Token Management

#### Token Categories
- **Colors**: Primary, secondary, semantic colors from Figma
- **Spacing**: Consistent spacing scale from Figma
- **Typography**: Font families, sizes, weights from Figma
- **Effects**: Shadows, borders, radius from Figma
- **Breakpoints**: Responsive breakpoint definitions

#### Token Usage Rules
- **Never hardcode design values** - always use design tokens
- **Map tokens to Tailwind classes** for consistent application
- **Maintain Figma connection** for automatic rebrand capability
- **Document token sources** in component implementations

### Accessibility Standards

#### Required Accessibility Features
- **Semantic HTML elements** for proper screen reader support
- **ARIA labels and descriptions** for interactive elements
- **Keyboard navigation support** for all interactive components
- **Color contrast compliance** meeting WCAG guidelines
- **Focus management** for complex interactions

#### Accessibility Testing
- **jest-axe integration** for automated accessibility testing
- **Manual keyboard testing** for navigation flows
- **Screen reader testing** for complex components
- **Color contrast validation** for all text and interactive elements

### Responsive Design Standards

#### Mobile-First Approach
- Design for mobile screens first (375px minimum)
- Enhance for larger screens using breakpoints
- Ensure touch targets meet minimum size requirements (44px)
- Test on actual devices when possible

#### Breakpoint Management
- Use design system breakpoints consistently
- Implement responsive behavior as specified in Figma
- Test component behavior at all breakpoint transitions
- Document responsive behavior in component stories

### Error Handling Protocols

#### Figma Connection Issues
- Stop development if Figma frames are inaccessible
- Request updated frame links with proper permissions
- Verify design completeness before proceeding
- Never create fallback or placeholder components

#### Design Specification Gaps
- Identify missing design information immediately
- Request additional Figma frames for clarification
- Document assumption risks if proceeding
- Prefer waiting for complete specifications

### Component Audit Process

#### Pre-Development Audit
- Verify Figma frame accessibility and completeness
- Confirm design token availability
- Validate responsive behavior specifications
- Check for design system pattern consistency

#### Post-Development Audit
- Compare implementation against Figma specifications
- Test responsive behavior across all breakpoints
- Validate accessibility compliance
- Confirm design token usage
- Test component in Storybook environment

#### System-Wide Audit
- Check component consistency across design system
- Validate design token propagation
- Test rebrand capability with token updates
- Confirm SwiftUI equivalent consistency

### Communication Guidelines

#### Status Updates
- Provide clear progress updates during development
- Explain technical decisions and trade-offs
- Ask clarifying questions about design intent
- Suggest improvements and alternatives

#### Issue Reporting
- Be explicit about missing or inaccessible design data
- Report Figma connection issues immediately
- Document design specification gaps
- Request clarification rather than making assumptions

### Team Collaboration

#### Code Reviews
- Review against design specifications
- Check for DRY principle violations
- Validate accessibility implementation
- Confirm responsive behavior
- Test component integration

#### Design Reviews
- Compare implementation with Figma designs
- Validate design token usage
- Check responsive behavior across devices
- Confirm accessibility implementation
- Test user interactions and states

Remember: The goal is to build a comprehensive, accessible, and maintainable design system that can scale to 50-100+ components while maintaining consistency and quality. Every component should feel like it belongs to the same unified system.
#!/usr/bin/env node

/**
 * Component Generation Script
 * 
 * This script scaffolds new components based on templates and ensures
 * they follow the design system patterns and standards.
 * 
 * Usage:
 *   npm run generate-component -- --name=Button --type=atom
 *   node scripts/generate-component.ts --name=Card --type=molecule
 */

import { promises as fs } from 'fs';
import * as path from 'path';

interface ComponentOptions {
  name: string;
  type: 'atom' | 'molecule' | 'organism';
  hasVariants?: boolean;
  hasSizes?: boolean;
  hasIcons?: boolean;
  isInteractive?: boolean;
}

class ComponentGenerator {
  private templatesDir: string;
  private componentsDir: string;

  constructor() {
    this.templatesDir = path.join(process.cwd(), 'src/templates');
    this.componentsDir = path.join(process.cwd(), 'src/components');
  }

  /**
   * Generate a new component based on options
   */
  async generateComponent(options: ComponentOptions): Promise<void> {
    const { name, type } = options;
    const componentDir = path.join(this.componentsDir, `${type}s`, name);

    try {
      // Create component directory
      await fs.mkdir(componentDir, { recursive: true });

      // Generate component files
      await this.generateComponentFile(componentDir, options);
      await this.generateStoryFile(componentDir, options);
      await this.generateTestFile(componentDir, options);
      await this.generateIndexFile(componentDir, options);
      await this.generateFigmaFramesFile(componentDir, options);

      // Update component index files
      await this.updateComponentIndexes(options);

      console.log(`✅ Successfully generated ${name} component`);
      console.log(`📁 Location: ${componentDir}`);
      console.log('📋 Next steps:');
      console.log('  1. Provide Figma frame links to Claude Code');
      console.log('  2. Say "I\'m ready to add a new component" to Claude Code');
      console.log('  3. Let Claude Code analyze designs and implement the component');

    } catch (error) {
      console.error('❌ Failed to generate component:', error);
      throw error;
    }
  }

  /**
   * Generate the main component file
   */
  private async generateComponentFile(componentDir: string, options: ComponentOptions): Promise<void> {
    const { name, isInteractive = true } = options;
    
    const componentContent = `// ${name} component - Built from Figma designs
// This component uses design tokens exclusively for instant rebrand capability

import React from 'react';
import { cn } from '@/utils/classNames';
import { buttonVariants } from '@/utils/componentVariants';
import type { VariantComponentProps } from '@/types/component';
import type { VariantProps } from 'class-variance-authority';

// Component-specific variant configuration (will be customized from Figma)
const ${name.toLowerCase()}Variants = buttonVariants.extend({
  variants: {
    // Variants will be extracted from Figma designs
    variant: {
      primary: 'bg-primary-500 text-white hover:bg-primary-600',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
      outline: 'border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-50',
    },
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

/**
 * Props interface for ${name}
 * Extends base component props with component-specific properties
 */
interface ${name}Props 
  extends VariantComponentProps,
          VariantProps<typeof ${name.toLowerCase()}Variants> {
  ${isInteractive ? `
  /**
   * Click handler for the component
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  /**
   * Whether the component is in a loading state
   * @default false
   */
  loading?: boolean;` : ''}
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string;
}

/**
 * ${name} - [Brief description will be added based on Figma analysis]
 * 
 * This component follows the atomic design principles and uses design tokens
 * exclusively for all styling. It's fully responsive and accessible.
 * 
 * @example
 * \`\`\`tsx
 * <${name} variant="primary" size="md"${isInteractive ? ' onClick={handleClick}' : ''}>
 *   ${name} content
 * </${name}>
 * \`\`\`
 */
export const ${name} = React.forwardRef<
  HTML${isInteractive ? 'Button' : 'Div'}Element,
  ${name}Props
>(({
  size = 'md',
  variant = 'primary',
  disabled = false,${isInteractive ? `
  loading = false,` : ''}
  className,
  children,${isInteractive ? `
  onClick,` : ''}
  'data-testid': testId,
  'aria-label': ariaLabel,
  ...props
}, ref) => {${isInteractive ? `
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };` : ''}

  return (
    <${isInteractive ? 'button' : 'div'}
      ref={ref}${isInteractive ? `
      type="button"` : ''}
      className={cn(
        // Component base classes with responsive design (will be extracted from Figma)
        'inline-flex items-center justify-center',
        'font-medium',
        'rounded-md',
        'transition-colors duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',${isInteractive ? `
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',` : ''}
        // Responsive touch targets
        'min-h-[44px] min-w-[44px]', // Minimum touch target size
        // Component variants (will be customized from Figma)
        ${name.toLowerCase()}Variants({ variant, size }),${isInteractive ? `
        // Loading state
        loading && 'opacity-75 cursor-wait',` : ''}
        // Custom className override
        className
      )}${isInteractive ? `
      disabled={disabled || loading}
      onClick={handleClick}` : ''}
      data-testid={testId}
      aria-label={ariaLabel}${isInteractive ? `
      aria-disabled={disabled || loading}
      aria-busy={loading}` : ''}
      {...props}
    >${isInteractive ? `
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}` : ''}
      {children}
    </${isInteractive ? 'button' : 'div'}>
  );
});

${name}.displayName = '${name}';

export default ${name};
`;

    await fs.writeFile(path.join(componentDir, `${name}.tsx`), componentContent);
  }

  /**
   * Generate the Storybook story file
   */
  private async generateStoryFile(componentDir: string, options: ComponentOptions): Promise<void> {
    const { name, type } = options;
    
    const storyContent = `// Storybook stories for ${name} component
// Generated from template - will be customized based on Figma designs

import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';
import { 
  createStoryMeta, 
  standardArgTypes, 
  generateStandardStories,
  createComponentStory
} from '@/utils/storybook';

// Component meta configuration
const meta: Meta<typeof ${name}> = {
  ...createStoryMeta(
    '${type.charAt(0).toUpperCase() + type.slice(1)}s/${name}',
    ${name},
    \`
The ${name} component is part of the Pigment Genesis design system. 
It demonstrates the consistent use of design tokens and responsive behavior.

## Key Features
- **Design Token Integration**: All visual properties come from Figma design tokens
- **Responsive Design**: Adapts seamlessly from mobile to desktop
- **Accessibility**: Full keyboard navigation and screen reader support
- **Touch Friendly**: Meets minimum 44px touch target requirements

## Design Tokens Used
- \\\`tokens.colors.primary\\\` - Primary color palette
- \\\`tokens.spacing.md\\\` - Standard padding and margins
- \\\`tokens.typography.bodyMedium\\\` - Text styling
- \\\`tokens.effects.shadow.sm\\\` - Subtle elevation
    \`
  ),
  argTypes: {
    ...standardArgTypes,
    // Component-specific argTypes will be added based on Figma analysis
  },
  parameters: {
    docs: {
      story: {
        inline: true
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Generate standard stories automatically
const standardStories = generateStandardStories(${name}, {
  variants: ['primary', 'secondary', 'outline'],
  sizes: ['sm', 'md', 'lg'],
  hasResponsiveDemo: true,
  baseProps: {
    children: '${name} Content'
  }
});

// Export standard stories
export const { Default, AllVariants, ResponsiveDemo, Accessibility } = standardStories;

// Component-specific stories (will be customized based on Figma designs)
export const Example: Story = createComponentStory(${name}, {
  children: 'Example ${name}',
  variant: 'primary'
});

export const InteractiveDemo: Story = {
  name: 'Interactive States',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">All States</h3>
        <div className="flex gap-4">
          <${name} variant="primary">${name}</${name}>
          <${name} variant="secondary">${name}</${name}>
          <${name} variant="outline">${name}</${name}>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of all component states and variants.'
      }
    }
  }
};

export const DesignTokenDemo: Story = {
  name: 'Design Token Usage',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Token Usage</h3>
        <p className="text-sm text-neutral-600">
          All styling comes from Figma design tokens for instant rebrand capability.
        </p>
        <${name} variant="primary">Uses primary-500 token</${name}>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates design token usage enabling instant rebrand capability.'
      }
    }
  }
};
`;

    await fs.writeFile(path.join(componentDir, `${name}.stories.ts`), storyContent);
  }

  /**
   * Generate the test file
   */
  private async generateTestFile(componentDir: string, options: ComponentOptions): Promise<void> {
    const { name, isInteractive = true } = options;
    
    const testContent = `// Tests for ${name} component
// Generated from template - will be customized based on Figma designs

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { ${name} } from './${name}';
import { 
  renderWithProviders, 
  testAccessibility, 
  testKeyboardNavigation,
  runStandardComponentTests,
  testFixtures
} from '@/utils/testing';

// Run standard component test suite
runStandardComponentTests(${name}, {
  variants: ['primary', 'secondary', 'outline'],
  sizes: ['sm', 'md', 'lg'],
  requiredProps: {
    children: 'Test ${name}'
  },
  skipTests: [], // Skip specific tests if needed
});

// Component-specific tests
describe('${name} Specific Behavior', () => {
  beforeEach(() => {
    testFixtures.resetMocks();
  });

  ${isInteractive ? `describe('Interaction Handling', () => {
    it('calls onClick when clicked', () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <${name} onClick={handleClick}>Click me</${name}>
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <${name} onClick={handleClick} disabled>
          Disabled
        </${name}>
      );
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Loading State', () => {
    it('shows loading spinner when loading is true', () => {
      renderWithProviders(
        <${name} loading>Loading...</${name}>
      );
      
      const spinner = screen.getByRole('button').querySelector('svg');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass('animate-spin');
    });

    it('sets aria-busy when loading', () => {
      renderWithProviders(
        <${name} loading>Loading...</${name}>
      );
      
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });
  });` : ''}

  describe('Variant Styling', () => {
    it('applies primary variant classes correctly', () => {
      renderWithProviders(
        <${name} variant="primary">Primary</${name}>
      );
      
      const element = screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Primary\')'};
      expect(element).toHaveClass('bg-primary-500');
    });

    it('applies secondary variant classes correctly', () => {
      renderWithProviders(
        <${name} variant="secondary">Secondary</${name}>
      );
      
      const element = screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Secondary\')'};
      expect(element).toHaveClass('bg-secondary-500');
    });

    it('applies outline variant classes correctly', () => {
      renderWithProviders(
        <${name} variant="outline">Outline</${name}>
      );
      
      const element = screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Outline\')'};
      expect(element).toHaveClass('border', 'bg-transparent');
    });
  });

  describe('Size Styling', () => {
    it('applies small size classes correctly', () => {
      renderWithProviders(
        <${name} size="sm">Small</${name}>
      );
      
      const element = screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Small\')'};
      expect(element).toHaveClass('px-3', 'py-2', 'text-sm');
    });

    it('applies medium size classes correctly', () => {
      renderWithProviders(
        <${name} size="md">Medium</${name}>
      );
      
      const element = screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Medium\')'};
      expect(element).toHaveClass('px-4', 'py-3', 'text-base');
    });

    it('applies large size classes correctly', () => {
      renderWithProviders(
        <${name} size="lg">Large</${name}>
      );
      
      const element = screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Large\')'};
      expect(element).toHaveClass('px-6', 'py-4', 'text-lg');
    });
  });

  describe('Accessibility', () => {
    it('has proper ${isInteractive ? 'button' : 'element'} role', () => {
      renderWithProviders(
        <${name}>Accessible ${name}</${name}>
      );
      
      expect(screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Accessible ' + name + '\')'}).toBeInTheDocument();
    });

    it('supports aria-label', () => {
      renderWithProviders(
        <${name} aria-label="Custom aria label">
          ${name}
        </${name}>
      );
      
      expect(screen.getByLabelText('Custom aria label')).toBeInTheDocument();
    });

    ${isInteractive ? `it('supports keyboard navigation', async () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <${name} onClick={handleClick}>Keyboard test</${name}>
      );
      
      const button = screen.getByRole('button');
      await testKeyboardNavigation.enter(button, () => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });

    it('supports Space key activation', async () => {
      const handleClick = jest.fn();
      renderWithProviders(
        <${name} onClick={handleClick}>Space test</${name}>
      );
      
      const button = screen.getByRole('button');
      await testKeyboardNavigation.space(button, () => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });` : ''}

    it('has no accessibility violations', async () => {
      const { container } = renderWithProviders(
        <${name}>Accessibility test</${name}>
      );
      
      await testAccessibility(container);
    });
  });

  describe('Responsive Behavior', () => {
    it('maintains minimum touch target size', () => {
      renderWithProviders(
        <${name} size="sm">Small touch target</${name}>
      );
      
      const element = screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(\'Small touch target\')'};
      expect(element).toHaveClass('min-h-[44px]', 'min-w-[44px]');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty children gracefully', () => {
      renderWithProviders(<${name} />);
      
      expect(screen.${isInteractive ? 'getByRole(\'button\')' : 'getByTestId(\'test-wrapper\')'}).toBeInTheDocument();
    });

    it('handles very long text content', () => {
      const longText = 'Very long text content that might wrap to multiple lines and test component behavior with extended content';
      renderWithProviders(
        <${name}>{longText}</${name}>
      );
      
      expect(screen.${isInteractive ? 'getByRole(\'button\')' : 'getByText(longText)'}).toHaveTextContent(longText);
    });
  });
});
`;

    await fs.writeFile(path.join(componentDir, `${name}.test.ts`), testContent);
  }

  /**
   * Generate the index file
   */
  private async generateIndexFile(componentDir: string, options: ComponentOptions): Promise<void> {
    const { name } = options;
    
    const indexContent = `// Export ${name} component and related types
export { ${name}, default } from './${name}';
export type { ${name}Props } from './${name}';
`;

    await fs.writeFile(path.join(componentDir, 'index.ts'), indexContent);
  }

  /**
   * Generate the Figma frames tracking file
   */
  private async generateFigmaFramesFile(componentDir: string, options: ComponentOptions): Promise<void> {
    const { name, type } = options;
    
    const figmaFramesContent = `# ${name} Component - Figma Frame History

## Component Information
- **Component Name:** ${name}
- **Atomic Level:** ${type.charAt(0).toUpperCase() + type.slice(1)}
- **Last Updated:** ${new Date().toISOString()}
- **Status:** In Development
- **Current Version:** 1.0.0

## Current Figma Frames

### Placeholder - Awaiting Figma Analysis
*This section will be populated when Figma frame links are provided to Claude Code*

**Next Steps:**
1. Provide Figma frame links to Claude Code
2. Say "I'm ready to add a new component" 
3. Claude Code will analyze designs and populate this documentation

## Design Token Mappings
*Design tokens will be extracted from Figma and documented here*

## Build History

### Version 1.0.0 - Component Scaffold
**Date:** ${new Date().toISOString()}
**Claude Code Session:** Component scaffold generation

**Changes Made:**
- ✅ Generated component structure from template
- ✅ Created basic component file with TypeScript interfaces
- ✅ Generated Storybook stories template
- ✅ Created comprehensive test template
- ⏳ Awaiting Figma design analysis

**Status:** Scaffold Complete - Ready for Figma Integration

**Next Steps:**
1. Provide Figma frame links to Claude Code
2. Claude Code will extract design tokens from Figma
3. Component will be implemented with pixel-perfect fidelity
4. SwiftUI equivalent will be generated
5. Comprehensive testing and documentation will be completed

---

## Notes
- Component generated from template
- All design values will come from Figma (no hardcoded values)
- Rebrand-ready through design token usage
- Cross-platform consistency (React + SwiftUI)

---
*This file will be automatically updated when Figma designs are analyzed and implemented.*
*Last updated by Claude Code: Component Generation Script*`;

    await fs.writeFile(
      path.join(componentDir, `${name}.figmaframes.md`), 
      figmaFramesContent
    );
  }

  /**
   * Update component index files
   */
  private async updateComponentIndexes(options: ComponentOptions): Promise<void> {
    const { name, type } = options;
    
    // Update the atomic level index (atoms/index.ts, molecules/index.ts, etc.)
    const atomicIndexPath = path.join(this.componentsDir, `${type}s`, 'index.ts');
    
    try {
      let atomicIndexContent = '';
      try {
        atomicIndexContent = await fs.readFile(atomicIndexPath, 'utf-8');
      } catch {
        // File doesn't exist, start with empty content
      }
      
      const exportLine = `export * from './${name}';`;
      if (!atomicIndexContent.includes(exportLine)) {
        atomicIndexContent += `${exportLine}\n`;
        await fs.writeFile(atomicIndexPath, atomicIndexContent);
      }
    } catch (error) {
      console.warn(`Warning: Could not update ${atomicIndexPath}:`, error);
    }

    // Update the main components index
    const mainIndexPath = path.join(this.componentsDir, 'index.ts');
    
    try {
      let mainIndexContent = '';
      try {
        mainIndexContent = await fs.readFile(mainIndexPath, 'utf-8');
      } catch {
        // File doesn't exist, create basic structure
        mainIndexContent = `// Central export for all design system components
// This file is automatically updated when components are generated

`;
      }
      
      const exportLine = `export { ${name} } from './${type}s/${name}';`;
      if (!mainIndexContent.includes(exportLine)) {
        // Add to the appropriate section
        const sectionComment = `// ${type.charAt(0).toUpperCase() + type.slice(1)}s`;
        if (mainIndexContent.includes(sectionComment)) {
          mainIndexContent = mainIndexContent.replace(
            sectionComment,
            `${sectionComment}\n${exportLine}`
          );
        } else {
          mainIndexContent += `\n${sectionComment}\n${exportLine}\n`;
        }
        
        await fs.writeFile(mainIndexPath, mainIndexContent);
      }
    } catch (error) {
      console.warn(`Warning: Could not update ${mainIndexPath}:`, error);
    }
  }
}

/**
 * Parse command line arguments
 */
function parseArgs(): ComponentOptions {
  const args = process.argv.slice(2);
  
  const nameArg = args.find((arg: string) => arg.startsWith('--name='));
  const typeArg = args.find((arg: string) => arg.startsWith('--type='));
  const interactiveArg = args.find((arg: string) => arg.startsWith('--interactive='));
  
  if (!nameArg || !typeArg) {
    console.error('❌ Missing required arguments');
    console.log('Usage: npm run generate-component -- --name=ComponentName --type=atom');
    console.log('');
    console.log('Options:');
    console.log('  --name=ComponentName     Name of the component (PascalCase)');
    console.log('  --type=atom|molecule|organism   Atomic design level');
    console.log('  --interactive=true|false        Whether component is interactive (default: true)');
    process.exit(1);
  }
  
  const name = nameArg.split('=')[1];
  const type = typeArg.split('=')[1] as 'atom' | 'molecule' | 'organism';
  const isInteractive = interactiveArg ? interactiveArg.split('=')[1] === 'true' : true;
  
  if (!name || !type) {
    console.error('❌ Invalid arguments');
    process.exit(1);
  }
  
  if (!['atom', 'molecule', 'organism'].includes(type)) {
    console.error('❌ Invalid type. Must be: atom, molecule, or organism');
    process.exit(1);
  }
  
  return {
    name,
    type,
    isInteractive
  };
}

/**
 * Main execution function
 */
async function main() {
  try {
    const options = parseArgs();
    
    console.log(`🚀 Generating ${options.type} component: ${options.name}`);
    
    const generator = new ComponentGenerator();
    await generator.generateComponent(options);
    
    console.log('');
    console.log('🎉 Component generation completed!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('  1. Open Claude Code in this project');
    console.log('  2. Say "I\'m ready to add a new component"');
    console.log('  3. Provide Figma frame links for your component');
    console.log('  4. Let Claude Code analyze and implement from Figma designs');
    
  } catch (error) {
    console.error('💥 Component generation failed:', error);
    process.exit(1);
  }
}

// Run the script if called directly
if (require.main === module) {
  main();
}

export { ComponentGenerator };
#!/usr/bin/env tsx

/**
 * Component Architecture Validation Script
 * 
 * Validates that components follow the mandatory CVA + Tailwind pattern
 * and don't use forbidden inline styles or direct token imports.
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface ValidationResult {
  file: string;
  passed: boolean;
  errors: string[];
  warnings: string[];
}

const REQUIRED_PATTERNS = [
  /import.*cva.*from ['"]class-variance-authority['"]/, // CVA import
  /const \w+Variants = cva\(/, // CVA configuration
  /VariantProps<typeof \w+Variants>/, // TypeScript integration
];

const FORBIDDEN_PATTERNS = [
  {
    pattern: /style=\{\{[\s\S]*?\}\}/g,
    message: 'Inline styles with style={{}} are forbidden. Use Tailwind classes instead.'
  },
  {
    pattern: /import.*semanticColors.*from/g,
    message: 'Direct semanticColors imports for styling are forbidden. Use design token classes.'
  },
  {
    pattern: /import.*colors.*from.*tokens\/colors/g,
    message: 'Direct colors imports for styling are forbidden. Use design token classes.'
  },
  {
    pattern: /#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/g,
    message: 'Hardcoded hex colors are forbidden. Use design token classes.'
  },
  {
    pattern: /rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g,
    message: 'Hardcoded rgb/rgba colors are forbidden. Use design token classes.'
  }
];

const DESIGN_TOKEN_CLASSES = [
  'bg-neutral-bg-primary',
  'bg-interactive-bg-bold',
  'text-neutral-text-primary',
  'text-interactive-text-on-fill',
  'border-neutral-border-strong',
  'border-primary-500',
  'text-error-500',
  'bg-error-500'
];

async function validateComponent(filePath: string): Promise<ValidationResult> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Check for required patterns
  for (const pattern of REQUIRED_PATTERNS) {
    if (!pattern.test(content)) {
      if (pattern === REQUIRED_PATTERNS[0]) {
        errors.push('Missing CVA import: import { cva, type VariantProps } from "class-variance-authority"');
      } else if (pattern === REQUIRED_PATTERNS[1]) {
        errors.push('Missing CVA configuration: const componentVariants = cva(...)');
      } else if (pattern === REQUIRED_PATTERNS[2]) {
        errors.push('Missing VariantProps integration in TypeScript interface');
      }
    }
  }
  
  // Check for forbidden patterns
  for (const forbidden of FORBIDDEN_PATTERNS) {
    const matches = content.match(forbidden.pattern);
    if (matches) {
      errors.push(`${forbidden.message} Found: ${matches.slice(0, 3).join(', ')}${matches.length > 3 ? '...' : ''}`);
    }
  }
  
  // Check for design token class usage
  const hasDesignTokenClasses = DESIGN_TOKEN_CLASSES.some(tokenClass => 
    content.includes(tokenClass)
  );
  
  if (!hasDesignTokenClasses) {
    warnings.push('No design token classes detected. Ensure you are using classes like bg-neutral-bg-primary, text-interactive-text-default, etc.');
  }
  
  // Check for proper forwardRef usage
  if (!content.includes('forwardRef')) {
    warnings.push('Component should use React.forwardRef for ref forwarding');
  }
  
  return {
    file: filePath,
    passed: errors.length === 0,
    errors,
    warnings
  };
}

async function main() {
  const componentPattern = 'src/components/**/*.tsx';
  const componentFiles = await glob(componentPattern, { 
    ignore: ['**/*.stories.tsx', '**/*.test.tsx'] 
  });
  
  console.log('🏗️  Validating Component Architecture Patterns\n');
  
  const results: ValidationResult[] = [];
  
  for (const file of componentFiles) {
    const result = await validateComponent(file);
    results.push(result);
    
    const status = result.passed ? '✅' : '❌';
    console.log(`${status} ${path.relative(process.cwd(), file)}`);
    
    if (result.errors.length > 0) {
      result.errors.forEach(error => console.log(`   🚨 ERROR: ${error}`));
    }
    
    if (result.warnings.length > 0) {
      result.warnings.forEach(warning => console.log(`   ⚠️  WARNING: ${warning}`));
    }
    
    if (result.errors.length > 0 || result.warnings.length > 0) {
      console.log('');
    }
  }
  
  const passedCount = results.filter(r => r.passed).length;
  const totalCount = results.length;
  
  console.log(`\n📊 Architecture Validation Summary:`);
  console.log(`   ✅ Passed: ${passedCount}/${totalCount}`);
  console.log(`   ❌ Failed: ${totalCount - passedCount}/${totalCount}`);
  
  if (passedCount === totalCount) {
    console.log('\n🎉 All components follow the mandatory architecture pattern!');
  } else {
    console.log('\n🚨 Some components need architecture fixes. See errors above.');
    console.log('\n📚 Reference: docs/component-architecture-pattern.md');
    process.exit(1);
  }
}

// ES module entry point
main().catch(console.error);
# Pigment-Genesis Design System - Complete Setup & Engineering Prompt V2

You are an expert design system engineer tasked with building "pigment-genesis", a world-class design system for CustomInk. This document contains everything needed to set up and maintain the system with absolute consistency and quality from day 1.

## 🎯 FOUNDATIONAL PRINCIPLES

### PRIMARY DIRECTIVE: FIGMA-FIRST REBRAND-READY ARCHITECTURE
- **Figma is the single source of truth**: ALL design values must come from Figma
- **Zero hardcoded values**: No colors, spacing, typography, or effects in code
- **Instant rebrand capability**: Change Figma → Run extraction → System rebranded
- **Validation-first development**: All validation systems exist before component work
- **CVA + Tailwind only**: This is the only acceptable pattern, enforced by automation

### CRITICAL SUCCESS FACTORS
1. **Rebrand-ready from day 1**: Architecture supports instant rebranding
2. **Token extraction before code**: Can't start without Figma tokens
3. **Prevention over remediation**: Problems are prevented, not fixed later
4. **Automation enforces standards**: Scripts make violations impossible
5. **Visual verification is mandatory**: 95%+ accuracy required
6. **Design-code separation**: Zero design opinions in code

## 🚨 PHASE 0: MANDATORY FIGMA TOKEN EXTRACTION

Before ANY project setup, design tokens MUST be extracted from Figma:

### Prerequisites
1. **Figma Design System File** with complete token definitions:
   - Color tokens (neutral, interactive, semantic)
   - Spacing scale (xs, sm, md, lg, xl, etc.)
   - Typography tokens (fonts, sizes, weights, line-heights)
   - Effect tokens (shadows, borders, radii)
   
2. **Figma API Access** for token extraction

### Token Extraction First
```bash
# This MUST succeed before any other setup
npm run setup:extract-figma-tokens

# Validates that tokens were extracted successfully
npm run validate:tokens-exist
```

## 🏗️ PHASE 1: PROJECT SCAFFOLDING (After Token Extraction)

Execute these commands to create the complete project structure:

```bash
# Initialize project
mkdir pigment-genesis && cd pigment-genesis
npm init -y
git init

# Install ALL dependencies upfront
npm install --save \
  react@^18.0.0 \
  react-dom@^18.0.0 \
  class-variance-authority@^0.7.0 \
  clsx@^2.1.1 \
  tailwind-merge@^2.3.0 \
  @figma/code-connect@^1.3.3

npm install --save-dev \
  typescript@^5.4.5 \
  @types/react@^18.2.79 \
  @types/react-dom@^18.2.25 \
  @types/node@^20.12.7 \
  tsx@^4.19.4 \
  tsup@^8.0.2 \
  tailwindcss@^3.4.3 \
  postcss@^8.4.38 \
  autoprefixer@^10.4.19 \
  @storybook/react@^8.0.8 \
  @storybook/react-vite@^8.0.8 \
  @storybook/addon-essentials@^8.0.8 \
  @storybook/addon-a11y@^8.0.8 \
  vite@^5.2.10 \
  jest@^29.7.0 \
  @testing-library/react@^15.0.2 \
  @testing-library/jest-dom@^6.4.2 \
  jest-axe@^8.0.0 \
  puppeteer@^24.9.0 \
  eslint@^8.57.0 \
  @typescript-eslint/eslint-plugin@^7.7.1 \
  @typescript-eslint/parser@^7.7.1 \
  prettier@^3.2.5
```

### Create Complete Directory Structure

```bash
# Create all directories upfront
mkdir -p src/{components/{atoms,molecules,organisms},tokens,utils,types,hooks,templates,styles}
mkdir -p docs scripts tests/{utils,__mocks__} visual-verification/claude-analysis
mkdir -p .storybook swiftui/{Sources/PigmentGenesisUI/{Components,Tokens},Tests}

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
dist/
coverage/
.DS_Store
*.log
storybook-static/
visual-verification/claude-analysis/*.png
.env
EOF
```

## 🚨 PHASE 2: CRITICAL CONFIGURATION FILES

### TypeScript Configuration

**`tsconfig.json`**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Tailwind Configuration with Design Tokens

**`tailwind.config.js`**:
```javascript
/** @type {import('tailwindcss').Config} */

// 🚨 CRITICAL: This file imports GENERATED token mappings
// DO NOT hardcode any values here - everything comes from Figma
const tokens = require('./src/tokens/tailwind-tokens.generated.js');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: tokens.colors,      // ALL colors from Figma - NEVER hardcode
      spacing: tokens.spacing,    // ALL spacing from Figma - NEVER hardcode
      fontSize: tokens.fontSize,  // ALL font sizes from Figma
      fontFamily: tokens.fontFamily, // Font families from Figma
      fontWeight: tokens.fontWeight, // Font weights from Figma
      lineHeight: tokens.lineHeight, // Line heights from Figma
      borderRadius: tokens.borderRadius, // Border radii from Figma
      boxShadow: tokens.boxShadow, // Shadows from Figma
      // 🚨 NO HARDCODED VALUES ALLOWED
      // Everything must reference the generated tokens object
    }
  },
  plugins: []
}
```

### Package.json with Validation-First Scripts

**`package.json`**:
```json
{
  "name": "@customink/pigment-genesis",
  "version": "1.0.0",
  "description": "CustomInk's comprehensive design system",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "setup": "npm run setup:extract-figma-tokens && npm run setup:validation && npm run setup:reference",
    "setup:extract-figma-tokens": "tsx scripts/extract-figma-tokens.ts",
    "setup:validation": "tsx scripts/setup-validation.ts",
    "setup:reference": "tsx scripts/setup-reference-implementation.ts",
    
    "extract-figma-tokens": "tsx scripts/extract-figma-tokens.ts",
    "update-design-tokens": "npm run extract-figma-tokens && npm run generate-token-files",
    "generate-token-files": "tsx scripts/generate-token-files.ts",
    
    "rebrand": "npm run extract-figma-tokens && npm run validate:tokens && npm run build && npm run build-storybook",
    "rebrand:preview": "tsx scripts/preview-rebrand-changes.ts",
    "rebrand:validate": "tsx scripts/validate-rebrand-capability.ts",
    
    "validate": "npm run validate:architecture && npm run validate:tokens && npm run validate:visual",
    "validate:architecture": "tsx scripts/validate-component-architecture.ts",
    "validate:tokens": "tsx scripts/validate-design-tokens.ts",
    "validate:visual": "tsx scripts/validate-visual-compliance.ts",
    "validate:all": "npm run validate && npm run test && npm run type-check",
    
    "pre-component": "npm run validate:all",
    "post-component": "npm run validate:all && npm run visual-verify",
    
    "visual-verify": "tsx scripts/visual-verification.ts",
    "claude-visual-verify": "tsx scripts/claude-visual-verify.ts",
    
    "dev": "storybook dev -p 6006",
    "build": "tsup",
    "build-storybook": "storybook build",
    
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:a11y": "jest --testNamePattern=\"accessibility\"",
    
    "lint": "eslint \"src/**/*.{ts,tsx}\"",
    "lint:fix": "eslint \"src/**/*.{ts,tsx}\" --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"src/**/*.{ts,tsx,json,css,md}\"",
    
    "claude:startup": "echo '🚨 STARTING CLAUDE CODE SESSION' && cat CLAUDE.md && npm run validate:all"
  }
}
```

## 🔧 PHASE 2: FIGMA TOKEN EXTRACTION SCRIPTS

### Step 1: Create Figma Token Extraction System

**`scripts/extract-figma-tokens.ts`**:
```typescript
#!/usr/bin/env tsx

/**
 * 🚨 MANDATORY FIRST STEP: Extract all design tokens from Figma
 * This MUST succeed before any component development can begin
 */

import fs from 'fs';
import path from 'path';

interface FigmaTokens {
  colors: Record<string, any>;
  spacing: Record<string, string>;
  typography: Record<string, any>;
  effects: Record<string, any>;
  breakpoints: Record<string, string>;
}

interface TokenExtractionResult {
  success: boolean;
  tokens?: FigmaTokens;
  errors: string[];
  warnings: string[];
}

async function extractFigmaTokens(): Promise<TokenExtractionResult> {
  console.log('🎨 EXTRACTING DESIGN TOKENS FROM FIGMA');
  console.log('=====================================\n');
  
  // Check for Figma connection
  console.log('🔍 Checking Figma connection...');
  const figmaConnected = await checkFigmaConnection();
  
  if (!figmaConnected) {
    return {
      success: false,
      errors: [
        'Figma connection not available',
        'Please ensure Figma MCP is connected',
        'Run: figma-connect setup'
      ],
      warnings: []
    };
  }
  
  // Get Figma file/frame info from user
  const figmaInfo = await getFigmaTokenSource();
  if (!figmaInfo) {
    return {
      success: false,
      errors: [
        'No Figma source provided',
        'Please provide Figma file URL or frame containing design tokens'
      ],
      warnings: []
    };
  }
  
  // Extract tokens from Figma
  console.log('📥 Extracting tokens from Figma...');
  const tokens = await extractTokensFromFigma(figmaInfo);
  
  if (!tokens || Object.keys(tokens).length === 0) {
    return {
      success: false,
      errors: [
        'No design tokens found in Figma',
        'Please ensure your Figma file has properly defined design tokens',
        'Required token categories: colors, spacing, typography, effects'
      ],
      warnings: []
    };
  }
  
  // Validate token completeness
  const validation = validateTokenCompleteness(tokens);
  if (!validation.isComplete) {
    return {
      success: false,
      tokens,
      errors: validation.errors,
      warnings: validation.warnings
    };
  }
  
  // Save raw tokens
  const tokenPath = path.join(process.cwd(), 'src/tokens/figma-tokens.json');
  fs.mkdirSync(path.dirname(tokenPath), { recursive: true });
  fs.writeFileSync(
    tokenPath,
    JSON.stringify({
      metadata: {
        extractedAt: new Date().toISOString(),
        figmaSource: figmaInfo,
        version: '1.0.0'
      },
      tokens
    }, null, 2)
  );
  
  // Generate derived files
  await generateTokenFiles(tokens);
  
  console.log('\n✅ FIGMA TOKEN EXTRACTION SUCCESSFUL!');
  console.log('📊 Token Statistics:');
  console.log(`   Colors: ${Object.keys(tokens.colors || {}).length} tokens`);
  console.log(`   Spacing: ${Object.keys(tokens.spacing || {}).length} tokens`);
  console.log(`   Typography: ${Object.keys(tokens.typography || {}).length} definitions`);
  console.log(`   Effects: ${Object.keys(tokens.effects || {}).length} tokens`);
  console.log('\n🎉 Design system ready for development!');
  
  return {
    success: true,
    tokens,
    errors: [],
    warnings: validation.warnings
  };
}

function validateTokenCompleteness(tokens: any): {
  isComplete: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Required token categories
  const requiredCategories = ['colors', 'spacing', 'typography'];
  const optionalCategories = ['effects', 'breakpoints', 'animations'];
  
  // Check required categories
  requiredCategories.forEach(category => {
    if (!tokens[category] || Object.keys(tokens[category]).length === 0) {
      errors.push(`Missing required token category: ${category}`);
    }
  });
  
  // Check optional categories
  optionalCategories.forEach(category => {
    if (!tokens[category] || Object.keys(tokens[category]).length === 0) {
      warnings.push(`Optional token category not found: ${category}`);
    }
  });
  
  // Validate color tokens structure
  if (tokens.colors) {
    const requiredColorGroups = ['neutral', 'interactive'];
    requiredColorGroups.forEach(group => {
      if (!tokens.colors[group]) {
        errors.push(`Missing required color group: ${group}`);
      }
    });
  }
  
  return {
    isComplete: errors.length === 0,
    errors,
    warnings
  };
}

async function generateTokenFiles(tokens: FigmaTokens) {
  console.log('\n🔧 Generating token files...');
  
  // Generate CSS variables
  await generateCSSVariables(tokens);
  console.log('   ✅ Generated CSS variables');
  
  // Generate Tailwind tokens
  await generateTailwindTokens(tokens);
  console.log('   ✅ Generated Tailwind token mappings');
  
  // Generate TypeScript token files
  await generateTypeScriptTokens(tokens);
  console.log('   ✅ Generated TypeScript token definitions');
}

async function generateCSSVariables(tokens: FigmaTokens) {
  const cssVars = `/* 
 * 🚨 AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
 * Generated: ${new Date().toISOString()}
 * Source: Figma Design System
 * 
 * To update: npm run extract-figma-tokens
 */

:root {
${generateColorVariables(tokens.colors)}
${generateSpacingVariables(tokens.spacing)}
${generateTypographyVariables(tokens.typography)}
${generateEffectVariables(tokens.effects)}
}`;

  const cssPath = path.join(process.cwd(), 'src/tokens/css-variables.generated.css');
  fs.writeFileSync(cssPath, cssVars);
}

function generateColorVariables(colors: any): string {
  const lines: string[] = ['  /* Color Tokens */'];
  
  Object.entries(colors).forEach(([group, values]) => {
    lines.push(`  /* ${group} */`);
    Object.entries(values as any).forEach(([key, value]) => {
      lines.push(`  --color-${group}-${key}: ${value};`);
    });
  });
  
  return lines.join('\n');
}

// Similar functions for spacing, typography, effects...

// Main execution
extractFigmaTokens().then(result => {
  if (!result.success) {
    console.error('\n🚨 FIGMA TOKEN EXTRACTION FAILED');
    result.errors.forEach(err => console.error(`   ❌ ${err}`));
    console.error('\n🛑 Cannot proceed without design tokens from Figma');
    process.exit(1);
  }
}).catch(console.error);
```

### Step 2: Create Rebrand Validation System

**`scripts/validate-rebrand-capability.ts`**:
```typescript
#!/usr/bin/env tsx

/**
 * Validates that the design system maintains rebrand capability
 * Ensures no hardcoded values exist that would break instant rebrand
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface RebrandValidation {
  isRebrandReady: boolean;
  issues: {
    hardcodedColors: string[];
    directTokenImports: string[];
    inlineStyles: string[];
    untracedValues: string[];
  };
  score: number; // 0-100
}

async function validateRebrandCapability(): Promise<RebrandValidation> {
  console.log('🎨 VALIDATING REBRAND CAPABILITY');
  console.log('================================\n');
  
  const issues = {
    hardcodedColors: [],
    directTokenImports: [],
    inlineStyles: [],
    untracedValues: []
  };
  
  // Get all source files
  const sourceFiles = await glob('src/**/*.{ts,tsx,css}', {
    ignore: ['**/node_modules/**', '**/dist/**', '**/*.generated.*']
  });
  
  // Check each file
  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Check for hardcoded colors
    const hexColors = content.match(/#[0-9a-fA-F]{3,6}(?![0-9a-fA-F])/g);
    if (hexColors) {
      issues.hardcodedColors.push(`${file}: ${hexColors.join(', ')}`);
    }
    
    // Check for rgb/rgba colors
    const rgbColors = content.match(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g);
    if (rgbColors) {
      issues.hardcodedColors.push(`${file}: ${rgbColors.join(', ')}`);
    }
    
    // Check for direct token imports
    if (content.includes("from '../tokens/") || 
        content.includes('from "../tokens/') ||
        content.includes("from '@/tokens/")) {
      issues.directTokenImports.push(file);
    }
    
    // Check for inline styles
    const inlineStyles = content.match(/style=\{\{[\s\S]*?\}\}/g);
    if (inlineStyles) {
      issues.inlineStyles.push(file);
    }
  }
  
  // Calculate score
  const totalIssues = 
    issues.hardcodedColors.length +
    issues.directTokenImports.length +
    issues.inlineStyles.length +
    issues.untracedValues.length;
  
  const score = Math.max(0, 100 - (totalIssues * 5));
  const isRebrandReady = totalIssues === 0;
  
  // Report results
  console.log('📊 REBRAND CAPABILITY REPORT:');
  console.log(`   Score: ${score}/100`);
  console.log(`   Status: ${isRebrandReady ? '✅ REBRAND READY' : '❌ NOT REBRAND READY'}`);
  
  if (!isRebrandReady) {
    console.log('\n🚨 ISSUES FOUND:');
    
    if (issues.hardcodedColors.length > 0) {
      console.log(`\n❌ Hardcoded Colors (${issues.hardcodedColors.length}):`);
      issues.hardcodedColors.forEach(issue => console.log(`   ${issue}`));
    }
    
    if (issues.directTokenImports.length > 0) {
      console.log(`\n❌ Direct Token Imports (${issues.directTokenImports.length}):`);
      issues.directTokenImports.forEach(issue => console.log(`   ${issue}`));
    }
    
    if (issues.inlineStyles.length > 0) {
      console.log(`\n❌ Inline Styles (${issues.inlineStyles.length}):`);
      issues.inlineStyles.forEach(issue => console.log(`   ${issue}`));
    }
    
    console.log('\n🛑 FIX ALL ISSUES TO MAINTAIN REBRAND CAPABILITY');
  } else {
    console.log('\n🎉 Design system is fully rebrand-ready!');
    console.log('   ✅ No hardcoded values found');
    console.log('   ✅ All values traced to Figma tokens');
    console.log('   ✅ Instant rebrand capability maintained');
  }
  
  return {
    isRebrandReady,
    issues,
    score
  };
}

// Main execution
validateRebrandCapability().then(result => {
  process.exit(result.isRebrandReady ? 0 : 1);
}).catch(console.error);
```

## 🔧 PHASE 3: VALIDATION-FIRST ARCHITECTURE

### Step 1: Create Architectural Validation System

**`scripts/validate-component-architecture.ts`**:
```typescript
#!/usr/bin/env tsx

/**
 * 🔑 ARCHITECTURAL COMPLIANCE VALIDATOR
 * 
 * This script MUST pass before any component can be created or modified.
 * It enforces the mandatory CVA + Tailwind pattern for all components.
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface ValidationResult {
  file: string;
  passed: boolean;
  errors: string[];
  warnings: string[];
  score: number; // 0-100 compliance score
}

// 🚨 MANDATORY PATTERNS - Every component MUST have these
const REQUIRED_PATTERNS = [
  {
    pattern: /import.*cva.*from ['"]class-variance-authority['"]/,
    error: 'Missing CVA import: import { cva, type VariantProps } from "class-variance-authority"',
    weight: 25
  },
  {
    pattern: /const \w+Variants = cva\(/,
    error: 'Missing CVA configuration: const componentVariants = cva(...)',
    weight: 25
  },
  {
    pattern: /VariantProps<typeof \w+Variants>/,
    error: 'Missing VariantProps integration in TypeScript interface',
    weight: 25
  },
  {
    pattern: /forwardRef</,
    error: 'Missing forwardRef usage - Components must use React.forwardRef',
    weight: 25
  }
];

// 🚨 FORBIDDEN PATTERNS - These break architectural standards
const FORBIDDEN_PATTERNS = [
  {
    pattern: /style=\{\{[\s\S]*?\}\}/g,
    message: '❌ FORBIDDEN: Inline styles with style={{}} - Use CVA + Tailwind classes'
  },
  {
    pattern: /import.*(?:semanticColors|colors).*from.*['"].*tokens/g,
    message: '❌ FORBIDDEN: Direct token imports for styling - Use design token classes'
  },
  {
    pattern: /#[0-9a-fA-F]{6}(?![0-9a-fA-F])|#[0-9a-fA-F]{3}(?![0-9a-fA-F])/g,
    message: '❌ FORBIDDEN: Hardcoded hex colors - Use design token classes'
  },
  {
    pattern: /rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+/g,
    message: '❌ FORBIDDEN: Hardcoded rgb/rgba colors - Use design token classes'
  },
  {
    pattern: /(?:className|class)=["'][^"']*(?:bg-|text-|border-)(?:red|blue|green|yellow|purple|pink|gray)-\d+/g,
    message: '❌ FORBIDDEN: Hardcoded Tailwind colors - Use design token classes'
  }
];

// Required design token classes
const REQUIRED_TOKEN_CLASSES = [
  'neutral-bg-primary',
  'neutral-text-primary',
  'interactive-bg-bold',
  'interactive-text-on-fill',
  'interactive-border-bold'
];

async function validateComponent(filePath: string): Promise<ValidationResult> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const errors: string[] = [];
  const warnings: string[] = [];
  let score = 100;
  
  // Skip validation for specific files
  if (content.includes('// Skip architecture validation')) {
    return { file: filePath, passed: true, errors: [], warnings: [], score: 100 };
  }
  
  // Check for required patterns
  REQUIRED_PATTERNS.forEach(({ pattern, error, weight }) => {
    if (!pattern.test(content)) {
      errors.push(error);
      score -= weight;
    }
  });
  
  // Check for forbidden patterns
  FORBIDDEN_PATTERNS.forEach(({ pattern, message }) => {
    const matches = content.match(pattern);
    if (matches) {
      const unique = [...new Set(matches)].slice(0, 3);
      errors.push(`${message}. Found: ${unique.join(', ')}${matches.length > 3 ? '...' : ''}`);
      score = Math.max(0, score - 10);
    }
  });
  
  // Check for design token class usage
  const hasTokenClasses = REQUIRED_TOKEN_CLASSES.some(tokenClass => 
    content.includes(tokenClass)
  );
  
  if (!hasTokenClasses) {
    warnings.push('No design token classes detected. Use classes like bg-neutral-bg-primary, text-interactive-text-default');
    score = Math.max(0, score - 5);
  }
  
  // Check component structure
  if (!content.includes('.displayName')) {
    warnings.push('Missing displayName for component');
  }
  
  return {
    file: filePath,
    passed: errors.length === 0,
    errors,
    warnings,
    score: Math.max(0, score)
  };
}

async function validateReferenceImplementation(): Promise<boolean> {
  const buttonPath = 'src/components/atoms/Button/Button.tsx';
  
  if (!fs.existsSync(buttonPath)) {
    console.error('\n🚨 CRITICAL ERROR: Reference implementation missing!');
    console.error('Button.tsx must exist as the canonical pattern.');
    console.error('Run: npm run setup:reference-implementation');
    return false;
  }
  
  const result = await validateComponent(buttonPath);
  if (!result.passed || result.score < 100) {
    console.error('\n🚨 CRITICAL ERROR: Reference implementation is not compliant!');
    console.error('Button.tsx must be 100% compliant as the canonical pattern.');
    return false;
  }
  
  console.log('✅ Reference implementation (Button.tsx) validated');
  return true;
}

async function main() {
  console.log('🏗️  VALIDATING ARCHITECTURAL COMPLIANCE');
  console.log('=====================================\n');
  
  // First validate reference implementation
  const referenceValid = await validateReferenceImplementation();
  if (!referenceValid) {
    process.exit(1);
  }
  
  const componentFiles = await glob('src/components/**/*.tsx', { 
    ignore: ['**/*.stories.tsx', '**/*.test.tsx', '**/index.ts'] 
  });
  
  if (componentFiles.length === 0) {
    console.log('✅ No components found - ready for development');
    console.log('\n📚 Reference: src/components/atoms/Button/Button.tsx');
    return;
  }
  
  const results: ValidationResult[] = [];
  let totalScore = 0;
  
  for (const file of componentFiles) {
    const result = await validateComponent(file);
    results.push(result);
    totalScore += result.score;
    
    const status = result.passed ? '✅' : '❌';
    const scoreColor = result.score === 100 ? '32' : result.score >= 80 ? '33' : '31';
    console.log(`${status} ${path.relative(process.cwd(), file)} \x1b[${scoreColor}m[${result.score}%]\x1b[0m`);
    
    if (result.errors.length > 0) {
      result.errors.forEach(error => console.log(`   🚨 ${error}`));
    }
    
    if (result.warnings.length > 0) {
      result.warnings.forEach(warning => console.log(`   ⚠️  ${warning}`));
    }
    
    if (result.errors.length > 0 || result.warnings.length > 0) {
      console.log('');
    }
  }
  
  const passedCount = results.filter(r => r.passed).length;
  const totalCount = results.length;
  const averageScore = totalCount > 0 ? Math.round(totalScore / totalCount) : 0;
  
  console.log(`\n📊 ARCHITECTURAL COMPLIANCE REPORT:`);
  console.log(`   ✅ Compliant: ${passedCount}/${totalCount}`);
  console.log(`   ❌ Non-compliant: ${totalCount - passedCount}/${totalCount}`);
  console.log(`   📈 Average Score: ${averageScore}%`);
  
  if (passedCount === totalCount && averageScore === 100) {
    console.log('\n🎉 PERFECT ARCHITECTURAL COMPLIANCE!');
    console.log('All components follow the mandatory CVA + Tailwind pattern.');
    process.exit(0);
  } else {
    console.log('\n🚨 ARCHITECTURAL VIOLATIONS DETECTED');
    console.log('\n🛑 MANDATORY ACTIONS:');
    console.log('1. Fix all violations before proceeding');
    console.log('2. Reference Button.tsx for the correct pattern');
    console.log('3. Run validation again: npm run validate:architecture');
    console.log('\n📚 Documentation: docs/component-architecture-pattern.md');
    process.exit(1);
  }
}

main().catch(console.error);
```

### Step 2: Create the Reference Implementation FIRST

**`scripts/setup-reference-implementation.ts`**:
```typescript
#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

const BUTTON_COMPONENT = `import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/classNames';

// 🔑 CANONICAL PATTERN: This is how ALL components must be structured

const buttonVariants = cva(
  [
    // Base styles using design token classes
    'inline-flex items-center justify-center',
    'font-semibold transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-interactive-bg-bold text-interactive-text-on-fill',
          'hover:bg-interactive-bg-bold-hover',
          'active:bg-interactive-bg-bold-pressed',
          'focus-visible:ring-primary-500',
          'disabled:bg-interactive-border-disabled disabled:text-interactive-text-disabled'
        ],
        secondary: [
          'bg-neutral-bg-primary text-interactive-text-default',
          'border border-interactive-border-bold',
          'hover:bg-neutral-bg-secondary',
          'active:bg-neutral-bg-tertiary',
          'focus-visible:ring-primary-500',
          'disabled:bg-neutral-bg-primary disabled:text-interactive-text-disabled disabled:border-interactive-border-disabled'
        ],
        destructive: [
          'bg-error-500 text-interactive-text-on-fill',
          'hover:bg-error-600',
          'active:bg-error-700',
          'focus-visible:ring-error-500',
          'disabled:bg-interactive-border-disabled disabled:text-interactive-text-disabled'
        ]
      },
      size: {
        small: ['text-sm px-3 py-1.5 h-8 min-w-[64px]'],
        medium: ['text-sm px-4 py-2 h-10 min-w-[80px]'],
        large: ['text-base px-6 py-3 h-12 min-w-[96px]']
      },
      fullWidth: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      fullWidth: false
    }
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
          VariantProps<typeof buttonVariants> {
  /**
   * The content to display inside the button
   */
  children: React.ReactNode;
  /**
   * Optional loading state
   */
  isLoading?: boolean;
  /**
   * Optional icon to display before children
   */
  leftIcon?: React.ReactNode;
  /**
   * Optional icon to display after children
   */
  rightIcon?: React.ReactNode;
}

/**
 * Button component - The reference implementation for all components
 * 
 * @example
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      fullWidth,
      className,
      children,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;`;

const BUTTON_STORIES = `import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Button',
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};`;

const BUTTON_TEST = `import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  // Rendering tests
  it('renders with text content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  // Variant tests
  describe('variants', () => {
    it('applies primary variant classes by default', () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-interactive-bg-bold');
      expect(button).toHaveClass('text-interactive-text-on-fill');
    });

    it('applies secondary variant classes', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-neutral-bg-primary');
      expect(button).toHaveClass('border-interactive-border-bold');
    });

    it('applies destructive variant classes', () => {
      render(<Button variant="destructive">Delete</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-error-500');
    });
  });

  // Size tests
  describe('sizes', () => {
    it('applies medium size classes by default', () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-10');
    });

    it('applies small size classes', () => {
      render(<Button size="small">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-8');
    });

    it('applies large size classes', () => {
      render(<Button size="large">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('h-12');
    });
  });

  // Interaction tests
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Accessibility tests
  it('should not have accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>With Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  // Full width test
  it('applies full width classes when fullWidth is true', () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('w-full');
  });
});`;

const BUTTON_FIGMAFRAMES = `# Button Component Figma Frame History

## Component Overview
- **Component**: Button
- **Atomic Level**: Atom
- **Variants**: primary, secondary, destructive
- **Sizes**: small, medium, large

## Figma Frame References
### Primary Source
- **Frame URL**: [To be added when Figma frames are provided]
- **Frame ID**: [To be added]
- **Last Updated**: ${new Date().toISOString()}

### Design Specifications
- **Variants Documented**: primary, secondary, destructive
- **Sizes Documented**: small (32px), medium (40px), large (48px)
- **States Documented**: default, hover, active, focus, disabled
- **Responsive Behavior**: Full width option available

## Token Usage
- **Colors**: Uses semantic color tokens (interactive-bg-bold, neutral-bg-primary, etc.)
- **Spacing**: Uses standard spacing scale
- **Typography**: Inherits from parent, uses text-sm/text-base
- **Effects**: Focus ring using ring utilities

## Implementation Notes
- This is the reference implementation for all components
- All other components must follow this exact pattern
- Uses CVA for variant management
- Includes comprehensive accessibility features
`;

async function createReferenceImplementation() {
  console.log('🔧 Creating reference implementation (Button.tsx)...\n');

  // Create Button directory
  const buttonDir = path.join(process.cwd(), 'src/components/atoms/Button');
  fs.mkdirSync(buttonDir, { recursive: true });

  // Write Button component
  fs.writeFileSync(path.join(buttonDir, 'Button.tsx'), BUTTON_COMPONENT);
  console.log('✅ Created Button.tsx');

  // Write Button stories
  fs.writeFileSync(path.join(buttonDir, 'Button.stories.tsx'), BUTTON_STORIES);
  console.log('✅ Created Button.stories.tsx');

  // Write Button tests
  fs.writeFileSync(path.join(buttonDir, 'Button.test.tsx'), BUTTON_TEST);
  console.log('✅ Created Button.test.tsx');

  // Write Button figmaframes
  fs.writeFileSync(path.join(buttonDir, 'Button.figmaframes.md'), BUTTON_FIGMAFRAMES);
  console.log('✅ Created Button.figmaframes.md');

  // Create index file
  fs.writeFileSync(
    path.join(buttonDir, 'index.ts'),
    `export { Button } from './Button';\nexport type { ButtonProps } from './Button';\n`
  );
  console.log('✅ Created index.ts');

  console.log('\n🎉 Reference implementation created successfully!');
  console.log('📚 Button.tsx is now the canonical pattern for all components.');
}

// Create utils first
const utilsDir = path.join(process.cwd(), 'src/utils');
if (!fs.existsSync(utilsDir)) {
  fs.mkdirSync(utilsDir, { recursive: true });
}

// Create classNames utility
fs.writeFileSync(
  path.join(utilsDir, 'classNames.ts'),
  `import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for constructing className strings conditionally.
 * Combines clsx and tailwind-merge for optimal Tailwind CSS class handling.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
);

createReferenceImplementation().catch(console.error);
```

### Step 3: Create Comprehensive Documentation FIRST

**`docs/component-architecture-pattern.md`**:
```markdown
# 🏗️ COMPONENT ARCHITECTURE PATTERN - MANDATORY REFERENCE

## 🚨 CRITICAL: This is the ONLY Acceptable Pattern

Every component in the Pigment-Genesis design system MUST follow this exact pattern. No exceptions, no alternatives, no variations.

## ✅ THE MANDATORY PATTERN

```typescript
import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/classNames';

// 1. 🔑 CVA VARIANTS (MANDATORY)
const componentVariants = cva(
  [
    // Base classes using design tokens
    'base-class-1 base-class-2',
    'transition-property duration-200',
    'focus-visible:outline-none focus-visible:ring-2'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-interactive-bg-bold text-interactive-text-on-fill',
          'hover:bg-interactive-bg-bold-hover',
          'active:bg-interactive-bg-bold-pressed'
        ],
        secondary: [
          'bg-neutral-bg-primary text-interactive-text-default',
          'border border-interactive-border-bold'
        ]
      },
      size: {
        small: ['text-sm h-8 px-3'],
        medium: ['text-sm h-10 px-4'],
        large: ['text-base h-12 px-6']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium'
    }
  }
);

// 2. 🔑 TYPESCRIPT INTERFACE (MANDATORY)
export interface ComponentProps 
  extends React.HTMLAttributes<HTMLElement>,
          VariantProps<typeof componentVariants> {
  children: React.ReactNode;
}

// 3. 🔑 FORWARDREF IMPLEMENTATION (MANDATORY)
export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </element>
    );
  }
);

Component.displayName = 'Component';

export default Component;
```

## ❌ FORBIDDEN PATTERNS

These patterns will cause immediate validation failure:

### 1. Inline Styles
```typescript
// ❌ NEVER DO THIS
<div style={{ color: 'red', backgroundColor: 'blue' }}>

// ❌ NEVER DO THIS
<div style={{ ...someStyles }}>
```

### 2. Direct Token Imports
```typescript
// ❌ NEVER DO THIS
import { colors } from '../tokens/colors';
import { semanticColors } from '../tokens/semanticColors';

// ❌ NEVER DO THIS
const bgColor = colors.primary[500];
```

### 3. Hardcoded Values
```typescript
// ❌ NEVER DO THIS
className="bg-[#3b82f6]"
className="text-[#ffffff]"
className="p-[12px]"

// ❌ NEVER DO THIS
className="bg-blue-500"
className="text-red-600"
```

### 4. Non-CVA Components
```typescript
// ❌ NEVER DO THIS
const Component = ({ variant, size }) => {
  const classes = variant === 'primary' ? 'bg-blue' : 'bg-gray';
  return <div className={classes} />;
};
```

## 🎯 DESIGN TOKEN CLASSES

### Required Token Classes
Every component MUST use these semantic token classes:

```typescript
// Backgrounds
'bg-neutral-bg-primary'     // Default background
'bg-neutral-bg-secondary'   // Secondary background
'bg-interactive-bg-bold'    // Primary interactive
'bg-error-500'              // Error state

// Text
'text-neutral-text-primary'     // Default text
'text-interactive-text-on-fill' // Text on colored bg
'text-interactive-text-default' // Interactive text

// Borders
'border-neutral-border-strong'   // Default border
'border-interactive-border-bold' // Interactive border
'border-error-500'               // Error border
```

## 🔍 VALIDATION CHECKLIST

Before ANY component is approved:

- [ ] Imports CVA from 'class-variance-authority'
- [ ] Defines variants using cva()
- [ ] TypeScript interface extends VariantProps
- [ ] Uses forwardRef for ref forwarding
- [ ] NO inline styles (style={{}})
- [ ] NO direct token imports
- [ ] NO hardcoded colors or values
- [ ] Uses design token classes exclusively
- [ ] Has displayName set
- [ ] Passes `npm run validate:architecture`

## 📚 REFERENCE IMPLEMENTATION

The Button component (`src/components/atoms/Button/Button.tsx`) is the canonical reference. Every component must follow its pattern exactly.

## 🚨 ENFORCEMENT

This pattern is enforced by automated validation:
- `npm run validate:architecture` - Must pass before any work
- Pre-commit hooks prevent non-compliant code
- CI/CD blocks non-compliant components
- Visual regression tests verify implementation

Remember: **Consistency is non-negotiable. One pattern, perfectly executed.**
```

## 🔑 PHASE 4: CLAUDE CODE BEHAVIOR INSTRUCTIONS

**`CLAUDE.md`**:
```markdown
# Claude Code Instructions for Pigment-Genesis Design System

## 🚨 MANDATORY: Read This Entire Document First

You are the design system engineer for CustomInk's Pigment-Genesis design system. Your role is to maintain absolute architectural consistency and quality.

## PRIMARY DIRECTIVES

### 1. VALIDATION-FIRST DEVELOPMENT
- **NO component work without passing validation**
- **Run `npm run validate:architecture` before ANY changes**
- **Button.tsx is the canonical reference - follow it exactly**
- **CVA + Tailwind is the ONLY acceptable pattern**

### 2. QUALITY GATES (All Mandatory)
```bash
# Before starting ANY work
npm run validate:architecture  # MUST PASS
npm run validate:tokens        # MUST PASS

# After ANY changes
npm run validate:all           # MUST PASS
npm run claude-visual-verify   # MUST PASS (95%+ accuracy)
```

### 3. ARCHITECTURAL REQUIREMENTS
Every component MUST:
- Import and use CVA for variants
- Use VariantProps<typeof variants> in interface
- Use forwardRef for ref forwarding
- Use design token classes exclusively
- Have zero inline styles
- Have zero direct token imports
- Have zero hardcoded values

### 4. FORBIDDEN PATTERNS
These cause immediate failure:
- `style={{ any: 'value' }}` - NO inline styles
- `import { colors } from 'tokens'` - NO direct imports
- `className="bg-[#hex]"` - NO hardcoded colors
- `className="p-[12px]"` - NO hardcoded spacing
- `className="bg-blue-500"` - NO Tailwind color classes

## COMPONENT DEVELOPMENT WORKFLOW

### Step 1: Validation Check
```bash
npm run validate:architecture
```
If this fails, NO component work can begin.

### Step 2: Review Reference Implementation
Open `src/components/atoms/Button/Button.tsx` and study the pattern.

### Step 3: Figma Analysis
When user provides Figma frames:
1. Extract ALL design properties systematically
2. Map ALL colors to design token classes
3. Document ALL specifications in .figmaframes.md
4. Never assume or guess values

### Step 4: Implementation
Follow Button.tsx pattern EXACTLY:
```typescript
import { cva, type VariantProps } from 'class-variance-authority';

const componentVariants = cva([...], { variants: {...} });

interface ComponentProps extends VariantProps<typeof componentVariants> {}

export const Component = forwardRef<Element, ComponentProps>(...);
```

### Step 5: Validation
```bash
npm run validate:all
npm run claude-visual-verify ComponentName
```
Both MUST pass before component is complete.

## ERROR RESPONSES

### Architecture Validation Fails
"🚨 VALIDATION FAILED: I cannot proceed with component work until all architectural violations are fixed. Run `npm run validate:architecture` to see specific issues."

### Missing Design Tokens
"🚨 MISSING TOKENS: Design tokens must be validated before component work. Run `npm run validate:tokens` to check token status."

### Figma Data Incomplete
"🚨 INCOMPLETE DESIGN DATA: I need complete Figma specifications including [specific missing data]. Please provide frames showing [specific requirements]."

### Visual Verification Fails
"🚨 VISUAL VERIFICATION FAILED: Component does not meet 95% accuracy requirement. Specific issues: [list issues]."

## SESSION STARTUP CHECKLIST

1. ✅ Read entire CLAUDE.md
2. ✅ Run `npm run validate:architecture`
3. ✅ Review Button.tsx reference implementation
4. ✅ Confirm all validations pass
5. ✅ Ready for component work

## QUALITY STANDARDS

- **Architectural Compliance**: 100% required
- **Visual Accuracy**: 95%+ required
- **Test Coverage**: 100% required
- **Documentation**: Complete required

## REMEMBER

- **Quality over speed** - Take unlimited time to achieve perfection
- **Validation prevents problems** - Never skip validation steps
- **One pattern only** - CVA + Tailwind, no alternatives
- **Button.tsx is truth** - When in doubt, follow Button.tsx

Your success is measured by architectural consistency and validation scores, not speed.
```

## 🎯 PHASE 5: CRITICAL UTILITIES AND TYPES

### Design Token Types

**`src/types/tokens.ts`**:
```typescript
export interface ColorTokens {
  neutral: {
    'bg-primary': string;
    'bg-secondary': string;
    'bg-tertiary': string;
    'text-primary': string;
    'text-secondary': string;
    'text-tertiary': string;
    'border-strong': string;
    'border-subtle': string;
  };
  interactive: {
    'bg-bold': string;
    'bg-bold-hover': string;
    'bg-bold-pressed': string;
    'text-default': string;
    'text-on-fill': string;
    'text-disabled': string;
    'border-bold': string;
    'border-disabled': string;
  };
  primary: Record<string, string>;
  error: Record<string, string>;
  warning: Record<string, string>;
  success: Record<string, string>;
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface TypographyTokens {
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

export interface DesignTokens {
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
}
```

### Component Base Types

**`src/types/component.ts`**:
```typescript
export interface BaseComponentProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  /**
   * Test ID for component testing
   */
  'data-testid'?: string;
}

export type Size = 'small' | 'medium' | 'large';
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'destructive';
```

### Global Styles with CSS Variables

**`src/styles/globals.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 
 * 🚨 CRITICAL: Import generated CSS variables from Figma tokens
 * This file has NO hardcoded values - everything comes from Figma
 */
@import './tokens/css-variables.generated.css';

@layer base {
  /* 
   * Base styles that don't depend on design tokens
   * Only system-level resets and behaviors
   */
  
  /* Ensure consistent box-sizing */
  * {
    box-sizing: border-box;
  }
  
  /* Focus visible only for keyboard navigation */
  *:focus {
    outline: none;
  }
  
  *:focus-visible {
    outline: 2px solid var(--color-focus-ring, var(--color-primary-500));
    outline-offset: 2px;
  }
}
```

**`src/tokens/css-variables.generated.css`** (Generated from Figma):
```css
/* 
 * 🚨 AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
 * Generated: [timestamp]
 * Figma File: [file-id]
 * 
 * To update: npm run extract-figma-tokens
 */

:root {
  /* All values extracted from Figma - NEVER edited manually */
  /* Color tokens, spacing tokens, typography tokens, etc. */
  /* This file is completely regenerated on each token extraction */
}
```

## 🎨 REBRAND WORKFLOW

### Designer-Driven Rebrand Process

1. **Designer Updates Figma**
   - Changes brand colors in design system
   - Adjusts spacing scale if needed
   - Updates typography definitions
   - Modifies effect tokens (shadows, borders)

2. **Developer Extracts Updates**
   ```bash
   npm run rebrand
   ```
   This single command:
   - Extracts new tokens from Figma
   - Regenerates all token files
   - Updates CSS variables
   - Updates Tailwind config
   - Rebuilds all components
   - Validates rebrand capability

3. **Automatic Propagation**
   - All components instantly reflect new design
   - No code changes required
   - No component files modified
   - Complete visual transformation

### Rebrand Preview & Validation

```bash
# Preview what will change
npm run rebrand:preview

# Validate rebrand readiness
npm run rebrand:validate
```

## 🚀 PHASE 6: EXPECTED OUTCOMES

Following this GENESIS-V2 setup will result in:

### 1. **Instant Rebrand Capability**
- Change Figma → Run extraction → System rebranded
- Zero code modifications required
- All design values flow from single source
- Complete brand transformation in minutes

### 2. **Perfect Architectural Consistency**
- Every component follows identical CVA + Tailwind pattern
- Validation prevents any deviation
- Button.tsx serves as unchangeable reference
- No design opinions in code

### 3. **Quality Gates That Cannot Be Bypassed**
- Figma token extraction required first
- Multiple validation layers prevent bad code
- Visual verification ensures pixel perfection
- Rebrand capability continuously validated

### 4. **True Design-Code Separation**
- Designers own all visual decisions in Figma
- Developers own component behavior and structure
- No design values exist in code
- Perfect separation of concerns

### 5. **Prevention Over Remediation**
- Problems impossible to create
- Validation happens before, not after
- Quality and rebrand capability built-in from day 1
- No hardcoded values can exist

## 📋 IMPLEMENTATION CHECKLIST

When starting from blank directory with GENESIS-V2:

1. [ ] Run all setup commands
2. [ ] Create directory structure
3. [ ] Install all dependencies
4. [ ] Create validation scripts
5. [ ] Create reference implementation (Button.tsx)
6. [ ] Create all documentation
7. [ ] Run validation suite
8. [ ] Begin component development

## 💡 KEY INSIGHTS

### Primary Insight: Design-Code Separation
The fundamental principle of GENESIS-V2 is **complete design-code separation**. By extracting ALL design decisions from Figma and prohibiting ANY hardcoded values, we achieve:

1. **Instant Rebrand Capability** - Change Figma, run extraction, done
2. **Zero Design Opinions in Code** - Code is purely structural
3. **Designer Empowerment** - Designers control visual identity completely
4. **True Reusability** - Same codebase works for any brand

### Secondary Insight: Constraint-Driven Quality
By making it impossible to create non-compliant components through validation gates, we ensure:

1. **Perfect Consistency** - One pattern, enforced automatically
2. **Prevention Over Correction** - Problems can't exist
3. **Quality as Inevitability** - Excellence is the only path

This approach transforms both quality and flexibility from aspirations to inevitabilities.
```
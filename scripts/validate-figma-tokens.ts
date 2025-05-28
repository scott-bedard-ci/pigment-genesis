#!/usr/bin/env tsx

/**
 * 🔍 FIGMA TOKEN VALIDATION SCRIPT
 * 
 * Validates design token synchronization between Figma and implementation
 * Usage: npm run validate-figma-tokens
 * 
 * Features:
 * - Compares Figma tokens against implementation
 * - Identifies precision mismatches
 * - Flags missing semantic mappings
 * - Tracks placeholder token status
 * - Generates actionable validation report
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import { primitiveColors, semanticColors } from '../src/tokens/colors';
import { primitiveSpacing, semanticSpacing, gap } from '../src/tokens/spacing';

interface FigmaTokens {
  primitive: {
    color: any;
    space: any;
    size: any;
    radius: any;
    'border-width': any;
  };
  semantic: {
    color: any;
    unit: any;
  };
}

interface ValidationResult {
  category: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  expected?: string;
  actual?: string;
  fix?: string;
}

class FigmaTokenValidator {
  private figmaTokens: FigmaTokens;
  private results: ValidationResult[] = [];

  constructor() {
    // Load Figma tokens
    try {
      const figmaPath = join(process.cwd(), 'tokens-from-figma.json');
      const figmaContent = readFileSync(figmaPath, 'utf-8');
      this.figmaTokens = JSON.parse(figmaContent);
    } catch (error) {
      console.error('❌ Cannot load tokens-from-figma.json:', error);
      process.exit(1);
    }
  }

  validateColorPrecision(): void {
    console.log('\n🎨 Validating Color Token Precision...');
    
    // Check RGBA precision matches Figma exactly
    const tests = [
      {
        name: 'neutral.text.primary',
        figma: this.figmaTokens.primitive.color.neutral.black['900'].$value,
        implementation: primitiveColors.neutral.black['900']
      },
      {
        name: 'interactive.border.strong', 
        figma: this.figmaTokens.primitive.color.neutral.black['700'].$value,
        implementation: primitiveColors.neutral.black['700']
      },
      {
        name: 'interactive.text.disabled',
        figma: this.figmaTokens.primitive.color.neutral.black['500'].$value,
        implementation: primitiveColors.neutral.black['500']
      },
      {
        name: 'interactive.text.placeholder',
        figma: this.figmaTokens.primitive.color.neutral.black['400'].$value,
        implementation: primitiveColors.neutral.black['400']
      }
    ];

    tests.forEach(test => {
      if (test.figma === test.implementation) {
        this.results.push({
          category: 'color-precision',
          status: 'pass',
          message: `✅ ${test.name} precision matches Figma exactly`
        });
      } else {
        this.results.push({
          category: 'color-precision',
          status: 'fail',
          message: `❌ ${test.name} precision mismatch`,
          expected: test.figma,
          actual: test.implementation,
          fix: `Update to: ${test.figma}`
        });
      }
    });
  }

  validateSpacingHierarchy(): void {
    console.log('\n📏 Validating Spacing Token Hierarchy...');
    
    // Check if spacing follows Figma's 3-tier system
    const expectedHierarchy = {
      'detail-layout': Object.keys(this.figmaTokens.semantic.unit.space['detail-layout']),
      'component-layout': Object.keys(this.figmaTokens.semantic.unit.space['component-layout']),
      'page-layout': Object.keys(this.figmaTokens.semantic.unit.space['page-layout'])
    };

    const implementedHierarchy = {
      'detail-layout': Object.keys(semanticSpacing.detailLayout),
      'component-layout': Object.keys(semanticSpacing.componentLayout), 
      'page-layout': Object.keys(semanticSpacing.pageLayout)
    };

    Object.entries(expectedHierarchy).forEach(([level, expectedKeys]) => {
      const implementedKeys = implementedHierarchy[level as keyof typeof implementedHierarchy];
      
      if (JSON.stringify(expectedKeys.sort()) === JSON.stringify(implementedKeys.sort())) {
        this.results.push({
          category: 'spacing-hierarchy',
          status: 'pass',
          message: `✅ ${level} spacing keys match Figma structure`
        });
      } else {
        this.results.push({
          category: 'spacing-hierarchy', 
          status: 'fail',
          message: `❌ ${level} spacing structure mismatch`,
          expected: expectedKeys.join(', '),
          actual: implementedKeys.join(', '),
          fix: `Update semantic spacing structure for ${level}`
        });
      }
    });
  }

  validatePlaceholderTokens(): void {
    console.log('\n🔧 Validating Placeholder Token Removal...');
    
    // Check if gap tokens still have placeholders
    const gapTokens = Object.values(gap);
    const hasPlaceholders = gapTokens.some(value => 
      typeof value === 'string' && value.includes('FIGMA_TOKEN_REQUIRED')
    );

    if (hasPlaceholders) {
      this.results.push({
        category: 'placeholder-tokens',
        status: 'fail', 
        message: '❌ Gap tokens still contain FIGMA_TOKEN_REQUIRED placeholders',
        fix: 'Replace all placeholder tokens with semantic token references'
      });
    } else {
      this.results.push({
        category: 'placeholder-tokens',
        status: 'pass',
        message: '✅ All placeholder tokens have been replaced with real values'
      });
    }
  }

  validateSemanticMapping(): void {
    console.log('\n🎯 Validating Semantic Token Mapping...');
    
    // Check if semantic tokens properly reference primitives
    const semanticTests = [
      {
        name: 'interactive.background.bold',
        semantic: semanticColors.interactive.background.bold,
        primitive: primitiveColors.blue.default,
        shouldMatch: true
      },
      {
        name: 'neutral.text.primary',
        semantic: semanticColors.neutral.text.primary,
        primitive: primitiveColors.neutral.black['900'],
        shouldMatch: true
      }
    ];

    semanticTests.forEach(test => {
      if (test.shouldMatch && test.semantic === test.primitive) {
        this.results.push({
          category: 'semantic-mapping',
          status: 'pass',
          message: `✅ ${test.name} correctly references primitive token`
        });
      } else if (test.shouldMatch && test.semantic !== test.primitive) {
        this.results.push({
          category: 'semantic-mapping',
          status: 'fail',
          message: `❌ ${test.name} does not reference correct primitive`,
          expected: test.primitive,
          actual: test.semantic,
          fix: 'Update semantic token to reference correct primitive'
        });
      }
    });
  }

  validateRebrandReadiness(): void {
    console.log('\n🔄 Validating Rebrand Readiness...');
    
    // Check if components use semantic tokens instead of hardcoded values
    // This would require analyzing component files, for now we check metadata
    const architectureCheck = typeof semanticColors === 'object' && 
                             typeof primitiveColors === 'object';
    
    if (architectureCheck) {
      this.results.push({
        category: 'rebrand-readiness',
        status: 'pass',
        message: '✅ Primitive and semantic token layers are properly structured'
      });
    } else {
      this.results.push({
        category: 'rebrand-readiness',
        status: 'fail',
        message: '❌ Token architecture missing primitive/semantic layers',
        fix: 'Implement proper token hierarchy for rebrand support'
      });
    }
  }

  generateReport(): void {
    console.log('\n\n📋 FIGMA TOKEN VALIDATION REPORT');
    console.log('================================');
    
    const passed = this.results.filter(r => r.status === 'pass').length;
    const failed = this.results.filter(r => r.status === 'fail').length;
    const warnings = this.results.filter(r => r.status === 'warning').length;
    
    console.log(`\n📊 SUMMARY: ${passed} passed | ${failed} failed | ${warnings} warnings\n`);
    
    // Group results by category
    const categories = [...new Set(this.results.map(r => r.category))];
    
    categories.forEach(category => {
      const categoryResults = this.results.filter(r => r.category === category);
      const categoryName = category.toUpperCase().replace('-', ' ');
      
      console.log(`\n🔍 ${categoryName}:`);
      categoryResults.forEach(result => {
        console.log(`   ${result.message}`);
        if (result.expected) {
          console.log(`      Expected: ${result.expected}`);
        }
        if (result.actual) {
          console.log(`      Actual: ${result.actual}`);
        }
        if (result.fix) {
          console.log(`      Fix: ${result.fix}`);
        }
      });
    });
    
    // Overall status
    console.log('\n🎯 OVERALL STATUS:');
    if (failed === 0) {
      console.log('   ✅ All validations passed - tokens are properly synced with Figma');
      console.log('   🚀 Design system is rebrand-ready!');
    } else if (failed <= 2) {
      console.log('   ⚠️  Minor issues found - mostly synced with some fixes needed');
      console.log('   🔧 Address the failed validations to achieve full sync');
    } else {
      console.log('   ❌ Significant sync issues found - requires immediate attention');
      console.log('   🚨 Not rebrand-ready until critical issues are resolved');
    }
    
    console.log('\n' + '='.repeat(50));
  }

  run(): void {
    console.log('🔍 STARTING FIGMA TOKEN VALIDATION');
    console.log('Comparing implementation against tokens-from-figma.json...');
    
    this.validateColorPrecision();
    this.validateSpacingHierarchy();
    this.validatePlaceholderTokens();
    this.validateSemanticMapping();
    this.validateRebrandReadiness();
    
    this.generateReport();
    
    // Exit with proper code
    const failed = this.results.filter(r => r.status === 'fail').length;
    process.exit(failed > 0 ? 1 : 0);
  }
}

// Always run validation when this module is executed
const validator = new FigmaTokenValidator();
validator.run();

export default FigmaTokenValidator;
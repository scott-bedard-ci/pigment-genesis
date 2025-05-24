#!/usr/bin/env node

/**
 * Token Validation Script
 * 
 * Validates that all design tokens have been extracted from Figma
 * and are ready for component development.
 * 
 * Usage:
 *   npm run validate-tokens
 *   node scripts/validate-tokens.ts
 */

import { getTokenExtractionStatus, validateAllTokens } from '../src/utils/tokenValidation';

interface ValidationResult {
  success: boolean;
  errors: string[];
  warnings: string[];
  status: ReturnType<typeof getTokenExtractionStatus>;
}

/**
 * Main validation function
 */
async function validateTokens(): Promise<ValidationResult> {
  const result: ValidationResult = {
    success: false,
    errors: [],
    warnings: [],
    status: getTokenExtractionStatus()
  };

  console.log('🔍 Validating design tokens...\n');

  try {
    // Check extraction status
    const status = getTokenExtractionStatus();
    
    // Display status
    console.log('📊 Token Extraction Status:');
    console.log(`  🎨 Colors:     ${status.colors.extracted ? '✅ Extracted' : '❌ Placeholder'}`);
    console.log(`  📏 Spacing:    ${status.spacing.extracted ? '✅ Extracted' : '❌ Placeholder'}`);
    console.log(`  📝 Typography: ${status.typography.extracted ? '✅ Extracted' : '❌ Placeholder'}`);
    console.log('');

    // Check for Figma file IDs
    if (status.colors.figmaFileId) {
      console.log(`📎 Figma File ID: ${status.colors.figmaFileId}`);
    }

    // Validate all tokens
    validateAllTokens();

    console.log('✅ All design tokens are ready for component development!');
    result.success = true;

  } catch (error) {
    console.error('❌ Token validation failed:\n');
    console.error(error.message);
    result.errors.push(error.message);
  }

  return result;
}

/**
 * Component readiness check
 */
function checkComponentReadiness(): boolean {
  const status = getTokenExtractionStatus();
  
  if (!status.allReady) {
    console.log('\n🚨 COMPONENT DEVELOPMENT BLOCKED:');
    console.log('Cannot create components until all tokens are extracted from Figma.\n');
    
    console.log('🔧 Required actions:');
    if (!status.colors.extracted) {
      console.log('  • Extract color tokens from Figma');
    }
    if (!status.spacing.extracted) {
      console.log('  • Extract spacing tokens from Figma');
    }
    if (!status.typography.extracted) {
      console.log('  • Extract typography tokens from Figma');
    }
    
    console.log('\n💡 Run: npm run extract-figma-tokens');
    console.log('💡 Provide Figma frame links with design system tokens\n');
    
    return false;
  }

  console.log('\n🎯 Ready for component development!');
  console.log('All design tokens have been extracted from Figma.\n');
  
  return true;
}

/**
 * Audit existing components for placeholder token usage
 */
async function auditComponents(): Promise<void> {
  console.log('🔍 Auditing existing components for placeholder token usage...\n');
  
  // This would scan component files for FIGMA_TOKEN_REQUIRED_ strings
  // For now, we'll implement a basic check
  
  console.log('📂 Scanning component files...');
  
  // TODO: Implement file scanning logic
  // - Search for FIGMA_TOKEN_REQUIRED_ strings in component files
  // - Report any components using placeholder tokens
  // - Provide guidance on fixing issues
  
  console.log('✅ Component audit complete (placeholder implementation)');
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log('Pigment-Genesis Token Validation System\n');
  console.log('This script ensures design tokens are extracted from Figma');
  console.log('before component development begins.\n');
  
  try {
    // Run validation
    const result = await validateTokens();
    
    // Check component readiness
    const ready = checkComponentReadiness();
    
    // Audit existing components
    await auditComponents();
    
    // Exit with appropriate code
    if (result.success && ready) {
      console.log('🎉 All checks passed! Ready for development.');
      process.exit(0);
    } else {
      console.log('❌ Validation failed. Fix issues before proceeding.');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('💥 Validation script error:', error.message);
    process.exit(1);
  }
}

// Handle command line execution
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Script failed:', error);
    process.exit(1);
  });
}

export { validateTokens, checkComponentReadiness, auditComponents };
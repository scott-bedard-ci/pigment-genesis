import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { getTokenExtractionStatus } from './utils/tokenValidation';
import { Checkbox } from './components/atoms/Checkbox';

// Welcome story to test our setup
const meta: Meta = {
  title: 'Design System/Welcome',
  parameters: {
    docs: {
      description: {
        component: `
# Welcome to Pigment-Genesis Design System

This design system is built with a **Figma-first approach** and **zero tolerance for placeholder tokens**.

## Current Status

**Token Extraction Status:**
${JSON.stringify(getTokenExtractionStatus(), null, 2)}

## Before Building Components

1. **Extract design tokens from Figma** - Run \`npm run extract-figma-tokens\`
2. **Validate token readiness** - Run \`npm run validate-tokens\`  
3. **Review extraction guides** - Run \`npm run figma-checklist\`
4. **Start component development** - All tokens must be Figma-extracted

## Available Commands

- \`npm run validate-tokens\` - Check token extraction status
- \`npm run figma-checklist\` - Show extraction checklist
- \`npm run extraction-guide\` - Show comprehensive guide

## Component Development Rules

- ✅ **Only build from Figma designs** - No assumptions or fallbacks
- ✅ **Extract every pixel measurement** - Follow comprehensive extraction guide
- ✅ **Use design tokens exclusively** - No hardcoded values
- ✅ **Document everything** - Complete property extraction required
- ✅ **Achieve pixel-perfect fidelity** - 95%+ visual accuracy required

## Placeholder Token Protection

The system prevents placeholder token usage through:
- **Validation scripts** that block component development until Figma extraction
- **Build-time failures** if placeholder tokens are detected
- **Development warnings** when placeholder tokens are present
- **Token naming** that causes CSS failures if used accidentally

Ready to build components? Provide Figma frame links to get started!
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => {
    const status = getTokenExtractionStatus();
    
    return `
      <div style="padding: 24px; font-family: system-ui; line-height: 1.6;">
        <h1 style="color: #1a202c; margin-bottom: 16px;">🎨 Pigment-Genesis Design System</h1>
        
        <div style="background: ${status.allReady ? '#f0fff4' : '#fef5e7'}; border: 1px solid ${status.allReady ? '#9ae6b4' : '#f6ad55'}; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <h2 style="margin: 0 0 8px 0; color: ${status.allReady ? '#22543d' : '#744210'};">
            ${status.allReady ? '✅ Ready for Development' : '⚠️ Token Extraction Required'}
          </h2>
          <p style="margin: 0; color: ${status.allReady ? '#2f855a' : '#975a16'};">
            ${status.allReady 
              ? 'All design tokens have been extracted from Figma. You can now build components!' 
              : 'Design tokens must be extracted from Figma before component development can begin.'
            }
          </p>
        </div>

        <h3>Token Status:</h3>
        <ul style="margin: 0;">
          <li style="color: ${status.colors.extracted ? '#22543d' : '#c53030'};">
            Colors: ${status.colors.extracted ? '✅ Extracted' : '❌ Placeholder'}
          </li>
          <li style="color: ${status.spacing.extracted ? '#22543d' : '#c53030'};">
            Spacing: ${status.spacing.extracted ? '✅ Extracted' : '❌ Placeholder'}
          </li>
          <li style="color: ${status.typography.extracted ? '#22543d' : '#c53030'};">
            Typography: ${status.typography.extracted ? '✅ Extracted' : '❌ Placeholder'}
          </li>
        </ul>

        <h3>Next Steps:</h3>
        ${status.allReady ? `
        <div style="background: #f0fff4; border: 1px solid #9ae6b4; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <h4 style="margin: 0 0 8px 0; color: #22543d;">🎉 Ready for Component Development!</h4>
          <p style="margin: 0 0 12px 0; color: #2f855a;">Design tokens have been extracted. You can now build components!</p>
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="color: #2f855a;">Live Example:</span>
            ${React.createElement(Checkbox, { label: 'Extracted from Figma!' })}
          </div>
        </div>
        ` : `
        <ol>
          <li><code>npm run extract-figma-tokens</code> - Extract tokens from Figma</li>
          <li><code>npm run validate-tokens</code> - Verify extraction</li>
          <li><code>npm run figma-checklist</code> - Review extraction guide</li>
          <li>Provide Figma frame links for component development</li>
        </ol>
        `}

        <p style="background: #e2e8f0; padding: 12px; border-radius: 6px; margin-top: 24px;">
          <strong>🔒 Placeholder Token Protection Active:</strong><br>
          This system prevents default tokens from leaking into components by using validation scripts, 
          build-time checks, and placeholder values that cause failures if used accidentally.
        </p>
      </div>
    `;
  }
};
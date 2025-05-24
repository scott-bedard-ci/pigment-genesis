// Utility for parsing and updating Figma frame Markdown files
// This module provides functions to read and write component Figma frame documentation

import fs from 'fs/promises';
import path from 'path';

/**
 * Interface for component Figma frame data
 */
export interface FigmaFrameData {
  componentName: string;
  atomicLevel: string;
  lastUpdated: string;
  status: string;
  version: string;
  figmaFileId?: string;
  frames: FigmaFrame[];
  tokenMappings: TokenMapping[];
  buildHistory: BuildHistoryEntry[];
  stats: ComponentStats;
  notes?: string;
}

/**
 * Interface for individual Figma frames
 */
export interface FigmaFrame {
  id: string;
  name: string;
  url: string;
  description: string;
  status: 'active' | 'deprecated' | 'draft';
  category: 'state' | 'variant' | 'size' | 'responsive';
  lastVerified?: string;
}

/**
 * Interface for design token mappings
 */
export interface TokenMapping {
  tokenPath: string;
  figmaToken: string;
  currentValue: string;
  usage: string;
}

/**
 * Interface for build history entries
 */
export interface BuildHistoryEntry {
  version: string;
  date: string;
  sessionType: string;
  changes: string[];
  auditResults: {
    designFidelity: number;
    tokenUsage: number;
    accessibility: number;
    testCoverage: number;
    documentation: number;
    crossPlatform: number;
    overall: 'passed' | 'failed';
  };
  extractedValues?: Record<string, string>;
  filesCreated?: string[];
}

/**
 * Interface for component statistics
 */
export interface ComponentStats {
  totalFrames: number;
  activeFrames: number;
  tokensUsed: number;
  lastSync: string;
  componentSize: string;
  testCoverage: string;
}

/**
 * Parse a Figma frame Markdown file and extract structured data
 */
export async function parseFigmaFrameMarkdown(filePath: string): Promise<FigmaFrameData | null> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Extract basic information using regex patterns
    const componentName = extractValue(content, /Component Name:\*\* (.+)/);
    const atomicLevel = extractValue(content, /Atomic Level:\*\* (.+)/);
    const lastUpdated = extractValue(content, /Last Updated:\*\* (.+)/);
    const status = extractValue(content, /Status:\*\* (.+)/);
    const version = extractValue(content, /Current Version:\*\* (.+)/);
    
    // Extract frames from the markdown
    const frames = extractFrames(content);
    
    // Extract token mappings from tables
    const tokenMappings = extractTokenMappings(content);
    
    // Extract build history
    const buildHistory = extractBuildHistory(content);
    
    // Extract statistics
    const stats = extractStats(content);
    
    return {
      componentName: componentName || '',
      atomicLevel: atomicLevel || '',
      lastUpdated: lastUpdated || '',
      status: status || '',
      version: version || '',
      frames,
      tokenMappings,
      buildHistory,
      stats
    };
  } catch (error) {
    console.warn(`Failed to parse Figma frame file ${filePath}:`, error);
    return null;
  }
}

/**
 * Generate Figma frame Markdown content from structured data
 */
export function generateFigmaFrameMarkdown(data: FigmaFrameData): string {
  const {
    componentName,
    atomicLevel,
    lastUpdated,
    status,
    version,
    figmaFileId,
    frames,
    tokenMappings,
    buildHistory,
    stats,
    notes
  } = data;

  let markdown = `# ${componentName} Component - Figma Frame History

## Component Information
- **Component Name:** ${componentName}
- **Atomic Level:** ${atomicLevel}
- **Last Updated:** ${lastUpdated}
- **Status:** ${status}
- **Current Version:** ${version}
${figmaFileId ? `- **Figma File ID:** ${figmaFileId}` : ''}

## Current Figma Frames

`;

  // Group frames by category
  const framesByCategory = groupFramesByCategory(frames);
  
  Object.entries(framesByCategory).forEach(([category, categoryFrames]) => {
    markdown += `### ${formatCategoryName(category)}\n`;
    categoryFrames.forEach(frame => {
      markdown += `- **Frame ID:** \`${frame.id}\`\n`;
      markdown += `- **Frame URL:** [${frame.name}](${frame.url})\n`;
      markdown += `- **Description:** ${frame.description}\n`;
      markdown += `- **Status:** ${formatStatus(frame.status)}\n`;
      if (frame.lastVerified) {
        markdown += `- **Last Verified:** ${frame.lastVerified}\n`;
      }
      markdown += '\n';
    });
  });

  // Add token mappings table
  if (tokenMappings.length > 0) {
    markdown += `## Design Token Mappings\n\n`;
    markdown += `| Token Path | Figma Token | Current Value | Usage |\n`;
    markdown += `|------------|-------------|---------------|---------|\n`;
    tokenMappings.forEach(mapping => {
      markdown += `| \`${mapping.tokenPath}\` | ${mapping.figmaToken} | ${mapping.currentValue} | ${mapping.usage} |\n`;
    });
    markdown += '\n';
  }

  // Add build history
  if (buildHistory.length > 0) {
    markdown += `## Build History\n\n`;
    buildHistory.forEach(entry => {
      markdown += `### Version ${entry.version} - ${entry.sessionType}\n`;
      markdown += `**Date:** ${entry.date}\n\n`;
      
      if (entry.changes.length > 0) {
        markdown += `**Changes Made:**\n`;
        entry.changes.forEach(change => {
          markdown += `- ${change}\n`;
        });
        markdown += '\n';
      }
      
      if (entry.extractedValues) {
        markdown += `**Extracted Design Values:**\n`;
        Object.entries(entry.extractedValues).forEach(([key, value]) => {
          markdown += `- ${key}: ${value}\n`;
        });
        markdown += '\n';
      }
      
      markdown += `**Quality Audit Results:**\n`;
      markdown += `- ${entry.auditResults.overall === 'passed' ? '✅' : '❌'} Design Fidelity: ${entry.auditResults.designFidelity}%\n`;
      markdown += `- ${entry.auditResults.tokenUsage === 100 ? '✅' : '❌'} Token Usage: ${entry.auditResults.tokenUsage}%\n`;
      markdown += `- ${entry.auditResults.accessibility === 100 ? '✅' : '❌'} Accessibility: ${entry.auditResults.accessibility}%\n`;
      markdown += `- ${entry.auditResults.testCoverage >= 95 ? '✅' : '❌'} Test Coverage: ${entry.auditResults.testCoverage}%\n`;
      markdown += `- ${entry.auditResults.documentation === 100 ? '✅' : '❌'} Documentation: ${entry.auditResults.documentation}%\n`;
      markdown += `- ${entry.auditResults.crossPlatform === 100 ? '✅' : '❌'} Cross-Platform: ${entry.auditResults.crossPlatform}%\n\n`;
      
      if (entry.filesCreated && entry.filesCreated.length > 0) {
        markdown += `**Files Created:**\n`;
        entry.filesCreated.forEach(file => {
          markdown += `- \`${file}\`\n`;
        });
        markdown += '\n';
      }
      
      markdown += '---\n\n';
    });
  }

  // Add statistics
  markdown += `## Component Statistics
- **Total Figma Frames:** ${stats.totalFrames}
- **Active Frames:** ${stats.activeFrames}
- **Design Tokens Used:** ${stats.tokensUsed}
- **Last Figma Sync:** ${stats.lastSync}
- **Component Size:** ${stats.componentSize}
- **Test Coverage:** ${stats.testCoverage}

`;

  // Add notes if present
  if (notes) {
    markdown += `## Notes
${notes}

`;
  }

  markdown += `---
*This file is automatically updated when component designs are refreshed from Figma.*
*Last updated by Claude Code: ${new Date().toISOString()}*`;

  return markdown;
}

/**
 * Update a Figma frame Markdown file with new data
 */
export async function updateFigmaFrameMarkdown(
  filePath: string, 
  updates: Partial<FigmaFrameData>
): Promise<void> {
  const existingData = await parseFigmaFrameMarkdown(filePath);
  
  if (!existingData) {
    throw new Error(`Could not parse existing Figma frame file: ${filePath}`);
  }
  
  // Merge updates with existing data
  const updatedData: FigmaFrameData = {
    ...existingData,
    ...updates,
    lastUpdated: new Date().toISOString(),
    frames: updates.frames || existingData.frames,
    tokenMappings: updates.tokenMappings || existingData.tokenMappings,
    buildHistory: updates.buildHistory 
      ? [...existingData.buildHistory, ...updates.buildHistory]
      : existingData.buildHistory
  };
  
  const newContent = generateFigmaFrameMarkdown(updatedData);
  await fs.writeFile(filePath, newContent);
}

/**
 * Helper functions for parsing and formatting
 */
function extractValue(content: string, regex: RegExp): string | null {
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

function extractFrames(content: string): FigmaFrame[] {
  const frames: FigmaFrame[] = [];
  
  // Extract frame blocks using regex
  const frameRegex = /- \*\*Frame ID:\*\* `([^`]+)`\s*\n- \*\*Frame URL:\*\* \[([^\]]+)\]\(([^)]+)\)\s*\n- \*\*Description:\*\* ([^\n]+)\s*\n- \*\*Status:\*\* ([^\n]+)/g;
  
  let match;
  while ((match = frameRegex.exec(content)) !== null) {
    frames.push({
      id: match[1],
      name: match[2],
      url: match[3],
      description: match[4],
      status: match[5].toLowerCase() as 'active' | 'deprecated' | 'draft',
      category: 'state' // Default category, would need more sophisticated parsing for actual category
    });
  }
  
  return frames;
}

function extractTokenMappings(content: string): TokenMapping[] {
  const mappings: TokenMapping[] = [];
  
  // Extract table rows
  const tableRegex = /\| `([^`]+)` \| ([^|]+) \| ([^|]+) \| ([^|]+) \|/g;
  
  let match;
  while ((match = tableRegex.exec(content)) !== null) {
    mappings.push({
      tokenPath: match[1].trim(),
      figmaToken: match[2].trim(),
      currentValue: match[3].trim(),
      usage: match[4].trim()
    });
  }
  
  return mappings;
}

function extractBuildHistory(content: string): BuildHistoryEntry[] {
  // This would need more sophisticated parsing for actual implementation
  // For now, return empty array
  return [];
}

function extractStats(content: string): ComponentStats {
  return {
    totalFrames: 0,
    activeFrames: 0,
    tokensUsed: 0,
    lastSync: '',
    componentSize: '',
    testCoverage: ''
  };
}

function groupFramesByCategory(frames: FigmaFrame[]): Record<string, FigmaFrame[]> {
  return frames.reduce((groups, frame) => {
    const category = frame.category || 'other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(frame);
    return groups;
  }, {} as Record<string, FigmaFrame[]>);
}

function formatCategoryName(category: string): string {
  const categoryNames: Record<string, string> = {
    'state': 'Interactive States',
    'variant': 'Color Variants',
    'size': 'Size Variants',
    'responsive': 'Responsive Frames',
    'other': 'Other Frames'
  };
  
  return categoryNames[category] || category;
}

function formatStatus(status: string): string {
  const statusMap: Record<string, string> = {
    'active': 'Active',
    'deprecated': '⚠️ Deprecated',
    'draft': '🚧 Draft'
  };
  
  return statusMap[status] || status;
}
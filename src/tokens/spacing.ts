/**
 * 📏 DESIGN TOKENS - SPACING
 * 
 * EXTRACTED FROM FIGMA with proper semantic token architecture
 * Source: Complete Figma design tokens export (tokens-from-figma.json)
 * Architecture: Primitive → Semantic → Component Usage
 * 
 * ✅ SYNC STATUS: Updated to match Figma exactly
 * ✅ REBRAND READY: Uses semantic token references  
 * ✅ HIERARCHY: Follows Figma's 3-tier spacing system
 */

// 🔥 PRIMITIVE SPACING TOKENS (Direct from Figma)
// These are the foundational spacing values that never change
export const primitiveSpacing = {
  // Primitive space values - matches Figma primitive.space.*
  space: {
    '1px': '1px',
    '2px': '2px', 
    '3px': '3px',
    '4px': '4px',
    '6px': '6px',
    '8px': '8px',
    '12px': '12px',
    '16px': '16px',
    '20px': '20px',
    '24px': '24px',
    '32px': '32px',
    '40px': '40px',
    '48px': '48px',
    '56px': '56px',
    '64px': '64px',
    '80px': '80px'
  },
  
  // Primitive size values - matches Figma primitive.size.*
  size: {
    '12px': '12px',
    '16px': '16px',
    '20px': '20px',
    '24px': '24px',
    '32px': '32px',
    '40px': '40px',
    '48px': '48px',
    '64px': '64px',
    // Responsive breakpoint sizes
    '325px': '325px', // Super tiny phones
    '394px': '394px', // Large phones
    '700px': '700px', // Small tablets
    '1024px': '1024px', // Large tablets/small laptops
    '1300px': '1300px' // Large laptop/desktop
  },
  
  // Primitive radius values - matches Figma primitive.radius.*
  radius: {
    '2px': '2px',
    '4px': '4px', 
    '6px': '6px',
    '8px': '8px',
    '16px': '16px',
    'round': '999px'
  },
  
  // Primitive border-width values - matches Figma primitive.border-width.*
  borderWidth: {
    '1px': '1px',
    '2px': '2px',
    '4px': '4px'
  }
} as const;

// 🎯 SEMANTIC SPACING TOKENS (Maps to Figma semantic.unit.*)
// These provide meaning and semantic structure following Figma's hierarchy
export const semanticSpacing = {
  // Detail layout spacing - matches Figma semantic.unit.space.detail-layout.*
  // Used for fine-grained spacing within components
  detailLayout: {
    xxs: primitiveSpacing.space['1px'], // 1px
    xs: primitiveSpacing.space['2px'],  // 2px
    sm: primitiveSpacing.space['3px'],  // 3px  
    md: primitiveSpacing.space['4px'],  // 4px
    lg: primitiveSpacing.space['6px'],  // 6px
    xl: primitiveSpacing.space['8px']   // 8px
  },
  
  // Component layout spacing - matches Figma semantic.unit.space.component-layout.*
  // Used for spacing between component elements
  componentLayout: {
    xxs: primitiveSpacing.space['4px'],  // 4px
    xs: primitiveSpacing.space['8px'],   // 8px
    sm: primitiveSpacing.space['12px'],  // 12px
    md: primitiveSpacing.space['16px'],  // 16px
    lg: primitiveSpacing.space['20px'],  // 20px
    xl: primitiveSpacing.space['24px'],  // 24px
    xxl: primitiveSpacing.space['32px'] // 32px
  },
  
  // Page layout spacing - matches Figma semantic.unit.space.page-layout.*
  // Used for major layout sections
  pageLayout: {
    xs: primitiveSpacing.space['16px'], // 16px
    sm: primitiveSpacing.space['24px'], // 24px
    md: primitiveSpacing.space['32px'], // 32px
    lg: primitiveSpacing.space['48px'], // 48px
    xl: primitiveSpacing.space['64px'], // 64px
    xxl: primitiveSpacing.space['80px'] // 80px
  },
  
  // Semantic size tokens - matches Figma semantic.unit.size.*
  size: {
    // Breakpoint sizes - matches Figma semantic.unit.size.breakpoint.*
    breakpoint: {
      'mobile-tiny': primitiveSpacing.size['325px'],   // 325px
      'mobile-large': primitiveSpacing.size['394px'],  // 394px
      'tablet': primitiveSpacing.size['700px'],        // 700px
      'desktop': primitiveSpacing.size['1024px'],      // 1024px
      'desktop-xl': primitiveSpacing.size['1300px']    // 1300px
    },
    
    // Tappable area sizes - matches Figma semantic.unit.size.tappable.*
    tappable: {
      default: primitiveSpacing.size['40px'], // 40px
      stingy: primitiveSpacing.size['32px']   // 32px
    },
    
    // Icon sizes - matches Figma semantic.unit.size.icon.*
    icon: {
      xs: primitiveSpacing.size['16px'],      // 16px
      sm: primitiveSpacing.size['20px'],      // 20px  
      default: primitiveSpacing.size['24px'], // 24px
      lg: primitiveSpacing.size['32px']       // 32px
    }
  },
  
  // Semantic radius tokens - matches Figma semantic.unit.radius.*
  radius: {
    card: primitiveSpacing.radius['8px'],      // 8px
    button: primitiveSpacing.radius['6px'],    // 6px
    thumbnail: primitiveSpacing.radius['8px'], // 8px
    field: primitiveSpacing.radius['4px'],     // 4px
    alert: primitiveSpacing.radius['4px'],     // 4px
    swatch: primitiveSpacing.radius['4px'],    // 4px
    pill: primitiveSpacing.radius['round'],    // 999px
    round: primitiveSpacing.radius['round'],   // 999px
    default: primitiveSpacing.radius['8px'],   // 8px
    lg: primitiveSpacing.radius['16px'],       // 16px
    sm: primitiveSpacing.radius['4px'],        // 4px
    xs: primitiveSpacing.radius['2px']         // 2px
  },
  
  // Semantic border-width tokens - matches Figma semantic.unit.border-width.*
  borderWidth: {
    default: primitiveSpacing.borderWidth['1px'] // 1px
  }
} as const;

// 📐 COMPONENT-SPECIFIC SPACING (For current usage)
// Maps current component needs to semantic tokens - FIXED from placeholders

// Basic spacing scale using semantic component layout tokens
export const spacing = {
  // Fixed: Now uses semantic tokens instead of hardcoded values
  xs: semanticSpacing.detailLayout.xs,        // 2px
  sm: semanticSpacing.detailLayout.xl,        // 8px  
  md: semanticSpacing.componentLayout.md,     // 16px
  lg: semanticSpacing.componentLayout.xl,     // 24px
  xl: semanticSpacing.pageLayout.md,          // 32px
  '2xl': semanticSpacing.pageLayout.lg,       // 48px
  '3xl': semanticSpacing.pageLayout.xl        // 64px
} as const;

// Component-specific spacing extracted from Figma
export const componentSpacing = {
  // Checkbox spacing - EXTRACTED from Figma
  checkbox: {
    size: '18px',                           // Figma: Checkbox box size
    containerHeight: '32px',                // Figma: Container height
    labelGap: semanticSpacing.detailLayout.xl,  // 8px - now uses semantic token
    borderRadius: '2.75px'                  // Figma: Checkbox border radius
  },
  
  // Button spacing - EXTRACTED from Figma  
  button: {
    small: {
      height: semanticSpacing.size.tappable.stingy,    // 32px - uses semantic token
      paddingX: semanticSpacing.componentLayout.md,    // 16px - uses semantic token
      paddingY: semanticSpacing.detailLayout.lg        // 6px - uses semantic token
    },
    medium: {
      height: semanticSpacing.size.tappable.default,   // 40px - uses semantic token
      paddingX: semanticSpacing.componentLayout.md,    // 16px - uses semantic token
      paddingY: semanticSpacing.detailLayout.xl        // 8px - uses semantic token
    },
    large: {
      height: semanticSpacing.pageLayout.lg,           // 48px - uses semantic token
      paddingX: semanticSpacing.componentLayout.md,    // 16px - uses semantic token
      paddingY: semanticSpacing.componentLayout.sm     // 12px - uses semantic token
    },
    iconGap: semanticSpacing.detailLayout.xl,          // 8px - uses semantic token
    minWidth: '64px',                                  // Figma: Minimum button width
    borderRadius: semanticSpacing.radius.button       // 6px - uses semantic token
  },
  
  // Avatar spacing - EXTRACTED from Figma
  avatar: {
    small: {
      size: '26px',                                    // Figma: Small avatar dimensions
      padding: semanticSpacing.detailLayout.xl,       // 8px - uses semantic token
      borderRadius: semanticSpacing.radius.round      // 999px - uses semantic token
    },
    large: {
      size: semanticSpacing.pageLayout.lg,            // 48px - uses semantic token
      padding: semanticSpacing.componentLayout.sm,    // 12px - uses semantic token
      borderRadius: semanticSpacing.radius.round      // 999px - uses semantic token
    },
    group: {
      overlap: '-3px',                                 // Figma: Negative spacing for overlap
      border: semanticSpacing.borderWidth.default     // 1px - uses semantic token
    }
  },
  
  // Dropdown spacing - EXTRACTED from Figma
  dropdown: {
    fieldHeight: semanticSpacing.size.tappable.default,     // 40px - uses semantic token
    fieldPaddingX: '13px',                                  // Figma: Horizontal padding inside field
    fieldPaddingY: '9px',                                   // Figma: Vertical padding inside field
    fieldGap: semanticSpacing.detailLayout.lg,              // 6px - uses semantic token
    listPaddingY: semanticSpacing.detailLayout.xl,          // 8px - uses semantic token
    listPaddingX: semanticSpacing.detailLayout.xl,          // 8px - uses semantic token
    itemPadding: semanticSpacing.detailLayout.xl,           // 8px - uses semantic token
    itemMinHeight: '36px',                                  // Figma: Minimum height for list items
    borderRadius: semanticSpacing.radius.field,             // 4px - uses semantic token
    menuBorderRadius: semanticSpacing.radius.card,          // 8px - uses semantic token
    iconSize: semanticSpacing.size.icon.sm                  // 20px - uses semantic token
  },
  
  // Input padding - Future components
  input: {
    sm: { 
      x: semanticSpacing.componentLayout.sm,  // 12px - uses semantic token
      y: semanticSpacing.detailLayout.xl      // 8px - uses semantic token
    },
    md: { 
      x: semanticSpacing.componentLayout.md,  // 16px - uses semantic token
      y: semanticSpacing.componentLayout.sm   // 12px - uses semantic token
    },
    lg: { 
      x: semanticSpacing.componentLayout.lg,  // 20px - uses semantic token
      y: semanticSpacing.componentLayout.md   // 16px - uses semantic token
    }
  },
  
  // Card padding - Future components  
  card: {
    sm: semanticSpacing.componentLayout.md,   // 16px - uses semantic token
    md: semanticSpacing.componentLayout.xl,   // 24px - uses semantic token
    lg: semanticSpacing.pageLayout.md         // 32px - uses semantic token
  },
  
  // Layout spacing - Future components
  layout: {
    section: semanticSpacing.pageLayout.xl,   // 64px - uses semantic token
    container: semanticSpacing.componentLayout.xl, // 24px - uses semantic token
    grid: semanticSpacing.componentLayout.xl  // 24px - uses semantic token
  }
} as const;

// 🔧 GAP TOKENS - FIXED from placeholders
// Now properly mapped to Figma semantic tokens
export const gap = {
  // Fixed: Replaced FIGMA_TOKEN_REQUIRED placeholders with semantic tokens
  xs: semanticSpacing.detailLayout.xl,       // 8px - was FIGMA_TOKEN_REQUIRED_gap_xs
  sm: semanticSpacing.componentLayout.sm,    // 12px - was FIGMA_TOKEN_REQUIRED_gap_sm
  md: semanticSpacing.componentLayout.md,    // 16px - was FIGMA_TOKEN_REQUIRED_gap_md
  lg: semanticSpacing.componentLayout.lg,    // 20px - was FIGMA_TOKEN_REQUIRED_gap_lg
  xl: semanticSpacing.componentLayout.xl     // 24px - was FIGMA_TOKEN_REQUIRED_gap_xl
} as const;

// 📊 TOKEN METADATA
export const spacingTokenMetadata = {
  figmaFileId: 'complete-design-tokens-export',
  lastSync: new Date().toISOString(),
  tokenCount: Object.keys(primitiveSpacing.space).length + 
              Object.keys(semanticSpacing.componentLayout).length,
  version: '2.0.0',
  isExtracted: true,
  placeholderMode: false,
  sourceFrame: 'Complete Figma design tokens export (tokens-from-figma.json)',
  architecture: 'primitive → semantic → component',
  hierarchy: 'detail-layout → component-layout → page-layout',
  rebrandReady: true,
  extractedTokens: [
    // Primitive tokens
    'primitive.space.*',
    'primitive.size.*',
    'primitive.radius.*',
    'primitive.border-width.*',
    // Semantic tokens  
    'semantic.unit.space.detail-layout.*',
    'semantic.unit.space.component-layout.*',
    'semantic.unit.space.page-layout.*',
    'semantic.unit.size.breakpoint.*',
    'semantic.unit.size.tappable.*',
    'semantic.unit.size.icon.*',
    'semantic.unit.radius.*',
    'semantic.unit.border-width.*'
  ],
  placeholdersFixed: [
    'gap.xs → semantic.unit.space.detail-layout.xl',
    'gap.sm → semantic.unit.space.component-layout.sm',
    'gap.md → semantic.unit.space.component-layout.md', 
    'gap.lg → semantic.unit.space.component-layout.lg',
    'gap.xl → semantic.unit.space.component-layout.xl'
  ]
} as const;

// 🔄 EXPORT STRUCTURE
export type PrimitiveSpacing = typeof primitiveSpacing;
export type SemanticSpacing = typeof semanticSpacing;
export type SpacingTokens = typeof spacing;
export type SpacingKey = keyof SpacingTokens;
export type ComponentSpacingTokens = typeof componentSpacing;
export type GapTokens = typeof gap;

// Export both primitive and semantic for different use cases
export { primitiveSpacing as figmaPrimitiveSpacing };
export { semanticSpacing as figmaSemanticSpacing };
export default spacing;
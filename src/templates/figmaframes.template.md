# {ComponentName} Component - Figma Frame History

## Component Information
- **Component Name:** {ComponentName}
- **Atomic Level:** {AtomicLevel}
- **Last Updated:** {LastUpdated}
- **Status:** {Status}
- **Current Version:** {Version}

## Current Figma Frames

### Default States
- **Frame ID:** `{FrameId}`
- **Frame URL:** [{ComponentName} - Default State]({FigmaUrl})
- **Description:** Default state of the {ComponentName} component
- **Status:** Active
- **Last Verified:** {LastVerified}

### Interactive States
- **Frame ID:** `{HoverFrameId}`
- **Frame URL:** [{ComponentName} - Hover State]({HoverFigmaUrl})
- **Description:** Hover state styling and behavior
- **Status:** Active

- **Frame ID:** `{FocusFrameId}`  
- **Frame URL:** [{ComponentName} - Focus State]({FocusFigmaUrl})
- **Description:** Focus state for keyboard navigation
- **Status:** Active

- **Frame ID:** `{DisabledFrameId}`
- **Frame URL:** [{ComponentName} - Disabled State]({DisabledFigmaUrl})
- **Description:** Disabled state styling
- **Status:** Active

### Size Variants
- **Frame ID:** `{SmallFrameId}`
- **Frame URL:** [{ComponentName} - Small Size]({SmallFigmaUrl})
- **Description:** Small size variant (sm)
- **Status:** Active

- **Frame ID:** `{MediumFrameId}`
- **Frame URL:** [{ComponentName} - Medium Size]({MediumFigmaUrl})
- **Description:** Medium size variant (md) - default
- **Status:** Active

- **Frame ID:** `{LargeFrameId}`
- **Frame URL:** [{ComponentName} - Large Size]({LargeFigmaUrl})
- **Description:** Large size variant (lg)
- **Status:** Active

### Color Variants
- **Frame ID:** `{PrimaryFrameId}`
- **Frame URL:** [{ComponentName} - Primary Variant]({PrimaryFigmaUrl})
- **Description:** Primary color variant
- **Status:** Active

- **Frame ID:** `{SecondaryFrameId}`
- **Frame URL:** [{ComponentName} - Secondary Variant]({SecondaryFigmaUrl})
- **Description:** Secondary color variant
- **Status:** Active

- **Frame ID:** `{OutlineFrameId}`
- **Frame URL:** [{ComponentName} - Outline Variant]({OutlineFigmaUrl})
- **Description:** Outline/border variant
- **Status:** Active

### Responsive Frames
- **Frame ID:** `{MobileFrameId}`
- **Frame URL:** [{ComponentName} - Mobile Layout]({MobileFigmaUrl})
- **Description:** Mobile responsive layout (< 768px)
- **Status:** Active

- **Frame ID:** `{TabletFrameId}`
- **Frame URL:** [{ComponentName} - Tablet Layout]({TabletFigmaUrl})
- **Description:** Tablet responsive layout (768px - 1024px)
- **Status:** Active

- **Frame ID:** `{DesktopFrameId}`
- **Frame URL:** [{ComponentName} - Desktop Layout]({DesktopFigmaUrl})
- **Description:** Desktop responsive layout (> 1024px)
- **Status:** Active

## Design Token Mappings

### Colors
| Token Path | Figma Token | Current Value | Usage |
|------------|-------------|---------------|-------|
| `colors.primary.500` | colors/primary/500 | {PrimaryColor} | Primary variant background |
| `colors.primary.600` | colors/primary/600 | {PrimaryHover} | Primary variant hover state |
| `colors.secondary.500` | colors/secondary/500 | {SecondaryColor} | Secondary variant background |
| `colors.neutral.700` | colors/neutral/700 | {TextColor} | Text color |
| `colors.neutral.300` | colors/neutral/300 | {BorderColor} | Border color for outline variant |

### Spacing
| Token Path | Figma Token | Current Value | Usage |
|------------|-------------|---------------|-------|
| `spacing.sm` | spacing/sm | {SpacingSmall} | Small size padding |
| `spacing.md` | spacing/md | {SpacingMedium} | Medium size padding |
| `spacing.lg` | spacing/lg | {SpacingLarge} | Large size padding |

### Typography
| Token Path | Figma Token | Current Value | Usage |
|------------|-------------|---------------|-------|
| `typography.bodyMedium` | typography/body/medium | {BodyFont} | Default text style |
| `typography.bodySmall` | typography/body/small | {SmallFont} | Small size text |
| `typography.bodyLarge` | typography/body/large | {LargeFont} | Large size text |

### Effects
| Token Path | Figma Token | Current Value | Usage |
|------------|-------------|---------------|-------|
| `effects.shadow.sm` | effects/shadow/sm | {ShadowSmall} | Default shadow |
| `effects.borderRadius.md` | effects/border-radius/md | {BorderRadius} | Corner radius |

## Build History

### Version 1.0.0 - Initial Implementation
**Date:** {InitialDate}
**Claude Code Session:** Initial component creation from Figma designs

**Changes Made:**
- ✅ Created component structure from Figma frames
- ✅ Extracted design tokens from Figma design system
- ✅ Implemented all variants (primary, secondary, outline)
- ✅ Implemented all sizes (sm, md, lg)
- ✅ Added responsive behavior for mobile, tablet, desktop
- ✅ Implemented accessibility features (ARIA, keyboard navigation)
- ✅ Added comprehensive test coverage
- ✅ Created Storybook stories with examples
- ✅ Generated SwiftUI equivalent component

**Extracted Design Values:**
- Padding: {ExtractedPadding}
- Font size: {ExtractedFontSize}  
- Border radius: {ExtractedBorderRadius}
- Colors: {ExtractedColors}

**Quality Audit Results:**
- ✅ Design Fidelity: 98%
- ✅ Token Usage: 100% (no hardcoded values)
- ✅ Accessibility: 100% (zero violations)
- ✅ Test Coverage: 95%
- ✅ Documentation: 100%
- ✅ Cross-Platform: 100% (React + SwiftUI consistency)

**Files Created:**
- `{ComponentName}.tsx` - Main component implementation
- `{ComponentName}.stories.ts` - Storybook stories and documentation
- `{ComponentName}.test.ts` - Comprehensive test suite
- `SwiftUI/{ComponentName}.swift` - SwiftUI equivalent component

---

### Future Updates
When Figma designs are updated, new versions will be added here with:
- **Change details** - What was modified in Figma
- **Token updates** - Any new or changed design tokens
- **Implementation changes** - Code modifications made
- **Audit results** - Quality assurance scores
- **Migration notes** - Any breaking changes or upgrade steps

## Component Statistics
- **Total Figma Frames:** {TotalFrames}
- **Active Frames:** {ActiveFrames}
- **Design Tokens Used:** {TokensUsed}
- **Last Figma Sync:** {LastSync}
- **Component Size:** {ComponentSize}
- **Test Coverage:** {TestCoverage}

## Related Components
- **Depends On:** {Dependencies}
- **Used By:** {UsedBy}
- **Similar Components:** {SimilarComponents}

## Notes
{AdditionalNotes}

---
*This file is automatically updated when component designs are refreshed from Figma.*
*Last updated by Claude Code: {LastUpdatedBy}*
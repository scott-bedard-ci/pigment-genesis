# Figma Frame Reference System

## Overview
Each component in the Pigment-Claude Design System now has its own `ComponentName.figmaframes.md` file that lives alongside the component code. This provides direct traceability between design specifications and implementation.

## Master Component Index

This section contains all Figma Frame Node IDs needed to rebuild each component from scratch.

### Button Component
**Status**: ✅ Implemented *(2025-05-23)*  
**Location**: `src/components/atoms/Button/`  
**Reference File**: `src/components/atoms/Button/Button.figmaframes.md`  
**Figma Node IDs Used**:
- Main Frame: `2949:3144` - "How to use" Button Frame *(Complete component specification)*
**Implementation**: Complete with all variants (Primary, Secondary, Tertiary), sizes (Small, Medium, Large), states (Enabled, Hover, Pressed, Disabled), and icon configurations. Includes comprehensive Storybook stories, tests, and responsive design.

### Avatar Component  
**Status**: ✅ Implemented *(2025-05-23)*  
**Location**: `src/components/atoms/Avatar/`  
**Reference File**: `src/components/atoms/Avatar/Avatar.figmaframes.md`  
**Figma Node IDs Used**:
- Main Frame: `7917:16222` - "How to use" Avatar Frame *(Complete alphabet colors and group variations)*
**Implementation**: Complete with all 27 letter-specific colors, individual and group configurations, image fallback support, and "+N" extras functionality. Includes comprehensive Storybook stories and tests.

### Checkbox Component
**Status**: ✅ Implemented *(2025-05-23)*  
**Location**: `src/components/atoms/Checkbox/`  
**Reference File**: `src/components/atoms/Checkbox/Checkbox.figmaframes.md`  
**Figma Node IDs Used**:
- Main Frame: `3364:3856` - "How to use" Checkbox Frame *(Complete state variations)*
**Implementation**: Complete with all states (Enabled, Selected, Disabled), indeterminate support, form integration, and responsive design. Includes comprehensive Storybook stories and tests.

## Component-Specific Reference Files

### Implemented Components
- **Button**: `src/components/atoms/Button/Button.figmaframes.md` *(2025-05-23)*
- **Avatar**: `src/components/atoms/Avatar/Avatar.figmaframes.md` *(2025-05-23)*
- **Checkbox**: `src/components/atoms/Checkbox/Checkbox.figmaframes.md` *(2025-05-23)*

## Template for New Component Figma References

When creating a new component, use this template structure:

```markdown
# [ComponentName] Component - Figma Frame Reference

## Frame Usage History

### YYYY-MM-DD - Initial Implementation
**Developer**: [Developer Name]  
**Figma Frames Used**:
1. **"[Frame Name]"**
   - **Node ID**: [Figma Node ID - e.g., 1234:5678]
   - **Purpose**: [What this frame shows/documents]
   - **Analysis Date**: [When frame was analyzed]
   - **What was extracted**: 
     - [Bullet points of specs/guidelines extracted]

**Summary of Changes**: [Brief description of what was implemented]

### YYYY-MM-DD - [Update Description] (for future updates)
**Developer**: [Developer Name]
**Figma Frames Used**: [List updated frames with Node IDs]
**Summary of Changes**: [What changed and why]

## Design Specifications Extracted
[Current specs based on frames]

## Implementation Notes
[Technical decisions and current status]

## Future Updates
[Process for handling design changes]
```

## Best Practices

### For New Components
1. **Add to Master Component Index** with all required Figma Node IDs
2. **Create figmaframes.md file** immediately after component implementation
3. **Record actual Figma Node IDs** from the MCP analysis
4. **Document extraction dates** to track freshness
5. **Include implementation summary** for context

### For Component Updates
1. **Update Master Component Index** if new frames are used
2. **Add new history entry** in component-specific file for each design-driven update
3. **Reference specific Node IDs** of changed frames
4. **Summarize what changed** and implementation impact
5. **Update design specifications** section if needed

### For Component Rebuilds
The Master Component Index provides all Node IDs needed to:
- Re-analyze original Figma frames
- Rebuild components from scratch
- Verify current implementation against design specs
- Onboard new developers with complete frame references

### Node ID Format
- Use actual Figma Node IDs (e.g., `1234:5678`)
- Include frame names for human readability
- Document both when available

## Migration Notes

The previous centralized tracking in this file has been moved to component-specific files for better maintainability and developer experience. This approach ensures:

- **Co-location**: Frame references live with component code
- **History Tracking**: Clear timeline of design changes
- **Traceability**: Direct link between Figma specs and implementation
- **Scalability**: Works for 50-100+ component design system

---

*This file serves as the index for the distributed Figma reference system.*
# Avatar Component - Figma Frame Reference

## Frame Usage History

### 2025-05-23 - Initial Implementation
**Developer**: Claude (Pigment-Genesis Design System Engineer)  
**Figma Frames Used**:
1. **"How to use" Avatar Frame**
   - **Node ID**: 7917:16222
   - **Purpose**: Complete avatar component specification with letter colors and group variations
   - **Analysis Date**: 2025-05-23
   - **What was extracted**: 
     - Complete alphabet color mapping (A-Z + #)
     - Individual avatar sizes: Small (26px), Large (40px)
     - Avatar group configurations: 2, 4, 5 avatars
     - Overlapping group layout with white borders
     - "Has extras" variant with +N indicator
     - Typography: Sharp Sans Medium, 11px, tracking 0.165px
     - Color specifications for all 27 letters/symbols
     - Group interaction notes (clickable but no hover/pressed states)

**Summary of Changes**: Complete avatar and avatar group implementation with all letter-specific colors, group variations, and extras functionality. Built with accessibility, responsive design, and image fallback support.

## Design Specifications Extracted

### Color Mapping (Letter-Specific)
- **A**: `#ff876e` - Coral orange
- **B**: `#ffc3be` - Light coral  
- **C**: `#b467c8` - Purple
- **D**: `#caa2dd` - Light purple
- **E**: `#52c5b8` - Teal
- **F**: `#7addd4` - Light teal
- **G**: `#a0e9e3` - Pale teal
- **H**: `#6f9bf5` - Blue
- **I**: `#9abdfb` - Light blue
- **J**: `#aeaeae` - Gray
- **K**: `#c8c8c8` - Light gray
- **L**: `#ffdc1e` - Yellow
- **M**: `#ffe881` - Light yellow
- **N**: `#cbdffe` - Pale blue
- **O**: `#f38289` - Pink
- **P**: `#76efbb` - Green
- **Q**: `#9ff6d3` - Light green
- **R**: `#dfcbee` - Lavender
- **S**: `#5abc74` - Forest green
- **T**: `#ffc724` - Golden yellow
- **U**: `#ffe586` - Pale yellow
- **V**: `#ffaff7` - Hot pink
- **W**: `#cdf2f0` - Mint
- **X**: `#eba0a7` - Rose
- **Y**: `#cefbea` - Pale mint
- **Z**: `#fff4c0` - Cream
- **# (+N)**: `#e3e3e3` - Neutral gray

### Typography Specifications
- **Font Family**: Sharp Sans Medium
- **Font Size**: 11px
- **Line Height**: 14px
- **Letter Spacing**: 0.165px
- **Text Color**: `rgba(0,0,0,0.86)` - High contrast

### Size Specifications
- **Small Avatar**: 26px diameter (default)
- **Large Avatar**: 40px diameter
- **Border Radius**: 999px (perfect circle)
- **Group Border**: 1px white border for overlapping

### Layout & Spacing
- **Group Overlap**: -3px margin-right for overlapping effect
- **Group Padding**: pl-0 pr-[3px] py-0
- **Z-Index Stacking**: Decreasing z-index for proper overlap
- **Group Spacing**: 6px gap between rows

### Responsive Behavior
- **Mobile Enhancement**: Larger touch targets where appropriate
- **Desktop Scaling**: md:w-[28px] md:h-[28px] for small, md:w-[48px] md:h-[48px] for large

## Implementation Notes

### Component Architecture
- **Base Avatar**: Avatar.tsx with letter-to-color mapping
- **Avatar Group**: AvatarGroup.tsx with overlapping layout and extras support
- **Image Support**: Photo avatars with automatic fallback to letters
- **Accessibility**: Proper ARIA labels and screen reader support

### Technical Decisions
- **Color Mapping**: Static object for letter-to-color lookups
- **Overlap Effect**: CSS negative margins with z-index stacking
- **Image Fallback**: Error handling for failed image loads
- **Group Logic**: Dynamic extras calculation based on max prop

### Usage Guidelines from Figma
- **Individual Use**: Profile pictures, user identification in lists
- **Group Use**: Team members, collaborators, participant lists
- **Interaction**: Groups can be clicked but have no hover/pressed states
- **Extras Indicator**: Shows "+N" when avatar count exceeds max display

### Color System Rationale
- **Visual Variation**: Each letter has unique color for group distinctiveness
- **Accessibility**: High contrast text on all background colors
- **Consistency**: Deterministic color assignment based on first letter
- **Fallback**: Neutral gray for special characters and overflow

## Future Updates

### Process for Design Changes
1. **Update Figma Frame Reference**: Record new Node ID if frame changes
2. **Extract New Color Mappings**: Update letter-to-color specifications
3. **Update Component Implementation**: Apply new color values and sizing
4. **Update Tests**: Ensure tests cover new color mappings
5. **Update SwiftUI Equivalent**: Sync iOS component with React changes

### Maintainability
- **Design Token Sync**: All colors traceable back to Figma specifications
- **Component Tests**: Coverage for all letter variations and group functionality
- **Documentation**: Storybook stories show complete color palette
- **Image Fallback**: Robust error handling maintains consistency
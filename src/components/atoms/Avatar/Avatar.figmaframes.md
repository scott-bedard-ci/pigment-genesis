# Avatar Component - Figma Frame Documentation

## Captured Figma Node IDs

### Development Requirements Frame
- **Node ID**: `8547_17209`
- **Description**: Complete development requirements and specifications
- **Content**: Avatar requirements, background fill rules, avatar group specifications, number avatar behavior, tooltip functionality

### How to Use Guide Frame  
- **Node ID**: `7917_16222`
- **Description**: Comprehensive usage guide with component interface and examples
- **Content**: Avatar component with full alphabet support, size variants (Small/Large), avatar groups with various configurations

### Single Letter Examples
- **Node ID**: Not explicitly captured (minimal code extraction)
- **Description**: Examples of individual avatars with single letters A-Z plus +2
- **Content**: Shows both small and large sizes with all color variations

### Avatar Group Examples
- **Node ID**: Not explicitly captured (minimal code extraction)  
- **Description**: Avatar grouping examples with different configurations
- **Content**: Groups of 2, 3, 4, and 5 avatars, with and without "+n" functionality

### Photo Avatar Examples
- **Node ID**: Not explicitly captured (minimal code extraction)
- **Description**: Real photo examples showing image-based avatars
- **Content**: Various portrait photos demonstrating image support

## Key Design Specifications Extracted

### Typography
- **Font Family**: `Sharp_Sans:Medium` - **🚨 CRITICAL: Font must be installed**
- **Font Size**: 11px (Small), larger for Large variant
- **Font Weight**: Medium (500)
- **Letter Spacing**: 0.165px
- **Text Color**: `rgba(0,0,0,0.86)` (translates to `#181818` as specified in requirements)

### Sizing
- **Small Avatar**: 26px × 26px
- **Large Avatar**: Larger size (to be determined from additional analysis)
- **Border Radius**: 999px (perfect circle)
- **Padding**: 8px internal padding

### Avatar Group Specifications
- **Spacing**: -3px overlap between avatars
- **Border**: 1px white stroke on each avatar in groups (not on single avatars)
- **Plus Avatar**: Always `#E3E3E3` background, never random color

### Color System
- Each letter has a specific background color for deterministic but "random" appearance
- Same account/email always resolves to same color
- Equal distribution across all available colors

## Font Verification Required
Before proceeding with component development, verify that `Sharp Sans` font family is installed on the system.
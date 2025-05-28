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

### Single Letter Examples - Large Avatar
- **Node ID**: `8541_17041` **✅ CAPTURED FROM FIGMA**
- **Description**: Large avatar with letter "G" example
- **Content**: Shows large size avatar with teal background (`#a0e9e3`) and precise measurements

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
- **Font Family**: `Sharp_Sans:Medium` - **✅ CONFIRMED: Font installed and verified**
- **Small Avatar Text**:
  - Font Size: `11px` **✅ EXTRACTED FROM FIGMA**
  - Line Height: `14px` **✅ EXTRACTED FROM FIGMA** 
  - Letter Spacing: `0.165px` **✅ EXTRACTED FROM FIGMA**
  - Font Weight: Medium (500) **✅ EXTRACTED FROM FIGMA**
- **Large Avatar Text**:
  - Font Size: `14px` **✅ EXTRACTED FROM FIGMA**
  - Line Height: `0` (leading-[0]) **✅ EXTRACTED FROM FIGMA**
  - Letter Spacing: `0.165px` **✅ ASSUMED SAME AS SMALL**
  - Font Weight: Medium (500) **✅ EXTRACTED FROM FIGMA**
- **Text Color**: `rgba(0,0,0,0.86)` → `#181818` **✅ EXTRACTED FROM FIGMA**

### Sizing
- **Small Avatar**: `26px × 26px` **✅ EXTRACTED FROM FIGMA**
- **Large Avatar**: `size-full` (inherits container size) **✅ EXTRACTED FROM FIGMA**
- **Border Radius**: `999px` (perfect circle) **✅ EXTRACTED FROM FIGMA**
- **Small Avatar Padding**: `8px` internal padding **✅ EXTRACTED FROM FIGMA**
- **Large Avatar Padding**: `8px` internal padding **✅ EXTRACTED FROM FIGMA**

### Avatar Group Specifications
- **Spacing**: `-3px` overlap between avatars **✅ EXTRACTED FROM FIGMA**
- **Border**: `1px` white stroke on each avatar in groups **✅ EXTRACTED FROM FIGMA**
- **Plus Avatar**: Always `#E3E3E3` background, never random color **✅ EXTRACTED FROM FIGMA**

### Color System - **✅ FULLY EXTRACTED FROM FIGMA**
- **26 Deterministic Colors**: All extracted from Figma color examples
- **Text Color**: `#181818` for all avatars **✅ EXTRACTED FROM FIGMA**
- **Plus Background**: `#E3E3E3` **✅ EXTRACTED FROM FIGMA**
- **Color Assignment**: Deterministic hash-based assignment **✅ IMPLEMENTED**

## ✅ LARGE AVATAR SPECIFICATIONS EXTRACTED

### **LARGE AVATAR MEASUREMENTS CAPTURED:**
1. **Large avatar structure**: Uses `size-full` to inherit container dimensions **✅ EXTRACTED**
2. **Large avatar font size**: `14px` **✅ EXTRACTED FROM FIGMA** 
3. **Large avatar line height**: `0` (leading-[0]) **✅ EXTRACTED FROM FIGMA**
4. **Large avatar internal padding**: `8px` (same as small) **✅ EXTRACTED FROM FIGMA**
5. **Layout structure**: Flexbox centering with proper content alignment **✅ EXTRACTED**

### **NEW FINDINGS:**
- Large avatars use the same padding as small avatars (`8px`)
- Font size is `14px` for large avatars (not 16px as estimated)
- Line height is set to `0` with Tailwind class `leading-[0]`
- Container uses `size-full` for responsive sizing

## Font Verification Status
✅ Sharp Sans font family verified as installed and working correctly.
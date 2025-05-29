# Input Component - Figma Frame Documentation

## Captured Figma Frames & Node IDs

### Frame 1: Input Field Instructions & Component Variants
- **Description**: Complete instructions page showing all Input field variants, states, and usage guidelines
- **Node ID**: `4139_6292` (Instructions frame)
- **Key Sub-components**:
  - Input Field Component: `4139_6148` (Default state)
  - Focused state: `4139_6165`
  - Error state: `4139_6182` 
  - Disabled state: `4139_6203`
  - Entered text state: `4139_6220`
  - Alert Warning Icon: `4139_6199`

### Frame 2: Input States Grid Layout
- **Description**: Grid showing all input field states side by side
- **Node ID**: Not explicitly captured in response (secondary frame)
- **Shows**: Default, Focused, Disabled, Error states in 2x2 grid

### Frame 3: Do's and Don'ts Guidelines
- **Description**: Usage guidelines with do's and don'ts for Input component
- **Node ID**: `4139_6343`
- **Sub-components**:
  - Do's section: `4139_6344`
  - Don'ts section: `4139_6345`

## Design Token Variables Identified

From Figma extraction, these design tokens were identified:

### Colors
- `neutral/text/primary`: #000000db (87% opacity black)
- `interactive/text/placeholder`: #00000047 (28% opacity black)  
- `neutral/background/primary`: #ffffff
- `neutral/border/strong`: #00000069 (41% opacity black)
- `neutral/text/secondary`: #00000091 (57% opacity black)
- `activity/focus/border`: #1e39d2 (blue focus border)
- `interactive/background/weak`: #0000000a (4% opacity black)
- `interactive/border/disabled`: #0000002e (18% opacity black)
- `feedback/dangerBold`: #da1e28 (error border color)
- `feedback/dangerAccessible`: #cc1c25 (error text color)
- `interactive/icon/subtle`: #00000091 (57% opacity black)
- `neutral/icon/strong`: #000000db (87% opacity black)
- `primitives/color/neutral/gray-000`: #ffffff

### Layout & Sizing
- `radius/field`: 4px (border radius for input fields)
- Default input height: 40px (min-h-10)
- Padding: 13px horizontal, 9px vertical
- Label-input gap: 4px (gap-1)
- Icon spacing: 6px (gap-1.5)

### Typography
- Font family: 'Sharp_Sans:Medium' (all text)
- Font size: 14px (all input text and labels)
- Font weight: Medium (500)
- Line height: 1.25 for labels, 20px for help text

## Component States Identified

1. **Default**: White background, gray border
2. **Focused**: Blue border (#1e39d2), white background  
3. **Disabled**: Light gray background (#0000000a), very light border
4. **Error**: Red border (#da1e28), white background, error text with warning icon
5. **Entered**: Same as default but with entered text styling

## Interactive Elements

- **Error State**: Includes warning triangle icon with error message
- **Label**: Optional, can be hidden via `showLabel` prop
- **Help Text**: Optional additional text below input
- **Icons**: Left and right icon support
- **Prefix/Suffix**: Text elements before/after input text
- **Checkbox**: Optional checkbox below input
- **Spacer**: 12px spacing element for stacking inputs

## Notes
- Component uses Sharp Sans Medium font throughout
- All measurements extracted directly from Figma
- Error state includes SVG warning icon
- Component supports responsive design patterns
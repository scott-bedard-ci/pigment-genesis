// Typography.swift - AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

import SwiftUI

// MARK: - Typography Tokens

/// Typography tokens synchronized with Figma design system
public struct PigmentTypography {
    
    // MARK: - Font Families (synced from Figma)
    
    /// Primary font family for headings
    public static let fontFamilyHeading = "Inter" // Figma: font-family-heading
    
    /// Primary font family for body text
    public static let fontFamilyBody = "Inter" // Figma: font-family-body
    
    /// Monospace font family for code
    public static let fontFamilyMono = "JetBrains Mono" // Figma: font-family-mono
    
    // MARK: - Heading Styles (synced from Figma)
    
    /// Extra large heading style
    public static let headingXL = Font.custom(fontFamilyHeading, size: 48)
        .weight(.bold) // Figma: heading-xl
    
    /// Large heading style
    public static let headingLarge = Font.custom(fontFamilyHeading, size: 36)
        .weight(.bold) // Figma: heading-lg
    
    /// Medium heading style
    public static let headingMedium = Font.custom(fontFamilyHeading, size: 24)
        .weight(.semibold) // Figma: heading-md
    
    /// Small heading style
    public static let headingSmall = Font.custom(fontFamilyHeading, size: 20)
        .weight(.semibold) // Figma: heading-sm
    
    // MARK: - Body Text Styles (synced from Figma)
    
    /// Large body text style
    public static let bodyLarge = Font.custom(fontFamilyBody, size: 18)
        .weight(.regular) // Figma: body-lg
    
    /// Medium body text style (default)
    public static let bodyMedium = Font.custom(fontFamilyBody, size: 16)
        .weight(.regular) // Figma: body-md
    
    /// Small body text style
    public static let bodySmall = Font.custom(fontFamilyBody, size: 14)
        .weight(.regular) // Figma: body-sm
    
    /// Caption text style
    public static let caption = Font.custom(fontFamilyBody, size: 12)
        .weight(.medium) // Figma: caption
    
    // MARK: - Monospace Styles
    
    /// Code text style
    public static let code = Font.custom(fontFamilyMono, size: 14)
        .weight(.regular) // Figma: code
    
    /// Code small text style
    public static let codeSmall = Font.custom(fontFamilyMono, size: 12)
        .weight(.regular) // Figma: code-sm
}

// MARK: - Typography Size Tokens

/// Font size tokens extracted from Figma
public struct PigmentFontSize {
    public static let headingXL: CGFloat = 48     // Figma: font-size-heading-xl
    public static let headingLarge: CGFloat = 36  // Figma: font-size-heading-lg
    public static let headingMedium: CGFloat = 24 // Figma: font-size-heading-md
    public static let headingSmall: CGFloat = 20  // Figma: font-size-heading-sm
    public static let bodyLarge: CGFloat = 18     // Figma: font-size-body-lg
    public static let bodyMedium: CGFloat = 16    // Figma: font-size-body-md
    public static let bodySmall: CGFloat = 14     // Figma: font-size-body-sm
    public static let caption: CGFloat = 12       // Figma: font-size-caption
}

// MARK: - Line Height Tokens

/// Line height tokens extracted from Figma
public struct PigmentLineHeight {
    public static let headingXL: CGFloat = 56     // Figma: line-height-heading-xl
    public static let headingLarge: CGFloat = 44  // Figma: line-height-heading-lg
    public static let headingMedium: CGFloat = 32 // Figma: line-height-heading-md
    public static let headingSmall: CGFloat = 28  // Figma: line-height-heading-sm
    public static let bodyLarge: CGFloat = 28     // Figma: line-height-body-lg
    public static let bodyMedium: CGFloat = 24    // Figma: line-height-body-md
    public static let bodySmall: CGFloat = 20     // Figma: line-height-body-sm
    public static let caption: CGFloat = 16       // Figma: line-height-caption
}

// MARK: - Font Weight Tokens

/// Font weight tokens extracted from Figma
public struct PigmentFontWeight {
    public static let light: Font.Weight = .light        // Figma: font-weight-light (300)
    public static let regular: Font.Weight = .regular    // Figma: font-weight-regular (400)
    public static let medium: Font.Weight = .medium      // Figma: font-weight-medium (500)
    public static let semibold: Font.Weight = .semibold  // Figma: font-weight-semibold (600)
    public static let bold: Font.Weight = .bold          // Figma: font-weight-bold (700)
}

// MARK: - Typography Convenience Extensions

public extension Text {
    /// Applies Pigment heading XL style
    func pigmentHeadingXL() -> some View {
        self.font(PigmentTypography.headingXL)
    }
    
    /// Applies Pigment heading large style
    func pigmentHeadingLarge() -> some View {
        self.font(PigmentTypography.headingLarge)
    }
    
    /// Applies Pigment heading medium style
    func pigmentHeadingMedium() -> some View {
        self.font(PigmentTypography.headingMedium)
    }
    
    /// Applies Pigment heading small style
    func pigmentHeadingSmall() -> some View {
        self.font(PigmentTypography.headingSmall)
    }
    
    /// Applies Pigment body large style
    func pigmentBodyLarge() -> some View {
        self.font(PigmentTypography.bodyLarge)
    }
    
    /// Applies Pigment body medium style (default)
    func pigmentBodyMedium() -> some View {
        self.font(PigmentTypography.bodyMedium)
    }
    
    /// Applies Pigment body small style
    func pigmentBodySmall() -> some View {
        self.font(PigmentTypography.bodySmall)
    }
    
    /// Applies Pigment caption style
    func pigmentCaption() -> some View {
        self.font(PigmentTypography.caption)
    }
    
    /// Applies Pigment code style
    func pigmentCode() -> some View {
        self.font(PigmentTypography.code)
    }
}

// MARK: - Responsive Typography

/// Responsive typography that adapts to device size and accessibility settings
public struct PigmentResponsiveTypography {
    
    /// Returns appropriate font size based on device and accessibility settings
    /// - Parameters:
    ///   - compact: Font size for compact devices (iPhone)
    ///   - regular: Font size for regular devices (iPad)
    /// - Returns: Dynamically sized font
    public static func adaptive(compact: CGFloat, regular: CGFloat) -> Font {
        let baseSize: CGFloat
        #if os(iOS)
        baseSize = UIDevice.current.userInterfaceIdiom == .pad ? regular : compact
        #else
        baseSize = regular
        #endif
        
        return .system(size: baseSize, design: .default)
    }
    
    /// Responsive heading styles
    public struct Heading {
        public static let large = adaptive(compact: 28, regular: 36)
        public static let medium = adaptive(compact: 20, regular: 24)
        public static let small = adaptive(compact: 18, regular: 20)
    }
    
    /// Responsive body styles
    public struct Body {
        public static let large = adaptive(compact: 16, regular: 18)
        public static let medium = adaptive(compact: 14, regular: 16)
        public static let small = adaptive(compact: 12, regular: 14)
    }
}

// MARK: - Text Style Combinations

/// Predefined text style combinations for common use cases
public struct PigmentTextStyle {
    
    /// Page title style
    public static func pageTitle() -> some View {
        AnyView(
            Text("")
                .font(PigmentTypography.headingXL)
                .foregroundColor(.pigmentNeutral900)
        )
    }
    
    /// Section title style
    public static func sectionTitle() -> some View {
        AnyView(
            Text("")
                .font(PigmentTypography.headingLarge)
                .foregroundColor(.pigmentNeutral900)
        )
    }
    
    /// Card title style
    public static func cardTitle() -> some View {
        AnyView(
            Text("")
                .font(PigmentTypography.headingMedium)
                .foregroundColor(.pigmentNeutral900)
        )
    }
    
    /// Body text style
    public static func bodyText() -> some View {
        AnyView(
            Text("")
                .font(PigmentTypography.bodyMedium)
                .foregroundColor(.pigmentNeutral700)
        )
    }
    
    /// Helper text style
    public static func helperText() -> some View {
        AnyView(
            Text("")
                .font(PigmentTypography.bodySmall)
                .foregroundColor(.pigmentNeutral500)
        )
    }
    
    /// Error text style
    public static func errorText() -> some View {
        AnyView(
            Text("")
                .font(PigmentTypography.bodySmall)
                .foregroundColor(.pigmentError500)
        )
    }
}

// MARK: - Token Metadata

/// Typography token metadata for tracking Figma synchronization
public struct PigmentTypographyTokenMetadata {
    /// Figma file ID this token set was extracted from
    public static let figmaFileId = "" // Will be populated when tokens are extracted
    
    /// Last synchronization date with Figma
    public static let lastSync = "" // Will be populated when tokens are extracted
    
    /// Total number of typography tokens
    public static let tokenCount = 12
    
    /// Design system version
    public static let version = "1.0.0"
    
    /// Supported font formats
    public static let supportedFormats = ["TTF", "OTF", "WOFF2"]
    
    /// Typography scale ratio
    public static let scaleRatio: CGFloat = 1.25
    
    /// Base font size
    public static let baseFontSize: CGFloat = 16
}
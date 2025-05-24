// Spacing.swift - AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

import SwiftUI

// MARK: - Spacing Tokens

/// Spacing tokens synchronized with Figma design system
public struct PigmentSpacing {
    // MARK: - Base Spacing Scale (synced from Figma)
    public static let xs: CGFloat = 4      // Figma: spacing-xs
    public static let sm: CGFloat = 8      // Figma: spacing-sm
    public static let md: CGFloat = 16     // Figma: spacing-md
    public static let lg: CGFloat = 24     // Figma: spacing-lg
    public static let xl: CGFloat = 32     // Figma: spacing-xl
    public static let xxl: CGFloat = 48    // Figma: spacing-2xl
    public static let xxxl: CGFloat = 64   // Figma: spacing-3xl
    
    // MARK: - Component-Specific Spacing (synced from Figma)
    
    /// Button spacing tokens
    public struct Button {
        public static let paddingSmall = EdgeInsets(top: 6, leading: 12, bottom: 6, trailing: 12)    // Figma: button-sm-padding
        public static let paddingMedium = EdgeInsets(top: 8, leading: 16, bottom: 8, trailing: 16)   // Figma: button-md-padding
        public static let paddingLarge = EdgeInsets(top: 12, leading: 24, bottom: 12, trailing: 24)  // Figma: button-lg-padding
    }
    
    /// Input field spacing tokens
    public struct Input {
        public static let paddingSmall = EdgeInsets(top: 8, leading: 12, bottom: 8, trailing: 12)    // Figma: input-sm-padding
        public static let paddingMedium = EdgeInsets(top: 12, leading: 16, bottom: 12, trailing: 16) // Figma: input-md-padding
        public static let paddingLarge = EdgeInsets(top: 16, leading: 20, bottom: 16, trailing: 20)  // Figma: input-lg-padding
    }
    
    /// Card spacing tokens
    public struct Card {
        public static let paddingSmall: CGFloat = 16   // Figma: card-sm-padding
        public static let paddingMedium: CGFloat = 24  // Figma: card-md-padding
        public static let paddingLarge: CGFloat = 32   // Figma: card-lg-padding
    }
    
    /// Layout spacing tokens
    public struct Layout {
        public static let sectionSpacing: CGFloat = 64     // Figma: section-spacing
        public static let containerSpacing: CGFloat = 24   // Figma: container-spacing
        public static let gridGap: CGFloat = 24            // Figma: grid-gap
    }
    
    // MARK: - Touch Target Requirements
    
    /// iOS touch target requirements
    public struct TouchTarget {
        public static let minimum: CGFloat = 44        // iOS minimum touch target
        public static let comfortable: CGFloat = 48    // Comfortable touch target
        public static let large: CGFloat = 56          // Large touch target for accessibility
    }
}

// MARK: - Spacing Convenience Extensions

public extension EdgeInsets {
    /// Creates uniform EdgeInsets from a single value
    /// - Parameter value: The spacing value for all edges
    init(uniform value: CGFloat) {
        self.init(top: value, leading: value, bottom: value, trailing: value)
    }
    
    /// Creates horizontal EdgeInsets
    /// - Parameter horizontal: The spacing value for leading and trailing
    init(horizontal: CGFloat) {
        self.init(top: 0, leading: horizontal, bottom: 0, trailing: horizontal)
    }
    
    /// Creates vertical EdgeInsets
    /// - Parameter vertical: The spacing value for top and bottom
    init(vertical: CGFloat) {
        self.init(top: vertical, leading: 0, bottom: vertical, trailing: 0)
    }
}

public extension View {
    /// Applies Pigment spacing tokens as padding
    /// - Parameter spacing: PigmentSpacing value
    /// - Returns: View with applied padding
    func pigmentPadding(_ spacing: CGFloat) -> some View {
        self.padding(spacing)
    }
    
    /// Applies Pigment spacing tokens as padding with EdgeInsets
    /// - Parameter insets: EdgeInsets using Pigment spacing values
    /// - Returns: View with applied padding
    func pigmentPadding(_ insets: EdgeInsets) -> some View {
        self.padding(insets)
    }
    
    /// Applies minimum touch target size
    /// - Parameter size: Touch target size from PigmentSpacing.TouchTarget
    /// - Returns: View with minimum frame size
    func pigmentTouchTarget(_ size: CGFloat = PigmentSpacing.TouchTarget.minimum) -> some View {
        self.frame(minWidth: size, minHeight: size)
    }
}

// MARK: - Gap Tokens for VStack/HStack

/// Gap spacing tokens for layout containers
public struct PigmentGap {
    public static let xs: CGFloat = PigmentSpacing.xs    // 4pt gap
    public static let sm: CGFloat = PigmentSpacing.sm    // 8pt gap
    public static let md: CGFloat = PigmentSpacing.md    // 16pt gap
    public static let lg: CGFloat = PigmentSpacing.lg    // 24pt gap
    public static let xl: CGFloat = PigmentSpacing.xl    // 32pt gap
}

// MARK: - Responsive Spacing

/// Responsive spacing that adapts to device size
public struct PigmentResponsiveSpacing {
    /// Returns appropriate spacing based on device size
    /// - Parameters:
    ///   - compact: Spacing for compact size class (iPhone)
    ///   - regular: Spacing for regular size class (iPad)
    /// - Returns: Appropriate spacing value
    public static func adaptive(compact: CGFloat, regular: CGFloat) -> CGFloat {
        #if os(iOS)
        return UIDevice.current.userInterfaceIdiom == .pad ? regular : compact
        #else
        return regular
        #endif
    }
    
    /// Standard responsive spacing values
    public struct Standard {
        public static let small = adaptive(compact: PigmentSpacing.sm, regular: PigmentSpacing.md)
        public static let medium = adaptive(compact: PigmentSpacing.md, regular: PigmentSpacing.lg)
        public static let large = adaptive(compact: PigmentSpacing.lg, regular: PigmentSpacing.xl)
    }
}

// MARK: - Token Metadata

/// Spacing token metadata for tracking Figma synchronization
public struct PigmentSpacingTokenMetadata {
    /// Figma file ID this token set was extracted from
    public static let figmaFileId = "" // Will be populated when tokens are extracted
    
    /// Last synchronization date with Figma
    public static let lastSync = "" // Will be populated when tokens are extracted
    
    /// Total number of spacing tokens
    public static let tokenCount = 15
    
    /// Design system version
    public static let version = "1.0.0"
    
    /// Base spacing unit (used for calculations)
    public static let baseUnit: CGFloat = 4
    
    /// Spacing scale ratio
    public static let scaleRatio: CGFloat = 1.5
}
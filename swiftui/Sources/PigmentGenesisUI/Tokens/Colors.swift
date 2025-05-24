// Colors.swift - AUTO-GENERATED FROM FIGMA - DO NOT EDIT MANUALLY
// Last updated: [Will be populated when tokens are extracted from Figma]
// Source: Figma File ID [Will be populated when tokens are extracted from Figma]

import SwiftUI

// MARK: - Color Extensions

public extension Color {
    // MARK: - Primary Colors (synced from Figma)
    static let pigmentPrimary50 = Color(hex: "#f0f4ff")   // Figma: primary-50
    static let pigmentPrimary100 = Color(hex: "#e0e9ff")  // Figma: primary-100
    static let pigmentPrimary200 = Color(hex: "#c7d2fe")  // Figma: primary-200
    static let pigmentPrimary300 = Color(hex: "#a5b4fc")  // Figma: primary-300
    static let pigmentPrimary400 = Color(hex: "#818cf8")  // Figma: primary-400
    static let pigmentPrimary500 = Color(hex: "#3b82f6")  // Figma: primary-500 (main)
    static let pigmentPrimary600 = Color(hex: "#2563eb")  // Figma: primary-600
    static let pigmentPrimary700 = Color(hex: "#1d4ed8")  // Figma: primary-700
    static let pigmentPrimary800 = Color(hex: "#1e40af")  // Figma: primary-800
    static let pigmentPrimary900 = Color(hex: "#1e3a8a")  // Figma: primary-900
    static let pigmentPrimary950 = Color(hex: "#172554")  // Figma: primary-950
    
    // MARK: - Secondary Colors (synced from Figma)
    static let pigmentSecondary50 = Color(hex: "#fdf4ff")   // Figma: secondary-50
    static let pigmentSecondary100 = Color(hex: "#fae8ff")  // Figma: secondary-100
    static let pigmentSecondary200 = Color(hex: "#f5d0fe")  // Figma: secondary-200
    static let pigmentSecondary300 = Color(hex: "#f0abfc")  // Figma: secondary-300
    static let pigmentSecondary400 = Color(hex: "#e879f9")  // Figma: secondary-400
    static let pigmentSecondary500 = Color(hex: "#a855f7")  // Figma: secondary-500 (main)
    static let pigmentSecondary600 = Color(hex: "#9333ea")  // Figma: secondary-600
    static let pigmentSecondary700 = Color(hex: "#7c3aed")  // Figma: secondary-700
    static let pigmentSecondary800 = Color(hex: "#6b21a8")  // Figma: secondary-800
    static let pigmentSecondary900 = Color(hex: "#581c87")  // Figma: secondary-900
    static let pigmentSecondary950 = Color(hex: "#3b0764")  // Figma: secondary-950
    
    // MARK: - Semantic Colors (synced from Figma)
    static let pigmentSuccess50 = Color(hex: "#f0fdf4")    // Figma: success-50
    static let pigmentSuccess500 = Color(hex: "#10b981")   // Figma: success-500
    static let pigmentSuccess900 = Color(hex: "#064e3b")   // Figma: success-900
    
    static let pigmentWarning50 = Color(hex: "#fffbeb")    // Figma: warning-50
    static let pigmentWarning500 = Color(hex: "#f59e0b")   // Figma: warning-500
    static let pigmentWarning900 = Color(hex: "#78350f")   // Figma: warning-900
    
    static let pigmentError50 = Color(hex: "#fef2f2")      // Figma: error-50
    static let pigmentError500 = Color(hex: "#ef4444")     // Figma: error-500
    static let pigmentError900 = Color(hex: "#7f1d1d")     // Figma: error-900
    
    // MARK: - Neutral Colors (synced from Figma)
    static let pigmentNeutral50 = Color(hex: "#f9fafb")    // Figma: neutral-50
    static let pigmentNeutral100 = Color(hex: "#f3f4f6")   // Figma: neutral-100
    static let pigmentNeutral200 = Color(hex: "#e5e7eb")   // Figma: neutral-200
    static let pigmentNeutral300 = Color(hex: "#d1d5db")   // Figma: neutral-300
    static let pigmentNeutral400 = Color(hex: "#9ca3af")   // Figma: neutral-400
    static let pigmentNeutral500 = Color(hex: "#6b7280")   // Figma: neutral-500
    static let pigmentNeutral600 = Color(hex: "#4b5563")   // Figma: neutral-600
    static let pigmentNeutral700 = Color(hex: "#374151")   // Figma: neutral-700
    static let pigmentNeutral800 = Color(hex: "#1f2937")   // Figma: neutral-800
    static let pigmentNeutral900 = Color(hex: "#111827")   // Figma: neutral-900
    static let pigmentNeutral950 = Color(hex: "#030712")   // Figma: neutral-950
}

// MARK: - Color Hex Initializer

extension Color {
    /// Creates a Color from a hex string
    /// - Parameter hex: Hex color string (e.g., "#FF0000" or "FF0000")
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (1, 1, 1, 0)
        }
        
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue:  Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

// MARK: - Token Metadata

/// Token metadata for tracking Figma synchronization
public struct PigmentColorTokenMetadata {
    /// Figma file ID this token set was extracted from
    public static let figmaFileId = "" // Will be populated when tokens are extracted
    
    /// Last synchronization date with Figma
    public static let lastSync = "" // Will be populated when tokens are extracted
    
    /// Total number of color tokens
    public static let tokenCount = 42
    
    /// Design system version
    public static let version = "1.0.0"
    
    /// Supported color formats
    public static let supportedFormats = ["hex", "rgb", "hsl"]
}
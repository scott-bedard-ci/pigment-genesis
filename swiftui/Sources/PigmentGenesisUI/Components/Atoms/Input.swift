import SwiftUI

/// Input Field Component
/// 
/// A dynamic input component that can be used in forms or general text areas.
/// SwiftUI equivalent of the React Input component.
///
/// Features:
/// - Multiple states: default, focused, disabled, error
/// - Optional label with required indicator
/// - Error messages with warning icon
/// - Help text support
/// - Configurable spacing for stacking
///
/// Example:
/// ```swift
/// Input(
///     label: "Email Address",
///     text: $email,
///     placeholder: "Enter your email",
///     isRequired: true
/// )
/// 
/// Input(
///     label: "Price",
///     text: $price,
///     placeholder: "99.00",
///     prefix: "$",
///     suffix: "USD"
/// )
/// ```
public struct Input: View {
    // MARK: - Properties
    
    /// Input state
    public enum State {
        case `default`
        case focused
        case disabled
        case error
    }
    
    /// Label text for the input
    public let label: String
    
    /// Binding to the text value
    @Binding public var text: String
    
    /// Placeholder text
    public let placeholder: String
    
    /// Input state
    public let state: State
    
    /// Show or hide the label
    public let showLabel: Bool
    
    /// Error message to display
    public let error: String?
    
    /// Help text to display below input
    public let helpText: String?
    
    /// Show help text below input
    public let showHelpText: Bool
    
    /// Mark field as required
    public let isRequired: Bool
    
    /// Prefix text before input value
    public let prefix: String?
    
    /// Suffix text after input value
    public let suffix: String?
    
    /// Show spacing below component for stacking
    public let spacer: Bool
    
    /// Focus state for managing keyboard focus
    @FocusState private var isFocused: Bool
    
    // MARK: - Initializer
    
    public init(
        label: String = "Label",
        text: Binding<String>,
        placeholder: String = "Text",
        state: State = .default,
        showLabel: Bool = true,
        error: String? = nil,
        helpText: String? = nil,
        showHelpText: Bool = false,
        isRequired: Bool = false,
        prefix: String? = nil,
        suffix: String? = nil,
        spacer: Bool = true
    ) {
        self.label = label
        self._text = text
        self.placeholder = placeholder
        self.state = state
        self.showLabel = showLabel
        self.error = error
        self.helpText = helpText
        self.showHelpText = showHelpText
        self.isRequired = isRequired
        self.prefix = prefix
        self.suffix = suffix
        self.spacer = spacer
    }
    
    // MARK: - Computed Properties
    
    /// Determine actual state based on props
    private var actualState: State {
        if state == .disabled { return .disabled }
        if error != nil { return .error }
        if isFocused { return .focused }
        return state
    }
    
    /// Background color based on state
    private var backgroundColor: Color {
        switch actualState {
        case .disabled:
            return Color(red: 0, green: 0, blue: 0, opacity: 0.04)
        default:
            return Color.white
        }
    }
    
    /// Border color based on state
    private var borderColor: Color {
        switch actualState {
        case .focused:
            return Color(red: 0.118, green: 0.224, blue: 0.824) // #1e39d2
        case .disabled:
            return Color(red: 0, green: 0, blue: 0, opacity: 0.03)
        case .error:
            return Color(red: 0.855, green: 0.118, blue: 0.157) // #da1e28
        default:
            return Color(red: 0, green: 0, blue: 0, opacity: 0.17)
        }
    }
    
    /// Text color based on state
    private var textColor: Color {
        switch actualState {
        case .disabled:
            return Color(red: 0, green: 0, blue: 0, opacity: 0.28)
        default:
            return Color(red: 0, green: 0, blue: 0, opacity: 0.86)
        }
    }
    
    /// Placeholder color
    private var placeholderColor: Color {
        return Color(red: 0, green: 0, blue: 0, opacity: 0.28)
    }
    
    // MARK: - Body
    
    public var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            // Label
            if showLabel {
                HStack(spacing: 2) {
                    Text(label)
                        .font(.custom("Sharp Sans", size: 14))
                        .fontWeight(.medium)
                        .foregroundColor(Color(red: 0, green: 0, blue: 0, opacity: 0.86))
                    
                    if isRequired {
                        Text("*")
                            .font(.custom("Sharp Sans", size: 14))
                            .fontWeight(.medium)
                            .foregroundColor(Color(red: 0.855, green: 0.118, blue: 0.157))
                    }
                    
                    Spacer()
                }
            }
            
            // Input Container
            HStack(spacing: 6) {
                // Prefix
                if let prefix = prefix {
                    Text(prefix)
                        .font(.custom("Sharp Sans", size: 14))
                        .fontWeight(.medium)
                        .foregroundColor(textColor)
                }
                
                // Text Field
                TextField(placeholder, text: $text)
                    .font(.custom("Sharp Sans", size: 14))
                    .fontWeight(.medium)
                    .foregroundColor(textColor)
                    .disabled(actualState == .disabled)
                    .focused($isFocused)
                
                // Suffix
                if let suffix = suffix {
                    Text(suffix)
                        .font(.custom("Sharp Sans", size: 14))
                        .fontWeight(.medium)
                        .foregroundColor(textColor)
                }
            }
            .padding(.horizontal, 13)
            .padding(.vertical, 9)
            .frame(minHeight: 40)
            .background(backgroundColor)
            .overlay(
                RoundedRectangle(cornerRadius: 4)
                    .stroke(borderColor, lineWidth: 1)
            )
            .clipShape(RoundedRectangle(cornerRadius: 4))
            
            // Error Message
            if let error = error, actualState == .error {
                HStack(spacing: 4) {
                    // Warning Icon
                    Image(systemName: "exclamationmark.triangle.fill")
                        .foregroundColor(Color(red: 0.855, green: 0.118, blue: 0.157))
                        .font(.system(size: 12))
                        .frame(width: 16, height: 16)
                    
                    Text(error)
                        .font(.custom("Sharp Sans", size: 14))
                        .fontWeight(.medium)
                        .foregroundColor(Color(red: 0.8, green: 0.11, blue: 0.145)) // #cc1c25
                    
                    Spacer()
                }
            }
            
            // Help Text
            if showHelpText, let helpText = helpText, error == nil {
                Text(helpText)
                    .font(.custom("Sharp Sans", size: 14))
                    .fontWeight(.medium)
                    .foregroundColor(Color(red: 0, green: 0, blue: 0, opacity: 0.57))
                    .lineLimit(nil)
            }
            
            // Spacer
            if spacer {
                Spacer()
                    .frame(height: 12)
            }
        }
    }
}

// MARK: - Previews

struct Input_Previews: PreviewProvider {
    static var previews: some View {
        VStack(spacing: 20) {
            // Default State
            Input(
                label: "Default State",
                text: .constant(""),
                placeholder: "Enter text here"
            )
            
            // Focused State
            Input(
                label: "Focused State",
                text: .constant(""),
                placeholder: "Enter text here",
                state: .focused
            )
            
            // Disabled State
            Input(
                label: "Disabled State",
                text: .constant(""),
                placeholder: "Enter text here",
                state: .disabled
            )
            
            // Error State
            Input(
                label: "Error State",
                text: .constant(""),
                placeholder: "Enter text here",
                error: "Error text goes here"
            )
            
            // With Prefix and Suffix
            Input(
                label: "Price",
                text: .constant("99.00"),
                placeholder: "99.00",
                prefix: "$",
                suffix: "USD"
            )
            
            // Required Field
            Input(
                label: "Required Field",
                text: .constant(""),
                placeholder: "Enter text here",
                isRequired: true
            )
            
            // With Help Text
            Input(
                label: "With Help Text",
                text: .constant(""),
                placeholder: "Enter your email",
                helpText: "We'll never share your email with anyone else",
                showHelpText: true
            )
        }
        .padding()
        .previewLayout(.sizeThatFits)
        .previewDisplayName("Input States")
    }
}
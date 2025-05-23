/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Design tokens from Figma - auto-generated
      colors: {
        // Primary colors - synced from Figma
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b'
        },
        // Secondary colors - synced from Figma
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e'
        },
        // Semantic colors - synced from Figma
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a'
        },
        // Neutral colors - synced from Figma
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        }
      },
      // Spacing tokens from Figma
      spacing: {
        'xs': '4px',    // Figma: spacing-xs
        'sm': '8px',    // Figma: spacing-sm
        'md': '16px',   // Figma: spacing-md
        'lg': '24px',   // Figma: spacing-lg
        'xl': '32px',   // Figma: spacing-xl
        '2xl': '48px',  // Figma: spacing-2xl
        '3xl': '64px',  // Figma: spacing-3xl
      },
      // Typography tokens from Figma
      fontFamily: {
        'sans': ['CustomInk-Regular', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'heading': ['CustomInk-Bold', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Figma typography tokens
        'xs': ['12px', { lineHeight: '16px' }],    // Figma: text-xs
        'sm': ['14px', { lineHeight: '20px' }],    // Figma: text-sm
        'base': ['16px', { lineHeight: '24px' }],  // Figma: text-base
        'lg': ['18px', { lineHeight: '28px' }],    // Figma: text-lg
        'xl': ['20px', { lineHeight: '32px' }],    // Figma: text-xl
        '2xl': ['24px', { lineHeight: '36px' }],   // Figma: text-2xl
        '3xl': ['32px', { lineHeight: '40px' }],   // Figma: text-3xl
        '4xl': ['36px', { lineHeight: '44px' }],   // Figma: text-4xl
      },
      // Breakpoints from Figma
      screens: {
        'xs': '375px',   // Mobile small
        'sm': '640px',   // Mobile large / Tablet small
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop small
        'xl': '1280px',  // Desktop
        '2xl': '1536px', // Desktop large
      },
      // Border radius from Figma
      borderRadius: {
        'xs': '2px',     // Figma: border-radius-xs
        'sm': '4px',     // Figma: border-radius-sm
        'md': '8px',     // Figma: border-radius-md
        'lg': '12px',    // Figma: border-radius-lg
        'xl': '16px',    // Figma: border-radius-xl
        '2xl': '24px',   // Figma: border-radius-2xl
      },
      // Shadows from Figma
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',                          // Figma: shadow-xs
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',  // Figma: shadow-sm
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Figma: shadow-md
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // Figma: shadow-lg
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // Figma: shadow-xl
      },
      // Animation and transitions
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'fade-out': 'fadeOut 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    // Add any necessary Tailwind plugins here
  ],
}
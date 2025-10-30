module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                tertiary: {
                    DEFAULT: "hsl(var(--tertiary))",
                    foreground: "hsl(var(--tertiary-foreground))",
                },
                neutral: {
                    DEFAULT: "hsl(var(--neutral))",
                    foreground: "hsl(var(--neutral-foreground))",
                },
                success: "hsl(var(--success))",
                warning: "hsl(var(--warning))",
                gray: {
                    50: "hsl(var(--gray-50))",
                    100: "hsl(var(--gray-100))",
                    200: "hsl(var(--gray-200))",
                    300: "hsl(var(--gray-300))",
                    400: "hsl(var(--gray-400))",
                    500: "hsl(var(--gray-500))",
                    600: "hsl(var(--gray-600))",
                    700: "hsl(var(--gray-700))",
                    800: "hsl(var(--gray-800))",
                    900: "hsl(var(--gray-900))",
                },
                hero: {
                    text: "hsl(var(--hero-text))",
                },
                navbar: {
                    text: "hsl(var(--navbar-text))",
                },
            },
            fontFamily: {
                sans: ['"Lato"', 'sans-serif'],
                serif: ['"Libre Franklin"', 'sans-serif'],
            },
            spacing: {
                '4': '1rem',
                '8': '2rem',
                '12': '3rem',
                '16': '4rem',
                '24': '6rem',
                '32': '8rem',
                '48': '12rem',
                '64': '16rem',
            },
            borderRadius: {
                lg: "0.5rem",
                md: "calc(0.5rem - 2px)",
                sm: "calc(0.5rem - 4px)",
            },
            backgroundImage: {
                'gradient-1': 'linear-gradient(180deg, hsl(231, 48%, 18%) 0%, hsl(231, 42%, 28%) 100%)',
                'gradient-2': 'linear-gradient(180deg, hsl(37, 41%, 72%) 0%, hsl(45, 42%, 92%) 100%)',
                'button-border-gradient': 'linear-gradient(90deg, hsla(231, 48%, 18%, 0.8), hsla(231, 42%, 28%, 0.8))',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FAFBFC',
          secondary: '#F1F5F9',
        },
        primary: {
          DEFAULT: '#1E3A5F',
          light: '#2D5F8B',
        },
        accent: '#D4A853',
        text: {
          primary: '#1A2B3C',
          secondary: '#64748B',
        },
        border: '#E2E8F0',
        success: '#059669',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        body: ['"Source Sans Pro"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(30, 58, 95, 0.08)',
        'premium-hover': '0 8px 30px rgba(30, 58, 95, 0.15)',
      },
    },
  },
  plugins: [],
}

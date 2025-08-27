/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(32, 48, 60)',
        accent: '#3b82f7',
        background: {
          DEFAULT: '#0a0a0a',
          light: '#ffffff',
        },
        surface: {
          DEFAULT: '#1a1a1a',
          light: '#f8f9fa',
        },
        border: {
          DEFAULT: '#333333',
          light: '#e5e7eb',
        },
        text: {
          DEFAULT: '#ffffff',
          light: '#1f2937',
        },
        'text-secondary': {
          DEFAULT: '#b0b0b0',
          light: '#6b7280',
        },
      },
      maxWidth: {
        'content': '1116px',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'inter': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      fontSize: {
        '8xl': '96px',
      },
    },
  },
  plugins: [],
}


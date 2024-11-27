/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6a11cb',
          dark: '#2575fc',
        },
        accent: '#00ffcc',
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
        },
        card: {
          light: '#f8fafc',
          dark: '#1a1a1a',
        },
        text: {
          light: '#1a1a1a',
          dark: '#f8fafc',
        }
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 204, 0.3)',
        'neon-subtle': '0 0 15px rgba(0, 255, 204, 0.15)',
        'neon-green': '0 0 25px rgba(56, 239, 125, 0.3)',
        'theme': '0 0 20px rgba(106, 17, 203, 0.2)',
      },
    },
  },
  plugins: [],
};
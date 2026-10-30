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
        canvas: {
          DEFAULT: '#0B0B0D',
          elevated: '#121217',
          card: '#16161D',
          hover: '#1F1F27',
          active: '#272733',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
          light: '#FAF8F5',
          'light-card': '#F3EFE6',
          'light-elevated': '#FFFFFF',
          'light-border': 'rgba(0, 0, 0, 0.08)',
        },
        ivory: {
          DEFAULT: '#F5F2EB',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F2EB',
          300: '#E6E1D3',
          400: '#C8C2B0',
          500: '#A8A18E',
          600: '#7E7868',
          700: '#5A5549',
          800: '#38352D',
          900: '#1C1A16',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#ECC665',
          amber: '#C5A059',
          dark: '#9E7E2C',
          glow: 'rgba(212, 175, 55, 0.18)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'luxury': '0.15em',
        'cinematic': '0.25em',
      },
      borderRadius: {
        'editorial': '10px',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}

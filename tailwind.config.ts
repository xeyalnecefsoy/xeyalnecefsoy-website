import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          DEFAULT: '#a855f7',
          50: '#f5edff',
          100: '#ead6ff',
          200: '#d7b5ff',
          300: '#c084fc',
          400: '#a855f7',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        dark: {
          bg: '#000000',
          card: '#0a0a0a',
        }
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1280px'
        }
      },
      backgroundImage: {
        'radial-brand': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.18), rgba(59, 130, 246, 0) 65%)',
        'radial-accent': 'radial-gradient(circle at center, rgba(168, 85, 247, 0.18), rgba(168, 85, 247, 0) 65%)',
        'mesh-brand': 'radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.18), transparent 45%),' +
          'radial-gradient(circle at 80% 0%, rgba(59, 130, 246, 0.14), transparent 40%),' +
          'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.10), transparent 50%)',
        'mesh-brand-accent':
          'radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.18), transparent 45%),' +
          'radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.16), transparent 40%),' +
          'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.12), transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      boxShadow: {
        'glow-brand': '0 0 24px rgba(59, 130, 246, 0.25)',
        'glow-accent': '0 0 24px rgba(168, 85, 247, 0.22)',
        'glow-accent-strong': '0 0 48px rgba(168, 85, 247, 0.28)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    }
  },
  plugins: [],
} satisfies Config

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
          void: "#030712",
          deep: "#050814",
          surface: "#090f24",
          card: "rgba(13, 21, 44, 0.55)",
          glass: "rgba(16, 27, 58, 0.45)",
        },
        accent: {
          blue: "#0066ff",
          cyan: "#00d2ff",
          indigo: "#4f46e5",
          teal: "#14b8a6",
          glow: "rgba(0, 210, 255, 0.35)",
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 210, 255, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(0, 102, 255, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'portrait': '0 25px 60px -15px rgba(0, 102, 255, 0.3), 0 0 40px rgba(0, 210, 255, 0.15)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(rgba(0, 210, 255, 0.1) 1px, transparent 1px)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#0f1117',
          card: '#1a1d27',
          border: '#2a2d3a',
          text: '#f0f0f0',
          muted: '#94a3b8',
          accent: '#06b6d4',
          accentHover: '#0891b2',
          tag: '#164e63',
          tagText: '#67e8f9',
        },
        ink: '#0f1117',
        accent: '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(6, 182, 212, 0.15)',
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8D43A4', // Base purple
          light: '#A355BC', // Lighter purple
          dark: '#462152', // Twice as dark purple for backgrounds
        },
        secondary: {
          DEFAULT: '#D3FFF4', // Mint green
          light: '#E6FFF8', // Lighter mint
          dark: '#A6FFE9', // Darker mint
        },
        accent: {
          DEFAULT: '#B8FFE9', // Medium mint
          light: '#F0FFF9', // Very light mint
          dark: '#8CFFE0', // Deep mint
        },
        background: {
          DEFAULT: '#F7FFFC', // Very light mint background
          dark: '#E9FFF7', // Slightly darker mint background
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom right, rgba(70, 33, 82, 0.95), rgba(141, 67, 164, 0.9))',
        'section-pattern': 'linear-gradient(to bottom, rgba(211, 255, 244, 0.3), rgba(230, 255, 248, 0.5))',
      },
    },
  },
  plugins: [],
}
export default config

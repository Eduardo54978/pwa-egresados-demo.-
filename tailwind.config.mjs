/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10241F',
        paper: '#F1F4F2',
        teal: { DEFAULT: '#0E6E62', deep: '#0A4F47' },
        amber: '#E2A33B',
        sage: '#5E756D',
        line: '#CBD5D0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

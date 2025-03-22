import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#d9b335', // A slightly deeper brown for a rich base
        secondary: '#e91803', // A more vibrant gold for better contrast
        light: '#eeeeee', // A slightly lighter gray for a softer look
        accent: '#2d3033', // A slightly darker gray for a stronger accent
      },
      container: {
        display: 'flex',
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '10rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1240px',
      },
      colors: {
        'primary-blue': '#3470FF',
        'btn-hover': '#0B44CD',
        'secondary-text': '#1214177f',
        'color-after': '#12141719',
        text: '#121417',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: ['tailwindcss/nesting'],
};

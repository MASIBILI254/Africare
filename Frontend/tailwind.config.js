/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#075B3A',
        forestDark: '#043D28',
        leaf: '#4C9A3E',
        lime: '#9BD34F',
        sunrise: '#F7941D',
        cream: '#FFFDF7',
        ink: '#15352A',
        mist: '#F2F8F4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'ui-serif', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(7, 91, 58, 0.12)',
      },
    },
  },
  plugins: [],
}

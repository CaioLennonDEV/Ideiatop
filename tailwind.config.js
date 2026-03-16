/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        pizza: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#f9d7ac',
          300: '#f5bb77',
          400: '#ef9340',
          500: '#eb761a',
          600: '#dc5c10',
          700: '#b6440f',
          800: '#913614',
          900: '#752f14',
          950: '#3f1608',
        },
        crust: {
          50: '#faf6f0',
          100: '#f2e9db',
          200: '#e5d2b5',
          300: '#d4b58a',
          400: '#c49966',
          500: '#b8824a',
          600: '#9a6b3d',
          700: '#7d5732',
          800: '#634428',
          900: '#4a331f',
          950: '#2d1f12',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

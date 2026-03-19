/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'almost-black': '#000903',
        'almost-white': '#FCFCFC',
        'bright-green': '#188F7E',
        'forest-green': '#001407',
        'dark-green':   '#12695C',
        'bright-orange': '#F05F05',
        'dark-orange':   '#B54804',
      },
      fontFamily: {
        heading: ['Mitr', 'sans-serif'],
        body:    ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatBlob: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%':      { transform: 'translate(-30px, -30px)' },
        },
        floatBlob2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%':      { transform: 'translate(20px, 20px)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-up-1':  'fadeUp 0.7s 0.2s ease forwards',
        'fade-up-2':  'fadeUp 0.7s 0.35s ease forwards',
        'fade-up-3':  'fadeUp 0.7s 0.5s ease forwards',
        'fade-up-4':  'fadeUp 0.7s 0.65s ease forwards',
        'fade-in':    'fadeIn 1s 0.8s ease forwards',
        'float-blob':  'floatBlob 8s ease-in-out infinite',
        'float-blob2': 'floatBlob2 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

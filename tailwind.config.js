/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fall: 'fall 4s linear infinite',
        'fade-in': 'fade-in 1.5s ease-in-out',
        'fade-in-slow': 'fade-in-slow 2s ease-in-out',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(100px)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-slow': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

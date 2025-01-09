/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        'z-10': '10px',
        'z-20': '20px',
        'z-1/2': '50%',
        'z-full': '100%',
      }
    },
  },
  plugins: [],
}


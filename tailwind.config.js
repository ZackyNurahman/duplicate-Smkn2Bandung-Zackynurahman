/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-s' : '320px',
        'mobile-m' : '375px',
        'mobile-l' : '425px',
        'tablet' : '768px',
        'laptop' : '1024px',
        'laptop-l' : '1461px'
      }
    },
  },
  plugins: [],
}
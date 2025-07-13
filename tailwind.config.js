/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { height: '0px' },
          '100%': { height: '80%' },
          },
          
        },
        animation: {
          'grow-line': 'grow 1s ease-out forwards',
      },
      screens: {
        'xs': '360px',    // petit téléphone
        'sm': '640px',    // téléphone
        'md': '768px',    // tablette
        'lgg': '1100px',
        'lg': '1024px',   // laptop
        'xl': '1280px',   // grand écran
        '2xl': '1536px',  // très grand écran
        '3xl': '1920px',   // ultra large
        //'h-short': { raw: '(max-height: 580px)' },
      },
    },
  },
  plugins: [],
}
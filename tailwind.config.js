/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    fontFamily: {
      // 'sans': ['Poppins', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


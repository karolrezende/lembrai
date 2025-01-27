import customUtilities from './tailwind.utilities'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    colors: {
      primary: '#7ED4D9',
      'primary-dark': '#4FA5AA',
      secondary: '#FFFFFF',
      tertiary: '#4FA5AA',
      quaternary: '#267B80',
      quinary: '#0B5155',
      danger: '#BB2D14'
    },
    extend: {}
  },
  plugins: [customUtilities]
}

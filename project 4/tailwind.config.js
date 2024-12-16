/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',    /* Deep blue */
        secondary: '#3b82f6',  /* Bright blue */
        accent: '#dbeafe',     /* Light blue */
        neutral: '#f8fafc',    /* Light gray */
        dark: '#1e293b',       /* Dark blue-gray */
        light: '#ffffff',      /* White */
      },
    },
  },
  plugins: [],
};
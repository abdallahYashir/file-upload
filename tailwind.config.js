/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#e2e8f0',
        highlight: '#edf2f7',
        muted: '#718096',
        success: '#48bb78',
        info: '#4299e1',
        warning: '#ecc94b',
        danger: '#f56565',
        light: '#f7fafc',
        dark: '#2d3748',
      },
      fontFamily: {
        'primary': 'Martian Mono, mono'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


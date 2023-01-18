/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      heading: ['DM Serif Display', 'serif'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      'primary-one': 'hsl(31, 47%, 63%)',
      'primary-two': 'hsl(212, 14%, 19%)',
      'primary-three': 'hsl(30, 27%, 94%)',
      'text-primary': 'hsl(210, 4%, 31%)',
      transparent: 'transparent',
    },
    extend: {
      maxWidth: {
        1200: '1200px',
      },
      fontSize: {
        '22px': '1.375rem',
      },
      borderRadius: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}

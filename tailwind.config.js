/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['"DM Sans"'],
        raleway: ['Raleway'],
        libreBaskerville: ['Libre Baskerville'],
      },
      colors: {
        seaBlue: '#252958',
      },
    },
  },
  plugins: [],
};

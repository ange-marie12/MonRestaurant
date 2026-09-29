/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxe-gold': '#D4AF37',
        'luxe-black': '#0A0A0A',
        'luxe-cream': '#F5F5F0',
      },
    },
  },
  plugins: [],
};

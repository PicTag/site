module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
};

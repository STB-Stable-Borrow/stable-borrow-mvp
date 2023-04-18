module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
}
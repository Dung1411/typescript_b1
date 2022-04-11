module.exports = {
  content: ["*.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
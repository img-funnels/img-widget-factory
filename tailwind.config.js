/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  important: true,
  prefix: "img-",
  darkMode: ["class", '[data-theme="dark"]'], // or 'media' or 'class'
  corePlugins: {
    // preflight: false
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: []
};

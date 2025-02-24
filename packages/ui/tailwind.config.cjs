/** @type {import('tailwindcss').Config} */
const config = require("../tailwind-config/tailwind.config.cjs");

module.exports = {
  ...config,
  // App-specific overrides:
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

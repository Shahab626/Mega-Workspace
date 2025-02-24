/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@repo/tailwind-config/tailwindConfig");
module.exports = {
  ...sharedConfig,
  // App-specific overrides:
  content: [
    "./app/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
};

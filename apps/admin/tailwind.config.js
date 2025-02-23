const sharedConfig = require("@repo/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  // App-specific overrides:
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
};

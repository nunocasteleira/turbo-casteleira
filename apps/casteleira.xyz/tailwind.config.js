const sharedConfig = require("tailwind-config/tailwind.config");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  ...sharedConfig,
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        serif: ["var(--font-lora)", ...fontFamily.serif],
        mono: ["var(--font-space-mono)", ...fontFamily.mono],
      },
    },
  },
};

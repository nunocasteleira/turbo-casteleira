const sharedConfig = require("tailwind-config/tailwind.config.js");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  ...sharedConfig,
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
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

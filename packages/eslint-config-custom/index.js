module.exports = {
  root: true,
  extends: ["next", "turbo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};

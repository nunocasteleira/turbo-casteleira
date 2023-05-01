module.exports = {
  root: true,
  extends: ["next", "turbo", "prettier"],
  plugins: ["prettier", "simple-import-sort"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@next/next/no-html-link-for-pages": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              // Internal packages.
              // Side effect imports.
              // Parent imports. Put `..` last.
              // Other relative imports. Put same-folder imports and `.` last.
              // Style imports.
              [
                "^react",
                "^@?\\w",
                "^(@|components)(/.*|$)",
                "^\\u0000",
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$",
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$",
                "^.+\\.?(css)$",
              ],
            ],
          },
        ],
      },
    },
  ],
};

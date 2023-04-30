import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.tsx"],
  format: ["esm"],
  sourcemap: true,
  dts: true,
  minify: true,
  minifyIdentifiers: false,
  clean: true,
  external: ["react", "react-dom"],
  ...options,
}));

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "./src/generated/client",
        replacement: resolve(__dirname, "./src/generated/client/index.js"),
      },
    ],
  },
  plugins: [tsconfigPaths()],
  test: {
    hookTimeout: 50000,
    globals: true,
    watch: false,
    environment: "node",
    watchExclude: [".*\\/node_modules\\/.*", ".*\\/build\\/.*", ".*\\/postgres-data\\/.*"],
  },
});

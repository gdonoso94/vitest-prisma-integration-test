/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    hookTimeout: 50000,
    globals: true,
    watch: false,
    environment: "node",
    watchExclude: [".*\\/node_modules\\/.*", ".*\\/build\\/.*", ".*\\/postgres-data\\/.*"],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Static SPA build for S3 + CloudFront. Run from project root:
//   npx vite build --config static-build/vite.config.ts
// Output goes to ./dist (relative to project root).
export default defineConfig({
  root: path.resolve(__dirname),
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "../src") },
  },
  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
  },
});
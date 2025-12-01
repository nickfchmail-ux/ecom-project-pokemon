// vite.config.ts   ← must be in the root!
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ← this line is crucial
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint2";

export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()],
  build: {
    outDir: "src/dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ← THIS is what fixes your error
    },
  },
});

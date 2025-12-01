// vite.config.ts   ← must be in the root!
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ← this line is crucial
import eslint from "vite-plugin-eslint2";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ← THIS is what fixes your error
    },
  },
});

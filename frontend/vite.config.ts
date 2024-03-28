import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    proxy: {
      // Update this line to match your production backend URL
      "/graphql": "https://codel-backend.gj54va.easypanel.host",
    },
  },
  resolve: {
    alias: {
      "@/generated": path.resolve(__dirname, "./generated"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

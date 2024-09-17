import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v1/, "/api/v1"),
      },
    },
    port: 3000,
  },
  plugins: [react()],
});

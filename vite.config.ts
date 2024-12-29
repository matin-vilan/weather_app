import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@libs": "/src/libs",
      "@constants": "/src/constants",
      "@services": "/src/services",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "~types": "/src/types",
    },
  },
});

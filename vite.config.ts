import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode, command }) => ({
  base: "/",
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",         // Папка для сборки
    emptyOutDir: true,      // Очистка dist перед сборкой
    chunkSizeWarningLimit: 800,  // Можно поднять лимит предупреждения по размеру чанков
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Выделить зависимости в отдельный чанковый файл vendor.js
          }
        },
      },
    },
  },
}));
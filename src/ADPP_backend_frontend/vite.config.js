import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';

// Load environment variables from the .env file located two levels up
dotenv.config({ path: '../../.env' });

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943", // Adjust this to your backend server's address
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(), // React plugin to handle JSX/TSX
    environment("all", { prefix: "CANISTER_" }), // Environment variables for Canisters
    environment("all", { prefix: "DFX_" }), // Environment variables for DFX
  ],
  resolve: {
    alias: {
      "declarations": fileURLToPath(new URL("../declarations", import.meta.url)),
      // You can add more aliases here if needed
    },
  },
});

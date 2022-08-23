import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  server: { port: 3000 },
  preview: { port: 3000 },
  plugins: [react(), envCompatible()],
});

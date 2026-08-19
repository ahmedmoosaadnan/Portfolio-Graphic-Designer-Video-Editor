import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Graphic-Designer-Video-Editor/', // ⚠️ P, G, D, V, E ko capital karein jaisa repo ka naam hai
});

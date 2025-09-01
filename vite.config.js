import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ajay-portfolio/",   // IMPORTANT: repo name here
});

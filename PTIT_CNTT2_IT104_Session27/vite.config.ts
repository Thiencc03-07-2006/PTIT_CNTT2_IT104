import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwingcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwingcss()],
});

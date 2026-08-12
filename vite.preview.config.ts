import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Ξεχωριστό build για ΕΝΑ αυτόνομο αρχείο HTML (preview/demo).
// Χρησιμοποιεί HashRouter (VITE_HASH) ώστε να δουλεύει χωρίς server.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: "dist-preview",
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
});

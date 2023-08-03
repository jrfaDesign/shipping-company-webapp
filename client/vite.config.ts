import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    }),
    viteTsconfigPaths(),
    svgrPlugin()
  ],
  build: {
    chunkSizeWarningLimit: 1600
  },
  server: {
    port: 4001
  }
});

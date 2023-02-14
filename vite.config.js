import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
import { dependencies } from "./package.json";
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (["react", "react-router-dom", "react-dom"].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "env");
  console.log("ENV", env);
  return {
    resolve: {
      alias: { "~": path.resolve(__dirname, "src/") },
    },
    plugins: [
      react(),
      eslint(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
          dev: { logLevel: ["error"] },
        },
        overlay: true,
      }),
      tsconfigPaths(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
    css: {
      postcss: (ctx) => ({
        parser: ctx.parser ? "sugarss" : false,
        map: ctx.env === "development" ? ctx.map : false,
        plugins: {
          "postcss-import": {},
          "postcss-nested": {},
          cssnano: ctx.env === "production" ? {} : false,
          autoprefixer: { overrideBrowserslist: ["defaults"] },
        },
      }),
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-router-dom", "react-dom"],
            ...renderChunks(dependencies),
          },
        },
      },
    },
  };
});

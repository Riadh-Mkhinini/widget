import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "inline-css-with-vars",
      apply: "build",
      enforce: "post",
      generateBundle(_, bundle) {
        const jsFile = Object.keys(bundle).find((f) => f.endsWith(".js"));
        const cssFile = Object.keys(bundle).find((f) => f.endsWith(".css"));

        if (jsFile && cssFile) {
          const jsChunk = bundle[jsFile];
          const cssChunk = bundle[cssFile];

          if (jsChunk.type === "chunk" && cssChunk.type === "asset") {
            const css = String(cssChunk.source);
            const rootVars = css.match(/:root\s*\{[^}]+\}/)?.[0] ?? "";

            jsChunk.code =
              `
const rootVars = document.createElement("style");
rootVars.textContent = ${JSON.stringify(rootVars)};
document.head.appendChild(rootVars);
` +
              `const style = document.createElement("style");
style.textContent = ${JSON.stringify(css)};
document.head.appendChild(style);
` +
              jsChunk.code;

            delete bundle[cssFile];
          }
        }
      },
    },
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, "src/widget/widget.tsx"),
      name: "BookiniWidget",
      formats: ["es"],
      fileName: () => "widget.js",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // {
    //   name: "inline-css",
    //   apply: "build",
    //   enforce: "post",
    //   generateBundle(_, bundle) {
    //     const jsFile = Object.keys(bundle).find((file) => file.endsWith(".js"));
    //     const cssFile = Object.keys(bundle).find((file) =>
    //       file.endsWith(".css")
    //     );

    //     if (jsFile && cssFile) {
    //       const jsChunk = bundle[jsFile];
    //       const cssChunk = bundle[cssFile];

    //       if (jsChunk.type === "chunk" && cssChunk.type === "asset") {
    //         jsChunk.code =
    //           `const style = document.createElement('style');` +
    //           `style.textContent = ${JSON.stringify(cssChunk.source)};` +
    //           `document.head.appendChild(style);` +
    //           jsChunk.code;

    //         delete bundle[cssFile];
    //       }
    //     }
    //   },
    // },
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "src/widget/widget.tsx"),
      name: "BookiniWidget",
      formats: ["es"],
      fileName: () => "widget.js",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

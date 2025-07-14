import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";

const tailwindFix: PluginOption = {
  name: "tailwind-shadow-dom-vars",
  apply: "build",
  enforce: "post" as const,
  generateBundle(_, bundle) {
    const cssFile = Object.keys(bundle).find((file) => file.endsWith(".css"));
    if (!cssFile) return;

    const cssAsset = bundle[cssFile];
    if (cssAsset.type === "asset" && typeof cssAsset.source === "string") {
      cssAsset.source += `

:host *, :host *::before, :host *::after {
  --tw-border-style: solid;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-color: initial;
  --tw-shadow-alpha: 1;
  --tw-ring-color: initial;
  --tw-ring-shadow: 0 0 #0000;
  --tw-ring-inset: initial;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-inset-shadow: 0 0 #0000;
  --tw-inset-shadow-color: initial;
  --tw-inset-ring-color: initial;
  --tw-inset-ring-shadow: 0 0 #0000;
  --tw-outline-style: solid;
}
`;
    }
  },
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tailwindFix,
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

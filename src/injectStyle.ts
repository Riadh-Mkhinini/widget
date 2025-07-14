import css from "./index.css?inline";

export function injectStyle(shadowRoot: ShadowRoot) {
  const style = document.createElement("style");
  style.textContent = css;
  shadowRoot.appendChild(style);
}

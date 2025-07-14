export function injectStyle(shadowRoot: ShadowRoot, cssText: string) {
  const style = document.createElement("style");
  style.textContent = cssText;
  shadowRoot.appendChild(style);
}

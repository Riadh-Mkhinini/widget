export function injectStyle(shadowRoot: ShadowRoot, cssUrl: string) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = cssUrl;
  shadowRoot.appendChild(link);
}

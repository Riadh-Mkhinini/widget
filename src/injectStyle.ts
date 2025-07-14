export async function injectStyle(shadowRoot: ShadowRoot, cssUrl: string) {
  const res = await fetch(cssUrl);
  const cssText = await res.text();
  const head = document.createElement("head");
  const style = document.createElement("style");
  head.setAttribute("type", "text/css");
  style.textContent = cssText;
  head.appendChild(style);
  shadowRoot.appendChild(head);
}

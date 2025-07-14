export async function injectStyle(shadowRoot: ShadowRoot, cssUrl: string) {
  const res = await fetch(cssUrl);
  const cssText = await res.text();
  const head = document.createElement("div");
  head.setAttribute("part", "head");
  const style = document.createElement("style");
  style.textContent = cssText;
  head.appendChild(style);
  shadowRoot.appendChild(head);
}

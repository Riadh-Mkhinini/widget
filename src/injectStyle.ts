export async function injectStyle(shadowRoot: ShadowRoot, cssUrl: string) {
  const res = await fetch(cssUrl);
  const cssText = await res.text();
  const style = document.createElement("style");

  style.setAttribute("type", "text/css");
  style.textContent = cssText;

  shadowRoot.appendChild(style);
}

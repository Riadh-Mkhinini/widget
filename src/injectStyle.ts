export async function injectStyle(shadowRoot: ShadowRoot, cssUrl: string) {
  const res = await fetch(cssUrl);
  const cssText = await res.text();
  console.log("CSS length:", cssText.length);
  const style = document.createElement("style");
  style.textContent = cssText;
  shadowRoot.appendChild(style);
}

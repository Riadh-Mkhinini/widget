export function injectStyleLink(
  shadowRoot: ShadowRoot,
  href: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    link.onload = () => resolve();
    link.onerror = reject;

    // Create <head> inside shadow root if not exist
    const wrapper = document.createElement("div");
    const shadowHead = shadowRoot.querySelector("head") || shadowRoot;

    shadowHead.insertBefore(link, shadowHead.firstChild);
  });
}

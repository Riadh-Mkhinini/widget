import ReactDOM from "react-dom/client";
import Widget from "./widget";

// This is the function that the host page will call
export function initWidget(container: HTMLElement, options?: { id?: string }) {
  const root = ReactDOM.createRoot(container);
  root.render(<Widget id={options?.id} />);
}

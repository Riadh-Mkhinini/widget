/* eslint-disable react-refresh/only-export-components */
import ReactDOM from "react-dom/client";

const Widget = () => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "1em",
      fontFamily: "sans-serif",
    }}
  >
    <h3>📦 Bookini Widget</h3>
    <p>Hello from embedded React!</p>
  </div>
);

// This is the function that the host page will calls
export function initWidget(container: HTMLElement) {
  const root = ReactDOM.createRoot(container);
  root.render(<Widget />);
}

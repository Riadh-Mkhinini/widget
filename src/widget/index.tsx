/* eslint-disable react-refresh/only-export-components */
import ReactDOM from "react-dom/client";

const Widget = ({ id }: { id?: string }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "1em",
      fontFamily: "sans-serif",
    }}
  >
    <h3>📦 Bookini Widget</h3>
    <p>
      Loaded with ID: <strong>{id}</strong>
    </p>
  </div>
);

// This is the function that the host page will call
export function initWidget(container: HTMLElement, options?: { id?: string }) {
  const root = ReactDOM.createRoot(container);
  root.render(<Widget id={options?.id} />);
}

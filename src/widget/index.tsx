/* eslint-disable react-refresh/only-export-components */
import type { FC } from "react";
import ReactDOM from "react-dom/client";

const Widget: FC<Options> = (props) => {
  const { id } = props;
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1em",
        fontFamily: "sans-serif",
      }}
    >
      <h3>📦 Bookini Widget</h3>
      <p>Hello from embedded React!</p>
      <p>
        Loaded with ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

type Options = {
  id?: string;
};
// This is the function that the host page will calls
export function initWidget(container: HTMLElement, options?: Options) {
  const root = ReactDOM.createRoot(container);
  root.render(<Widget id={options?.id} />);
}

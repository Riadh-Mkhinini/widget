/* eslint-disable react-refresh/only-export-components */
import type { FC } from "react";
import ReactDOM from "react-dom/client";

type Options = {
  id?: string;
};
type WidgetProps = {
  options?: Options;
};

const Widget: FC<WidgetProps> = (props) => {
  const { options } = props;
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
        Loaded with ID: <strong>{options?.id}</strong>
      </p>
    </div>
  );
};

// This is the function that the host page will calls
export function initWidget(container: HTMLElement, options?: Options) {
  const root = ReactDOM.createRoot(container);
  root.render(<Widget options={options} />);
}

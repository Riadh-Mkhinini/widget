/* eslint-disable react-refresh/only-export-components */
import "../index.css";
import type { FC } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@/components/ui/button";

type Options = {
  id?: string;
};
type WidgetProps = {
  options?: Options;
};

const Widget: FC<WidgetProps> = (props) => {
  const { options } = props;
  return (
    <div className="p-4 bg-red-200 border rounded shadow-md text-gray-800 font-sans">
      <h2 className="text-lg font-bold mb-2">📦 Bookini Widget</h2>
      <p className="text-sm">
        Loaded with ID: <span className="font-mono">{options?.id}</span>
      </p>
      <Button className="mt-4">Click Me</Button>
    </div>
  );
};

export default Widget;

// This is the function that the host page will calls
export function initWidget(container: HTMLElement, options?: Options) {
  const root = ReactDOM.createRoot(container);
  root.render(<Widget options={options} />);
}

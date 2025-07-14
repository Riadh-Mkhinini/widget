/* eslint-disable react-refresh/only-export-components */
import "../index.css";
import type { FC } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@/components/ui/button";

type Options = {
  id?: string;
  onClickSearch?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: { rooms: number; adults: number; children: Array<number> }
  ) => void;
};
type WidgetProps = {
  options?: Options;
};

const Widget: FC<WidgetProps> = (props) => {
  const { options } = props;

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    options?.onClickSearch?.(event, { rooms: 1, adults: 1, children: [] });
    window.dispatchEvent(
      new CustomEvent("bookini:search", {
        detail: { id: options?.id, rooms: 1, adults: 1, children: [] },
      })
    );
  };
  return (
    <div className="font-sans p-4 rounded border bg-background text-foreground shadow-md">
      <h2 className="text-lg font-bold mb-2">📦 Bookini Widget</h2>
      <p className="text-sm">
        Loaded with ID: <span className="font-mono">{options?.id}</span>
      </p>
      <Button className="mt-4" onClick={onClick}>
        Click Me
      </Button>
    </div>
  );
};

export default Widget;

// This is the function that the host page will calls
export function initWidget(container: HTMLElement, options?: Options) {
  const root = ReactDOM.createRoot(container);
  root.render(<Widget options={options} />);
}

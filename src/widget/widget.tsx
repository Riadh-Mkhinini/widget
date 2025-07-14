import "../index.css";
import ReactDOM from "react-dom/client";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { injectStyle } from "@/injectStyle";

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

const Widget: FC<WidgetProps> = ({ options }) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    options?.onClickSearch?.(event, { rooms: 1, adults: 1, children: [] });
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

// eslint-disable-next-line react-refresh/only-export-components
export async function initWidget(container: HTMLElement, options?: Options) {
  const shadowRoot = container.attachShadow({ mode: "open" });
  const cssUrl = new URL("./widget.css", import.meta.url).href;
  await injectStyle(shadowRoot, cssUrl);
  const root = ReactDOM.createRoot(shadowRoot);
  root.render(<Widget options={options} />);
}

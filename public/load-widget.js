import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

import { initWidget } from "./widget.js";

const scriptTag = Array.from(document.scripts).find((s) =>
  s.src.includes("load-widget.js")
);
const container = document.getElementById("my-widget");

function handleClick(event, params) {
  console.log("Widget search clicked:", params);
  // You can do more here: open modal, send fetch, etc.
}

if (scriptTag && container) {
  const id = scriptTag.getAttribute("data-id");

  import("./widget.js").then(({ initWidget }) => {
    initWidget(container, { id, onClickSearch: handleClick });
  });
}

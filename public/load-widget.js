import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";

import { initWidget } from "./widget.js";

const scriptTag = document.currentScript;
const container = document.getElementById("my-widget");

if (scriptTag && container) {
  const id = scriptTag.getAttribute("data-id");

  import("./widget.js").then(({ initWidget }) => {
    initWidget(container, { id });
  });
}

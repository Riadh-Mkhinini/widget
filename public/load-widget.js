import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
import { initWidget } from "./widget.js";

const container = document.getElementById("my-widget");
if (container) {
  initWidget(container);
}

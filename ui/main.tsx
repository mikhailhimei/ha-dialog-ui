import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoot } from "./src/app/AppRoot";

import "./src/styles/globals.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);

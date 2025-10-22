// ✅ src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css"; // Optional — only if you have global CSS

// This tells React to render <App /> into the "root" div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

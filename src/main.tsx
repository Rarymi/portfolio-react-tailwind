import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeLayoutProvider } from "./context/ThemeLayoutContext.tsx";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeLayoutProvider>
      <App />
    </ThemeLayoutProvider>
  </React.StrictMode>,
);

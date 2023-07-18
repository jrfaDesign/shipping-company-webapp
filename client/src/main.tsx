import React from "react";
import ReactDOM from "react-dom/client";
import App from "screens/App/App";
import "./index.css";
import Providers from "shared/containers/Providers";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

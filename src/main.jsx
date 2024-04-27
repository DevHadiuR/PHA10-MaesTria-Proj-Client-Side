import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import ArtProvider from "./hooks/provider/ArtProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ArtProvider>
        <RouterProvider router={Router} />
      </ArtProvider>
    </HelmetProvider>
  </React.StrictMode>
);

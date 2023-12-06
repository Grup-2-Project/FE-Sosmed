import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.tsx";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { TokenProvider } from "./context/token-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </TokenProvider>
  </React.StrictMode>,
);

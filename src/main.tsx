import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Το preview build (ένα αρχείο, χωρίς server) χρησιμοποιεί HashRouter.
// Το κανονικό build/deploy χρησιμοποιεί BrowserRouter με καθαρά URLs.
const Router = import.meta.env.VITE_HASH ? HashRouter : BrowserRouter;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SavedEventsProvider } from "./components/SavedEventsProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SavedEventsProvider>
        <App />
      </SavedEventsProvider>
    </BrowserRouter>
  </StrictMode>
);

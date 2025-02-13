import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TicketProvider from "./context/TicketContext.jsx";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicketProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </TicketProvider>
  </StrictMode>
);

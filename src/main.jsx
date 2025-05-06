import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/GlobalStyles.css";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppRoutes />
    </StrictMode>
);

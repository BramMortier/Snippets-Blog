import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// global styling
import "./sass/reset.scss";
import "./sass/typography.scss";
import "./sass/breakpoints.scss";
import "./sass/colors.scss";
import "./sass/spacing.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

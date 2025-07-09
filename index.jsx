import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Dashboard.css"; // Your converted CSS file
import "@fortawesome/fontawesome-free/css/all.min.css"; // Add this line if you're using Font Awesome via npm

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

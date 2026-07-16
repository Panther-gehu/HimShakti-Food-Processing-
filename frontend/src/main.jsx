import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="131135649916-o7r8bljpo8omcp9rtm29isjcdq3nf8e4.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
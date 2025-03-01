
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./UserContext";  // ✅ Import UserProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>  {/* ✅ Wrap App inside UserProvider */}
      <App />
    </UserProvider>
  </React.StrictMode>
);

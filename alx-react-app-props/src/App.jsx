import React from "react";
import { UserProvider } from "./context/UserContext"; // Adjust path if needed
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;



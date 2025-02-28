
import { createContext, useState } from "react";

// Create the Context
export const UserContext = createContext();

// Create the Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}



import { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

// Create Provider Component
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

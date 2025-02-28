import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create the provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}


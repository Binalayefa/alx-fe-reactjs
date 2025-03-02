import { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

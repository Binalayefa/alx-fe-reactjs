import React, { useContext } from "react";

import { UserContext } from "./UserContext";

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
      <button onClick={() => setUser({ name: "Bob", age: "30", bio: "Loves coding" })}>
        Update User
      </button>
    </div>
  );
}

export default UserProfile;



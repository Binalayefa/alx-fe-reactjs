import { useContext } from "react";
import { UserContext } from "../context/UserContext";
 


function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;


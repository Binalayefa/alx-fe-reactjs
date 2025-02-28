
import { useContext } from "react";
import { UserContext } from "../UserContext";  // Import UserContext

function ProfilePage() {
  const { user } = useContext(UserContext);  // Consume user data from context

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default ProfilePage;



<<<<<<< HEAD
// UserProfile component
function UserProfile() {
  console.log('Rendering UserProfile component');

  return (
    <div
      className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 rounded-full mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
=======

import { useContext } from "react";
import { UserContext } from "../UserContext";  // ✅ Import UserContext

function UserProfile() {
  const { user } = useContext(UserContext);  // ✅ Consume context

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
>>>>>>> 7d7b532c18aee3569206502f9af2af96580d6e59
    </div>
  );
}

export default UserProfile;

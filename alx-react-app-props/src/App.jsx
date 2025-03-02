import ProfilePage from "./ProfilePage";
import { UserProvider } from "./UserContext"; // Ensure correct import

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;




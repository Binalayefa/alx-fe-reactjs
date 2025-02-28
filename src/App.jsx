import ProfilePage from "./components/ProfilePage";
import { useState } from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from './components/WelcomeMessage';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {  // ✅ Function definition must be here
  const [count, setCount] = useState(0);

  return (  // ✅ Return is inside the function
    <>
      {/* Grouping all content inside one parent div */}
      <div>
        <Header />
        <MainContent />
        <WelcomeMessage />
        <ProfilePage name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
      </div>

      {/* Vite and React logos section */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Counter button section */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// ✅ Ensure export is after the function, not before return
export default App;






import { useState } from "react";
import AppNavbar from "./components/layout/Navbar";
import AuthModal from "./components/auth/AuthModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <AppNavbar onAuthClick={() => setShowLogin(true)} />

      <AuthModal
        show={showLogin}
        handleClose={() => setShowLogin(false)}
      />
    </>
  );
}

export default App;
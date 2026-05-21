import { useState } from "react";
import AppNavbar from "./components/layout/Navbar";
import AuthModal from "./components/auth/AuthModal";
import Slot8_1 from "./components/slot8/Slot8_1";
import Slot8_2 from "./components/slot8/Slot8_2";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    // <>
    //   <AppNavbar onAuthClick={() => setShowLogin(true)} />

    //   <AuthModal
    //     show={showLogin}
    //     handleClose={() => setShowLogin(false)}
    //   />
    // </>
    <>
      <Slot8_1 />
    </>
  );
}

export default App;
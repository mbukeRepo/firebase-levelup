import React from "react";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import { AuthProvider } from "./context/auth-context";

const App = () => {
  return (
    <AuthProvider>
      <div className="text-white">
        <NavBar />
        <Home />
      </div>
    </AuthProvider>
  );
};

export default App;

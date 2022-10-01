import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import "./App.css";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { isFirebaseInitilized } from "./services/firebaseServices";

function App() {
  const [firebaseInitilized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    const initialized = async () => {
      const response = await isFirebaseInitilized();
      setFirebaseInitialized(response);
    };
    initialized();
  });

  return firebaseInitilized !== false ? (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  ) : (
    "Cargando..."
  );
}

export default App;

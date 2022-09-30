import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import "./App.css";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

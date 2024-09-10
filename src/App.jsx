import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Products } from "./components/Products/Products";
// import { Navbar } from "./components/Home/Navbar/Navbar";
import "./App.css";
import { Users } from "./components/Users/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/usuarios" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

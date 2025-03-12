import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Registration from "./components/Registration.jsx";
import Navbar from "./components/Navbar.jsx";
import Entertaiment from "./components/Entertaiment";
import Attraction from "./components/Attractions";
import Footer from "./components/Footer";
import Gif from "./components/Gif";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <div className="container">
        <Registration />
        <Entertaiment />
        <Attraction />
        <Gif />
        <Footer />
      </div>
    </div>
  );
}

export default App;

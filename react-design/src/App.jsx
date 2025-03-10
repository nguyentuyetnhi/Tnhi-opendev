import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Registration from "./components/Registration.jsx";
import Hero from "./components/Hero.jsx"
import Entertaiment from "./components/Entertaiment";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Registration />
      </div>
      < Entertaiment />
    </>
  )
}

export default App

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

      <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Rregistration
      </button>
    </>
  )
}

export default App

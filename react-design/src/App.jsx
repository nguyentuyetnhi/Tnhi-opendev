import { useState } from 'react'
import './App.css'
import Slideshow from "./components/Slideshow.jsx";
import Registration from "./components/Registration.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slideshow />
      <Registration />
      <div className=" text-white p-6 rounded-lg shadow-lg bg-black pd-50">

        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Rregistration
        </button>
      </div>
    </>
  )
}

export default App

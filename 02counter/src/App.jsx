import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter(counter+1)
  }

  const decreaseValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={decreaseValue}>Decrease Value</button>

    </>
  )
}

export default App

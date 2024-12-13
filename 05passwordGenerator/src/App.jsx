import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()_+=-`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-700 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-purple-200 bg-purple-400 '>
        <h5 className='text-white text-center my-3'>Password Generator</h5>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value = {password} 
          className='outline-none w-full py-1 px-3 bg-slate-100' 
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='bg-purple-600 px-2'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {setNumberAllowed((prev) => !prev); 
            }} />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {setCharAllowed((prev) => !prev); 
            }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

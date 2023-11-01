import { useRef, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const change=()=>{
    setCount(count+1)
  }
  return (
    <>
    <p>{count}</p>
      <button onClick={change}>click</button>
    </>
  )
}

export default App

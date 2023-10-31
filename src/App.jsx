import { useRef, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
let number=useRef(0)
const change=()=>{
  number.current++;
  console.log(number.current)
}
  return (
    <>
      <button onClick={change}>click</button>
    </>
  )
}

export default App

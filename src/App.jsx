import { useRef, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
let headline=useRef()
const change=()=>{
  headline.innerHTML="<ul><li>Hero<li>zero</li></ul>"
}
  return (
    <>
      <h1 ref={(h1)=>headline=h1}></h1>
      <button onClick={change}>click</button>
    </>
  )
}

export default App

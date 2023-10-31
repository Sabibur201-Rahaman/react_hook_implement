import { useRef, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
let myHeadline=useRef()
const change=()=>{
  myHeadline.current.classList.remove('text-success')
  myHeadline.current.classList.add('text-primary')
}
  return (
    <>
    <h1 className='text-success' ref={myHeadline}>hello this is ostad platform</h1>
      <button onClick={change}>click</button>
    </>
  )
}

export default App

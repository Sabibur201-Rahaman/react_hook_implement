import { useRef, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
let myImg=useRef()
const change=()=>{
  myImg.current.src='https://placehold.co/600x400?text=hello+world'
myImg.current.setAttribute('height','150px')
myImg.current.setAttribute('width','400px')
}
  return (
    <>
    <img ref={myImg}src='https://placehold.co/600x400'/>
      <button onClick={change}>click</button>
    </>
  )
}

export default App

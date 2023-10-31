import { useRef, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)
let apiData=useRef(null)
let myPtag=useRef()

let fetchData=async()=>{
const response=await fetch("https://dummyjson.com/products")
console.log(response)
 apiData.current=await response.json()
}
let showData=()=>{
myPtag.current.innerText=JSON.stringify(apiData.current)
}
  return (
    <>
    <p ref={myPtag}></p>
      <button onClick={fetchData}>FetchData</button>
      <button onClick={showData}>ShowData</button>
    </>
  )
}

export default App

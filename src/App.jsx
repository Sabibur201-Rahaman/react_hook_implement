import React from 'react'
import { useEffect } from 'react'
function App() {
  useEffect(()=>{
console.log('heloo')
  },[4])
  return (
    <div>
      <h1>this is react effect</h1>
    </div>
  )
}

export default App

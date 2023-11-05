import React from 'react'
import Menu from '../components/Menu'
import { useParams } from 'react-router-dom'
function Product() {
  let{id,name}=useParams()
  return (
    <div>
      <Menu/>
      <p>id:{id}</p>
      <p>name:{name}</p>
        
      <h1>this is Product page</h1>
    </div>
  )
}

export default Product

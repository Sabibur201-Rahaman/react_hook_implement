import React, { useEffect, useState } from 'react'

function Asyn() {
let[data,setData]=useState()
    useEffect(()=>{
        (async()=>{
           let response=await fetch('https://dummyjson.com/products/1')
            let result=response.json() 
            setData(result)
        })()
    },[])
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Asyn

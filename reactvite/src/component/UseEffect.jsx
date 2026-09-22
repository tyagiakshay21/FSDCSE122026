import React, { useEffect, useState } from 'react'

function UseEffect () {
    const[counter,setCounter]=useState(0);
    const[pointer,setPointer]=useState(1000)
    const[product,setProduct]=useState([]);

    useEffect(()=>{
        //.log("hello" + counter)
        //console.log("Hi" + pointer)
       // denpendency array,
      async function fetchData(){
        try {
            const data=await fetch('https://fakestoreapi.com/products')
            const jsonData=await data.json()
            setProduct(jsonData)
        }catch(e){
          return(e.message)
        }
      }
      fetchData()
    },[])
    return (
      <>
    {/* use effect work on the react lifecycle */}
    {/* while using associate  */}
    <div>UseEffect</div>
    <h2>{counter}</h2>
    <h2>{pointer}</h2>

    <button onClick={()=>setCounter(counter+10)}>Counter</button>
    <br></br>
    <button onClick={()=>setPointer(pointer+20)}>pointer</button>
    <br></br>
    {JSON.stringify(product)}
    </>
  )
}

export default UseEffect

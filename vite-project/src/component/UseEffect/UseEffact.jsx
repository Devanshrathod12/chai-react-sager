import React, { useState , useEffect } from 'react'

const UseEffact = () => {

const [fst,setfst] = useState(0);

function Devansh(){
    setfst(fst+1)
}

useEffect( () => {
console.log("hy devansh");
const clear = setInterval(()=>{
    console.log("hy bro good thinking hai");
},2000)
return (()=>{
    clearInterval(clear)
})
},[])

  return (
    <>
    <input type="text" onChange={Devansh}/>
    <div>{fst}</div>
    </>
  )
}

export default UseEffact

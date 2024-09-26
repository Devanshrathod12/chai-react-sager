import React ,{useRef}from 'react'
import Forref2 from './Forref2';

const Forref1 = () => {
    const ref = useRef()
    function func(){
   console.log(ref.current.value);
   let a=ref.current.value;
   {
    (a=="react")?
    alert("you are selected for 10 lpa pakeg")
    :
    alert("you are not slected ")
   }
}
  return (
    <div>
       <Forref2  ref={ref} />
      <button onClick={func} >button</button> 
    </div>
  )
}

export default Forref1

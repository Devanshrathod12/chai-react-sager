import React, { useRef } from "react";
import UseImpretiveHandel2 from "./UseImpretiveHandel2";

const UseImpretiveHandel = () => {
    const first = useRef();
    function func() {
      console.log(first.current.focus());  
    }
    
  return (
    <div>
      <UseImpretiveHandel2 ref={first}  />
      <button onClick={func}>button</button>
    </div>
  )
}

export default UseImpretiveHandel

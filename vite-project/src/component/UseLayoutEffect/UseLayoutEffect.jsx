import React ,{useEffect,useLayoutEffect} from 'react'

const UseLayoutEffect = () => {
    useEffect(() => {
        console.log(" async useEffect");
      
      }, [])
      useEffect(() => {
        console.log("async state");
      
      }, [])
      
       useLayoutEffect(() => {
         console.log(" useLayout sync working");
      
       }, [])
  return (
    <div>
      
    </div>
  )
}

export default UseLayoutEffect

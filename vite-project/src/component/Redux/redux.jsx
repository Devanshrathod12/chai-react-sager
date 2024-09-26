import React from 'react'

const redux = () => {
    function fun(value){
  const obj={
    name:"devansh",
    nan:value,
    integ:0
  }
  return obj
}
const sun = fun(3)
console.log(sun);
sun.name = "sager"
sun.nan=[1,2,3,4,5,6,7,"devansh","hashal","bhart","mohit"]
console.log(sun);
  return (
    <div>
      
    </div>
  )
}

export default redux

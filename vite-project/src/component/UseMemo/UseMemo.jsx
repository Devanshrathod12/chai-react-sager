import React, {useState , useMemo} from 'react'

const UseMemo = () => {
    const [first, setfirst] = useState(0)
    const [Toggle, setToggle] = useState(true)
      function func(){
    setfirst(first + 1)
  }
   function sum(a,b){
  console.log("hi this is console log")
   return (a+b)
 }

  const result = useMemo(() => {
      return sum(3,5)
  },[Toggle])
  return (
   <>
   <button onClick={func}>triggert</button>
       <p>{first}{result}</p>
       <button onClick={()=>{
        setToggle(!Toggle)
       }}>{(Toggle)?"this is a button":"this is not button"}</button>
   </>
  )
}

export default UseMemo

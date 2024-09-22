import React ,{useDebugValue, useState}from 'react'

const useMath = (a) => {
  const [first, setfirst] = useState("")
  useDebugValue(first)
    let sum = a + 3;
    let nul = a * 3;
    useDebugValue(sum)
  return [sum,nul]
}

export default useMath

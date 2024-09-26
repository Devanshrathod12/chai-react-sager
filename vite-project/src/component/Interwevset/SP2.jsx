import React from 'react'
import { useState } from 'react'
const SP2 = () => {
    const [first, setfirst] = useState(0)
    function devansh(){
        setfirst(first+1)
    }
  return (
    <div>
        <button onClick={devansh} >BRO SUS</button>
        <p>COUNT {first}</p>
    </div>
  )
}

export default SP2

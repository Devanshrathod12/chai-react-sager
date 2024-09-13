import React, { useState } from 'react'

const Function = () => {const [state,setState] = useState("")
    function devansh(e){
        setState(e.target.value)
        e.preventDefault()
    }

  return (
   <form onSubmit={devansh} >
    <input type="text" placeholder='userName' onChange={devansh}/>
    <div>{state}</div>
    <button type='submit' >submit</button>
   </form>
  )
}

export default Function

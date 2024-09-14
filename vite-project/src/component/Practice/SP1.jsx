import React, {useEffect, useState} from 'react'

const SP1 = () => {
  const [first, setfirst] = useState()
  function change(e) {
    setfirst(e.target.value)
  }
  useEffect(()=>{
  })

  return (
    <form >
    <input type="text" placeholder='userName' onChange={change}/>
    <div>{first}</div>
    </form>
  )
}

export default SP1

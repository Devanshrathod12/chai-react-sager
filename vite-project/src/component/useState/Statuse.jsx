import React, {useState} from 'react'

const Statuse = () => {
   const [first, setfirst] = useState(0)
   function fun(){
    setfirst(first + 1)
   }
  return (
    <div>
        <p>count{first}</p>
      <button onClick={fun}>change</button>
    </div>
  )
}

export default Statuse

import React,{useCallback ,useState} from 'react'
import UseCollbeck2 from './UseCollbeck2'
const UseCollbeck = () => {

const [first, setfirst] = useState(0)
function func(){
  setfirst(first+1)
}
const fun2 = useCallback(
  () => {
   action
  },
  [first],
)
  return (
    <div>
      <button  onClick={func} >trigger</button>
      <h2>{first}</h2>
     <UseCollbeck2 fun2={fun2}  />
    </div>
  )
}

export default UseCollbeck

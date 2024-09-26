import React from 'react'
import { useContext } from 'react'
import { Var } from './context'
const ContextShow = () => {
    const first = useContext(Var)
    
      return  <div>{first}</div>
}

export default ContextShow

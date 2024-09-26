import React from 'react'
import { createContext } from 'react'
import ContextShow from './contextShow'
let Var = createContext() // alwes capital
const context = () => {
  return (
    <div>
      <Var.Provider value="react.js with sager">
         <ContextShow />
      </Var.Provider>
    </div>
  )
}

export default context
export {Var}

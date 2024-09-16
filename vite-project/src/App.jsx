import React ,{createContext} from 'react'
// import Function from './component/Function/Function'
// import NamedandDfault,{Devansh,Sager,Bhart} from './component/NamedandDfault'
//import UseEffact from './component/UseEffact'
//import AxiosApi from './component/AxiosApi'
//import SP1 from './component/Practice/SP1'
//import SP2 from './component/Practice/SP2'
//import SP3 from './component/Practice/SP3'
import A1 from './component/context/A1'

let Vj = createContext();

const App = () => {
  return (
    // <Func />
    //<Function />
   // <Sager />
   // <Devansh />
   // <NamedandDfault />
   // <Bhart />
   //<UseEffact />
   // <AxiosApi />
   // <SP1 />
   //<SP2 />
   //<SP3 />
  // <AxiosApi />
    <div>
      <Vj.Provider value="context api lernnig with sager bhai" >
       <A1 />
      </Vj.Provider>
    </div>
  )
}

export default App
export {Vj}

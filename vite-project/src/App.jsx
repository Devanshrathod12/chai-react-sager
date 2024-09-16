import React ,{useRef} from 'react'
import './App.css'
// import Function from './component/Function/Function'
// import NamedandDfault,{Devansh,Sager,Bhart} from './component/NamedandDfault'
//import UseEffact from './component/UseEffact'
//import AxiosApi from './component/AxiosApi'
//import SP1 from './component/Practice/SP1'
//import SP2 from './component/Practice/SP2'
//import SP3 from './component/Practice/SP3'
// import A1 from './component/context/A1'

// let Vj = createContext();

const App = () => {
  const first = useRef(null)
  const submit = (e) => {
    e.preventDefault()
    console.log(first.current.value);
    
    let name = first.current.value;
    (name==="devansh")
    ?
    alert(" you win bike")
    :
    alert("again you win items")
  }
  return (
    <div className="centered-div">
      <div className="content">
        <form onSubmit={submit} >
          <input ref={first} />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}
export default App



// export {Vj}
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
  //  <Vj.Provider value="context api lernnig with sager bhai" >
  //<A1 />
  //</Vj.Provider>

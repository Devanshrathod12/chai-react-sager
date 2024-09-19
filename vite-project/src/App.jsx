import React, { useCallback, useState} from "react";
import "./App.css";
// import Function from './component/Function/Function'
// import NamedandDfault,{Devansh,Sager,Bhart} from './component/NamedandDfault'
//import UseEffact from './component/UseEffact'
//import AxiosApi from './component/AxiosApi'
//import SP1 from './component/Practice/SP1'
//import SP2 from './component/Practice/SP2'
//import SP3 from './component/Practice/SP3'
import A1 from './component/context/A1'
// let Vj = createContext();
//import { useReducer } from "react";

const App = () => { 

  const [first, setfirst] = useState(0)
  function func(){
    setfirst(first+1)
  }
  const fun2 = useCallback(
    () => {
      
    },
    [first],
  )
  
  return (
    <div className="centered-div">
      <div className="content">
      <button  onClick={func} >trigger</button>
      <h2>{first}</h2>
       <A1 fun2={fun2}  />
      </div>
    </div>
  );
};
export default App;

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

//, { useRef }

//const first = useRef(null)
// const submit = (e) => {
//   e.preventDefault()
//   console.log(first.current.value);

//   let name = first.current.value;
//   (name==="devansh")
//   ?
//   alert(" you win bike")
//   :
//   alert("again you win items")
// }
//   <form onSubmit={submit} >
//   <input ref={first} />
//   <button>submit</button>
// </form>



//==================================

//const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// };
// const intialstate = { count: 0 };

// const [state, dispatch] = useReducer(reducer, intialstate);
// Count : {state.count}
// <button
//   onClick={() => {
//     dispatch({ type: "decrement" });
//   }}
// >
//   -
// </button>
// <button
//   onClick={() => {
//     dispatch({ type: "increment" });
//   }}
// >
//   +
// </button>


//==================================  usememo 

 {/* <button onClick={func}>triggert</button>
       <p>{first}{result}</p>
       <button onClick={()=>{
        setToggle(!Toggle)
       }}>{(Toggle)?"this is a button":"this is not button"}</button> */}

       //   const [first, setfirst] = useState(0)
//   const [Toggle, setToggle] = useState(true)

//   function func(){
//     setfirst(first + 1)
//   }
  
//  function sum(a,b){
//   console.log("hi this is console log")
//    return (a+b)
//  }

//   const result = useMemo(() => {
//       return sum(3,5)
//   },[Toggle])


//==========================
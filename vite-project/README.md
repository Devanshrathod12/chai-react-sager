# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## props and pass fub=nctin us a props in eact 
```
import React, { useState } from 'react'

let a = 5
function devansh(){
  alert("sager tiech return react.js if else")
}
function Func(props) {
  
  //*************************************************************  pass function us a props */
    const [state,setState] = useState("devansh")

    function change (){ 
       setState("sager")
    }
  return (
    <>
    <div>{props.tittle}</div>
    <button onClick={change} >change</button>
    </>
  )

//  if (1) {
//   return (<>
//   <div>devansh</div>
//      <div onClick={devansh} > youtube sager simply js</div>
//      </>
//   )
//  }else{
//   return (<div>sager</div>)
//  }

// return(
// <>
//   <h1>devansh</h1>
//   {a==5 ? <> <div>rohit</div> <div onClick={devansh} >sager</div> </>
//   : <div>sager</div>  }
// </>
// )

}

export default Func

```
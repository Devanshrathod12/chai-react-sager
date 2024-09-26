import React from 'react'
import Func from './func'
const Pass = () => {
    function perent (){
        alert(`this is parent`)
        
     }
     return (
     <Func  perent={perent} />
     )
}

export default Pass

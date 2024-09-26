import React,{forwardRef} from 'react'

const Forref2 = (props,ref) => {
    console.log("code with sager bhai");
  return (
    <div>
      <input ref={ref}/>
    </div>
  )
}

export default forwardRef(Forref2)

import React,{forwardRef,useImperativeHandle,useRef} from 'react'

const UseImpretiveHandel2 = (props,first) => {
    const refrence = useRef()
    useImperativeHandle(first,()=>({
        focus: () =>{
          return refrence.current.value;
         }
    }))
  return (
    <div>
      <input ref={refrence} />
    </div>
  )
}

export default forwardRef(UseImpretiveHandel2)

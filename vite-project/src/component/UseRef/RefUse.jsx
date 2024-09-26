import React, { useRef } from "react";

const RefUse = () => {
  const first = useRef(null);
  const submit = (e) => {
    e.preventDefault();
    console.log(first.current.value);

    let name = first.current.value;
    name === "devansh" 
    ? 
    alert(" you win bike") 
    :
     alert("again you win items");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input ref={first} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default RefUse;

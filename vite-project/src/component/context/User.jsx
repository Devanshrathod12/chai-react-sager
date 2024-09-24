import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase , decrease } from "../../count";

const User = () => {
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();
  function fun() {
    dispatch(increase())
  }
  function fun2() {
    dispatch(decrease())
  }
  return (
    <div>
      user{count}
      <button onClick={fun}>increase</button>
      <button onClick={fun2}>decrease</button>
    </div>
  );
};

export default User;

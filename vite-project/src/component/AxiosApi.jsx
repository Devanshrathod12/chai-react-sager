import { React, useEffect, useState } from "react";
import axios from "axios";
const AxiosApi = () => {
  const [first, setfirst] = useState({});
  const [id, setid] = useState(1);
  const [button,setbutton] = useState(1)


  function ClickData(){
    setbutton(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${button}`)
      .then((res) => {
        console.log(res);
        setfirst(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[button]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
      <button onClick={ClickData}> mujhe Data Dedo</button>
     <p>{first.title}</p> <p>{first.id}</p> <p>{first.body}</p>  
    </div>
  );
};

export default AxiosApi;

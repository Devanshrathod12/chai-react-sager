import {React,useEffect,useState} from 'react'
import axios from 'axios'
const AxiosApi = () => {
    const [first, setfirst] = useState({})
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/19").then(res=>{
        console.log(res);
        setfirst(res.data)
    }).catch(err=>{
        console.log(err);
    })
   })
  return (
    <div>  
        {first.title}
    </div>
  )
}

export default AxiosApi

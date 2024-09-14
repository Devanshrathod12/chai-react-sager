import {React,useEffect,useState} from 'react'
import axios from 'axios'
const AxiosApi = () => {
    const [first, setfirst] = useState({})
    const [id,setid]=useState(1)
   useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
        console.log(res);
        setfirst(res.data)
    }).catch(err=>{
        console.log(err);
    })
   })
  return (
    <div>  
        <input type="text" value={id} onChange={e=>setid(e.target.value)} />
        {first.title} {first.id} {first.body}
    </div>
  )
}

export default AxiosApi

import { useState,useEffect} from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState(null)
  const [city, setcity] = useState("indore")
 function fun(e){
  setcity(e.target.value)
  console.log(e.target.value);
 }
  useEffect(() => {
    const fechapi = async ()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=455880e4c2b6874a74014041200ab80d`;
      const responce = await fetch(url)
      const result = await responce.json()
      setdata(result.main);
      console.log(result);
    }
    fechapi()
  }, [city])
  

  return (
    <>
     <input type="text" className='bg-black text-white' onChange={fun}/>
       {data.temp}
    </>
  )
}

export default App

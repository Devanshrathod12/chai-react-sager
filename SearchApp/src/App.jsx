import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState([])

  function searchchange(e){
    if(!e.target.value) return setsearch(data)
    const filterArrayaaya = data.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
     setsearch(filterArrayaaya)
  }

  useEffect(() => {
      const fechapi = async ()=> {
          const url ="https://jsonplaceholder.typicode.com/posts";
          const response = await fetch(url)
          const result = await response.json();
          console.log(result);
          setdata(result)
          setsearch(result)
      }
      fechapi()
  }, [])
  console.log(data);
  console.log(search);
  
  return (
    <>
    <input type='text' className='bg-grey=800 text-white pb-3 font-extrabold' onChange={searchchange} />
     {
    search.map((a)=>{
       return(
        
        <div key={a.id} className='w-full h-full text-center bg-purple-300' >
          <p className='text-red-500 font-extrabold text-left'>
            ID:{a.id}
          </p>
          <h2 className='text-red-500 font-extrabold text-left '><span className='text-black font-semibold'>Title :</span> {a.title}</h2>
          <p  className='text-blue-500 font-extrabold' >
            {a.body}
          </p>
          
        </div>
       )
    })
  }

    </>
  )
}

export default App

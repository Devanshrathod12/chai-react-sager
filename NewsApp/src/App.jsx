import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [news, setnews] = useState([])
  const [changeapi, setchangeapi] = useState("laptop")

  function change(e){
    setchangeapi(e.target.value)
    e.preventDefault(); 
  }
 
  const api = async () =>{
    let response = await fetch(`https://newsapi.org/v2/everything?q=${changeapi}&apiKey=548c5621316748389acce14bbf57c617`)
    let result = await response.json()
    console.log(result);
    setnews(result.articles)
    
}

useEffect(()=>{
    api()
},[changeapi]) 
console.log(news)

return (
    <>
    <input type='text' className='bg-black' onChange={change} />
             <div className="grid gap-2 lg:grid-cols-4">
                {news.map((a, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={a.urlToImage}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {a.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {a.content}
                            </p>
                            <a href={a.url} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
    </>
  )
}

export default App

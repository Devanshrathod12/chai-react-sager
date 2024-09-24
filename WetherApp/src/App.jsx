import React, { useState, useEffect } from "react";
import './App.css'
import img from './assets/img.png'

const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("indore");

  function func(e) {
    setCity(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=455880e4c2b6874a74014041200ab80d`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setData(result.main);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchApi();
  }, [city]);

  return (
    <> 
    <div id="h" className="bg-green-900 w-[80rem] h-[100vh] m-[-2rem] " >
      <input type="text" className="bg-black text-white mt-10 pt-3 font-extrabold text-center rounded-[2rem]" onChange={func} />
      <div className="font-extrabold text-black-900 text-[2rem] mt-4">
        <div className="w-[20rem] h-[20rem] bg-black ml-[30rem] mt-4 text-white rounded-[4rem] font-extrabold text-2xl" >
          <img src={img} alt="" className="w-[200px] h-[200px] pt-9 pl-14 rounded-3xl" />
          {data ? data.temp : "Loading..."}</div></div>
      </div>
    </>
  );
};

export default App;

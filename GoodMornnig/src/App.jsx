import React from 'react'

let hour = new Date();
hour = hour.getHours()

let greet = "";
console.log(greet);


const App = () => {

  if (hour>0 && hour<12) {
    greet="Good Mornnig"
  } else if (hour>12 && hour<20){
    greet="Good AfterNoon"
  } 
  else if (hour>20 && hour <24) {
    greet="Good Night"
  }

  return (
    <div>
      App <br />
      {greet}
    </div>
  )
}

export default App

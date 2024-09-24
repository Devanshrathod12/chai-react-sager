import React from 'react'
let hour = new Date(2024,9,24,23);
hour = hour.getHours()
let styling = {
}
let greet = "";
const App = () => {
  if (hour>0 && hour<12) {
    greet="Good Mornnig"
    styling.color="green"
  } else if (hour>12 && hour<20){
    greet="Good AfterNoon"
    styling.color="purple"
  } 
  else if (hour>20 && hour <24) {
    greet="Good Night"
    styling.color="blue"
  }
  return (
    <div>
      App <br />
      <span style={styling}>{greet}</span>
     
    </div>
  )
}

export default App

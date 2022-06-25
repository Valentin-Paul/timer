import './App.css';
import { useState, useEffect } from 'react';


function App() {

  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0)
  var interval = null;
  let minuteStop = false;
  let secondStop = false;
 
 
   


const runTimer = ()=>{

  console.log(interval)
  if(secondStop === true && minuteStop === true){
    console.log("000")
    clearInterval(startTimer)
  }
  else{
    setSeconds((prevSeconds)=>{
      if(prevSeconds > 1){
        secondStop = false
     return prevSeconds -1
      }
      else if(prevSeconds === 1){
        secondStop = true
        setMinutes((prevMinutes)=>{
          if(prevMinutes > 0){
          return prevMinutes
          }
          else if(prevMinutes == 0){
            console.log(prevMinutes, "brr")
            minuteStop = true
            return prevMinutes
          }
        })
        return prevSeconds -1
      }
      else if(prevSeconds === 0){
        setMinutes((prevMinutes)=>{
      console.log(prevMinutes, "prrrrevMinuuutes")
            return prevMinutes -1
          
        })
        return 59;
      }
    })
  }
}

  let startTimer = ()=>{
  
    setInterval(runTimer, 1000);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer</h1>

        <form>
        Minutes:
          <input type="number" onChange={(e) => setMinutes(e.target.value)}></input>
        Seconds: 
        <input type="number" onChange={(e) => setSeconds(e.target.value)}></input>
        
        </form>

        <h3>{minutes === undefined? "00": (minutes === undefined || minutes.toString().length === 1? "0" + minutes : minutes)}:{seconds === undefined || seconds.toString().length === 1? "0" + seconds : seconds}</h3>
        <button onClick={()=>{startTimer()}}>START</button>
      </header>
    </div>
  );
}

export default App;

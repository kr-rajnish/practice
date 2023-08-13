// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(60);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     let timer;

//     if (!isPaused && seconds > 0) {
//       timer = setInterval(() => {
//         setSeconds((prevSeconds) => prevSeconds - 1);
//       }, 1000);
//     }

//     return () => clearInterval(timer);
//   }, [isPaused, seconds]);

//   const handlePauseResume = () => {
//     setIsPaused((prevIsPaused) => !prevIsPaused);
//   };

//   const handleReset = () => {
//     setSeconds(60);
//     setIsPaused(false);
//   };

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <p>Time left: {seconds} seconds</p>
//       <button onClick={handlePauseResume}>
//         {isPaused ? "Resume" : "Pause"}
//       </button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Timer;

import Form from "./Form";
import "./styles.css";
import TodoList from "./TodoList";
import DataFetcher from "./DataFetcher";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TodoList /> */}
      {/* <Form /> */}
      <DataFetcher />
    </div>
  );
}

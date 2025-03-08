import { useState, useEffect } from 'react';
import './Lesson01.css';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';




function Lesson01() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleClick = () => {
    setCount((count) => count + 1);
    setIsRunning(true);
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h4>Lesson01</h4>
      <h2>Vite + React</h2>
      <h2>Lesson 1</h2>
      <h3>Date 08.01.2025</h3>
      <h3>Introduction in React</h3>

      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
       
        <h3>Time elapsed: {timer} seconds</h3>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default Lesson01
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const Statistics = (props) => {
  if(props.stats[0] !== 0 || props.stats[1] !==0 || props.stats[2]!==0) {
    return(
      <div>
        <h2>Statistics</h2>
        <table text-align="center">
          <tbody>
            <tr>
              <td>Good</td>
              <td>{props.stats[0]}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{props.stats[1]}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{props.stats[2]}</td>
            </tr>
            <tr>
              <td>All</td>
              <td>{props.stats[0] + props.stats[1] + props.stats[2]}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{(1*props.stats[0] + 0*props.stats[1] -1*props.stats[2])/(props.stats[0] + props.stats[1] + props.stats[2])}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{100*props.stats[0]/(props.stats[0] + props.stats[1] + props.stats[2])}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }else{
    return(
      <div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>
    )
  }
}

const Button = (props) => {
  const handleClickGood = () => props.seters[0](props.stats[0] + 1)
  const handleClickNeutral = () => props.seters[1](props.stats[1] + 1)
  const handleClickBad = () => props.seters[2](props.stats[2] + 1)
  return(
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button stats={[good, neutral, bad]} seters={[setGood,setNeutral,setBad]} />
      <Statistics stats={[good, neutral, bad]} />
      
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

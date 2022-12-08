import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(props.anecdotes.length))
  const [index, setIndex] = useState(0)

  const handleClick = () => setSelected(Math.floor(props.anecdotes.length*Math.random()))
  const handleVote = () => {
    points[selected] = points[selected]+1;
    setPoints([...points])
    for(let i = 0 ; i < props.anecdotes.length ; i++){
      if(points[i] === Math.max(...points)){
        setIndex(i);
      }
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has: {points[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[index]}
      <p>has: {points[index]} votes</p>
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);


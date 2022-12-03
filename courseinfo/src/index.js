import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>
const Part = ({partsEx}) => <p>{partsEx[0]} {partsEx[1]}</p>
const Content = ({parts}) => {
  return(
    <div>
      <Part partsEx={[parts[0], parts[3]]} />
      <Part partsEx={[parts[1], parts[4]]} />
      <Part partsEx={[parts[2], parts[5]]} />
    </div>
  )
  
}
const Total = ({exercise}) => <p>Number of exercises {exercise[0] + exercise[1] + exercise[2]}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3, exercises1, exercises2, exercises3]} />
      <Total exercise={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
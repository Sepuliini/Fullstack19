import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
    return (
        <button onClick = {props.handleClick}>
            {props.text}
        </button>
    )
}

const Anecdote = (props) => {
    return (
        <div>
            <p> has {props.votes} votes</p>
        </div>
    )
}

const MostVotes = (props) => {
    return (
        <div>         
            <p>{anecdotes[props.most.indexOf(Math.max(...props.most))]}</p>
            <p>has {props.most[props.most.indexOf(Math.max(...props.most))]} votes</p>
        </div>
    )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  return (
    <div>
      <h2>
      {props.anecdotes[selected]}
      </h2>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))} text = "next anecdote"/>

      <Button handleClick={() => { const copy = [...votes]; copy[selected] += 1; setVotes(copy); }} text={"vote"} />

      <Anecdote votes = {votes[selected]}/>
      
      <h3>Anecdote with most votes</h3>
      <MostVotes most = {votes}/>

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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
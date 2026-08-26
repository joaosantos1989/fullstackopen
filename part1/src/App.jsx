import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

//unicafe exercice
const StatisticLine = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  if (total === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={(props.good - props.bad) / total} />
      <StatisticLine text="positive" value={(props.good / total) * 100} />
    </>
  )
}

//anecdote exercice
const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

const Anecdote = (props) => {
  return (
      <>
        <h1>Anecdote of the day</h1>
        <p>{props.text}</p>
        <p>has {props.votes} votes</p>
      </>
    )
  }

const MostVoted = (props) => (
  <>
    <h1>Anecdote whit most votes</h1>
    <p>{props.mostVotes}</p>
  </>
)

const App = () => {
  // unicafe exercice
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //anecdotes exercice
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const highestVotes = Math.max(...votes)
  const mostVotedIndex = votes.indexOf(highestVotes)

  //handler votes
  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>

      <div>
        <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
        <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
        <Button handleClick={vote} text='vote' />
        <MostVoted mostVotes={anecdotes[mostVotedIndex]} />
      </div>
    </>
  )
}

export default App
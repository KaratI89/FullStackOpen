import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text} </button>
)

const App = () => {
  const anecdotes = [
    'The best way to get a project done faster is to start sooner',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'How does a project get to be a year late?... One day at a time.',
    'The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging',
    'Plan to throw one (implementation) away; you will, anyhow.',
    'Every good work of software starts by scratching a developers personal itch',
    'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away'
  ]
  const [selected, setSelected] = useState(0)
  const [ratings, setRatings] = useState(new Array(anecdotes.length).fill(0))
  const handleSelected = () => {
    const numberAnecdots = anecdotes.length
    const getRandomInt = () => Math.floor(Math.random() * numberAnecdots)
    let int = 0
    do {
      int = getRandomInt()
    } while ( int === selected)
    setSelected(int)
  }
  
  const handleRatings = () => {
    const copyRatings = [...ratings]
    copyRatings[selected] += 1
    setRatings(copyRatings)
  }

  const maxRatings = ratings.indexOf(Math.max(...ratings))

  return (
    <>
    <p> {anecdotes[selected]} </p>
    <p> 'has {ratings[selected]} votes' </p>
    <Button handleClick = {() => handleRatings()} text = 'vote' />
    <Button handleClick = {() => handleSelected()} text = 'next anecdote' />
    <h3>Anecdote with most votes</h3>
    <p>{anecdotes[maxRatings]}</p>
    </>
  )
}

export default App

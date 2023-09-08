import { useState } from "react";

const Button =(props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics =(props) => {
const rating = [props.good, props.neutral, props.bad]
const sumRatings = rating.reduce((sum , current) => sum + current, 0)
const averageRatings = () => {
  const quotient = (rating[0]-rating[2]) / sumRatings
  if (!quotient) {
    return 0
  }
  return quotient
}
const goodPercent = () => {
  const quotient = rating[0] / sumRatings *100
  if (!quotient) {
    return 0
  }
  return quotient
}
return (
  <>
  good: {rating[0]}
  <br/>neutral: {rating[1]} 
  <br/>bad: {rating[2]} 
  <br/>all: {sumRatings}
  <br/>average: {averageRatings()}
  <br/>positive: {goodPercent()}
  </>
)
}

const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = (click) => {
    setGood(click)
  }

  const handleClickNeutral = (click) => {
    setNeutral(click)
  }

  const handleClickBad = (click) => {
    setBad(click)
  }
  return (
    <div>
      <h1>give feedback</h1>
    <Button handleClick={() => handleClickGood(good + 1)} text='good' />
    <Button handleClick={() => handleClickNeutral(neutral + 1)} text='neutral' />
    <Button handleClick={() => handleClickBad(bad + 1)} text='bad' />
    <h2>statistics</h2>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
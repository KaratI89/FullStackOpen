import { useState } from "react";

const Button =(props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display =(props) => {
const statistics = [props.good, props.neutral, props.bad]
return (
  <>
  <p>good: {statistics[0]} </p>
  <p>neutral: {statistics[1]} </p>
  <p>bad: {statistics[2]} </p>
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
    <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
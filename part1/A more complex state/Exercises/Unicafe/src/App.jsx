import { useState } from "react";

const Button =(props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => {
return(
  <tr>
    <td>{props.text}: </td>
    <td>{props.value} </td>
  </tr>
)
}

const Statistics =(props) => {
const rating = [props.good, props.neutral, props.bad]
const [good, neutral, bad] = rating
const sumRatings = rating.reduce((sum , current) => sum + current, 0)
const averageRatings = () => {
  const quotient = (good-bad) / sumRatings
  if (!quotient) {
    return 0
  }
  return quotient
}
const goodPercent = () => {
  const quotient = good / sumRatings *100
  if (!quotient) {
    return 0
  }
  return (`${quotient} %`)
}
if (sumRatings === 0) {
  return (
    <h3>No feedback given</h3>
  )
}
return (
  <table>
    <tbody>
    <StatisticLine text = {'good'} value = {good} />
    <StatisticLine text = {'neutral'} value = {neutral} />
    <StatisticLine text = {'bad'} value = {bad} />
    <StatisticLine text = {'all'} value = {sumRatings} />
    <StatisticLine text = {'average'} value = {averageRatings()} />
    <StatisticLine text = {'positive'} value = {goodPercent()} />
    </tbody>
  </table>
)
}

const App =() => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = (click) => {
    setGood(click + 1)
  }

  const handleClickNeutral = (click) => {
    setNeutral(click + 1)
  }

  const handleClickBad = (click) => {
    setBad(click + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
    <Button handleClick={() => handleClickGood(good)} text='good' />
    <Button handleClick={() => handleClickNeutral(neutral)} text='neutral' />
    <Button handleClick={() => handleClickBad(bad)} text='bad' />
    <h2>statistics</h2>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
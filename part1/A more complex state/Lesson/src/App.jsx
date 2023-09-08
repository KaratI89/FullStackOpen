import { useState } from "react"
const History = ({allclicks}) =>{
  if (allclicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allclicks.join(' ')}
    </div>
  )
}

const Button = (props) => (
    <button onClick={props.handlClick}>{props.text} </button>
  )

  const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)
  const SetToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }


/*   const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allclicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
 */
/*     const handleLeftClick = () => {
    setAll(allclicks.concat('L'))
    const newClick = {...clicks, left: clicks.left + 1}
    setClicks(newClick)
    setTotal(newClick.left + newClick.right)
  } 

    const handleRightClick = () => {
    setAll(allclicks.concat('R'))
    const newClick = {...clicks, right: clicks.right + 1}
    setClicks(newClick)
    setTotal(newClick.left + newClick.right)
   } */

  return (
    <div>
      <Display value={value} />
      <Button handlClick={() => SetToValue(1000)} text="thousend" />
      <Button handlClick={() => SetToValue(0)} text="reset" />
      <Button handlClick={() => SetToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App
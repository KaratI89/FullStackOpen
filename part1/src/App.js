const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app create by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = '59'
  return (
    <>
    <h1>Greetings</h1>
    <Hello name='Maya' age={10+7} />
    <Footer />
    <Hello name={name} age={age} />
    </>
  )
}
export default App;


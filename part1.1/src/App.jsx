const Header = (props) => {
  console.log(props)
  return (
    <>
    <h1>
      {props.course}
    </h1>
    </>
  )
}

const Part = (props) => {
  return (
  <>
  <p>
    {props.part} contains {props.numb} exercises
  </p>
  </>
  )
}

const Content = (props) => {
  return(
    <>
    <Part part = {props.part1} numb = {props.numb1} />
    <Part part = {props.part2} numb = {props.numb2} />
    <Part part = {props.part3} numb = {props.numb3} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <h3>Total amount of exercises is {props.numb1 + props.numb2 + props.numb3}</h3>
    </>
  )
}

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
        <Header course = {course} />
        <Content 
        part1 = {part1} numb1 = {exercises1} 
        part2 = {part2} numb2 = {exercises2}
        part3 = {part3} numb3 = {exercises3}
        />
        <Total numb1 = {exercises1} numb2 = {exercises2} numb3 = {exercises3} />
        </div>
  )
}

export default App
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
    <Part part = {props.parts[0].name} numb = {props.parts[0].exercises} />
    <Part part = {props.parts[1].name} numb = {props.parts[1].exercises} />
    <Part part = {props.parts[2].name} numb = {props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
    <h3>Total amount of exercises is {props.parts[0].exercises + props.parts[1].exercises 
    + props.parts[2].exercises}</h3>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },

    {
      name: 'Using props to pass data',
      exercises: 7,
    },

    {
      name: 'State of a component',
      exercises: 15,
    }
  ]
}
  return (
        <div>
        <Header course = {course.name} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
        </div>
  )
}

export default App
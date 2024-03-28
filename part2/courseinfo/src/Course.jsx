
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, curent) => {
    console.log('what happen here', sum, curent)
    return sum + curent.exercises
  },
    0) //important thing, initialisation of the sum on first iteration

  return (
    <>
      <h3>Total amount of exercises is {totalExercises} </h3>
    </>
  )
};
const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} parts={part} />)}
    </>
  )
};
const Part = ({ parts }) => {
  return (
    <p>
      {parts.name} contains {parts.exercises} exercises
    </p>
  )
};
const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

export default Course

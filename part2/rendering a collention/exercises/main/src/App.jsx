import Course from "./Course"

const App = () => {
  const courses = [
    {
    name: 'Half Stack application development',
    id: 1,
    parts: [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10,
    },

    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7,
    },

    {
      id: 3,
      name: 'State of a component',
      exercises: 15,
    },

    {
      id: 4,
      name: 'rendering a collectieon',
      exercises: 11,
    }
  ]
},
{
  name: 'Node.js',
  id: 2,
  parts: [
    {
      id: 1,
      name: 'Routing',
      exercises : 12
    },

    {
      id: 2,
      name: 'Midleware',
      exercises: 3
    }
  ]
},
{
  name: 'Frontend',
  id: 3,
  parts: [
    {
      id: 1,
      name: 'View',
      exercises : 12
    },

    {
      id: 2,
      name: 'MVC',
      exercises: 33
    }
  ]

}
]
  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App
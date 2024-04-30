const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => (
    <>
      <h1>{course}</h1>
    </>
  )

  const Content = ({ parts }) => (
    <>
      {parts.map((item) => <Part part={item} />)}
    </>
  )

  const Total = ({ total }) => (
    <>
      <p>Number of exercises {total}</p>
    </>
  )

  const Part = ({ part }) => (
    <>
      <p>{part.name} {part.exercises}</p>
    </>
  )

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts.map(item => item.exercises).reduce((a, b) => a + b)} />
    </div>
  )
}

export default App;

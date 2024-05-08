const Header = ({ course }) => (
  <>
    <h1>{course}</h1>
  </>
);

const Content = ({ parts }) => (
  <>
    {parts.map((item) => (
      <Part part={item} />
    ))}
  </>
);

const Total = ({ total }) => (
  <>
    <p>Number of exercises {total}</p>
  </>
);

const Part = ({ part }) => (
  <>
    <p>
      {part.name} {part.exercises}
    </p>
  </>
);
const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total total={course.parts.map((item) => item.exercises).reduce((a, b) => a + b)} />
  </>
);

export default Course;

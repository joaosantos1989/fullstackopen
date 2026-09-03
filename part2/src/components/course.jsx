const Header = ({name}) => {
  return <h2>{name}</h2>
}

const Part = ({part}) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({parts}) => {
  return <div>
    {parts.map(part => (
      <Part key={part.id} part={part} ></Part>
    ))}
  </div>
}

const Sum = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <p>
    <b>Total of {total} exercices</b>
    </p>
}

const Course = ({course}) => (
  <div>
    <Header name={course.name}></Header>
    <Content parts={course.parts}></Content>
    <Sum parts={course.parts}></Sum>
  </div>
)

export default Course
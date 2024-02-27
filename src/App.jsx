import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"





const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  
  return (
    <>
      <Header course={course} />
      <Content 
      part1 = {parts[0]}
      part2 = {parts[1]}
      part3 = {parts[2]}
      />
      <Total 
      part1 = {parts[0]}
      part2 = {parts[1]}
      part3 = {parts[2]} />
    </>
  )
}

export default App

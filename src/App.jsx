const Header = (props) => {
  return(
    <section>
      <h1>{props.course}</h1>
    </section>
  )
}
// const Content = (props) => {
//   return(
//     <section>
      
//     </section>
//   )
// }


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <>
      <div>
      <Header course={course} />
      
      </div>
      
    </>
  )
}

export default App

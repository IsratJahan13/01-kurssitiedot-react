// const Total = (props) => {
//     const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
//     return(
//       <section>
//         <p>Number of exercises {sum}</p>
//       </section>
//     )
//   }
// export default Total;  

const Total = (props) => {
  const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return(
    <section>
      <p>Number of exercises {sum}</p>
    </section>
  )
}
export default Total;  
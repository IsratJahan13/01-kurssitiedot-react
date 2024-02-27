const Total = (props) => {
    const sum = props.part1.exercises + props.part2.exercises + props.part3.exercises
    return(
      <section>
        <p>Number of exercises {sum}</p>
      </section>
    )
  }
export default Total;  
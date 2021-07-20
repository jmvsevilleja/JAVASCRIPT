const state = [];

// Change code below this line

// arrow function
const mapStateToProps = (state) => {
  return {
    messages: state
  }
}

// function mapStateToProps(state) {
//   return {
//     messages: state
//   }
// }

//The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().
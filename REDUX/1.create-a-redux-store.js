const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

//The Redux store is an object which holds and manages application state
//createStore method takes a reducer function as a required argument
const store = Redux.createStore(reducer)


// In Redux, there is a single state object that's responsible for the entire state of your application.
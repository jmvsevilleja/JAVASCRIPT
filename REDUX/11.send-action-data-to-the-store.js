const ADD_NOTE = 'ADD_NOTE';
// reducer - takes actions and returns a new state
const notesReducer = (state = 'Initial State', action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      return state = action.text

    // Change code above this line
    default:
      return state;
  }
};
// action - contains types and data
const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};
// redux object that passes reducers see store.combineReducers()
const store = Redux.createStore(notesReducer);

console.log(store.getState());

// dispatch - calling redux actions
store.dispatch(addNoteText('Hello!'));
// see store.subscribe(()=>{}) to listen to every dispatch

// get - retrieve the current state
console.log(store.getState());

// You can also send specific data along with your actions.
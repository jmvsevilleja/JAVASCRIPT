const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];
// reducer
const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      // To clone an array but add additional values in the new array, you could write [...myArray, 'new value']
      // return [...state, action.todo]
      // array concat doesn't mutate state
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

// Enforcing the key principle of state immutability in Redux.
// Immutable state means that you never modify state directly, instead, you return a new copy of state.

// Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer.
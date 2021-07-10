const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
// Retrieve the current state held in the Redux store object with the getState() method.
const currentState = store.getState();

// You can retrieve the current state held in the Redux store object with the getState() method
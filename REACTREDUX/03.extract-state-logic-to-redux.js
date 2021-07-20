// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';
const messages = [];

// reducer - returns new state.
const messageReducer = (state = messages, action) => {
  switch (action.type) {
    case ADD:
      // add additional message without changing the initial state
      //return state.concat(action.message);
      return [...state, action.message];
  }
  return state;
};

// actions
const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const store = Redux.createStore(messageReducer);

//Now that you finished the React component, you need to move the logic it's performing locally in its state into Redux.
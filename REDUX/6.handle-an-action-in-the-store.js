const defaultState = {
  login: false
};
// The reducer is simply a pure function that takes state and action, then returns new state.
const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type == 'LOGIN') {
    state = {
      login: true
    }
  }

  // the reducer function must always return a new copy of state and never modify state directly.
  return state;
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());


//After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to actions.
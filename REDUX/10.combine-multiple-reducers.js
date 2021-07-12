const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};
//You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer
const rootReducer = Redux.combineReducers({
   auth: authReducer, 
   count : counterReducer
})// Define the root reducer here

// The root reducer is then passed into the Redux createStore() method.
const store = Redux.createStore(rootReducer);

//Redux provides reducer composition as a solution for a complex state model.

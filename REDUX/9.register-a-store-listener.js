const ADD = 'ADD';
// reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const increment = () => {
  count++
}
store.subscribe(increment);

// shorthand
// store.subscribe(() => {
//   count++
// })
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// store.subscribe(). This allows you to subscribe listener functions to the store,
// called whenever an action is dispatched against the store
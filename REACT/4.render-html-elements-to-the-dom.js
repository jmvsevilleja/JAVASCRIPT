const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
const targetNode = document.getElementById('challenge-node');
// ReactDOM offers a simple method to render React elements to the DOM
ReactDOM.render(JSX, targetNode);
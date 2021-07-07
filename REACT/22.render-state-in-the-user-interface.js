class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }

  // If a component is stateful, it will always have access to the data in state in its render() method
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
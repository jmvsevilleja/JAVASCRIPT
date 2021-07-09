class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };

    // bind this in the constructor so this becomes bound to the
    // class methods when the component is initialized
    this.handleClick = this.handleClick.bind(this);
  }
  // writing methods that set state
  handleClick() {
    // Change code below this line
    // TODO: see batch state updates
    // https://facebook.github.io/react/docs/state-and-lifecycle.html
    this.setState({
      name: "React Rocks!"
    })
    // Change code above this line
  }
  render() {
    return (
      <div>
        {/* assigning click handlers to trigger methods */}
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
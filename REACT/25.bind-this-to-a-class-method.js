class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
    // this in the constructor so this becomes bound to the 
    // class methods when the component is initialized
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  // define methods that can access properties on the class (such as state and props)
  handleClick() {

    // called within your class method, this refers to the class and will not be undefined
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
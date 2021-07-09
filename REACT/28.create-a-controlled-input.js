class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    });

  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        { /* Input property in the local state, and rendered as the value in the input box on the page.
        The component state is the single source of truth regarding the input data. */}
        {/* Controlled component */}
        <input onChange={this.handleChange} value={this.state.input} />
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>

      </div>
    );
  }
};
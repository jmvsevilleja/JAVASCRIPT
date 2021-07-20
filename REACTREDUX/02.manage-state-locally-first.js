class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    this.setState(state => ({
      // using array spread
      // messages: [...this.state.messages,state.input],
      // using array concat
      messages: this.state.messages.concat(state.input),
      input: ''
    }));
  }

  render() {
    const liMessages = this.state.messages.map((value, key) => <li key={key}>{value}</li>);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Click Me</button>
        <ul>{liMessages}</ul>
        { /* Change code above this line */}
      </div>
    );
  }
};

// Here you'll finish creating the DisplayMessages component.
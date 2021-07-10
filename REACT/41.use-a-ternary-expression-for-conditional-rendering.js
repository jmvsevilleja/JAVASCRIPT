const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    // default state
    this.state = {
      input: '',
      userAge: ''
    }
    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // this will update the input state on input change
  // reset userAge everytime we input changes
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  // this will update the userAge state on buttonOne submit
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}
        {/* Ternary expression for displaying component */}
        {
          this.state.userAge === ''
            ? buttonOne
            : this.state.userAge >= 18
              ? buttonTwo
              : buttonThree
        }
        <h2>User Input: {this.state.input}</h2>
        <h2>User Age: {this.state.userAge}</h2>
        {/* Change code above this line */}
      </div>
    );
  }
}
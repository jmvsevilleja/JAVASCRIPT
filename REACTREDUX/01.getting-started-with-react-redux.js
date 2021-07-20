class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Change code above this line
  render() {
    return (
      <div>

      </div>
    )
  }
};

//Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.

// You need to use the react-redux package. It provides a way for you to pass Redux state and dispatch to your React components as props.
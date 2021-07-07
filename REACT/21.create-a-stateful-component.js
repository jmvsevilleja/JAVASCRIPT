class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    // Note that you must create a class component by extending React.
    // Component in order to create state
    this.state = {
      name: "Jess"
    }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
class Colorful extends React.Component {
  render() {
    // SX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string. Instead, you set it equal to a JavaScript object.
    return (
      <div style={{
        color: "red",
        fontSize: 72
      }}>Big Red</div>
    );
  }
};
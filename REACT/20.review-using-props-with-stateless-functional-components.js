class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// Change code below this line
const Camper = (prop) => {
  return (
    <p>{prop.name}</p>
  )
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
}
Camper.defaultProps = {
  name: 'CamperBot'
}


/*
A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state.

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application.
*/

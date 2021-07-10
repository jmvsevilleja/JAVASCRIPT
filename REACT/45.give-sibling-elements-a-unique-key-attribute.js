const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  // // When you create an array of elements, each one needs a key attribute set to a unique value to efficiently re-render.
  const renderFrameworks = frontEndFrameworks.map((value,key) => <li key={key}>{value}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};


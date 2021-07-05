const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Current Quantity of Items in Cart: {props.items}</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 }
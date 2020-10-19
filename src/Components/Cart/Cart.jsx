import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Action/CartAction";

const Cart = (props) => {
  const { cart, removeFromCart } = props;
  return (
    <div
      style={{
        textAlign: "right",
        marginRight: "150px",
        height: "20%",
        width: "70%",
      }}
    >
      <h4>Quantity of Cart</h4>
      <ul>
        {cart.map((pd) => (
          <li key={pd.cartId}>
            {pd.name} <button onClick={() => removeFromCart(pd.cartId)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

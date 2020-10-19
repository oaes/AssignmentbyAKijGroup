import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Action/CartAction";
import Product from "../Product/Product";

const Shop = (props) => {
  console.log(props);
  const { products, addToCart } = props;
  return (
    <div>
      <h3>SmartPhone Shop</h3>
      {
          products.map(pd=> <Product
          product={pd}
          key={pd.id}
          addToCart={addToCart}
          
          ></Product>)
      }
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products, 
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

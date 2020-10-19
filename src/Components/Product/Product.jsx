import React from "react";

const Product = (props) => {
  const { name, id } = props.Product;
  return (
    <div style={{border:'1px solid lime', padding:"10px 20px"}}>
      <h5>{name}</h5>
      <button>add to cart</button>
    </div>
  );
};

export default Product;

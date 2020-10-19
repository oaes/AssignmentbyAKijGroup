import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products=[
        {name:'samsung', id:1},
        {name:'samsung-s10', id:2},
        {name:'Iphone-X', id:3},
        {name:'RealMe-7', id:4},
        {name:'Infinix hot9', id:5},
        {name:'OnePlus7', id:6},
        {name:'Nokia N-70', id:7},
        {name:'Walton Primo9', id:8},
    ]
    return (
        <div>
            <h3 style={{textAlign:'center'}}>SmartPhone Shop</h3>
           {products.map(pd=> <Product Product={pd}></Product>)}
        </div>
    );
};

export default Shop;
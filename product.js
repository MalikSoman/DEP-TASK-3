import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <Link to={`/product/${product._id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default Product;

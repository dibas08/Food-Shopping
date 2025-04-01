import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Details() {
  const location = useLocation();
  const { id } = useParams();
console.log(id);
  // Access product from state or find it using the id
  const product = location.state;
  console.log(product.product.name);

  if (!product) {
    return <p>Product details not found. Please go back and select a product.</p>;
  }

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div className="details-card">
        <div className="image">
            <img src={product.product.image}></img>
        </div>
        <div className="info">
          <h3>{product.product.name}</h3>
          <p>{product.product.description}</p>
          <span className="price">{product.product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default Details;

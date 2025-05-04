import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
      <p>Rating: {product.rating}⭐</p>
      <p>Description: {product.description}</p>
      <p>Supplier: {product.supplier}</p>
    </div>
  );
};

export default ProductDetail;

import React from 'react';

const ProductCard = ({ name, price, isAvailable }) => {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      
      {isAvailable ? (
        <p className="product-price">
          Rp {price.toLocaleString('id-ID')}
        </p>
      ) : (
        <p className="product-empty">
          Stok Habis
        </p>
      )}
    </div>
  );
};

export default ProductCard;
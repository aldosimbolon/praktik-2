import React from 'react';

const ProductCard = ({ name, price, isAvailable }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px 0', // Margin atas-bawah agar rapi
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0 }}>{name}</h3>
      
      {/* Logika stok: Tampilkan harga jika ada, pesan habis jika tidak */}
      {isAvailable ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Rp {price.toLocaleString('id-ID')}
        </p>
      ) : (
        <p style={{ color: 'gray', fontStyle: 'italic' }}>
          Stok Habis
        </p>
      )}
    </div>
  );
};

export default ProductCard;
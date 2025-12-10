import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import LatihanBasic from './components/LatihanBasic';
import ProductCard from './components/ProductCard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Data Dummy untuk Latihan Mandiri
  const products = [
    { name: "Laptop Gaming", price: 12000000, isAvailable: true },
    { name: "Mechanical Keyboard", price: 850000, isAvailable: false },
    { name: "Mouse Wireless", price: 150000, isAvailable: true }
  ];

  const userData = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "/vite.svg",
    joinDate: "2023-01-15"
  };

  return (
    <div className="App">
      {/* BAGIAN 1: Latihan Basic (Rata Kiri) */}
      <LatihanBasic />

      <hr style={{ margin: '40px 0' }} />

      {/* BAGIAN 2: Demo State (Rata Kiri) */}
      <section>
        <h1>Demo JSX dan Rendering</h1>
        
        <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{ marginBottom: '20px' }}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

        <UserProfile user={userData} isLoggedIn={isLoggedIn} />

        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: isLoggedIn ? '#d4edda' : '#f8d7da',
          border: `1px solid ${isLoggedIn ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '5px'
        }}>
          Status: <strong>{isLoggedIn ? 'Berhasil login' : 'Belum login'}</strong>
        </div>
      </section>

      <hr style={{ margin: '40px 0' }} />

      {/* BAGIAN 3: Latihan Mandiri (Paling Bawah & Rata Kiri) */}
      <section>
        <h1>Latihan Mandiri: Product Card</h1>
        <p>Daftar produk tersedia:</p>
        
        <div className="product-list">
          {products.map((item, index) => (
            <ProductCard 
              key={index}
              name={item.name}
              price={item.price}
              isAvailable={item.isAvailable}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
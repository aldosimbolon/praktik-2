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
      <LatihanBasic />

      <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)' }} />

      <section>
        <h1>Demo JSX dan Rendering</h1>
        
        <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{ marginBottom: '20px' }}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

        <UserProfile user={userData} isLoggedIn={isLoggedIn} />

        {/* BAGIAN INI DIUBAH: Gunakan className dinamis */}
        <div className={`status-box ${isLoggedIn ? 'logged-in' : 'logged-out'}`}>
          Status: <strong>{isLoggedIn ? 'Berhasil login' : 'Belum login'}</strong>
        </div>
      </section>

      <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)' }} />

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
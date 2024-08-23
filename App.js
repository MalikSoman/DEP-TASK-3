import React from 'react';
import './App.css';
import backgroundImg from './assets/background.jpg'; // Import the background image

// Import brand images
import jeansImg from './assets/jeans.jpg';
import shoesImg from './assets/shoes.jpg';
import jacketsImg from './assets/jackets.jpg';
import sweatersImg from './assets/sweaters.jpg';
import perfumesImg from './assets/perfumes.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header className="App-header">
        <h1 className="main-title">MALIK DIGITAL DREAMS</h1> {/* Added title */}
        <p className="store-description">
          Malik Digital Dreams online store that deals in providing all kinds of men's clothing brands in Pakistan.
        </p>
        <div className="brands-section">
          <p className="brands-title">Let's explore our Brands</p>
          <div className="brands-container">
            <div className="brand">
              <img src={jeansImg} alt="Jeans" />
              <h2>Jeans</h2>
              <p>Stylish and comfortable jeans for every occasion.</p>
            </div>
            <div className="brand">
              <img src={shoesImg} alt="Shoes" />
              <h2>Shoes</h2>
              <p>Elegant shoes to complement your outfits.</p>
            </div>
            <div className="brand">
              <img src={jacketsImg} alt="Jackets" />
              <h2>Jackets</h2>
              <p>Stay warm and fashionable with our range of jackets.</p>
            </div>
            <div className="brand">
              <img src={sweatersImg} alt="Sweaters" />
              <h2>Sweaters</h2>
              <p>Cozy sweaters for those chilly days.</p>
            </div>
            <div className="brand">
              <img src={perfumesImg} alt="Perfumes" />
              <h2>Perfumes</h2>
              <p>Luxurious scents to leave a lasting impression.</p>
            </div>
          </div>
        </div>
        <button className="order-button">ORDER NOW</button>
        <div className="contact-info">
          <p>CONTACT US: +923401157873</p>
          <p>alisoman698@gmail.com</p>
        </div>
        <p className="order-message">
          Order your Selection now and get delivered to your Home all over Pakistan.
        </p>
      </header>
    </div>
  );
}

export default App;

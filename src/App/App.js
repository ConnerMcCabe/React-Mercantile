import React from 'react';
import NavBar from '../Components/NavBar/NavBar.js';
import Product from '../Components/Products/Product.js';
import News from '../Components/News/News.js';
import Footer from '../Components/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Product />
      <News />
      <Footer />
    </div>
  );
}

export default App;

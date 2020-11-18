import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar/NavBar';
import News from '../Components/News/News';
import Product from '../Components/Products/Product';
import Footer from '../Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <News />
        <Product />
        <Footer />
      </div>
    )
  }


}


export default App;

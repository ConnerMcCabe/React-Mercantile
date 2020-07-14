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
      <React.Fragment>
        <NavBar />
        <News />
        <Product />
        <Footer />
      </React.Fragment>
    )
  }


}


export default App;

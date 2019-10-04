import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
// import MessageContainer from './containers/MessageContainer';
import ListCartContainer from './containers/ListCartContainer';

class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* <ProductContainer />
            <MessageContainer />*/}
            <CartContainer /> 
            <ListCartContainer/>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

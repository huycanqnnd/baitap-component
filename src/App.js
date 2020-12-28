// import React from 'react';
import './App.css';
import Button from './components/Button';
import Products from './components/Products';
import Summary from './components/Summary';
import Header from './components/Header';

function App() {
  let product = [
    {  image: "https://via.placeholder.com/200x150", productName: 'Product Item Number 1', description: 'Description for product item number 1', quantity: 1,  price: 100000, vat: 10 },
    {  image: "https://via.placeholder.com/200x150", productName: 'Product Item Number 2', description: 'Description for product item number 2', quantity: 2,  price: 250000, vat: 5 },
  ]
  return (
      <div alt = "true">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Shopping Cart</title>
        <link rel="stylesheet" href="style.css" />
        <main alt = "true">
          <Header/>
          <section className="container" alt = "true">
            <Products listProducts = {product}/>
          </section>
          <section className="container" alt = "true">
            <div className="promotion" alt = "true">
              <label htmlFor="promo-code">Have A Promo Code?</label>
              <input type="text" id="promo-code" /> <Button/>
            </div>
            <Summary listProducts={product}/>
            <div className="checkout" alt = "true">
              <Button text = "Check Out"/>
            </div>
          </section>
        </main>
      </div>
  );
}

export default App;

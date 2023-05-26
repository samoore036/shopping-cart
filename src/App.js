import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import CollectionPage from './components/pages/CollectionPage';
import ContactPage from './components/pages/ContactPage';
import collectionData from './components/utilities/collection data';
import ShoppingCartPage from "./components/pages/ShoppingCartPage";

function App() {
  const [cart, setCart] = React.useState(new Map());
  const [itemCount, setItemCount] = React.useState(-1);

  function addToCart(id) {
    const item = collectionData[id];
    setCart(prevCart => {
      const updatedCart = new Map(prevCart);
      updatedCart.get(item.id) ? updatedCart.get(item.id).quantity++ : updatedCart.set(item.id, {...item, quantity: 1});
      return updatedCart;
    })
  }

  React.useEffect(() => {
    setItemCount(prevCount => {
      let count = 0;
      for (let item of cart.values()) {
        count += item.quantity;
      }
      return count;
    });
  }, [cart]);

  function reduceQuantity(id) {
    const item = cart.get(id);
    if (item.quantity < 1) {
      return;
    }
    setCart(prevCart => {
      const updatedCart = new Map(prevCart);
      item.quantity--;
      updatedCart.set(id, item);
      return updatedCart;
    })
  }

  function addQuantity(id) {
    const item = cart.get(id);
    setCart(prevCart => {
      const updatedCart = new Map(prevCart);
      item.quantity++;
      updatedCart.set(id, item);
      return updatedCart;
    })
  }

  return (
    <div className='App'>
      <Navbar itemCount={itemCount}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Collection' element={<CollectionPage addToCart={addToCart}/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/Shopping-Cart' element={<ShoppingCartPage cart={cart} itemCount={itemCount} reduceQuantity={reduceQuantity} addQuantity={addQuantity}/>}/>
      </Routes>
    </div>
  );
}

export default App;

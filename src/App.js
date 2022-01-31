import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddBook from './containers/AddBook/AddBook';
import Cart from './containers/Cart/Cart';
import EditBook from './containers/EditBook/EditBook';
import Home from './containers/Home/Home';
import View from './containers/View/View';




function App() {
  
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="book/:id" element={<View />} />
            <Route path="book/addbook" element={<AddBook />} />
            <Route path="cart" element={<Cart />} />
            <Route path="book/editbook/:id" element={<EditBook />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;

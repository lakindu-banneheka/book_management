import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import View from './containers/View/View';




function App() {
  
  const Cart = () => {
    return <div>Cart</div>
  }
  const Editbook = () => {
    return <div>Edit book</div>
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/edit" element={<Editbook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

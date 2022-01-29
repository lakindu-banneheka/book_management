import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import View from './containers/View/View';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />} />
            {/* <Route path="/" element={<Index />} /> */}
            {/* <Route path="/" element={<Index />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

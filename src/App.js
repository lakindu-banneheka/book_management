import React, { useEffect } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Index from './containers/Index/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/signin" element={<Signin />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

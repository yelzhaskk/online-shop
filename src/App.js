import './App.css';
import React from 'react';
import Header from './Header';
import Cards from './Cards';
// functional component
function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;

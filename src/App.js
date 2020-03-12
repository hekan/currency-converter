import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wallet from './components/layouts/Wallet/Wallet';

function App() {
  return (
    <div className="App">
      <Wallet>
          <div>Top</div>
      </Wallet>
      <Wallet isBottom={true}>
          Bottom
      </Wallet>
    </div>
  );
}

export default App;

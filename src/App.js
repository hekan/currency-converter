import React from 'react';
import './App.css';
import Wallet from './components/layouts/Wallet/Wallet';
import MiddleArea from './components/layouts/MiddleArea/MiddleArea';
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import SwapWallets from "./components/SwapWallets/SwapWallets";
import DoExchange from "./components/DoExchange/DoExchange";

function App() {
    return (
        <div className="App">
            <MiddleArea>
                <SwapWallets/>
                <ExchangeRate/>
                <DoExchange/>
            </MiddleArea>
            <Wallet>
            </Wallet>
            <Wallet isBottom={true}>
            </Wallet>
        </div>
    );
}

export default App;

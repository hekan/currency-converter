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
                <div className="flex-container__col">
                    <SwapWallets/>
                </div>
                <div className="flex-container__col">
                    <ExchangeRate/>
                </div>
            </MiddleArea>
            <Wallet>
            </Wallet>
            <Wallet isBottom={true}>
            </Wallet>
            <DoExchange/>
        </div>
    );
}

export default App;

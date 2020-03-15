import React from 'react';
import {connect} from 'react-redux';
import Wallet from './components/layouts/Wallet/Wallet';
import MiddleArea from './components/layouts/MiddleArea/MiddleArea';
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import SwapWallets from "./components/SwapWallets/SwapWallets";
import DoExchange from "./components/DoExchange/DoExchange";
import {creditFunds, debitFunds} from "./state/wallets/actions";
import {resetInputs} from "./state/exchange-inputs/actions";

function App(props) {
    const {walletFrom, walletTo, inputFrom, inputTo} = props;

    /**
     * TODO
     * @returns {boolean}
     */
    const isValidForConverting = () => {
        return true;
    };

    const onConvert = () => {
        if (isValidForConverting()) {
            console.log({walletFrom, inputFrom});
            props.debitFunds(walletFrom, inputFrom);
            props.creditFunds(walletTo, inputTo);
            props.resetInputs();
        }
    };

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
            <DoExchange onConvert={onConvert}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        walletFrom: state.exchangePairs.from,
        walletTo: state.exchangePairs.to,
        inputFrom: state.exchangeInputs.from,
        inputTo: state.exchangeInputs.to
    };
};

const mapDispatchToProps = {debitFunds, creditFunds, resetInputs};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import {connect} from 'react-redux';
import Wallet from './components/Wallet/Wallet';
import MiddleArea from './components/MiddleArea/MiddleArea';
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import SwapWallets from "./components/SwapWallets/SwapWallets";
import DoExchange from "./components/DoExchange/DoExchange";
import {creditFunds, debitFunds} from "./state/wallets/actions";
import {resetInputs, setInputFrom, setInputTo, swapInputs} from "./state/exchange-inputs/actions";
import {formulaFrom, formulaTo} from "./utils/exchange";
import {setFrom, setTo, swapWallets} from "./state/exchange-pairs/actions";
import {currenciesMeta} from "./state/currencies/currencies-meta";
import {leaveTwoDecimalsOnString} from "./utils/inputs";

function App(props) {
    const {
        walletFrom,
        walletTo,
        inputFrom,
        inputTo,
        balanceFrom,
        balanceTo
    } = props;

    /**
     * TODO
     * @returns {boolean}
     */
    const isValidForFinalConverting = () => {
        return true;
    };

    const onConvert = () => {
        if (isValidForFinalConverting()) {
            console.log({walletFrom, inputFrom});
            props.debitFunds(walletFrom, inputFrom);
            props.creditFunds(walletTo, inputTo);
            props.resetInputs();
        }
    };

    const onSourceAmountChanged = val => {
        console.log({val});
        props.changeFrom(val);
        updateDestination(val, walletFrom, walletTo);
    };

    const onDestinationAmountChanged = val => {
        props.changeTo(val);
        updateSource(val, walletFrom, walletTo);
    };

    const onSourceWalletChanged = wallet => {
        props.setFromWallet(wallet);
        updateDestination(props.inputFrom, wallet, walletTo);
    };

    const onDestinationWalletChanged = wallet => {
        props.setToWallet(wallet);
        updateDestination(props.inputFrom, walletFrom, wallet);
    };

    const updateDestination = (n, from, to) => {
        const con = formulaFrom(n, props.currencies[from], props.currencies[to]);
        props.changeTo(con);
    };

    const updateSource = (n, from, to) => {
        const con = formulaTo(n, props.currencies[from], props.currencies[to]);
        props.changeFrom(con);
    };

    const labelWalletBalance =
        (wallet, balance) => `Wallet balance: ${leaveTwoDecimalsOnString(balance)} ${currenciesMeta[wallet].symbol}`;

    const labelNotEnoughBalance = `Not enough balance`;

    const labelWalletBalanceFrom = () => {
        return labelWalletBalance(walletFrom, balanceFrom);
    };

    const labelWalletBalanceTo = () => {
        return labelWalletBalance(walletTo, balanceTo);
    };

    const isEnoughFunds = () => {
        return (balanceFrom - inputFrom) >= 0;
    };

    const onSwap = () => {
        props.swapWallets();
        props.swapInputs();
    };

    const isReadyForExchange = () => {
        if (!(props.inputFrom > 0) || walletTo === walletFrom) {
            return false;
        }
        return isEnoughFunds();
    };

    const metaForSource = () => {
        let classes = 'wallet__meta';
        let label = '';
        if (!isEnoughFunds()) {
            classes += ' wallet__meta--right';
            label = labelNotEnoughBalance;
        } else {
            classes += ' wallet__meta--left';
            label = labelWalletBalanceFrom();
        }

        return {classes, label};
    };

    const metaForSourceObj = metaForSource();

    return (
        <div className="App">
            <MiddleArea>
                <div className="flex-container__col">
                    <SwapWallets swap={onSwap}/>
                </div>
                <div className="flex-container__col">
                    <ExchangeRate
                        currencies={props.currencies}
                        exchangePairs={{from: walletFrom, to: walletTo}}
                    />
                </div>
            </MiddleArea>
            <Wallet
                selectedWallet={walletFrom}
                balance={balanceFrom}
                onWalletChanged={onSourceWalletChanged}
                onInputChanged={onSourceAmountChanged}
                amount={props.inputFrom}>
                <div className={metaForSourceObj.classes}>
                    {metaForSourceObj.label}
                </div>
            </Wallet>
            <Wallet
                selectedWallet={walletTo}
                balance={balanceTo}
                onWalletChanged={onDestinationWalletChanged}
                onInputChanged={onDestinationAmountChanged}
                classes={'wallet--bottom'}
                amount={props.inputTo}
                isBottom={true}>
                <div className={'wallet__meta wallet__meta--left'}>
                    {labelWalletBalanceTo()}
                </div>
            </Wallet>
            <DoExchange disabled={!isReadyForExchange()} onConvert={onConvert}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        walletFrom: state.exchangePairs.from,
        walletTo: state.exchangePairs.to,
        balanceFrom: state.wallets[state.exchangePairs.from],
        balanceTo: state.wallets[state.exchangePairs.to],
        inputFrom: state.exchangeInputs.from,
        inputTo: state.exchangeInputs.to,
        currencies: state.currencies
    };
};

const mapDispatchToProps = {
    debitFunds,
    creditFunds,
    resetInputs,
    changeFrom: setInputFrom,
    changeTo: setInputTo,
    setFromWallet: setFrom,
    setToWallet: setTo,
    swapWallets,
    swapInputs
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import CurrenciesList from "../../CurrenciesList/CurrenciesList";
import AmountInput from "../../AmountInput/AmountInput";
import {connect} from 'react-redux';
import {setFrom, setTo} from "../../../state/exchange-pairs/actions";
import {currenciesMeta} from "../../../state/currencies/currencies-meta";
import {setInputFrom, setInputTo} from "../../../state/exchange-inputs/actions";
import {formulaFrom, formulaTo} from "../../../utils/exchange";

const Wallet = (props) => {
    const {
        isBottom,
        wallets,
        selectedWallet,
        balance,
    } = props;

    const walletsArray = [];
    for (const k in wallets) {
        if (k in wallets) {
            walletsArray.push(
                {
                    label: k.toUpperCase(),
                    value: k
                }
            );
        }
    }
    const onChangeWallet = event => {
        const value = event.target.value;
        props.onWalletChanged(value);
    };

    const isValidBalance = (balance - props.amount) >= 0;

    let metaClasses = 'wallet__meta';
    isValidBalance || isBottom ? metaClasses += ' wallet__meta--left' : metaClasses += ' wallet__meta--right';

    return (
        <section className={'wallet ' + props.classes}>
            <div className="wallet__content">
                <div className="flex-container">
                    <div className="flex-container__col">
                        <CurrenciesList selectedWallet={selectedWallet} changedOption={onChangeWallet}>
                            {walletsArray.map(item => {
                                return <option
                                    key={item.value}
                                    value={item.value}>{item.label}
                                </option>
                            })}
                        </CurrenciesList>
                    </div>
                    <div className="flex-container__col">
                        <AmountInput amount={props.amount}
                                     onInputChanged={props.onInputChanged}>
                        </AmountInput>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="flex-container__col">
                        <div className="flex-container">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        wallets: state.wallets,
        currencies: state.currencies,
        exchangePairs: state.exchangePairs,
        exchangeInputs: state.exchangeInputs
    }
};

const mapDispatchToProps = {
    changeFrom: setInputFrom,
    changeTo: setInputTo,
    setFromWallet: setFrom,
    setToWallet: setTo
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

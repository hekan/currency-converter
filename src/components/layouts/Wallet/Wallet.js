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
        isBottom, wallets, exchangePairs,
        currencies, exchangeInputs,
        setFromWallet, setToWallet, changeFrom, changeTo
    } = props;
    let walletClasses = 'wallet';
    let selectedWallet = exchangePairs.from;
    if (isBottom) {
        selectedWallet = exchangePairs.to;
        walletClasses += ' wallet--bottom';
    }


    const walletsArray = [];
    for (const k in wallets) {
        if (k in wallets) {
            walletsArray.push(
                {
                    label: k.toUpperCase(),
                    value: k,
                    balance: wallets[k]
                }
            );
        }
    }

    const convertOnSelect = (value) => {
        const from = isBottom ? currencies[exchangePairs.from] : currencies[value];
        const to = isBottom ? currencies[value] : currencies[exchangePairs.to];
        const con = formulaFrom(amount, from, to);
        console.log({con, amount, from, to});
        changeTo(con);
    };

    const setWallet = walletId => isBottom ? setToWallet(walletId) : setFromWallet(walletId);

    const onChangeWallet = event => {
        const value = event.target.value;
        console.log({value});
        setTimeout(() => {
            setWallet(value);
            convertOnSelect(value);
        }, 10);
    };

    const amount = Number(isBottom ? exchangeInputs['to'] : exchangeInputs['from']);
    const isValidBalance = (wallets[selectedWallet] - amount) >= 0;
    console.log({isValidBalance, amount, wallets: wallets[selectedWallet]});
    let metaClasses = 'wallet__meta';
    isValidBalance || isBottom ? metaClasses += ' wallet__meta--left' : metaClasses += ' wallet__meta--right';

    return (
        <section className={walletClasses}>
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
                        <AmountInput isBottom={isBottom}></AmountInput>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="flex-container__col">
                        <div className="flex-container">
                            <div className={metaClasses}>
                                {
                                    isValidBalance || isBottom ?
                                        `Wallet balance: ${wallets[selectedWallet]} ${currenciesMeta[selectedWallet].symbol}`
                                        :
                                        `Not enough balance`
                                }

                            </div>
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

import React from "react";
import CurrenciesList from "../../CurrenciesList/CurrenciesList";
import AmountInput from "../../AmountInput/AmountInput";
import {connect} from 'react-redux';
import {setFrom, setTo} from "../../../state/exchange-pairs/actions";
import {currenciesMeta} from "../../../state/currencies/currencies-meta";
const Wallet = (props) => {
    const {isBottom, wallets, exchangePairs, setFromWallet, setToWallet} = props;
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

    const setWallet = walletId => isBottom ? setToWallet(walletId) : setFromWallet(walletId);

    const onChangeWallet = event => setWallet(event.target.value);


    return (
        <section className={walletClasses}>
            <div className="wallet__content">
                <div className="flex-container">
                    <div className="flex-container__col">
                        <CurrenciesList selectedWallet={selectedWallet} changedOption={onChangeWallet}>
                            {walletsArray.map(item => {
                                return <option
                                               key={item.value}
                                               value={item.value}>{item.label}</option>
                            })}
                        </CurrenciesList>
                    </div>
                    <div className="flex-container__col">
                        <AmountInput></AmountInput>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="flex-container__col">
                        <div className="flex-container">
                            <div className="wallet__meta wallet__meta--left">
                                Wallet balance: {wallets[selectedWallet]} {currenciesMeta[selectedWallet].symbol}
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
        exchangePairs: state.exchangePairs
    }
};

const mapDispatchToProps = {setFromWallet: setFrom, setToWallet: setTo};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

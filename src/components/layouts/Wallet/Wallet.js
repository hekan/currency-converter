import React from "react";
import CurrenciesList from "../../CurrenciesList/CurrenciesList";
import AmountInput from "../../AmountInput/AmountInput";

const Wallet = (props) => {
    const {isBottom} = props;
    let walletClasses = 'wallet flex-container flex-container--centered';
    if (isBottom) {
        walletClasses += ' wallet--bottom';
    }
    return (
        <section className={walletClasses}>
            <div className="flex-container flex-container--vertical">
                <div className="flex-container flex-container--centered">
                    <CurrenciesList>
                        <option value="pln">PLN 🇵🇱</option>
                        <option value="usd">USD 🇺🇸</option>
                    </CurrenciesList>
                    <AmountInput></AmountInput>
                </div>
                <div className="wallet__meta wallet__meta--left">
                    Wallet balance: 122
                </div>
                <div>
                    {props.children}
                </div>
            </div>

        </section>
    );
};

export default Wallet;

import React from "react";
import CurrenciesList from "../../CurrenciesList/CurrenciesList";
import AmountInput from "../../AmountInput/AmountInput";

const Wallet = (props) => {
    const {isBottom} = props;
    let walletClasses = 'wallet container--centered';
    if (isBottom) {
        walletClasses += ' wallet--bottom';
    }
    return (
        <section className={walletClasses}>
            <div className="wallet__content container--centered">
                <CurrenciesList>
                    <option value="pln">PLN</option>
                    <option value="usd">USD</option>
                </CurrenciesList>
                <AmountInput/>
            </div>
        </section>
    );
};

export default Wallet;

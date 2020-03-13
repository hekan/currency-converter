import React from "react";
import CurrenciesList from "../../CurrenciesList/CurrenciesList";
import AmountInput from "../../AmountInput/AmountInput";

const Wallet = (props) => {
    const {isBottom} = props;
    let walletClasses = 'wallet';
    if (isBottom) {
        walletClasses += ' wallet--bottom';
    }
    return (
        <section className={walletClasses}>
            <div className="wallet__content">
                <div className="flex-container">
                    <div className="flex-container__col">
                        <CurrenciesList>
                            <option value="pln">PLN 🇵🇱</option>
                            <option value="usd">USD 🇺🇸</option>
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
                                Wallet balance: 122
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wallet;

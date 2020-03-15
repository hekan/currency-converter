import React from "react";
import {currenciesMeta} from "../../state/currencies/currencies-meta";
import {formulaFrom} from "../../utils/exchange";

const ExchangeRate = (props) => {
    const {currencies, exchangePairs} = props;
    const {from, to} = exchangePairs;
    const line = `
    1${currenciesMeta[from].symbol} = 
    ${formulaFrom(1, currencies[from], currencies[to])}${currenciesMeta[to].symbol}`;
    return (
        <div className="exchange-rate exchange-rate--gray-border">{line}</div>
    );
};
export default ExchangeRate;

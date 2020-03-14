import React from "react";
import {connect} from "react-redux";
import {currenciesMeta} from "../../state/currencies/currencies-meta";
import {formulaFrom, formulaTo} from "../../utils/exchange";

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
const mapStateToProps = state => {
    return {
        exchangePairs: state.exchangePairs,
        currencies: state.currencies
    };
};
export default connect(mapStateToProps)(ExchangeRate);

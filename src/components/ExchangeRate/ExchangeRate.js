import React from 'react';
import {currenciesMeta} from '../../state/currencies/currencies-meta';
import {formulaFrom} from '../../utils/exchange';
import './ExchangeRate.css';

const ExchangeRate = (props) => {
	const {currencies, exchangePairs} = props;
	const {from, to} = exchangePairs;
	const signFrom = currenciesMeta[from]?.symbol;
	const signTo = currenciesMeta[to]?.symbol;
	const convertedRate = formulaFrom(1, currencies[from], currencies[to]);
	const line = `1${signFrom} = ${convertedRate}${signTo}`;
	return (
		<div className="exchange-rate exchange-rate--gray-border">{line}</div>
	);
};
export default ExchangeRate;

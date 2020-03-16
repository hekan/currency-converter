import React from 'react';
import arrowDown from '../../assets/down-arrow.svg';
import './Currencies.css';

const CurrenciesList = (props) => {
	return (
		<div className="currencies">
			<select className="currencies__dropdown" value={props.selectedWallet} onChange={props.changedOption}>
				{props.children}
			</select>
			<img className="currencies__arrow-down" src={arrowDown} alt="arrow-down"/>
		</div>
	);
};

export default CurrenciesList;

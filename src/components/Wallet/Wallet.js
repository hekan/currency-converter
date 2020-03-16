import React from 'react';
import CurrenciesList from '../CurrenciesList/CurrenciesList';
import AmountInput from '../AmountInput/AmountInput';
import {connect} from 'react-redux';
import {setFrom, setTo} from '../../state/exchange-pairs/actions';
import {setInputFrom, setInputTo} from '../../state/exchange-inputs/actions';
import './Wallet.css';

const Wallet = (props) => {
	const {
		wallets,
		selectedWallet,
	} = props;

	const walletsArray = Object.keys(wallets).map(k => {
		return {
			label: k.toUpperCase(),
			value: k
		};
	});

	const onChangeWallet = event => {
		const value = event.target.value;
		props.onWalletChanged(value);
	};

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
								</option>;
							})}
						</CurrenciesList>
					</div>
					<div className="flex-container__col flex-container__col--doubled">
						<AmountInput
							amount={props.amount}
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
	};
};

const mapDispatchToProps = {
	changeFrom: setInputFrom,
	changeTo: setInputTo,
	setFromWallet: setFrom,
	setToWallet: setTo
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

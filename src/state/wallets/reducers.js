import {CREDIT_FUNDS, DEBIT_FUNDS, RESET_WALLETS} from './actions';

const initialState = {
	usd: 1000,
	eur: 1000,
	gbp: 1000
};

function wallets(state = initialState, action) {
	if (action.type === RESET_WALLETS) return {...initialState};
	let {currencyId, amount} = action;
	amount = Number(amount);
	const isValidCurrency = currencyId !== undefined && state[currencyId] !== undefined;
	const isValidAmount = !isNaN(amount) && amount !== undefined && typeof amount === 'number';
	if (!isValidCurrency || !isValidAmount) {
		return state;
	}

	const funds = state[currencyId];

	switch (action.type) {
	case RESET_WALLETS:
		return initialState;
	case CREDIT_FUNDS:
		return {...state, [currencyId]: funds + amount};
	case DEBIT_FUNDS:
		if (funds < amount) {
			return state;
		}
		return {...state, [currencyId]: funds - amount};
	default:
		return state;
	}
}

export default wallets;

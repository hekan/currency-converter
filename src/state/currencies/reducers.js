import {RECEIVE_RATES} from './actions';

const initialState = {
	usd: 1.3,
	eur: 1,
	gbp: 2
};


function currencies(state = initialState, action) {
	const current = {...state};
	switch (action.type) {
	case RECEIVE_RATES:
		/**
		 * Set only rates which are changed
		 */
		for (let k in current) {
			if (k in current) {
				const rate = action.serverRates[k] || action.serverRates[k.toUpperCase()];
				if (rate && rate !== current[k]) {
					current[k] = rate;
				}
			}
		}
		return {
			...state,
			...current
		};

	default:
		return state;
	}
}

export default currencies;

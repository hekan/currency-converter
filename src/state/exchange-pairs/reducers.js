import {RESET, SET_FROM, SET_TO, SWAP} from './actions';

const initialState = {
	from: 'gbp',
	to: 'eur'
};

function exchangePairs(state = initialState, action) {
	switch (action.type) {
	case RESET:
		return initialState;
	case SET_FROM:
		return {...state, from: action.currencyId};
	case SET_TO:
		return {...state, to: action.currencyId};
	case SWAP:
		// eslint-disable-next-line no-case-declarations
		const tempFrom = state.from;
		return {...state, from: state.to, to: tempFrom};
	default:
		return state;
	}
}

export default exchangePairs;

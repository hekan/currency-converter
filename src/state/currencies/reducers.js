import {RECEIVE_RATES, SET_RATE_IN_EUR} from "./actions";

const initialState = {
        usd: 1.3,
        eur: 1,
        gbp: 2
};

function currencies(state = initialState, action) {
    switch (action.type) {
        case SET_RATE_IN_EUR:
            return {
                ...state,
                [action.currencyId]: action.rate
            };
        case RECEIVE_RATES:
            const current = {...state};
            console.log({current, rates: action.serverRates});
            if (current.usd !== action.serverRates.USD) {
                current.usd = action.serverRates.USD;
            }

            if (current.gbp !== action.serverRates.GBP) {
                current.gbp = action.serverRates.GBP;
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

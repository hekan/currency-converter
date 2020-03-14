import {SET_RATE_IN_EUR} from "./actions";

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
        default:
            return state;
    }
}

export default currencies;

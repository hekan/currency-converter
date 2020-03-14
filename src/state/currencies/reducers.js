import {combineReducers} from "redux";
import {SET_RATE_IN_EUR} from "./actions";

const initialState = {
        usd: 0,
        eur: 0,
        gbp: 0
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

export default combineReducers(
    {currencies}
);

import {RESET_INPUTS, SET_INPUT_FROM, SET_INPUT_TO, SWAP_INPUTS} from "./actions";
import {isValidForInput, leaveTwoDecimalsOnString} from "../../utils/inputs";

const initialState = {
    from: '',
    to: ''
};

function exchangePairs(state = initialState, action) {
    let amount = '';
    if (action.type === SET_INPUT_TO || action.type === SET_INPUT_FROM) {
        amount = action.n;
        amount = leaveTwoDecimalsOnString(amount);
        if (!isValidForInput(amount)) {
            return state;
        }
    }
    switch (action.type) {
        case SET_INPUT_FROM:
            return {...state, from: amount};
        case SET_INPUT_TO:
            return {...state, to: amount};
        case RESET_INPUTS:
            return initialState;
        case SWAP_INPUTS:
            const tempFrom = state.from;
            return {...state, from: state.to, to: tempFrom};
        default:
            return state;
    }
}

export default exchangePairs;

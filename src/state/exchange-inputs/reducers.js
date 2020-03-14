import {RESET_INPUTS, SET_INPUT_FROM, SET_INPUT_TO, SWAP_INPUTS} from "./actions";

const initialState = {
    from: '',
    to: ''
};

function exchangePairs(state = initialState, action) {
    switch (action.type) {
        case SET_INPUT_FROM:
            return {...state, from: action.n};
        case SET_INPUT_TO:
            return {...state, to: action.n};
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

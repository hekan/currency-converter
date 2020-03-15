export const SET_INPUT_FROM = 'SET_INPUT_FROM';
export const SET_INPUT_TO = 'SET_INPUT_TO';
export const RESET_INPUTS = 'RESET_INPUTS';
export const SWAP_INPUTS = 'SWAP_INPUTS';

export function setInputFrom(n) {
    return {type: SET_INPUT_FROM, n}
}

export function setInputTo(n) {
    return {type: SET_INPUT_TO, n}
}

export function resetInputs() {
    return {type: RESET_INPUTS}
}

export function swapInputs(n) {
    return {type: SWAP_INPUTS}
}

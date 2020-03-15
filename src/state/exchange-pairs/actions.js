export const SET_FROM = 'SET_FROM';
export const SET_TO = 'SET_TO';
export const SWAP = 'SWAP';
export const RESET = 'RESET';

export function setFrom(currencyId) {
    return {type: SET_FROM, currencyId}
}

export function setTo(currencyId) {
    return {type: SET_TO, currencyId}
}

export function swapWallets() {
    return {type: SWAP}
}

export function reset() {
    return {type: RESET}
}

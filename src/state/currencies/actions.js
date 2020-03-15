import fetch from 'cross-fetch'

export const SET_RATE_IN_EUR = 'SET_RATE_IN_EUR';
export const RESET_RATES = 'RESET_RATES';
export const REQUEST_RATES = 'REQUEST_RATES';
export const RECEIVE_RATES = 'RECEIVE_RATES';


export function resetRates() {
    return {type: RESET_RATES}
}

export function requestRates() {
    return {
        type: REQUEST_RATES
    }
}

export function receiveRates(data) {
    return {
        type: RECEIVE_RATES,
        serverRates: data
    }
}

export function fetchRates() {
    return dispatch => {
        dispatch(requestRates());
        return fetch(`https://api.exchangeratesapi.io/latest?symbols=USD,GBP`, {cache: "no-cache"})
            .then(response => response.json())
            .then(json => dispatch(receiveRates(json.rates)))
    }
}

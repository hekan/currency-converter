import fetch from 'cross-fetch'
import {appConfig} from "../../appConfigs";

export const SET_RATE_IN_EUR = 'SET_RATE_IN_EUR';
export const RESET_RATES = 'RESET_RATES';
export const REQUEST_RATES = 'REQUEST_RATES';
export const RECEIVE_RATES = 'RECEIVE_RATES';


export function resetRates() {
    return {type: RESET_RATES}
}

/**
 * requestRates does nothing. It should set some flag to avoid race conditions in the request.
 * But as service responds pretty fast, and my currencies store is not scalable at all,
 * I decided to skip this race conditions handling
 * @returns {{type: *}}
 */
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

/**
 * fetchRates calls exchange endpoint to get rates for USD and GBP in EUR.
 * Its hardcoded to USD,GBP as the whole app.
 *
 * {cache: "no-cache"} doesn't work with fetch from "cross-fetch". Intention was to call endpoint avoiding cache.
 * And it works with built-in fetch. But built-in fetch ruins my tests, so I decided to trade-off native fetch
 * to cross-fetch in order to not deep dive in mocking fetch properly
 *
 *
 * @returns {function(*): Promise<any>}
 */
export function fetchRates() {
    return dispatch => {
        dispatch(requestRates());
        return fetch(`${appConfig.ratesEndpoint}=USD,GBP`, {cache: "no-cache"})
            .then(response => response.json())
            .then(json => dispatch(receiveRates(json.rates)))
    }
}

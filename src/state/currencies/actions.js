export const SET_RATE_IN_EUR = 'SET_RATE_IN_EUR';
export const RESET_RATES = 'RESET_RATES';

export function setRateInEUR(currencyId, rate) {
    return {type: SET_RATE_IN_EUR, currencyId, rate }
}

export function resetRates() {
    return {type: RESET_RATES }
}

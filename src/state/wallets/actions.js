export const DEBIT_FUNDS = 'DEBIT_FUNDS';
export const CREDIT_FUNDS = 'CREDIT_FUNDS';
export const RESET_WALLETS = 'RESET_WALLETS';

export function debitFunds(currencyId, amount) {
    return {type: DEBIT_FUNDS, currencyId, amount};
}

export function creditFunds(currencyId, amount) {
    return {type: CREDIT_FUNDS, currencyId, amount};
}

export function resetWallets() {
    return {type: RESET_WALLETS}
}

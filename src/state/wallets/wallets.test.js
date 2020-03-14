import store from "./store";
import {creditFunds, DEBIT_FUNDS, debitFunds, resetWallets} from "./actions";


beforeEach(() => {
    return (() => {
        store.dispatch(resetWallets());
    })();
});

test('should init wallet store', () => {
    const initial = store.getState();
    expect(initial).toStrictEqual({wallets: {usd: 1000, eur: 1000, gbp: 1000}});
});

test('#debitFunds should debit funds from specified wallet', () => {
    store.dispatch(debitFunds('usd', 250));
    store.dispatch(debitFunds('eur', 300));
    store.dispatch(debitFunds('ccc', 2));
    const state = store.getState();
    expect(state).toStrictEqual({wallets: {usd: 750, eur: 700, gbp: 1000}});

});

test('#debitFunds should not debit funds if not enough', () => {
    store.dispatch(debitFunds('usd', 1001));
    const state = store.getState();
    expect(state).toStrictEqual({wallets: {usd: 1000, eur: 1000, gbp: 1000}});
});

test('#creditFunds should top-up funds to wallet', () => {
    store.dispatch(creditFunds('usd', 150));
    store.dispatch(creditFunds('gbp', 250));
    store.dispatch(creditFunds('eur', 12));
    const state = store.getState();
    expect(state).toStrictEqual({wallets: {usd: 1150, eur: 1012, gbp: 1250}});
});

test('#debitFunds and #creditFunds allow only numbers', () => {
    store.dispatch(creditFunds('usd', 'dad'));
    store.dispatch(creditFunds('usd', true));
    const state = store.getState();
    expect(state).toStrictEqual({wallets: {usd: 1000, eur: 1000, gbp: 1000}});
});

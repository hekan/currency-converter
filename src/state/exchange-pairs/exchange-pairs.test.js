import store from "../index";
import {resetExchangePairs, setFrom, setTo, swap, swapWallets} from "./actions";


beforeEach(() => {
    return (() => {
        store.dispatch(resetExchangePairs());
    })();
});

test('should init default store', () => {
    const pairs = store.getState().exchangePairs;
    expect(pairs).toStrictEqual({from: 'gbp', to: 'eur'});
});

test('#setFrom should set source wallet', () => {
    store.dispatch(setFrom('usd'));
    const pairs = store.getState().exchangePairs;
    expect(pairs).toStrictEqual({from: 'usd', to: 'eur'});
});

test('#setTo should set destination wallet', () => {
    store.dispatch(setTo('usd'));
    const pairs = store.getState().exchangePairs;
    expect(pairs).toStrictEqual({from: 'gbp', to: 'usd'});
});

test('#swap should swap from and to wallets', () => {
    store.dispatch(swapWallets());
    const pairs = store.getState().exchangePairs;
    expect(pairs).toStrictEqual({from: 'eur', to: 'gbp'});
});

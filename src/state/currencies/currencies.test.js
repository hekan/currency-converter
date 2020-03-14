import {render} from "@testing-library/react";
import React from "react";
import store from "./store";
import {resetRates, setRateInEUR} from "./actions";

beforeEach(() => {
    return (() => {
        store.dispatch(resetRates());
    })();
});

test('should init empty currencies store', () => {
    const initial = store.getState();
    expect(initial).toStrictEqual({ currencies: { usd: 0, eur: 0, gbp: 0 } });
});

test('#setRateInEUR should set a rate for currency in EUR', () => {
    store.dispatch(setRateInEUR('usd', 1.2));
    const state = store.getState();
    expect(state).toStrictEqual({ currencies: { usd: 1.2, eur: 0, gbp: 0 } });
});

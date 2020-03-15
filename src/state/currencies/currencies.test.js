import {render} from "@testing-library/react";
import React from "react";
import store from "../index";
import {receiveRates, resetRates} from "./actions";

beforeEach(() => {
    return (() => {
        store.dispatch(resetRates());
    })();
});

test('should init empty currencies store', () => {
    const initial = store.getState().currencies;
    expect(initial).toStrictEqual({
        usd: 1.3,
        eur: 1,
        gbp: 2
    });
});

test('#receiveRates should set distinct rates for currencies in EUR', () => {
    store.dispatch(receiveRates( { usd: 4, eur: 0}));
    const state = store.getState().currencies;
    expect(state).toStrictEqual( { usd: 4, eur: 1, gbp: 2 });
});

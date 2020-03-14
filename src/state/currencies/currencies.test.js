import {render} from "@testing-library/react";
import React from "react";
import store from "../index";
import {resetRates, setRateInEUR} from "./actions";

beforeEach(() => {
    return (() => {
        store.dispatch(resetRates());
    })();
});

test('should init empty currencies store', () => {
    const initial = store.getState().currencies;
    expect(initial).toStrictEqual({ usd: 0, eur: 0, gbp: 0 });
});

test('#setRateInEUR should set a rate for currency in EUR', () => {
    store.dispatch(setRateInEUR('usd', 1.2));
    const state = store.getState().currencies;
    expect(state).toStrictEqual( { usd: 1.2, eur: 0, gbp: 0 });
});

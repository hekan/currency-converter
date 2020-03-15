import store from "../index";
import {resetInputs, setInputFrom, setInputTo, swapInputs} from "./actions";;
beforeEach(() => {
    return (() => {
        store.dispatch(resetInputs());

    })();
});

test('should init empty exchange inputs', () => {
    const initial = store.getState().exchangeInputs;
    expect(initial).toStrictEqual({
        from: '',
        to: ''
    });
});

test('setTo & setFrom should set from and two', () => {
    store.dispatch(setInputFrom(1200));
    store.dispatch(setInputTo(500));
    const state = store.getState().exchangeInputs;
    expect(state).toStrictEqual({
        from: 1200 + '',
        to: 500 + ''
    });
});

test('setTo & setFrom should prevent set non-valid numbers', () => {
    store.dispatch(setInputFrom("1200"));
    store.dispatch(setInputTo('sas'));
    const state = store.getState().exchangeInputs;
    expect(state).toStrictEqual({
        from: 1200 + '',
        to: ''
    });
});

test('setTo & setFrom should allow only two decimals', () => {
    store.dispatch(setInputFrom("12.02120"));
    store.dispatch(setInputTo(31.07));
    const state = store.getState().exchangeInputs;
    expect(state).toStrictEqual({
        from: '12.02',
        to: '31.07'
    });
});

test('resetInputs should set initial state', () => {
    store.dispatch(resetInputs());
    const state = store.getState().exchangeInputs;
    expect(state).toStrictEqual({
        from: '',
        to: ''
    });
});

test('swapInputs should set initial state', () => {
    store.dispatch(setInputFrom("12.02120"));
    store.dispatch(setInputTo(31.07));
    store.dispatch(swapInputs());
    const state = store.getState().exchangeInputs;
    expect(state).toStrictEqual({
        to: '12.02',
        from: '31.07'
    });
});

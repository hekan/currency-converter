import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import currencies from "./currencies/reducers";
import wallets from "./wallets/reducers";
import exchangePairs from "./exchange-pairs/reducers";
import exchangeInputs from "./exchange-inputs/reducers";
import {fetchRates} from "./currencies/actions";

function configureStore(preloadedState) {
    return createStore(
        combineReducers({currencies, wallets, exchangePairs, exchangeInputs}),
        preloadedState,
        applyMiddleware(thunkMiddleware)
    )
}

const store = configureStore();
const callRatesApi = () => {
    store.dispatch(fetchRates());
};
callRatesApi();
setInterval(() => {
    callRatesApi();
}, 10000);


export default store;

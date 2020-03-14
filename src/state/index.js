import {combineReducers, createStore} from "redux";
import currencies from "./currencies/reducers";
import wallets from "./wallets/reducers";
import exchangePairs from "./exchange-pairs/reducers";
import exchangeInputs from "./exchange-inputs/reducers";

const store = createStore(combineReducers({currencies, wallets, exchangePairs, exchangeInputs}));

export default store;

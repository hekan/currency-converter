import {combineReducers, createStore} from "redux";
import currencies from "./currencies/reducers";
import wallets from "./wallets/reducers";
import exchangePairs from "./exchange-pairs/reducers";

const store = createStore(combineReducers({currencies, wallets, exchangePairs}));

export default store;

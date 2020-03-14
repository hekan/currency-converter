import {createStore} from "redux";
import wallets from "./reducers";

const store = createStore(wallets);

export default store;

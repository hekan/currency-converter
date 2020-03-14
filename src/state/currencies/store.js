import {createStore} from "redux";
import currencies from "./reducers";

const store = createStore(currencies);

export default store;

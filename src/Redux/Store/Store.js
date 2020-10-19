import { createStore } from "redux";
import cardReducers from "../Reducer/CartReducers";
export const store = createStore(cardReducers);

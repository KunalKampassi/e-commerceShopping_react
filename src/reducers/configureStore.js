import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ProductReducer } from "./ProductReducer";

let rootReducer = combineReducers({
  ProductReducer
});

export let store = createStore(rootReducer, {});

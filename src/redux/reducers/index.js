import { combineReducers } from "redux";
import {  addFavoredProductReducer } from "./productReducer";

const reducers = combineReducers({
    favored_product: addFavoredProductReducer,
})

export default reducers
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducer/RootReducer";


const initStore = {};

const store = createStore(
    rootReducer, initStore, applyMiddleware(thunk))

export default store;
import {createStore} from 'redux'
import {appReducer, initialState} from "./reducers";

export const store = createStore(
    appReducer,
    initialState,
);

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
const middlewares = [thunk]

const storeWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState) {
    const store = storeWithMiddleware(reducers, initialState)
    return store
}
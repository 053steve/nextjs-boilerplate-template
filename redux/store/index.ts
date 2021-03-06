import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { AppState } from '../../interfaces/data.interface';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<AppState> = () => {
    const sagaMiddleware = createSagaMiddleware();


    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
    (store as any).sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

export const wrapper = createWrapper<AppState>(makeStore, { debug: true });

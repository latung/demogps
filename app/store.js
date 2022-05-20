import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import listen from 'redux-action-listeners';

import ActionEmitter from './redux/reducers/listenerEventRedux';
import { rootReducer } from './redux/reducers/rootReducer';

const middlewares = [logger];

export const ActionStoreEmitter = new ActionEmitter();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, listen(ActionStoreEmitter), ...middlewares)
);

export default store;

import { combineReducers } from 'redux';
import { initReducer } from './initReducer';

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    switch (action.type) {
        case 'RESET_ALL':
            state = undefined;
            break;
        default:
            break;
    }

    return appReducer(state, action);
};
const appReducer = combineReducers({ initReducer });

export { rootReducer };

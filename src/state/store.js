import { combineReducers, legacy_createStore } from 'redux';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = legacy_createStore(rootReducer);

export default store;

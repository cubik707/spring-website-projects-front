import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./auth/auth-reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  );

export default store;

// Для доступа к стору из консоли браузера
// @ts-ignore
window.store = store
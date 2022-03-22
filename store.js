import { createStore, Store, applyMiddleware, bindActionCreators } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import promiseMiddleware from "redux-promise";
// import thunkMiddleware from "redux-thunk";

import { reducer } from "./state";

export const store = createStore(
    reducer
    // composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
);
store.dispatch({ type: '[UI] Application is Active' })
// import { createStore, applyMiddleware, compose } from "redux";
//import rootReducer from "./reducers";
//import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { configureStore } from '@reduxjs/toolkit';
import courseSlice from "./features/courseSlice/courseSlice";

// export default function configureStore(initialState) {
// 	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for Redux dev tools

// 	return createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
// }

export default configureStore({
	reducer: {
		courseReducer: courseSlice },
})


import { applyMiddleware, combineReducers, createStore } from "redux";
import { actorReducer } from "./reducers/actors";
import { showReducer } from "./reducers/shows";
import { rootSaga, sagaMiddleWare } from "./sagas";

export const reducer = combineReducers({
  shows: showReducer,
  actors: actorReducer,
});

export type State = ReturnType<typeof store.getState>;

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;

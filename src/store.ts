import {AnyAction, applyMiddleware, createStore} from "redux";
import {  SHOW_FETCHED } from "./actions";
import { rootSaga, sagaMiddleWare } from "./sagas";

export type State={
    shows: any[],
}


const initaialState:State={
    shows: []
}

export const reducer =(state = initaialState, action:AnyAction)=>{

    switch(action.type){
        case SHOW_FETCHED:
return {...state, shows: action.payload}

        default:
return state;
}
}

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
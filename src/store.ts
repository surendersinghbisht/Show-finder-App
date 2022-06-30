import {AnyAction, applyMiddleware, createStore} from "redux";
import {  SHOW_FETCH, SHOW_FETCHED } from "./actions";
import { Show } from "./models/shows";
import { rootSaga, sagaMiddleWare } from "./sagas";

export type State={
    shows: {[q: string]: Show[]};
    showsQuery: string;
}


const initaialState: State={
    shows: {},
    showsQuery: '',
}

export const reducer =(state = initaialState, action:AnyAction)=>{

    switch(action.type){
        case SHOW_FETCH:
            return {...state, showsQuery: action.payload}

        case SHOW_FETCHED:
            const {query, shows} = action.payload
return {...state, shows: {...state.shows, [query]: shows } }

        default:
return state;
}
}

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
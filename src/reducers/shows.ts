import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOWDETAIL_FETCHED, SHOW_FETCH, SHOW_FETCHED } from "../actions";
import { Show } from "../models/shows";


 type showState = {
    entities: {[id: string]: Show};
    showsAgainstQuery: {[q:string]: number[]}
    showsQuery: string;
}

 const initialShowState: showState = {
    entities: {},
    showsQuery: '',
    showsAgainstQuery: {},
}


export const showReducer: Reducer<showState> = (state = initialShowState, action) => {

    switch(action.type){

case SHOWDETAIL_FETCHED:
    const show: Show = action.payload;
    return{
        ...state,
        entities: {...state.entities, [show.id]: show }
    }

        case SHOW_FETCH:
            return {...state, showsQuery: action.payload}

        case SHOW_FETCHED:
            const {query, shows} = action.payload as {query: string, shows: Show[]}

 const showEntity = new schema.Entity('shows');
   const normalized = normalize(shows, [showEntity])
    const normalizedShows = normalized.entities.shows

const ids = shows.map(s=> s.id)

return {...state, entities: {...state.entities, ...normalizedShows},
showsAgainstQuery: {...state.showsAgainstQuery, [query]: ids} }

        default:
return state;
}
}
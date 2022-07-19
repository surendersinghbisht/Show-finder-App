import { normalize, schema } from "normalizr";
import { Action, Reducer } from "redux";
import { SHOWDETAIL_FETCH, SHOWDETAIL_FETCHED, SHOW_CAST_FETCHED, SHOW_FETCH, SHOW_FETCHED } from "../actions";
import Actor from "../models/actors";
import { Show } from "../models/shows";


 type showState = {
    entities: {[id: string]: Show};
    showsAgainstQuery: {[q:string]: number[]};
    showsQuery: string;
    showLoading: { [id: number]: boolean };
    actors: { [id: number]: number[] };
}

 const initialShowState: showState = {
    entities: {},
    showsQuery: '',
    showsAgainstQuery: {},
    showLoading: {},
    actors:{},
}


export const showReducer: Reducer<showState> = (state = initialShowState, action) => {

    switch(action.type){
 case SHOWDETAIL_FETCH:
return{
    ...state,
   showLoading: {[action.payload] : true},
}

case SHOWDETAIL_FETCHED:
    const show: Show = action.payload;
    return{
        ...state,
        entities: {...state.entities, [show.id]: show },
        showLoading: {[show.id]: false},
    };

        case SHOW_FETCH:
            return {...state, showsQuery: action.payload}

        case SHOW_FETCHED:
            const {query, shows} = action.payload as {query: string, shows: Show[]}

 const showEntity = new schema.Entity('shows');
   const normalized = normalize(shows, [showEntity]);
    const normalizedShows = normalized.entities.shows;

const ids = normalized.result;

return {...state, entities: {...state.entities, ...normalizedShows},
showsAgainstQuery: {...state.showsAgainstQuery, [query]: ids} }

case SHOW_CAST_FETCHED:
    const {id, actors} = action.payload as {id:number; actors: Actor[];
    }

    const actorIds = actors.map(a => a.id);
    return{
        ...state,
        actors: {...state.actors, [id]: actorIds}
    }

        default:
return state;
}
}